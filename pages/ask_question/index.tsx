import React, { useState } from 'react';
import { AppLayout } from '@layouts';
import { Icons, MyEditor } from '@components';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useCreateQuestion, useAuth } from '@hooks';
import { QuestionFormType, QuestionType } from '@types';

const AskQuestions = () => {
  const [isShowingReviewTab, setIsShowingReviewTab] = useState(false);
  const [currentFormElementIndex, setCurrentFormElementIndex] = useState(0);

  const { publicAuthenticatedUser } = useAuth();

  const { mutate } = useCreateQuestion({
    onSuccess: (data: QuestionType) => {
      router.push(`/questions/${data.id}`);
    },
    onError: () => {},
  });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<QuestionFormType>();

  const watchDetails = watch('details', '');
  const watchExpect = watch('expect', '');

  const onSubmit = (data: QuestionFormType) => {
    mutate({
      ...data,
      owner: publicAuthenticatedUser,
      votes: [],
      answers: [],
      viewsCount: 0,
      createdAt: new Date().toISOString(),
    });
  };

  function onClickNextButton() {
    setCurrentFormElementIndex(currentFormElementIndex + 1);
  }

  return (
    <AppLayout hideFooter={false} hideHamburger={false}>
      <div className="w-full bg-gray-100">
        <div className="mx-auto max-w-79 flex justify-center px-24 pb-24">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <main className="mb-48">
              <div className="flex flex-col">
                <div className="flex flex-col m-0 p-0">
                  <div className="flex flex-row justify-between w-full align-center items-center">
                    <h1 className="my-24 font-600 leading-35 text-27">Ask a public question</h1>
                    <div>
                      <Icons.SvgAskBackground />
                    </div>
                  </div>
                </div>
                <div className="w-100 mt-16">
                  <div className="flex w-100 mb-16 align-center items-center">
                    <div className="w-70 p-24 border rounded-3 bg-cyan-200 border-blue-100">
                      <h2 className="mb-8 text-21 font-400 leading-27 text-neutral-700">Writing a good question</h2>
                      <p className=" text-15 font-400 leading-19.61 text-neutral-700">
                        You’re ready to
                        <a className="cursor-pointer text-blue-700 hover:text-sky-600"> ask</a>a
                        <a className="cursor-pointer text-blue-700 hover:text-sky-600">programming-related question</a>
                        and this form will help guide you through the process.
                      </p>
                      <p className="text-15 font-400 leading-19.61 text-neutral-700 mb-15">
                        Looking to ask a non-programming question? See
                        <a className="cursor-pointer text-blue-700 hover:text-sky-600">the topics here</a>
                        to find a relevant site.
                      </p>
                      <h5 className="mb-8 text-13 font-600 leading-17 text-neutral-700">Steps</h5>
                      <ul className="mb-0 list-disc	text-13 font-400 leading-17 text-neutral-700 ml-30">
                        <li>Summarize your problem in a one-line title.</li>
                        <li>Describe your problem in more detail.</li>
                        <li>Describe what you tried and what you expected to happen.</li>
                        <li>Add “tags” which help surface your question to members of the community.</li>
                        <li>Review your question and post it to the site.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 flex flex-row gap-16">
                <div className="w-70 p-24 flex-shrink-0 bg-white border rounded-3 border-gray-50">
                  <div className="flex flex-col -mt-2">
                    <div className="flex flex-col my-2">
                      <div className="flex">
                        <label className="font-600 text-15 leading-19.61 text-neutral-900 cursor-pointer">Title</label>
                      </div>
                      <div className="flex flex-col align-baseline">
                        <div className="flex mb-2 p-2 basis-3/4">
                          <label className="text-12 font-400 leading-15 text-neutral-700">
                            Be specific and imagine you’re asking a question to another person.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex m-2 mx-0 relative">
                      <input
                        {...register('title')}
                        onFocus={() => {
                          setCurrentFormElementIndex(0);
                        }}
                        className=" rounded-3 border border-gray-300 w-full text-13 py-5.5 px-10 placeholder-gray-300 "
                        placeholder="e.g. Is there an R function the index of an element in a vector?"
                      ></input>
                    </div>
                  </div>
                  {currentFormElementIndex == 0 && (
                    <button
                      type="button"
                      onClick={onClickNextButton}
                      className=" border-transparent p-10.4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs mt-7"
                    >
                      Next
                    </button>
                  )}
                </div>
                {currentFormElementIndex == 0 && (
                  <div className=" rounded-3 border border-gray-200  shadow-sm w-full h-153 bg-white">
                    <div className="text-15 font-400 leading-19.61 text-zinc-800 p-12 bg-gray-100 border-b border-gray-200">
                      Writing a good title
                    </div>
                    <div className="flex flex-row bg-white m-16">
                      <div className="mx-8 my-0">
                        <Icons.SvgSpotPencil />
                      </div>
                      <div className="mx-8 my-0 text-12 leading-15.6923 text-zinc-800 font-400">
                        <p className="mb-12">Your title should summarize the problem.</p>
                        <p className="mb-0">
                          You might find that you have a better idea of your title after writing out the rest of the
                          question.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-100 flex flex-row gap-16 mt-12">
                <div
                  className={`w-70 p-24 flex-shrink-0 bg-white border rounded-3 border-gray-50 ${
                    currentFormElementIndex == 0 ? 'disabled-aqfm' : ''
                  }`}
                >
                  <div className="flex flex-col -mt-2">
                    <div className="flex flex-col my-2">
                      <div className="flex">
                        <label className="font-600 text-15 leading-19.61 text-neutral-900 cursor-pointer">
                          What are the details of your problem?
                        </label>
                      </div>
                      <div className="flex flex-col align-baseline">
                        <div className="flex mb-2 p-2 basis-3/4">
                          <label className="text-12 font-400 leading-15 text-neutral-700 cursor-pointer">
                            Introduce the problem and expand on what you put in the title. Minimum 20 characters.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="h-277">
                      <div className="border border-gray-300 h-full rounded-3">
                        <Controller
                          control={control}
                          name="details"
                          rules={{ required: true, minLength: 20 }}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <MyEditor onChange={onChange} value={value} />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  {currentFormElementIndex == 1 && (
                    <button
                      disabled={watchDetails.length < 20}
                      type="button"
                      onClick={onClickNextButton}
                      className=" border-transparent p-10.4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs mt-7 disabled:cursor-default disabled:bg-gray-70"
                    >
                      Next
                    </button>
                  )}
                </div>
                {currentFormElementIndex == 1 && (
                  <div className=" rounded-3 border border-gray-200  shadow-sm w-full h-153 bg-white">
                    <div className="text-15 font-400 leading-19.61 text-zinc-800 p-12 bg-gray-100 border-b border-gray-200">
                      Introduce the problem
                    </div>
                    <div className="flex flex-row bg-white m-16">
                      <div className="mx-8 my-0">
                        <Icons.SvgSpotPencil />
                      </div>
                      <div className="text-12 leading-15.6923 text-zinc-800 font-400">
                        <p className="mb-0">
                          Explain how you encountered the problem you’re trying to solve, and any difficulties that have
                          prevented you from solving it yourself.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-100 flex flex-row gap-16 mt-12">
                <div
                  className={`w-70 p-24 flex-shrink-0 bg-white border rounded-3 border-gray-50 ${
                    currentFormElementIndex <= 1 ? 'disabled-aqfm' : ''
                  }`}
                >
                  <div className="flex flex-col -mt-2">
                    <div className="flex flex-col my-2">
                      <div className="flex">
                        <label className="font-600 text-15 leading-19.61 text-neutral-900 cursor-pointer">
                          What did you try and what were you expecting?
                        </label>
                      </div>
                      <div className="flex flex-col align-baseline">
                        <div className="flex mb-2 p-2 basis-3/4">
                          <label className="text-12 font-400 leading-15 text-neutral-700 cursor-pointer">
                            Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20
                            characters.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="h-277">
                      <div className="border border-gray-300 h-full rounded-3">
                        <Controller
                          control={control}
                          name="expect"
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <MyEditor onChange={onChange} value={value} />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  {currentFormElementIndex == 2 && (
                    <button
                      disabled={watchExpect.length < 20}
                      type="button"
                      onClick={onClickNextButton}
                      className=" border-transparent p-10.4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs mt-7 disabled:cursor-default disabled:bg-gray-70"
                    >
                      Next
                    </button>
                  )}
                </div>
                {currentFormElementIndex == 2 && (
                  <div className=" rounded-3 border border-gray-200  shadow-sm w-full h-287 bg-white">
                    <div className="text-15 font-400 leading-19.61 text-zinc-800 p-12 bg-gray-100 border-b border-gray-200">
                      Expand on the problem
                    </div>
                    <div className="flex flex-row bg-white m-16">
                      <div className="mx-8 my-0">
                        <Icons.SvgSpotPencil />
                      </div>
                      <div className="text-12 leading-15.6923 text-zinc-800 font-400">
                        <p className="mb-12">
                          Show what you’ve tried, tell us what happened, and why it didn’t meet your needs.
                        </p>
                        <p className="mb-12">
                          Not all questions benefit from including code, but if your problem is better understood with
                          code you’ve written, you should include a minimal, reproducible example.
                        </p>
                        <p className="mb-0">
                          Please make sure to post code and errors as text directly to the question (and not as images),
                          and format them appropriately.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-100 flex flex-row gap-16 mt-12">
                <div
                  className={`relative w-70 p-24 flex-shrink-0 flex-grow-0 bg-white border rounded-3 border-gray-50 ${
                    currentFormElementIndex <= 2 ? 'disabled-aqfm' : ''
                  }`}
                >
                  <div className="flex flex-col -mt-2">
                    <div className="flex flex-col my-2">
                      <div className="flex">
                        <label className="font-600 text-15 leading-19.61 text-neutral-900 cursor-pointer">Tags</label>
                      </div>
                      <div className="flex flex-col align-baseline">
                        <div className="flex mb-2 p-2 basis-3/4">
                          <label className="text-12 font-400 leading-15 text-neutral-700 cursor-pointer">
                            Add up to 5 tags to describe what your question is about. Start typing to see suggestions.{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex m-2 mx-0 relative">
                      <input
                        {...register('tag')}
                        onFocus={() => {
                          setCurrentFormElementIndex(3);
                        }}
                        className="border rounded-3 border-gray-300 w-full text-13 py-8 px-10 placeholder-gray-300 "
                        placeholder="e.g. (c# vba pandas)"
                      ></input>
                    </div>
                  </div>

                  {currentFormElementIndex == 3 && (
                    <button
                      type="button"
                      onClick={onClickNextButton}
                      className=" border-transparent p-10.4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs mt-15"
                    >
                      Next
                    </button>
                  )}
                </div>
                {currentFormElementIndex == 3 && (
                  <div className="relative w-full">
                    <div className="absolute  rounded-3 border border-gray-200 shadow-sm min-h-212 bg-white">
                      <div className="text-15 font-400 leading-19.61 text-zinc-800 p-12 bg-gray-100 border-b border-gray-200">
                        Adding tags
                      </div>
                      <div className="flex flex-row bg-white m-16">
                        <div className="mx-8 my-0">
                          <Icons.SvgSpotPencil />
                        </div>
                        <div className="mx-8 my-0 text-12 leading-15.6923 text-zinc-800 font-400">
                          <p className="mb-12">
                            Tags help ensure that your question will get attention from the right people.
                          </p>
                          <p className="mb-12">
                            Tag things in more than one way so people can find them more easily. Add tags for product
                            lines, projects, teams, and the specific technologies or languages used.{' '}
                          </p>
                          <p className="mb-0">Learn more about tagging</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-100 flex flex-row gap-16 mt-12">
                <div
                  className={`w-70 p-24 flex-shrink-0 bg-white border rounded-3 border-gray-50 ${
                    currentFormElementIndex <= 3 ? 'disabled-aqfm' : ''
                  }`}
                >
                  <div className="flex flex-col -mt-2 gap-12">
                    <div className="flex flex-col my-2">
                      <div className="flex">
                        <label className="font-600 p-2 text-15 leading-19.61 text-neutral-900 cursor-pointer">
                          Review questions already on Stack Overflow to see if your question is a duplicate.
                        </label>
                      </div>
                      <div className="flex flex-col align-baseline">
                        <div className="flex p-2 basis-3/4">
                          <label className="text-12 font-400 leading-15 text-neutral-700">
                            Clicking on these questions will open them in a new tab for you to review. Your progress
                            here will be saved so you can come back and continue.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row w-full">
                        <button
                          className="w-full border border-gray-300 rounded-t-3 flex py-12 px-16 bg-gray-100 cursor-pointer"
                          type="button"
                          onClick={() => {
                            setIsShowingReviewTab(!isShowingReviewTab);
                          }}
                        >
                          <div className="w-full flex justify-start text-gray-250 text-15 font-400 leading-19.61">
                            Do any of these posts answer your question?
                          </div>
                          <div className="w-full flex justify-end">
                            <div className={`${isShowingReviewTab ? 'hidden' : ''}`}>
                              <Icons.SvgArrowDown className="text-gray-250" />
                            </div>
                            <div className={`${isShowingReviewTab ? '' : 'hidden'}`}>
                              <Icons.SvgArrowUp className="text-gray-250" />
                            </div>
                          </div>
                        </button>
                      </div>
                      {isShowingReviewTab && (
                        <div className="text-gray-250 text-13 font-400 leading-17 flex justify-center items-center border-x-1 border-b-1 border-gray-300 rounded-b-3 py-14 px-16">
                          No duplicate questions found.
                        </div>
                      )}
                      {currentFormElementIndex == 4 && (
                        <button
                          type="submit"
                          className=" border-transparent p-10.4 w-fit bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs mt-16"
                        >
                          Review your question
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                {currentFormElementIndex == 4 && (
                  <div className=" rounded-3 border border-gray-200 shadow-sm w-full h-188 bg-white">
                    <div className="text-15 font-400 leading-19.61 text-zinc-800 p-12 bg-gray-100 border-b border-gray-200">
                      Make sure we don’t already have an answer for your question
                    </div>
                    <div className="flex flex-row bg-white m-16">
                      <div className="mx-8 my-0">
                        <Icons.SvgBell />
                      </div>
                      <div className="mx-8 my-0 text-12 leading-15.6923 text-zinc-800 font-400">
                        <p className="mb-12">Stack Overflow is a huge database of knowledge.</p>
                        <p className="mb-0">
                          Please make sure your question isn’t already answered before posting, or your question might
                          be closed as a duplicate.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="my-12 ">
                <button className="-transparent cursor-pointer rounded-3 p-10.4 hover:bg-red-100 text-red-300 hover:text-red-400 text-13 font-400 leading-15">
                  Discard draft
                </button>
              </div>
            </main>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};
export default AskQuestions;
