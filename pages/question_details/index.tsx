import { AppLayout } from '@layouts';
import { Icons, MyEditor } from '@components';
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
                                            <div className="relative">
                                                <a className="flex flex-row align-center items-center bg-gray-150 border-r-3 border-orange-400 py-6 pl-8 pb-4 cursor-pointer">
                                                    <Icons.SvgWorld className="text-neutral-900 -mt-1 mr-4 w-5 h-5" />
                                                    <span className="text-13 font-700 text-neutral-900 leading-17 w-full cursor-pointer">
                                                        Questions
                                                    </span>
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
                    <div className='w-full border-l px-15 py-24'>
                        <div className='px-15 flex flex-col'>
                            <div className='flex flex-row justify-between w-full gap-5'>
                                <div className='mb-8'>
                                    <h1 className='text-27 leading-35 text-neutral-700'>how to automatically assign a value to a cell depending on the value entered in a previous cell</h1>
                                </div>
                                <div className='ml-12 mt-8'>
                                    <Link
                                        href="/ask_question"
                                        className="border border-transparent p-10.4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs"
                                    >
                                        AskQuestion
                                    </Link>
                                </div>
                            </div>
                            <div className='pb-8 mb-16 mt-2 flex flex-row border-b'>
                                <div className='mb-8 mr-16 flex flex-row'>
                                    <div className='mr-6 text-13 leading-17 text-gray-250'>Asked</div>
                                    <div className='text-13 leading-17 text-zinc-800'>today</div>
                                </div>
                                <div className='mb-8 mr-16 flex flex-row'>
                                    <div className='mr-6 text-13 leading-17 text-gray-250'>Modified</div>
                                    <div className='cursor-pointer text-13 leading-17 text-zinc-800'>today</div>
                                </div>
                                <div className='mb-8 flex flex-row'>
                                    <div className='mr-6 text-13 leading-17 text-gray-250'>Viewed</div>
                                    <div className='text-13 leading-17 text-zinc-800'>4 times</div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div style={{width: "calc(100% - 300px )"}}>
                                    <div className='flex flex-row pr-16'>
                                        <div className='w-10 top-0 flex flex-col align-center items-center mr-24'>
                                            <div>
                                                <Icons.SvgUpLg className='text-gray-300'/>
                                            </div>
                                            <div className='m-4 text-21 leading-27 text-gray-250'>0</div>
                                            <div>
                                                <Icons.SvgDownLg className='text-gray-300'/>
                                            </div>
                                            <div className='py-4'>
                                                <Icons.SvgSelect className='text-gray-300'/>
                                            </div>
                                            <div className='py-8'>
                                                <Icons.SvgHistory className='text-gray-300'/>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='pr-16'>
                                                <div className='w-full'>
                                                    <p className='mb-16 text-15 leading-23 text-zinc-800'>| Column A | Column B | | -------- | -------- | | 0 | 31 | | 1-5 | 32 | 6-10 34 11-15 35</p>
                                                    <p className='mb-16 text-15 leading-23 text-zinc-800'>I have created a drop-down menu for people to select a value between 0 and 15. In another cell I would like to automatically assign the corresponding value of column B. could someone help me please with the formula - many thx</p>
                                                    <p className='text-15 leading-23 text-zinc-800'>I tried various suggestions for IF function but I am not sure about the formulae</p>
                                                </div>
                                                <div className='mt-24 mb-12'>
                                                    <div className='flex flex-row'>
                                                        <div className='border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 p-6 text-12 rounded-3 leading-12 mr-5 hover:text-blue-350 cursor-pointer'>excel</div>
                                                        <div className='border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 p-6 text-12 rounded-3 leading-12 mr-5 hover:text-blue-350 cursor-pointer'>formula</div>
                                                    </div>
                                                </div>
                                                <div className='mt-32 flex flex-row justify-between'>
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
                                                        <div className='border border-transparent rounded-b-3 p-6 flex flex-row bg-cyan-450'>
                                                            <Icons.SvgHand className='text-neutral-700' />
                                                            <div className='text-13 leading-17 text-neutral-700 ml-4'>New contributor</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-24'>
                                                <button className='text-13 leading-17 text-gray-400 hover:text-sky-600'>Add a comment</button>
                                            </div>
                                            <div className='pt-32 mx-16 -ml-[38px]'>
                                                <div className='pb-8 text-17 leading-23 text-zinc-800'>Related questions</div>
                                                <div className='border rounded-md border-gray-650'>
                                                    <div className='p-12 flex flex-row items-center border-b'>
                                                        <div className='border border-gray-650 rounded-2 px-14 text-12 leading-24'>0</div>
                                                        <div className='pr-12 pl-16 text-13 leading-17 cursor-pointer text-blue-700 hover:text-sky-600'>Cell with 2 values. Display 1 and hide the other</div>
                                                    </div>
                                                    <div className='p-12 flex flex-row items-center border-b'>
                                                        <div className='border border-green-500 rounded-2 px-14 text-12 text-white bg-green-500 leading-24'>1</div>
                                                        <div className='pr-12 pl-16 text-13 leading-17 cursor-pointer text-blue-700 hover:text-sky-600'>Selecting a Cell based on Row and Column Headers</div>
                                                    </div>
                                                    <div className='p-12 flex flex-row items-center'>
                                                        <div className='border border-gray-650 rounded-2 px-14 text-12 leading-24'>0</div>
                                                        <div className='pr-12 pl-16 text-13 leading-17 cursor-pointer text-blue-700 hover:text-sky-600'>Cell with 2 values. Display 1 and hide the other</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='group flex flex-row justify-center align-center items-center gap-4 pt-8 cursor-pointer'>
                                                <div>
                                                    <Icons.SvgArrowDown className='text-blue-700 group-hover:text-sky-600' />
                                                </div>
                                                <div className='text-13 leading-17 text-blue-700 group-hover:text-sky-600'>Load 5 more related questions </div>
                                            </div>
                                            <div id='answer' className='pt-10 mt-15 -ml-[55px]'>
                                                <h2 className='pt-8 text-17 leading-24'>Know someone who can answer? Share a link to this
                                                    <a className='text-blue-700 hover:text-sky-600 cursor-pointer'> question</a> via
                                                    <a className='text-blue-700 hover:text-sky-600 cursor-pointer'> email</a>,
                                                    <a className='text-blue-700 hover:text-sky-600 cursor-pointer'> Twitter</a>, or
                                                    <a className='text-blue-700 hover:text-sky-600 cursor-pointer'> Facebook.</a>
                                                </h2>
                                                <form className='w-full mx-16 -ml-1'>
                                                    <h2 className='py-20 text-19 leading-25'>Your Answer</h2>
                                                    <div className="border border-gray-300 h-full rounded-3"> 
                                                        <div className='h-322'>
                                                            <MyEditor />
                                                        </div>
                                                    </div>
                                                    <div className='mt-24'>
                                                        <button className="border border-transparent p-10.4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 leading-15 rounded-3 shadow-bs">
                                                            Post Your Answer
                                                        </button>
                                                    </div>
                                                </form>
                                                <div className='mt-24 flex flex-row text-17 leading-24'>
                                                    <h2>Not the answer you are looking for? Browse other questions tagged
                                                        <a className='ml-4 border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 p-6 text-12 rounded-3 leading-12 mr-5 hover:text-blue-350 cursor-pointer'>excel</a>
                                                        <a className='border border-transparent bg-cyan-50 hover:bg-cyan-450 text-sky-300 p-6 text-12 rounded-3 leading-12 mr-5 hover:text-blue-350 cursor-pointer'>excel</a>
                                                    <a className='text-17 leading-24 text-blue-700 hover:text-sky-600'>ask your own question.</a>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className='w-300'>
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
                                        </ul>
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
