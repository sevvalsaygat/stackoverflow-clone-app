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
                    <div className="relative">
                      <div className="bg-gray-150 border-r-3 border-orange-400 p-4 pl-8 text-13 font-bold text-neutral-900 leading-26 w-full cursor-pointer">
                        Home
                      </div>
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
              <div className="w-727">
                <div id="mainbar" className="w-full">
                  <div className="flex flex-row justify-between mt-7">
                    <h1 className="flex text-27 font-400 leading-35 text-zinc-800 mb-27">
                      Top Questions
                    </h1>
                    <div>
                      <Link
                        href="/ask_question"
                        className="border border-transparent p-10.4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs"
                      >
                        Ask Question
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-end align-center mb-16">
                    <div className="flex flex-row">
                      <div className="flex mb-1 max-h-38.08">
                        <button className="border-y border-x rounded-l-3 border-gray-400 p-[.8em] text-13 font-400 text-zinc-500 bg-gray-50 hover:text-zinc-500">
                          Interesting
                        </button>
                        <button className="border-y border-r border-gray-400 p-[.8em] text-13 font-400 text-gray-250 hover:bg-gray-100 hover:text-zinc-500">
                          <span className="bg-blue-700 rounded-2 text-white text-11 p-1 mr-5">
                            298
                          </span>
                          Bountied
                        </button>
                        <button className="border-y border-r border-gray-400 p-[.8em] text-13 font-400 text-gray-250 hover:bg-gray-100 hover:text-zinc-500">
                          Hot
                        </button>
                        <button className="border-y border-r border-gray-400 p-[.8em] text-13 font-400 text-gray-250 hover:bg-gray-100 hover:text-zinc-500">
                          Week
                        </button>
                        <button className="border-y border-r rounded-r-3 border-gray-400 p-[.8em] text-13 font-400 text-gray-250 hover:bg-gray-100 hover:text-zinc-500">
                          Month
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="qlist-wrapper" className="w-full -ml-24 border-t-1">
                    <div className="mb-30">
                      {isSuccess &&
                        data.map((q: any, index: number) => {
                          return (
                            <div
                              key={index}
                              className="flex flex-row p-16 border-b-1 border-gray-50"
                            >
                              <div className="flex flex-col shrink-0 flex-wrap w-108 mr-16 mb-4 gap-6 text-gray-250">
                                <div className="text-neutral-900 gap-1 flex justify-end border border-transparent text-13 font-400 leading-17">
                                  <span>{q.votesCount}</span>
                                  <span>votes</span>
                                </div>
                                <div className="flex flex-row justify-end gap-1 border border-transparent text-gray-250 text-13 font-400 leading-17">
                                  <span>{q.answersCount}</span>
                                  <span>answer</span>
                                </div>
                                <div className="flex flex-row justify-end gap-1 border border-transparent text-gray-250 text-13 font-400 leading-17">
                                  <span>{q.viewsCount}</span>
                                  <span>views</span>
                                </div>
                              </div>
                              <div className="grow max-w-full">
                                <h3 className="-mt-2 mb-5 pr-24 text-17 font-sans leading-22.2308 break-words">
                                  <a className="text-blue-700 hover:text-sky-600 cursor-pointer">
                                    {q.question}
                                  </a>
                                </h3>

                                <div className="flex flex-wrap justify-between align-center items-center gap-x-6 gap-y-8">
                                  <div className="flex flex-wrap gap-4 float-left leading-18">
                                    <div className="mb-13 inline ml-0">
                                      {q.tags.map(
                                        (t: string, index: number) => {
                                          return (
                                            <div
                                              key={index}
                                              className="inline mr-4"
                                            >
                                              <a className="text-sky-700 bg-cyan-50 border border-transparent inline-block px-6 py-5 mb-2 mr-2 text-12 font-400 leading-12 rounded-3 whitespace-nowrap cursor-pointer hover:bg-cyan-450 hover:text-blue-350">
                                                {t}
                                              </a>
                                            </div>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                  <div className="felx flex-wrap ml-auto justify-end align-center items-center gap-4 leading-1">
                                    <div className="flex flex-row gap-4">
                                      <div className="flex flex-row align-center items-center gap-4">
                                        <a className="flex align-center items-center text-12 font-400 leading-12 text-blue-700 hover:text-sky-600 cursor-pointer">
                                          {q.askedBy.name}
                                        </a>
                                        <div className="flex align-center items-center text-12 font-bold leading-12 text-zinc-500">
                                          {q.asksCount}
                                        </div>
                                      </div>
                                      <time className="text-gray-250 hover:text-zinc-500 cursor-pointer text-12 font-400 leading-12">
                                        <a>asked {q.createdAt}</a>
                                      </time>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>

              <div id="sidebar" className="w-300 ml-24">
                <div className="bg-yellow-50 border border-yellow-100 mb-16 shadow-sm rounded-3">
                  <div className="p-0 m-0">
                    <div className="text-12 text-zinc-500 font-bold leading-15 border-b-1 border-yellow-100  bg-yellow-200 rounded-3 py-12 px-16">
                      The Overflow Blog
                    </div>
                    <div className="flex flex-row my-12 px-16 gap-2">
                      <div className="">
                        {' '}
                        <Icons.SvgPencil className="" />
                      </div>
                      <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                        AI applications open new security vulnerabilities
                      </div>
                    </div>
                    <div className="flex flex-row my-12 px-16 gap-2">
                      <div className="">
                        {' '}
                        <Icons.SvgPencil className="" />
                      </div>
                      <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                        How chaos engineering preps developers for the ultimate
                        game day (Ep. 531)
                      </div>
                    </div>
                    <div className="text-12 text-zinc-500 font-bold leading-15 border-y-1 border-yellow-100  bg-yellow-200 py-12 px-16">
                      Featured on Meta
                    </div>
                    <div className="flex flex-row my-12 px-16 gap-2">
                      <div className="">
                        {' '}
                        <Icons.SvgStackExchange className="" />
                      </div>
                      <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                        2022 Community-a-thon Recap
                      </div>
                    </div>
                    <div className="flex flex-row my-12 px-16 gap-2">
                      <div className="">
                        {' '}
                        <Icons.SvgStack className="text-zinc-800" />
                      </div>
                      <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                        Temporary policy: ChatGPT is banned
                      </div>
                    </div>
                    <div className="flex flex-row my-12 px-16 gap-2">
                      <div className="">
                        {' '}
                        <Icons.SvgStack className="text-zinc-800" />
                      </div>
                      <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                        Should we burninate the [gpl] tag?
                      </div>
                    </div>
                    <div className="flex flex-row my-12 px-16 gap-2">
                      <div className="">
                        {' '}
                        <Icons.SvgStack className="text-zinc-800" />
                      </div>
                      <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                        We’re bringing advertisements for technology courses to
                        Stack Overflow
                      </div>
                    </div>
                    <div className="flex flex-row my-12 px-16 gap-2">
                      <div className="">
                        {' '}
                        <Icons.SvgStack className="text-zinc-800" />
                      </div>
                      <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                        Introducing a new close reason specifically for
                        non-English questions
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-16 border border-gray-200 rounded-3 shadow-sm bg-white">
                  <h2 className="bg-gray-100 text-zinc-500 text-15 font-400 leading-19.5 py-12 px-16">
                    Custom Filters
                  </h2>
                  <div className="border-t-1 border-gray-200 py-4 px-15">
                    <div className="flex my-12">
                      <a className="text-13 font-400 leading-17 text-blue-700 cursor-pointer hover:text-sky-600">
                        Create a custom filter
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-16 border border-gray-200 rounded-3 shadow-sm bg-white">
                    <div className="flex flex-row justify-between bg-gray-100 text-15 font-400 leading-19.5 py-12 px-15">
                      <h2 className="text-zinc-500">Watched Tags</h2>
                      <a className="text-gray-250 cursor-pointer">edit</a>
                    </div>
                    <div className="py-16 px-15 border-t-1 border-gray-200">
                      <div className="flex flex-wrap py-4 m-2">
                        <a className="mb-1 border border-transparent rounded-3 bg-cyan-50 py-5 px-6 text-sky-700 text-12 font-400 leading-17 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer">
                          javascript
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-16 border border-gray-200 rounded-3 shadow-sm bg-white">
                    <div className="bg-gray-100 text-15 font-400 leading-19.5 py-12 px-15">
                      <h2 className="text-zinc-500">Ignored Tags</h2>
                    </div>
                    <div className="py-16 px-15 border-t-1 border-gray-200">
                      <div className="flex flex-wrap justify-center items-center py-4">
                        <button className="border border-blue-400 rounded-3 bg-cyan-50 py-8 px-10 shadow-bm text-sky-700 text-12 font-400 leading-17 hover:text-blue-350 hover:bg-cyan-300 cursor-pointer">
                          Add an ignored tag
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-16 border border-gray-200 rounded-3 shadow-sm bg-white">
                  <div className="flex flex-row justify-between bg-gray-100 text-15 font-400 leading-19.5 py-12 px-15">
                    <div className="text-zinc-500">Collectives</div>
                    <a className="text-11 font-400 leading-19.5 text-blue-700 cursor-pointer">
                      see all
                    </a>
                  </div>

                  <div className="flex flex-col justify-between border-t-1 py-16 px-15">
                    <div className="flex flex-row mb-8 justify-between">
                      <div className="flex flex-row">
                        <div className="flex mr-12 items-center justify-center">
                          <Icons.SvgTwilio className="h-8 w-8" />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-15 font-400 leading-19.5 text-gray-250 cursor-pointer">
                            Twilio
                          </h1>
                          <div className="text-12 font-400 leading-15 text-neutral-700">
                            6k Members
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <form className="flex flex-row justify-end">
                          <button className="border border-blue-450 rounded-3 text-12 font-400 leading-13 text-sky-700 px-8 hover:bg-cyan-150">
                            Join
                          </button>
                        </form>
                      </div>
                    </div>
                    <span className="text-13 font-400 leading-17 text-neutral-700">
                      Twilio has democratized channels like voice, text, chat,
                      video, and email by virtualizing...
                    </span>
                  </div>

                  <div className="flex flex-col justify-between border-t-1 py-16 px-15">
                    <div className="flex flex-row mb-8 justify-between">
                      <div className="flex flex-row">
                        <div className="flex mr-12 items-center justify-center">
                          <Icons.SvgWso2 className="h-8 w-8" />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-15 font-400 leading-19.5 text-gray-250 cursor-pointer">
                            WSO2
                          </h1>
                          <div className="text-12 font-400 leading-15 text-neutral-700">
                            3k Members
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <form className="flex flex-row justify-end">
                          <button className="border border-blue-450 rounded-3 text-12 font-400 leading-13 text-sky-700 px-8 hover:bg-cyan-150">
                            Join
                          </button>
                        </form>
                      </div>
                    </div>
                    <span className="text-13 font-400 leading-17 text-neutral-700">
                      WSO2 solutions give enterprises the flexibility to deploy
                      applications and ser...
                    </span>
                  </div>

                  <div className="flex flex-col justify-between border-t-1 py-16 px-15">
                    <div className="flex flex-row mb-8 justify-between">
                      <div className="flex flex-row">
                        <div className="flex mr-12 items-center justify-center">
                          <Icons.SvgAmazon className="h-8 w-8" />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-15 font-400 leading-19.5 text-gray-250 cursor-pointer">
                            AWS
                          </h1>
                          <div className="text-12 font-400 leading-15 text-neutral-700">
                            1k Members
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <form className="flex flex-row justify-end">
                          <button className="border border-blue-450 rounded-3 text-12 font-400 leading-13 text-sky-700 px-8 hover:bg-cyan-150">
                            Join
                          </button>
                        </form>
                      </div>
                    </div>
                    <span className="text-13 font-400 leading-17 text-neutral-700">
                      Amazon Web Services (AWS) is the world’s most
                      comprehensive and broadly adopted...
                    </span>
                  </div>
                </div>
                <div className="min-h-300"></div>

                <div className="mb-19">
                  <h4 className="mb-19">
                    <a className="text-19 font-400 leading-24 text-neutral-700 cursor-pointer">
                      Hot Network Questions
                    </a>
                  </h4>
                  <div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Extending diffeomorphisms
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Origins of the &quot; threaded fastener pullout formula
                      &quot;
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      in four months / after four months / four months later
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      How do heat pumps output more heat kW than the electrical
                      kW used to run the heat pump?
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Do courts generally run at a loss, run at a profit, or
                      generally break even?
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Why does the price keep changing after I click on a flight
                      deal in Expedia?
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Extending diffeomorphisms
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Should math for elementary teachers content be taught
                      under the direction of the math department?
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      How to stain bleached wood to match its original natural
                      colour (and then finish)?
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Load Center in Kitchen Cabinet
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Ravioli filled with goat cheese
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Should I file a tax return for my daughter, even if she is
                      not above the IRS minimum?
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      How to power a 24 VAC pump with 24 VDC?{' '}
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      A scientist tries to make a man more intelligent{' '}
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Does a legendary action occur “outside” of a turn?{' '}
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Why is &apos;de&apos; elided in &apos;d&apos; yeux&apos;{' '}
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Personas for Users who want to quit an unwanted habit{' '}
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      &quot;another house moving&quot; OR &quot;another moving
                      house&quot;{' '}
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      How do I attach two hot wires to a single terminal?{' '}
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Could a humantaur in the US be accepted to West Point
                      and/or have a career in the US Military?
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      What popularized the idea of aliens having a pair of
                      antennae on their heads?{' '}
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      If we stick to &quot;The Way&quot; in Taoism, won&apos;t
                      it be sinful?{' '}
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Does &quot;bunkey&quot; mean fool?{' '}
                    </div>
                    <div className="mb-10 ml-16 text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Who is this robot from the Magazine of Fantasy and Science
                      Fiction?{' '}
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="mr-2">
                      {' '}
                      <Icons.SvgRss className="text-orange-400" />
                    </div>
                    <div className="flex flex-row items-center text-12 font-400 leading-15 text-sky-650 hover:text-sky-600 cursor-pointer">
                      Recent questions feed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
export default TopQuestions;
