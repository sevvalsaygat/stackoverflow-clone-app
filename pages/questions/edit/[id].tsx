import React, { useState } from 'react';
import { AppLayout } from '@layouts';
import { Icons, MyEditor } from '@components';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useUpdateQuestionById, useAuth, useGetQuestionById } from '@hooks';
import { QuestionFormType, QuestionType } from '@types';

const AskQuestions = () => {
  const [isShowingReviewTab, setIsShowingReviewTab] = useState(false);
  const [currentFormElementIndex, setCurrentFormElementIndex] = useState(0);

  const router = useRouter();

  const { id } = router.query;

  const { data: questionDetailData, isSuccess: questionDetailIsSuccess } = useGetQuestionById(id as string, {
    enabled: !!id,
    onSuccess: (data: QuestionType) => {
      setValue('title', data.title);
      setValue('details', data.details);
      setValue('expect', data.expect);
      setValue('tag', data.tag);
    },
  });

  const { publicAuthenticatedUser } = useAuth();

  const { mutate } = useUpdateQuestionById(id as string, {
    onSuccess: (data: QuestionType) => {
      router.push(`/questions/${data.id}`);
    },
    onError: () => {},
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<QuestionFormType>();

  const watchDetails = watch('details', '');
  const watchExpect = watch('expect', '');

  const onSubmit = (data: QuestionFormType) => {
    mutate({
      ...questionDetailData,
      ...data,
    });
  };

  function onClickNextButton() {
    setCurrentFormElementIndex(currentFormElementIndex + 1);
  }

  return (
    <AppLayout hideFooter={false} hideHamburger={false}>
      <div className="w-full bg-gray-150">
        <div className="mx-auto max-w-79 flex justify-center px-24 pb-24">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <main className="mb-48">
              <div className="flex flex-col">
                <div className="flex flex-col m-0 p-0">
                  <div className="flex flex-row justify-between w-full align-center items-center">
                    <div className="flex flex-col">
                      <h1 className="font-600 leading-35 text-27">Edit question</h1>
                      <div className="flex flex-row items-center max-w-fit py-1 px-5 border border-yellow-700 rounded-3 bg-yellow-200 gap-4 mt-4">
                        <div>
                          <Icons.SvgEye className="mr-4 text-yellow-800" />
                        </div>
                        <div className="text-11 leading-18 text-yellow-800 font-bold">New</div>
                      </div>
                    </div>
                    <div>
                      <Icons.SvgAskBackground />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 flex flex-row gap-16 mt-16">
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
                        className=" rounded-3 border border-gray-300 w-full text-13 py-5.5 px-10 placeholder-gray-300 "
                        placeholder="e.g. Is there an R function the index of an element in a vector?"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-100 flex flex-row gap-16 mt-12">
                <div className={`w-70 p-24 flex-shrink-0 bg-white border rounded-3 border-gray-50`}>
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
                            <MyEditor onChange={onChange} value={'lkasdjklajsdl'} />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-100 flex flex-row gap-16 mt-12">
                <div className={`w-70 p-24 flex-shrink-0 bg-white border rounded-3 border-gray-50`}>
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
                </div>
              </div>

              <div className="w-100 flex flex-row gap-16 mt-12">
                <div
                  className={`relative w-70 p-24 flex-shrink-0 flex-grow-0 bg-white border rounded-3 border-gray-50`}
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
                        className="border rounded-3 border-gray-300 w-full text-13 py-8 px-10 placeholder-gray-300 "
                        placeholder="e.g. (c# vba pandas)"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-100 flex flex-row gap-16 mt-12">
                <div className={`w-70 p-24 flex-shrink-0 bg-white border rounded-3 border-gray-50`}>
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
                      <button
                        type="submit"
                        className=" border-transparent p-10.4 w-fit bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs mt-16"
                      >
                        Review your question
                      </button>
                    </div>
                  </div>
                </div>
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
