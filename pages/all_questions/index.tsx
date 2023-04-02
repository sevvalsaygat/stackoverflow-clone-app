import { AppLayout } from '@layouts';
import { Icons, Pagination } from '@components';
import { Api } from '@hooks';
import Link from 'next/link';

const AllQuestions = () => {
  const { data, isSuccess } = Api.Questions.useGetAllQuestions();

  return (
    <AppLayout hideFooter={false} hideHamburger={true}>
      <div className="w-full bg-white">
        <div className="mx-auto max-w-79 flex justify-center">
          <div className="flex w-full justify-between">
            <div className="w-[164px] h-screen" id="left-sidebar">
              <div className="flex flex-col sticky mb-8 pt-24 w-[164px]">
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
                        <div className="ml-8 mb-4 mt-16 text-11 font-400 leading-15 text-gray-250">
                          PUBLIC
                        </div>

                        <div className="relative">
                          <a className="flex flex-row align-center items-center bg-gray-150 border-r-3 border-orange-400 py-[6px] h-[33px] pl-8 pb-4 cursor-pointer">
                            <Icons.SvgWorld className="text-neutral-900 -mt-1 mr-4 w-[20px] h-[20px]" />
                            <span className="text-13 font-700 text-neutral-900 leading-17 w-full cursor-pointer">
                              Questions
                            </span>
                          </a>
                        </div>

                        <div className="group pl-[30px] p-4 cursor-pointer">
                          <span className="text-13 font-400 leading-26 text-zinc-500 group-hover:text-neutral-900">
                            Tags
                          </span>
                        </div>
                        <div className="group pl-[30px] p-4 cursor-pointer">
                          <span className="text-13 font-400 leading-26 text-zinc-500 group-hover:text-neutral-900">
                            Users
                          </span>
                        </div>
                        <div className="group pl-[30px] p-4 cursor-pointer">
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
              <div className="w-[727px]">
                <div id="mainbar" className="w-full">
                  <div className="flex flex-row justify-between">
                    <h1 className="flex text-27 font-400 leading-35 text-zinc-800 mb-27">
                      {' '}
                      All Questions
                    </h1>
                    <div className="ml-3">
                      <Link
                        href="/ask_question"
                        className="border-1 border-transparent p-10.4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs"
                      >
                        Ask Question
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between align-center items-center mb-12">
                    <div className="flex mr-12 text-17 font-400 leading-23 text-zinc-800">
                      23,455,561 questions
                    </div>
                    <div className="flex justify-end align-center items-center">
                      <div className="flex flex-row">
                        <div className="flex mb-1 max-h-[35.03px] mr-16">
                          <button className="flex justify-center items-center border-y border-x rounded-l-3 border-gray-400 text-13 font-400 text-zinc-500 bg-gray-50 hover:text-zinc-500 p-[9.6px]">
                            Newest
                          </button>
                          <button className="flex justify-center items-center border-y border-r border-gray-400 p-[9.6px] text-13 font-400 text-gray-250 hover:bg-gray-100 hover:text-zinc-500">
                            Active
                          </button>
                          <button className="flex justify-center items-center border-y border-r border-gray-400 p-[9.6px] text-13 font-400 text-gray-250 hover:bg-gray-100 hover:text-zinc-500">
                            Bountied
                            <span className="bg-blue-700 rounded-2 text-white text-11 px-1 ml-5">
                              298
                            </span>
                          </button>
                          <button className="flex justify-center items-center border-y border-r border-gray-400 p-[9.6px] text-13 font-400 text-gray-250 hover:bg-gray-100 hover:text-zinc-500">
                            Unanswered
                          </button>
                          <button className="flex justify-center items-center border-y border-r rounded-3 border-gray-400 p-[9.6px] text-13 font-400 text-gray-250 hover:bg-gray-100 hover:text-zinc-500">
                            More
                          </button>
                        </div>
                        <div className="flex flex-row justify-center items-center w-[69.19px] h-[35.85px]">
                          <button className="w-full h-full flex flex-row justify-center items-center rounded-3 border shadow-bs border-blue-400 bg-cyan-50 text-sky-700 p-[9.6px] text-12 font-400 leading-13">
                            <Icons.SvgFilter className="flex -my-[3.6px] align-baseline	" />{' '}
                            Filter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="qlist-wrapper" className="w-full -ml-24 border-t-1">
                    <div className="mb-20">
                      {isSuccess &&
                        data.map((q: any, index: number) => {
                          return (
                            <div
                              key={index}
                              className="flex flex-row p-16 border-b-1 border-gray-50"
                            >
                              <div className="flex flex-col shrink-0 flex-wrap w-[108px] mr-16 mb-4 gap-6 text-gray-250">
                                <div className="text-neutral-900 gap-1 flex justify-end border-1 border-transparent text-13 font-400 leading-17">
                                  <span>{q.votesCount}</span>
                                  <span>votes</span>
                                </div>
                                <div className="flex flex-row justify-end gap-1 border-1 border-transparent text-gray-250 text-13 font-400 leading-17">
                                  <span>{q.answersCount}</span>
                                  <span>answer</span>
                                </div>
                                <div className="flex flex-row justify-end gap-1 border-1 border-transparent text-gray-250 text-13 font-400 leading-17">
                                  <span>{q.viewsCount}</span>
                                  <span>views</span>
                                </div>
                              </div>
                              <div className="grow max-w-full">
                                <h3 className="-mt-[1.95px] mb-[4.9998px] pr-24 text-17 font-sans leading-22.2308 break-words">
                                  <a className="text-blue-700 hover:text-sky-600 cursor-pointer">
                                    {q.question}
                                  </a>
                                </h3>
                                <div className="-mt-2 mb-8 line-clamp-2 break-words overflow-hidden text-13 font-400 leading-17 text-neutral-700">
                                  {q.description}
                                </div>
                                <div className="flex flex-wrap justify-between align-center items-center gap-x-6 gap-y-8">
                                  <div className="flex flex-wrap gap-4 float-left leading-18">
                                    <ul className="mb-13 inline ml-0">
                                      {q.tags.map(
                                        (t: string, index: number) => {
                                          return (
                                            <div
                                              key={index}
                                              className="inline mr-4"
                                            >
                                              <a className="text-sky-700 bg-cyan-50 border-1 border-transparent inline-block px-[5.8px] py-[5px] mb-2 mr-2 text-12 font-400 leading-12 rounded-3 whitespace-nowrap cursor-pointer hover:bg-cyan-450 hover:text-blue-350">
                                                {t}
                                              </a>
                                            </div>
                                          );
                                        }
                                      )}
                                    </ul>
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
                                      <time className="text-gray-250 text-12 font-400 leading-12">
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
                  <br />

                  <Pagination />
                </div>
              </div>

              <div id="sidebar" className="w-[300px] ml-24">
                <div className="bg-yellow-50 border border-yellow-100 mb-16 shadow-sm rounded-3">
                  <ul className="p-0 m-0">
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
                    <div className="text-12 text-zinc-500 font-bold leading-15 border-y-1 border-yellow-100  bg-yellow-200 py-12 px-16">
                      Hot Meta Posts
                    </div>
                    <div className="flex flex-row my-12 px-16 gap-2">
                      <span className="text-13 font-400 leading-17 text-gray-250">
                        22
                      </span>
                      <div className="text-13 font-400 leading-17 text-neutral-700 cursor-pointer hover:text-zinc-500">
                        Stack Overflow is adding a 1st party targeting cookie{' '}
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="mb-16 border-1 border-gray-200 rounded-3 shadow-sm bg-white">
                  <h2 className="bg-gray-100 text-zinc-500 text-15 font-400 leading-19.5 py-12 px-16">
                    Custom Filters
                  </h2>
                  <ul className="border-t-1 border-gray-200 py-4 px-15">
                    <div className="flex my-12">
                      <a className="text-13 font-400 leading-17 text-blue-700 cursor-pointer hover:text-sky-600">
                        Create a custom filter
                      </a>
                    </div>
                  </ul>
                </div>
                <div>
                  <div className="mb-16 border-1 border-gray-200 rounded-3 shadow-sm bg-white">
                    <div className="flex flex-row justify-between bg-gray-100 text-15 font-400 leading-19.5 py-12 px-15">
                      <h2 className="text-zinc-500">Watched Tags</h2>
                      <a className="text-gray-250 cursor-pointer">edit</a>
                    </div>
                    <div className="py-16 px-15 border-t-1 border-gray-200">
                      <div className="flex flex-wrap py-4 m-2">
                        <a className="mb-1 border-1 border-transparent rounded-3 bg-cyan-50 py-[4.8px] px-[6px] text-sky-700 text-12 font-400 leading-17 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer">
                          javascript
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-16 border-1 border-gray-200 rounded-3 shadow-sm bg-white">
                    <div className="bg-gray-100 text-15 font-400 leading-19.5 py-12 px-15">
                      <h2 className="text-zinc-500">Ignored Tags</h2>
                    </div>
                    <div className="py-16 px-15 border-t-1 border-gray-200">
                      <div className="flex flex-wrap justify-center items-center py-4">
                        <button className="border-1 border-blue-400 rounded-3 bg-cyan-50 py-8 px-10 shadow-bm text-sky-700 text-12 font-400 leading-17 hover:text-blue-350 hover:bg-cyan-300 cursor-pointer">
                          Add an ignored tag
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-16 border-1 border-gray-200 rounded-3 shadow-sm bg-white">
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
                          <button className="border-1 border-blue-450 rounded-3 text-12 font-400 leading-13 text-sky-700 px-8 hover:bg-cyan-150">
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
                          <button className="border-1 border-blue-450 rounded-3 text-12 font-400 leading-13 text-sky-700 px-8 hover:bg-cyan-150">
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
                          <button className="border-1 border-blue-450 rounded-3 text-12 font-400 leading-13 text-sky-700 px-8 hover:bg-cyan-150">
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
                <div className="min-h-[300px]"></div>

                <div className="mb-[19.5px]">
                  <h2 className="text-neutral-700 mb-19 text-19 font-400 leading-24">
                    Related Tags
                  </h2>
                  <div className="mr-2 mb-10 my-2">
                    <a className="border-1 border-transparent text-sky-700 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer bg-cyan-50 px-[4.8px] py-[4.3px] text-12 font-400 leading-12 rounded-3">
                      javascript
                    </a>
                    &nbsp;
                    <span className="mr-4 text-gray-400">
                      <span className="text-13 font-400 leading-17 text-gray-400">
                        x
                      </span>
                      &nbsp;
                      <span className="text-11 font-400 leading-13 text-gray-250">
                        2472680
                      </span>
                    </span>
                  </div>
                  <div className="mr-2 mb-10 my-2">
                    <a className="border-1 border-transparent text-sky-700 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer bg-cyan-50 px-[4.8px] py-[4.3px] text-12 font-400 leading-12 rounded-3">
                      pyhton
                    </a>
                    &nbsp;
                    <span className="mr-4 text-gray-400">
                      <span className="text-13 font-400 leading-17 text-gray-400">
                        x
                      </span>
                      &nbsp;
                      <span className="text-11 font-400 leading-13 text-gray-250">
                        2100599
                      </span>
                    </span>
                  </div>
                  <div className="mr-2 mb-10 my-2">
                    <a className="border-1 border-transparent text-sky-700 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer bg-cyan-50 px-[4.8px] py-[4.3px] text-12 font-400 leading-12 rounded-3">
                      java
                    </a>
                    &nbsp;
                    <span className="mr-4 text-gray-400">
                      <span className="text-13 font-400 leading-17 text-gray-400">
                        x
                      </span>
                      &nbsp;
                      <span className="text-11 font-400 leading-13 text-gray-250">
                        1887130
                      </span>
                    </span>
                  </div>
                  <div className="mr-2 mb-10 my-2">
                    <a className="border-1 border-transparent text-sky-700 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer bg-cyan-50 px-[4.8px] py-[4.3px] text-12 font-400 leading-12 rounded-3">
                      c#
                    </a>
                    &nbsp;
                    <span className="mr-4 text-gray-400">
                      <span className="text-13 font-400 leading-17 text-gray-400">
                        x
                      </span>
                      &nbsp;
                      <span className="text-11 font-400 leading-13 text-gray-250">
                        1579832
                      </span>
                    </span>
                  </div>
                  <div className="mr-2 mb-10 my-2">
                    <a className="border-1 border-transparent text-sky-700 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer bg-cyan-50 px-[4.8px] py-[4.3px] text-12 font-400 leading-12 rounded-3">
                      php
                    </a>
                    &nbsp;
                    <span className="mr-4 text-gray-400">
                      <span className="text-13 font-400 leading-17 text-gray-400">
                        x
                      </span>
                      &nbsp;
                      <span className="text-11 font-400 leading-13 text-gray-250">
                        1455508
                      </span>
                    </span>
                  </div>
                  <div className="mr-2 mb-10 my-2">
                    <a className="border-1 border-transparent text-sky-700 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer bg-cyan-50 px-[4.8px] py-[4.3px] text-12 font-400 leading-12 rounded-3">
                      android
                    </a>
                    &nbsp;
                    <span className="mr-4 text-gray-400">
                      <span className="text-13 font-400 leading-17 text-gray-400">
                        x
                      </span>
                      &nbsp;
                      <span className="text-11 font-400 leading-13 text-gray-250">
                        1399380
                      </span>
                    </span>
                  </div>
                  <div className="mr-2 mb-10 my-2">
                    <a className="border-1 border-transparent text-sky-700 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer bg-cyan-50 px-[4.8px] py-[4.3px] text-12 font-400 leading-12 rounded-3">
                      html
                    </a>
                    &nbsp;
                    <span className="mr-4 text-gray-400">
                      <span className="text-13 font-400 leading-17 text-gray-400">
                        x
                      </span>
                      &nbsp;
                      <span className="text-11 font-400 leading-13 text-gray-250">
                        1166008
                      </span>
                    </span>
                  </div>
                  <div className="mr-2 mb-10 my-2">
                    <a className="border-1 border-transparent text-sky-700 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer bg-cyan-50 px-[4.8px] py-[4.3px] text-12 font-400 leading-12 rounded-3">
                      jquery
                    </a>
                    &nbsp;
                    <span className="mr-4 text-gray-400">
                      <span className="text-13 font-400 leading-17 text-gray-400">
                        x
                      </span>
                      &nbsp;
                      <span className="text-11 font-400 leading-13 text-gray-250">
                        1036087
                      </span>
                    </span>
                  </div>
                  <div className="mr-2 mb-10 my-2">
                    <a className="border-1 border-transparent text-sky-700 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer bg-cyan-50 px-[4.8px] py-[4.3px] text-12 font-400 leading-12 rounded-3">
                      c++
                    </a>
                    &nbsp;
                    <span className="mr-4 text-gray-400">
                      <span className="text-13 font-400 leading-17 text-gray-400">
                        x
                      </span>
                      &nbsp;
                      <span className="text-11 font-400 leading-13 text-gray-250">
                        787823
                      </span>
                    </span>
                  </div>
                  <div className="mr-2 mb-10 my-2">
                    <a className="border-1 border-transparent text-sky-700 hover:text-blue-350 hover:bg-cyan-450 cursor-pointer bg-cyan-50 px-[4.8px] py-[4.3px] text-12 font-400 leading-12 rounded-3">
                      css
                    </a>
                    &nbsp;
                    <span className="mr-4 text-gray-400">
                      <span className="text-13 font-400 leading-17 text-gray-400">
                        x
                      </span>
                      &nbsp;
                      <span className="text-11 font-400 leading-13 text-gray-250">
                        785419
                      </span>
                    </span>
                  </div>
                  <a className="text-13 font-400 leading-17 my-5 cursor-pointer text-blue-700 hover:text-sky-600">
                    more related tags
                  </a>
                </div>

                <div className="mb-19">
                  <h4 className="mb-19">
                    <a className="text-19 font-400 leading-24 text-neutral-700 cursor-pointer">
                      Hot Network Questions
                    </a>
                  </h4>
                  <ul>
                    <div className="flex flex-row mb-10 ml-0">
                      <div className="mt-2 mr-6 inline-block align-top">
                        {/* <img src="/images/favicons.png" className="bg-no-repeat bg-top-756" /> */}
                      </div>
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
                        FIPS 186-4, Use of RSA key pair for Encryption and
                        Signature
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
                        Why was the graphical user interface version of Defrag
                        removed?
                      </a>
                    </div>
                    <div className="flex flex-row mb-10 ml-0">
                      <div className="mt-2 mr-6 inline-block align-top"></div>
                      <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                        The rationale behind allowing `sudo -u root` but
                        disallowing `sudo -u root -i`
                      </a>
                    </div>
                    <div className="flex flex-row mb-10 ml-0">
                      <div className="mt-2 mr-6 inline-block align-top"></div>
                      <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                        Was there any technological reason that C was designed
                        to return only a single thing from a function?
                      </a>
                    </div>
                    <div className="flex flex-row mb-10 ml-0">
                      <div className="mt-2 mr-6 inline-block align-top"></div>
                      <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                        How do proponents of the Fine Tuning argument for God,
                        refute the puddle comparison?
                      </a>
                    </div>
                    <div className="flex flex-row mb-10 ml-0">
                      <div className="mt-2 mr-6 inline-block align-top"></div>
                      <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                        Basis for multivariable polynomials
                      </a>
                    </div>
                    <div className="flex flex-row mb-10 ml-0">
                      <div className="mt-2 mr-6 inline-block align-top"></div>
                      <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                        How do we know we&apos;re not getting bigger?
                      </a>
                    </div>
                    <div className="flex flex-row mb-10 ml-0">
                      <div className="mt-2 mr-6 inline-block align-top"></div>
                      <a className="inline-block align-top text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer">
                        How to write straight on blank paper?
                      </a>
                    </div>
                  </ul>
                  <div className="flex flex-row items-center">
                    <a className="flex flex-row items-center text-12 font-400 leading-15 text-blue-700 hover:text-sky-600 cursor-pointer ml-22 my-5 whitespace-normal	">
                      more hot questions
                    </a>
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
export default AllQuestions;
