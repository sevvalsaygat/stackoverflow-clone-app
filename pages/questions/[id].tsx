import { AppLayout } from '@layouts';
import { useState } from 'react';
import { Icons, MyEditor } from '@components';
import { useGetQuestionById, useGetQuestions, useUpdateQuestionById, useAuth } from '@hooks';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { QuestionType, AnswerFormType, AnswerType } from '@types';
import { useRouter } from 'next/router';

const TopQuestions = () => {
  const [userAnswered, setUserAnswered] = useState<boolean>(false);
  const router = useRouter();

  const { id } = router.query;

  const { data, isSuccess, refetch } = useGetQuestionById(id as string, {
    enabled: !!id,
  });

  const { mutate } = useUpdateQuestionById(id as string, {
    onSuccess: (data: QuestionType) => {
      reset();
      refetch();
    },
    onError: () => {},
  });

  const { publicAuthenticatedUser } = useAuth();

  const onSubmit = (formData: AnswerFormType) => {
    setUserAnswered(true);

    const answer = {
      content: formData.content,
      user: publicAuthenticatedUser,
      id: 1,
    };
    mutate({
      ...data,
      answers: [...data.answers, answer],
    });
  };

  const { control, handleSubmit, watch, reset } = useForm<AnswerFormType>();

  const watchContent = watch('content');

  const { data: relatedQuestionData, isSuccess: relatedQuestionIsSuccess } = useGetQuestions({}, { _limit: 3 });

  const onDeleteAnswer = (answer: AnswerType) => {
    setUserAnswered(false);

    if (answer.user.id != publicAuthenticatedUser.id) {
    } else {
      const filteredAnswers = data.answers.filter((ans: AnswerType) => ans != answer);

      mutate({
        ...data,
        answers: filteredAnswers,
      });
    }
  };

  const authenticatedUserAnswered =
    isSuccess && data.answers.filter((a: AnswerType) => a.user.id == publicAuthenticatedUser.id).length > 0;

  return (
    <AppLayout hideFooter={false} hideHamburger={true}>
      <div className="w-full bg-white">
        <div className="mx-auto max-w-79 flex justify-center">
          <div className="flex w-full justify-between">
            <div className="w-164 h-screen" id="left-sidebar">
              <div className="flex flex-col sticky mb-8 pt-24 w-164">
                <nav className="w-full" role="navigation">
                  <div className="w-full">
                    <div className="relative group p-1 cursor-pointer">
                      <Link
                        href="/top_questions"
                        className="pl-8 p-4 text-13 font-400 leading-26 text-zinc-500 group-hover:text-neutral-900"
                      >
                        Home
                      </Link>
                    </div>
                    <div>
                      <div className="w-full">
                        <div className="ml-8 mb-6 mt-16 text-11 font-400 leading-15 text-gray-250">PUBLIC</div>
                        <div className="relative">
                          <a className="flex flex-row align-center items-center bg-gray-150 border-r-3 border-orange-400 py-6 pl-8 pb-4 cursor-pointer">
                            <Icons.SvgWorld className="text-neutral-900 -mt-1 mr-4 w-5 h-5" />
                            <Link
                              href="/all_questions"
                              className="text-13 font-700 text-neutral-900 leading-17 w-full cursor-pointer"
                            >
                              Questions
                            </Link>
                          </a>
                        </div>
                        <div className="group pl-30 p-4 cursor-pointer">
                          <span className="text-13 font-400 leading-26 text-zinc-500 group-hover:text-neutral-900">
                            Staging Ground
                          </span>
                        </div>
                        <div className="group pl-30 p-4 cursor-pointer">
                          <span className="text-13 font-400 leading-26 text-zinc-500 group-hover:text-neutral-900">
                            Tags
                          </span>
                        </div>
                        <div className="group pl-30 p-4 cursor-pointer">
                          <span className="text-13 font-400 leading-26 text-zinc-500 group-hover:text-neutral-900">
                            Users
                          </span>
                        </div>
                        <div className="group pl-30 p-4 cursor-pointer">
                          <span className="text-13 font-400 leading-26 text-zinc-500 group-hover:text-neutral-900">
                            Companies
                          </span>
                        </div>
                        <div className="p-2">
                          <div className="flex flex-row justify-between items-center mt-16 ml-8">
                            <div className="text-11 font-400 text-gray-250">COLLECTIVES</div>
                            <div>
                              <Icons.SvgInfo className="text-gray-250 mx-10" />
                            </div>
                          </div>
                          <div className="flex flex-row items-center group cursor-pointer pt-1">
                            <Icons.SvgStarVerified className="text-orange-400 mr-4 ml-8" />
                            <span className="text-13 font-400 leading-26 text-zinc-500 group-hover:text-neutral-900">
                              Explore Collectives
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full pl-2 pr-3">
                      <div className="flex flex-row justify-between items-center mt-24 ml-8 mb-4">
                        <div className="text-11 font-400 text-gray-250">TEAMS</div>
                        <div className="group cursor-pointer">
                          <Icons.SvgInfo className="text-gray-250 group-hover:text-neutral-900 mx-2" />
                        </div>
                      </div>
                      <div className="flex flex-row items-center group cursor-pointer pt-1">
                        <Icons.SvgBriefCase className="text-orange-400 mr-6 ml-8" />
                        <span className="text-13 font-400 leading-26 text-zinc-500 group-hover:text-neutral-900">
                          Create free Team
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            {isSuccess && (
              <div className="w-full border-l px-15 py-24">
                <div className="px-15 flex flex-col">
                  <div className="flex flex-row justify-between w-full gap-5">
                    <div className="mb-8">
                      <h1 className="text-27 leading-35 text-neutral-700">{data.title}</h1>
                    </div>
                    <div className="ml-12 mt-8">
                      <Link
                        href="/ask_question"
                        className="border border-transparent p-10.4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs"
                      >
                        AskQuestion
                      </Link>
                    </div>
                  </div>
                  <div className="pb-8 mb-16 mt-2 flex flex-row border-b">
                    <div className="mb-8 mr-16 flex flex-row">
                      <div className="mr-6 text-13 leading-17 text-gray-250">Asked</div>
                      <div className="text-13 leading-17 text-zinc-800">today</div>
                    </div>
                    <div className="mb-8 mr-16 flex flex-row">
                      <div className="mr-6 text-13 leading-17 text-gray-250">Modified</div>
                      <div className="cursor-pointer text-13 leading-17 text-zinc-800">today</div>
                    </div>
                    <div className="mb-8 flex flex-row">
                      <div className="mr-6 text-13 leading-17 text-gray-250">Viewed</div>
                      <div className="text-13 leading-17 text-zinc-800">4 times</div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div style={{ width: 'calc(100% - 300px )' }}>
                      <div className="flex flex-row pr-24">
                        <div className="w-10 top-0 flex flex-col align-center items-center mr-24">
                          <div>
                            <Icons.SvgUpLg className="text-gray-300" />
                          </div>
                          <div className="m-4 text-21 leading-27 text-gray-250">0</div>
                          <div>
                            <Icons.SvgDownLg className="text-gray-300" />
                          </div>
                          <div className="py-4">
                            <Icons.SvgSelect className="text-gray-300" />
                          </div>
                          <div className="py-8">
                            <Icons.SvgHistory className="text-gray-300" />
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <div className="pr-16">
                            <div className="w-full">
                              <p className="mb-16 text-15 leading-23 text-zinc-800">{data.details}</p>
                              <p className="mb-16 text-15 leading-23 text-zinc-800">{data.expect}</p>
                            </div>
                            <div className="mt-24 mb-12">
                              <div className="flex flex-row">
                                <div className="border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 p-6 text-12 rounded-3 leading-12 mr-5 hover:text-blue-350 cursor-pointer">
                                  {data.tag}
                                </div>
                              </div>
                            </div>
                            <div className="mt-32 flex flex-row justify-between">
                              <div className="m-4">
                                <div className="pt-2 -m-4 flex flex-wrap gap-4">
                                  <div className="m-4 text-13 leading-17 text-neutral-100 hover:text-gray-400 cursor-pointer">
                                    Share
                                  </div>
                                  <Link
                                    href={`/questions/edit/${data.id}`}
                                    className="m-4 text-13 leading-17 text-neutral-100 hover:text-gray-400 cursor-pointer"
                                  >
                                    Edit
                                  </Link>
                                  <div className="m-4 text-13 leading-17 text-neutral-100 hover:text-gray-400 cursor-pointer">
                                    Follow
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col m-4 border-transparent rounded-3 w-200 bg-blue-150">
                                <div className="px-6 py-7">
                                  <div className="mb-4 text-12 leading-15 text-gray-250">asked 10 hours ago</div>
                                  <div className="flex flex-row">
                                    <div>
                                      <Icons.SvgUser className="border rounded-3 p-2 w-9 h-9" />
                                    </div>
                                    <div className="ml-8 flex flex-col">
                                      <div className="text-13 leading-17 text-blue-700 hover:text-sky-600 cursor-pointer">
                                        {data.owner.name}
                                      </div>
                                      <div className="text-12 leading-17 text-gray-250">1</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="border border-transparent rounded-b-3 p-6 flex flex-row bg-cyan-450">
                                  <Icons.SvgHand className="text-neutral-700" />
                                  <div className="text-13 leading-17 text-neutral-700 ml-4">New contributor</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-27">
                            <button className="text-13 leading-17 text-gray-400 hover:text-sky-600">
                              Add a comment
                            </button>
                          </div>
                          {data.answers.length > 0 && (
                            <div className="flex flex-col -ml-[50px]">
                              <div className="pt-10">
                                <div className="mb-8 flex flex-row justify-between items-center w-full -right-5">
                                  <div className="text-19 leading-25 text-zinc-800">{data.answers.length} Answer</div>
                                  <div className="flex flex-row items-center gap-4">
                                    <div className="text-12 leading-15">Sorted by:</div>
                                    <select className="border rounded-3 py-8 px-10 bg-white text-13 leading-15">
                                      <option>Highest score (default)</option>
                                      <option>Trending (recent votes count more)</option>
                                      <option>Date modified (newest first)</option>
                                      <option>Date created (oldest first)</option>
                                    </select>
                                  </div>
                                </div>
                                {data.answers.map((answer: AnswerType, index: number) => (
                                  <div key={index} className="flex flex-row py-16 border-b w-full">
                                    <div className="w-10 flex flex-col align-center items-center mr-24">
                                      <div>
                                        <Icons.SvgUpLg className="text-gray-300" />
                                      </div>
                                      <div className="m-4 text-21 leading-27 text-gray-250">0</div>
                                      <div>
                                        <Icons.SvgDownLg className="text-gray-300" />
                                      </div>
                                      <div className="py-4">
                                        <Icons.SvgSelect className="text-gray-300" />
                                      </div>
                                      <div className="py-8">
                                        <Icons.SvgHistory className="text-gray-300" />
                                      </div>
                                    </div>
                                    <div className="flex flex-col w-full">
                                      <div className="flex flex-col">
                                        <p className="mb-16 text-15 leading-23 text-zinc-800">{answer.content}</p>
                                        <div className="m-4 flex flex-row justify-between">
                                          <div className="pt-2 -m-4 flex flex-wrap gap-4">
                                            <div className="m-4 text-13 leading-17 text-neutral-100 hover:text-gray-400 cursor-pointer">
                                              Share
                                            </div>
                                            <Link
                                              href={`/questions/${data.id}`}
                                              className="m-4 text-13 leading-17 text-neutral-100 hover:text-gray-400 cursor-pointer"
                                            >
                                              Edit
                                            </Link>
                                            <button
                                              onClick={() => onDeleteAnswer(answer)}
                                              className="flex justify-end m-4 text-13 leading-17 text-neutral-100 hover:text-gray-400 cursor-pointer"
                                            >
                                              Delete
                                            </button>
                                            <div className="m-4 text-13 leading-17 text-neutral-100 hover:text-gray-400 cursor-pointer">
                                              Flag
                                            </div>
                                          </div>
                                          <div className="flex flex-col m-4 border-transparent rounded-3 w-200 pr-16">
                                            <div className="px-6 py-7">
                                              <div className="mb-4 text-12 leading-15 text-gray-250">
                                                answered just now
                                              </div>
                                              <div className="flex flex-row">
                                                <div>
                                                  <Icons.SvgUser className="border rounded-3 p-2 w-9 h-9" />
                                                </div>
                                                <div className="ml-8 flex flex-col">
                                                  <div className="text-13 leading-17 text-blue-700 hover:text-sky-600 cursor-pointer">
                                                    {answer.user.name}
                                                  </div>
                                                  <div className="text-12 leading-17 text-gray-250">1</div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="border border-transparent rounded-b-3 p-6 flex flex-row bg-cyan-450">
                                              <Icons.SvgHand className="text-neutral-700" />
                                              <div className="text-13 leading-17 text-neutral-700 ml-4">
                                                New contributor
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <button className="text-13 leading-17 text-blue-700 hover:text-sky-600">
                                            Add a comment
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {!authenticatedUserAnswered && (
                                <div className="flex flex-col mt-10">
                                  <button className="border border-transparent p-10.4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs w-fit">
                                    Add Another Answer
                                  </button>
                                  <div className="mt-24 flex flex-row text-17 leading-24">
                                    <h2>
                                      Not the answer you are looking for? Browse other questions tagged
                                      <a className="ml-4 border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 px-6 py-4 text-12 rounded-3 leading-12 mr-5 hover:text-blue-350 cursor-pointer">
                                        html
                                      </a>
                                      <a className="border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 px-6 py-4 text-12 rounded-3 leading-12 mr-5 hover:text-blue-350 cursor-pointer">
                                        jquery
                                      </a>
                                      <a className="border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 px-6 py-4 text-12 rounded-3 leading-12 mr-5 hover:text-blue-350 cursor-pointer">
                                        css
                                      </a>{' '}
                                      or
                                      <a className="text-17 leading-24 text-blue-700 hover:text-sky-600">
                                        {' '}
                                        ask your own question.
                                      </a>
                                    </h2>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          {!userAnswered && (
                            <div className="flex flex-col">
                              {!authenticatedUserAnswered && (
                                <div className="flex flex-col">
                                  <div className="pt-32 mx-16 -ml-[38px]">
                                    <div className="pb-8 text-17 leading-23 text-zinc-800">Related questions</div>
                                    <div className="border rounded-md border-gray-650">
                                      {relatedQuestionIsSuccess &&
                                        relatedQuestionData.map((q: QuestionType, index: number) => (
                                          <div key={index} className="p-12 flex flex-row items-center border-b">
                                            <div className="border border-gray-650 rounded-2 px-14 text-12 leading-24">
                                              0
                                            </div>
                                            <div className="pr-12 pl-16 text-13 leading-17 cursor-pointer text-blue-700 hover:text-sky-600">
                                              {q.title}
                                            </div>
                                          </div>
                                        ))}
                                    </div>
                                  </div>
                                  <div className="group flex flex-row justify-center align-center items-center gap-4 pt-8 cursor-pointer">
                                    <div>
                                      <Icons.SvgArrowDown className="text-blue-700 group-hover:text-sky-600" />
                                    </div>
                                    <div className="text-13 leading-17 text-blue-700 group-hover:text-sky-600">
                                      Load 5 more related questions{' '}
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div id="answer" className="pt-10 mt-15 -ml-[55px]">
                                {!authenticatedUserAnswered && (
                                  <h2 className="pt-8 text-17 leading-24">
                                    Know someone who can answer? Share a link to this
                                    <a className="text-blue-700 hover:text-sky-600 cursor-pointer"> question</a> via
                                    <a className="text-blue-700 hover:text-sky-600 cursor-pointer"> email</a>,
                                    <a className="text-blue-700 hover:text-sky-600 cursor-pointer"> Twitter</a>, or
                                    <a className="text-blue-700 hover:text-sky-600 cursor-pointer"> Facebook.</a>
                                  </h2>
                                )}
                                <form className="w-full mx-16 -ml-1" onSubmit={handleSubmit(onSubmit)}>
                                  <h2 className="py-20 text-19 leading-25">Your Answer</h2>
                                  <div className="border border-gray-300 h-full rounded-3">
                                    <div className="h-322">
                                      <div className="border border-gray-300 h-full rounded-3">
                                        <Controller
                                          control={control}
                                          name="content"
                                          render={({ field: { onChange, value } }) => (
                                            <MyEditor onChange={onChange} value={value} />
                                          )}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-7">
                                    <div className="mb-20">{watchContent && watchContent}</div>
                                    <button className="border border-transparent p-10.4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs">
                                      Post Your Answer
                                    </button>
                                  </div>
                                </form>
                                <div className="mt-24 flex flex-row text-17 leading-24">
                                  <h2>
                                    Not the answer you are looking for? Browse other questions tagged
                                    <a className="ml-4 border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 p-6 text-12 rounded-3 leading-12 mr-5 hover:text-blue-350 cursor-pointer">
                                      excel
                                    </a>
                                    <a className="border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 p-6 text-12 rounded-3 leading-12 mr-5 hover:text-blue-350 cursor-pointer">
                                      excel
                                    </a>
                                    <a className="text-17 leading-24 text-blue-700 hover:text-sky-600">
                                      ask your own question.
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-300">
                      <div className="bg-yellow-50 border border-yellow-100 mb-16 shadow-sm rounded-3">
                        <div className="p-0 m-0">
                          <div className="text-12 text-zinc-500 font-bold leading-15 border-b-1 border-yellow-100  bg-yellow-200 rounded-3 py-12 px-16">
                            The Overflow Blog
                          </div>
                          <div className="flex flex-row my-12 px-16 gap-2">
                            <div>
                              <Icons.SvgPencil className="" />
                            </div>
                            <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                              AI applications open new security vulnerabilities
                            </div>
                          </div>
                          <div className="flex flex-row my-12 px-16 gap-2">
                            <div className="">
                              <Icons.SvgPencil className="" />
                            </div>
                            <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                              How chaos engineering preps developers for the ultimate game day (Ep. 531)
                            </div>
                          </div>
                          <div className="text-12 text-zinc-500 font-bold leading-15 border-y-1 border-yellow-100  bg-yellow-200 py-12 px-16">
                            Featured on Meta
                          </div>
                          <div className="flex flex-row my-12 px-16 gap-2">
                            <div className="">
                              <Icons.SvgStackExchange className="" />
                            </div>
                            <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                              2022 Community-a-thon Recap
                            </div>
                          </div>
                          <div className="flex flex-row my-12 px-16 gap-2">
                            <div className="">
                              <Icons.SvgStack className="text-zinc-800" />
                            </div>
                            <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                              Temporary policy: ChatGPT is banned
                            </div>
                          </div>
                          <div className="flex flex-row my-12 px-16 gap-2">
                            <div className="">
                              <Icons.SvgStack className="text-zinc-800" />
                            </div>
                            <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                              Should we burninate the [gpl] tag?
                            </div>
                          </div>
                          <div className="flex flex-row my-12 px-16 gap-2">
                            <div className="">
                              <Icons.SvgStack className="text-zinc-800" />
                            </div>
                            <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                              We’re bringing advertisements for technology courses to Stack Overflow
                            </div>
                          </div>
                          <div className="flex flex-row my-12 px-16 gap-2">
                            <div className="">
                              <Icons.SvgStack className="text-zinc-800" />
                            </div>
                            <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                              Introducing a new close reason specifically for non-English questions
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-19">
                        <h4 className="mb-19">
                          <a className="text-19 font-400 leading-24 text-neutral-700 cursor-pointer">
                            Hot Network Questions
                          </a>
                        </h4>
                        <ul>
                          <div className="flex flex-row mb-10 ml-0">
                            <div className="mt-2 mr-6 inline-block align-top"></div>
                            <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                              Bridge rectifier speed
                            </a>
                          </div>
                          <div className="flex flex-row mb-10 ml-0">
                            <div className="mt-2 mr-6 inline-block align-top"></div>
                            <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                              I was knit a sweater
                            </a>
                          </div>
                          <div className="flex flex-row mb-10 ml-0">
                            <div className="mt-2 mr-6 inline-block align-top"></div>
                            <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                              What is the meaning of assertion?
                            </a>
                          </div>
                          <div className="flex flex-row mb-10 ml-0">
                            <div className="mt-2 mr-6 inline-block align-top"></div>
                            <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                              FIPS 186-4, Use of RSA key pair for Encryption and Signature
                            </a>
                          </div>
                          <div className="flex flex-row mb-10 ml-0">
                            <div className="mt-2 mr-6 inline-block align-top"></div>
                            <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                              Why are transponders to be turned off when in formation?
                            </a>
                          </div>
                          <div className="flex flex-row mb-10 ml-0">
                            <div className="mt-2 mr-6 inline-block align-top"></div>
                            <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                              Why was the graphical user interface version of Defrag removed?
                            </a>
                          </div>
                          <div className="flex flex-row mb-10 ml-0">
                            <div className="mt-2 mr-6 inline-block align-top"></div>
                            <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                              The rationale behind allowing `sudo -u root` but disallowing `sudo -u root -i`
                            </a>
                          </div>
                          <div className="flex flex-row mb-10 ml-0">
                            <div className="mt-2 mr-6 inline-block align-top"></div>
                            <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                              Was there any technological reason that C was designed to return only a single thing from
                              a function?
                            </a>
                          </div>
                          <div className="flex flex-row mb-10 ml-0">
                            <div className="mt-2 mr-6 inline-block align-top"></div>
                            <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                              How do proponents of the Fine Tuning argument for God, refute the puddle comparison?
                            </a>
                          </div>
                          <div className="flex flex-row mb-10 ml-0">
                            <div className="mt-2 mr-6 inline-block align-top"></div>
                            <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                              Basis for multivariable polynomials
                            </a>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
export default TopQuestions;
