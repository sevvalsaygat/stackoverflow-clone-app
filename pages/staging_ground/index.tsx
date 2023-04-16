import { AppLayout } from '@layouts';
import { Icons } from '@components';
import { Api } from '@hooks';
import Link from 'next/link';

const TopQuestions = () => {
  const { data, isSuccess } = Api.Questions.useGetTopQuestions();

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
                        <div className="ml-8 mb-6 mt-16 text-11 font-400 leading-15 text-gray-250">
                          PUBLIC
                        </div>
                        <div className=" group flex flex-row cursor-pointer items-center pl-8 pb-4">
                          <Icons.SvgWorld className="text-gray-400 group-hover:text-neutral-900 mr-4 w-18 h-18" />
                          <Link
                            href="/all_questions"
                            className="text-13 font-400 leading-26 text-zinc-500 group-hover:text-neutral-900"
                          >
                            Questions
                          </Link>
                        </div>
                        <div className="group pl-30 p-7 cursor-pointer bg-gray-150 border-r-3 border-orange-400 text-13 font-bold text-zinc-500 group-hover:text-neutral-900">
                            Staging Ground
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
                            <div className="text-11 font-400 text-gray-250">
                              COLLECTIVES
                            </div>
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
                        <div className="text-11 font-400 text-gray-250">
                          TEAMS
                        </div>
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
                    <div className="w-full border-l p-24 flex flex-row">
                        <div className='w-727 px-15'>
                            <div id="mainbar" className="flex flex-row w-full mb-24">
                                <div className='flex flex-row justify-center align-center'>
                                    <div className='flex flex-row justify-center items-center align-center'>
                                        <Icons.SvgLogoBlackSmall className="text-gray-250 hover:text-neutral-700" />
                                        <Icons.SvgArrowRight className="mx-4 text-gray-300" />
                                    </div>
                                    <div className='flex justify-center align-center cursor-pointer my-2 text-12 leading-15 text-gray-250 hover:text-neutral-700'>Staging Ground</div>
                                </div>
                            </div>
                            <main className='flex flex-col'>
                                <div className='w-full'>
                                    <h1 className='mb-2 text-27 leading-9 text-neutral-700'>
                                        facebook clone yapmaya çalışıyorum ama olmuyor acaba neden? 
                                    </h1>
                                    <div className='flex flex-row gap-4'>
                                        <div className='flex gap-4 mt-8'>
                                            <div className='flex flex-row justify-center items-center py-1 px-5 border border-yellow-700 rounded-3 text-11 leading-18 text-yellow-800 font-bold bg-yellow-200 gap-4'>
                                                <Icons.SvgEye className="mr-4" />
                                                New
                                            </div>
                                            <div className='flex gap-1 justify-center items-center'>
                                                <div className='text-15 leading-18 text-gray-250'>Asked by</div>
                                                <a className='text-15 leading-18 text-blue-700 hover:text-sky-600 cursor-pointer'>Şevval Saygat</a>
                                                <span className='text-15 leading-18 text-gray-250'>2 hours ago |</span>
                                                <div className='flex justify-center items-center text-gray-250'>
                                                    <Icons.SvgHistory />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                      <div className='mb-24 mt-32'>
                                        <p className='mb-20 text-15 leading-23'>facebook clone yapmaya çalışıyorum ama olmuyor</p>
                                        <p className='text-15 leading-23'>facebook clone un backendini json server ile yapmayı denedim, teker teker componentler oluşturarak ilerledim, silme, düzenleme vs için fakat başarılı olamadım bunun nedini ne olabilir?</p>
                                      </div>
                                      <div className='flex flex-row'>
                                        <div className='border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 p-6 text-12 rounded-3 leading-12 m-2 hover:text-blue-350 cursor-pointer'>javascript</div>
                                        <div className='border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 p-6 text-12 rounded-3 leading-12 m-2 hover:text-blue-350 cursor-pointer'>json</div>
                                      </div>
                                      <div className='my-16 flex flex-row justify-between'>
                                        <div className='m-4'>
                                          <div className='pt-2 -m-4 flex flex-wrap gap-4'>
                                            <div className='m-4 text-13 leading-17 text-neutral-100 hover:text-gray-400 cursor-pointer'>Edit</div>
                                            <div className='m-4 text-13 leading-17 text-neutral-100 hover:text-gray-400 cursor-pointer'>Delete</div>
                                            <div className='m-4 text-13 leading-17 text-neutral-100 hover:text-gray-400 cursor-pointer'>Flag</div>
                                          </div>
                                        </div>
                                        <div className='flex flex-col m-4 border-transparent rounded-3 w-200 bg-blue-150'>
                                          <div className='px-6 py-7'>
                                            <div className='mb-4 text-12 leading-15 text-gray-250'>asked 10 hours ago</div>
                                            <div className='flex flex-row'>
                                              <div>
                                                <Icons.SvgUser className='border rounded-3 p-2 w-9 h-9' />
                                              </div>
                                              <div className='ml-8 flex flex-col'>
                                                <div className='text-13 leading-17 text-blue-700 hover:text-sky-600 cursor-pointer'>Şevval Saygat</div>
                                                <div className='text-12 leading-17 text-gray-250'>1</div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className='border border-transparent rounded-b-3 py-6 px-8 flex flex-row bg-cyan-450'>
                                            <Icons.SvgHand className='text-neutral-700' />
                                            <div className='text-13 leading-17 text-neutral-700 ml-4'>New contributor</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
   
                </div>
            </div>
        </div>
    </AppLayout>
  );
};
export default TopQuestions;