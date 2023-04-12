import React, { useState } from "react";
import { Icons } from '@components';
import { useAuth } from '@hooks';
import Link from 'next/link';

type HeaderType = {
  hideHamburger?: boolean;
};

const Header = ({ hideHamburger }: HeaderType) => {
  const I18N_SCOPE = 'components.header';
  const { isAuthenticated } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full bg-gray-100 shadow-sm border-t-[3px] border-t-orange-400 h-[50px] sticky">
      <div className="mx-auto max-w-79 max-h-[47px] flex justify-center">
        <div className="flex flex-row bg-gray-100 align-center items-center h-[47px] w-full">
          {!hideHamburger && (
            <div className=" hover:bg-gray-50 cursor-pointer flex items-center justify-center">
              <Icons.SvgHambuger className="h-[47px] w-12 py-3 text-zinc-800" />
            </div>
          )}
          <Link
            href="/top_questions"
            className="px-8 w-[166px] hover:bg-gray-50 cursor-pointer flex items-center justify-center h-[47px]"
          >
            <Icons.SvgLogo className="h-30 w-150 -mt-4" />
          </Link>
          {!isAuthenticated && (
            <div className="flex items-center">
              <p className="m-auto text-13 leading-17 text-zinc-500 px-[12px] py-[6px] hover:bg-gray-50 hover:text-zinc-800 rounded-full cursor-pointer h-[29px]">
                About
              </p>
            </div>
          )}
          <div className="flex items-center">
            <p className="m-auto text-13 leading-17 text-zinc-500 px-[12px] py-[6px] hover:bg-gray-50 hover:text-zinc-800 rounded-full cursor-pointer h-[29px]">
              Products
            </p>
          </div>
          {!isAuthenticated && (
            <div className="flex items-center">
              <p className="min-w-max m-auto text-13 leading-17 text-zinc-500 px-[12px] py-[6px] hover:bg-gray-50 hover:text-zinc-800 rounded-full cursor-pointer h-[29px]">
                For Teams
              </p>
            </div>
          )}
          <div className="w-full flex flex-row items-center p-8 h-[47px]">
            <div className="flex flex-row grow">
              <input
                className="py-8 px-32 text-13 font-400 text-neutral-700 leading-15 border border-gray-300 rounded-3 flex grow focus:outline-blue-400
                focus:ring-4 focus:ring-blue-200 focus:border-transparent"
                type="text"
                placeholder="Search..."
              />
              <Icons.SvgSearch className="ml-8 mt-8 absolute text-gray-400" />
            </div>
          </div>

          {isAuthenticated ? (
            <div className=" flex flex-row items-center justify-center pr-14">
              <div className="flex justify-center items-center px-10 hover:bg-gray-50 cursor-pointer text-zinc-500 hover:text-gray-800 h-[47px]">
                <Icons.SvgUser className="h-5" />
              </div>
              <div className="flex flex-row items-center justify-center px-10 hover:bg-gray-50 cursor-pointer text-zinc-500 hover:text-gray-800 h-[47px]">
                <Icons.SvgInbox className="w-5 h-4" />
              </div>
              <div className="flex flex-row items-center justify-center px-10 hover:bg-gray-50 cursor-pointer text-zinc-500 hover:text-gray-800 h-[47px]">
                <Icons.SvgCup className="w-18 h-18" />
              </div>
              <div className="flex flex-row items-center justify-center px-10 hover:bg-gray-50 cursor-pointer text-zinc-500 hover:text-gray-800 h-[47px]">
                <Icons.SvgHelp className="w-18 h-18" />
              </div>
              <button onClick={toggleDropdown} className="flex flex-row items-center justify-center px-10 hover:bg-gray-50 cursor-pointer text-zinc-500 hover:text-gray-800 h-[47px]">
                <Icons.SvgList className="w-18 h-18" />
              </button>
              {isOpen && (
                <div className='absolute mr-[180px] overflow-auto mt-[436px] z-0 w-[375px] border-gray-50 border-x-1 border-b-1  max-h-[390px] min-h-[390px] bg-white shadow-sm'>
                  <div className='bg-gray-150 py-8 px-10 w-full'>
                    <h3 className='text-blue-700 hover:text-sky-600 font-bold text-11 leading-14 cursor-pointer'>CURRENT COMMUNITY</h3>
                  </div>
                  <div>
                    <ul className='pl-0 ml-0 mb-0'>
                      <div className='group bg-blue-50 hover:bg-cyan-50'>
                        <li className='p-2 px-7 flex flex-row justify-between cursor-pointer '>
                          <div className='flex flex-row p-6 justify-center items-center'>
                            <Icons.SvgLogoSmall className='w-3 h-3 m-4'/>
                            <div className='group-hover:text-sky-600 m-4 text-12 leading-15 font-bold text-blue-700'>Stack Overflow</div>
                          </div>
                          <div className='flex flex-row justify-center items-center p-8'>
                            <a className='ml-10 text-12 leading-15 text-blue-700 hover:text-sky-600'>help</a>
                            <a className='ml-10 text-12 leading-15 text-blue-700 hover:text-sky-600'>chat</a>
                            <a className='ml-10 text-12 leading-15 text-blue-700 hover:text-sky-600'>log out</a>
                          </div>
                        </li>
                      </div>
                      <div className='group bg-blue-50 hover:bg-cyan-50'>
                        <li className='p-2 px-7 flex flew-row cursor-pointer'>
                          <div className='p-6 flex justify-center items-center'>
                            <Icons.SvgLogoSmall className='w-3 h-3 m-4'/>
                          </div>
                          <div className='flex flex-row p-6 justify-center items-center '>
                            <Icons.SvgLogoBlackSmall className='w-3 h-3 m-4'/>
                            <div className='group-hover:text-sky-600 m-4 text-12 leading-15 text-blue-700'>Meta Stack Overflow</div>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className='bg-gray-150 py-8 px-10 w-full flex flex-row justify-between'>
                    <h3 className='text-blue-700 hover:text-sky-600 font-bold text-11 leading-14 cursor-pointer'>YOUR COMMUNITIES</h3>
                    <h3 className='text-blue-700 hover:text-sky-600 px-6 text-12 leading-15 cursor-pointer'>edit</h3>
                  </div>
                  <div className='group bg-white hover:bg-gray-50'>
                    <div className='p-2 px-7 flex flex-row justify-between cursor-pointer '>
                      <div className='flex flex-row p-6 justify-center items-center '>
                        <Icons.SvgLogoSmall className='w-3 h-3 m-4'/>
                        <div className='group-hover:text-sky-600 m-4 text-12 leading-15 text-blue-700'>Stack Overflow</div>
                      </div>
                      <div className='flex flex-row justify-center items-center p-8 text-gray-400 text-12 leading-15'>
                        1
                      </div>
                    </div>
                  </div>
                  <div className='flex bg-gray-150 py-8 px-10 w-full justify-between'>
                    <div className='flex flex-row justify-center items-center '>
                      <h3 className='text-blue-700 hover:text-sky-600 font-bold text-11 leading-14 cursor-pointer'>MORE STACK EXCHANGE COMMUNITIES</h3>
                    </div>
                    <div className='flex flex-row justify-center items-center px-6'>
                      <a className='ml-10 text-12 leading-15 text-blue-700 hover:text-sky-600'>company blog</a>
                    </div>
                  </div>
                  <div className="w-full flex flex-row items-center p-8 h-[47px]">
                    <div className="relative flex flex-row grow">
                      <input
                        className="py-8 px-32 text-12 font-400 placeholder-gray-300 leading-15 border border-gray-300 rounded-3 flex grow focus:outline-blue-400
                        focus:ring-4 focus:ring-blue-200 focus:border-transparent"
                        type="text"
                        placeholder="Find a Stack Exchange community"
                      />
                      <Icons.SvgSearch className="ml-8 mt-8 absolute text-gray-400" />
                    </div>
                  </div>
                  <ul>
                    <li className='group hover:bg-gray-50 pt-2 px-7 border-b-1 border-gray-150'>
                      <div className='flex flex-row p-8 cursor-pointer'>
                        <div className='mr-24'></div>
                        <div>
                          <a className='group-hover:text-sky-600 text-12 text-blue-700 leading-15'>3D Printing</a>
                          <p className='group-hover:text-zinc-500 text-gray-250 text-12 leading-15'>For 3D printing enthusiasts</p>
                        </div>                       
                      </div>
                    </li>
                    <li className='group hover:bg-gray-50 pt-2 px-7 border-b-1 border-gray-150'>
                      <div className='flex flex-row p-8 cursor-pointer'>
                        <div className='mr-24'></div>
                        <div>
                          <a className='group-hover:text-sky-600 text-12 text-blue-700 leading-15'>Ardunio</a>
                          <p className='group-hover:text-zinc-500 text-gray-250 text-12 leading-15'>For developers of open-source hardware and software that is compatible with Arduino</p>
                        </div>                       
                      </div>
                    </li>
                    <li className='group hover:bg-gray-50 pt-2 px-7 border-b-1 border-gray-150'>
                      <div className='flex flex-row p-8 cursor-pointer'>
                        <div className='mr-24'></div>
                        <div>
                          <a className='group-hover:text-sky-600 text-12 text-blue-700 leading-15'>Academia</a>
                          <p className='group-hover:text-zinc-500 text-gray-250 text-12 leading-15'>For academics and those enrolled in higher education</p>
                        </div>                       
                      </div>
                    </li>
                    <li className='group hover:bg-gray-50 pt-2 px-7 border-b-1 border-gray-150'>
                      <div className='flex flex-row p-8 cursor-pointer'>
                        <div className='mr-24'></div>
                        <div>
                          <a className='group-hover:text-sky-600 text-12 text-blue-700 leading-15'>Amateur Radio</a>
                          <p className='group-hover:text-zinc-500 text-gray-250 text-12 leading-15'>For amateur radio enthusiasts</p>
                        </div>                       
                      </div>
                    </li>
                    <li className='group hover:bg-gray-50 pt-2 px-7 border-b-1 border-gray-150'>
                      <div className='flex flex-row p-8 cursor-pointer'>
                        <div className='mr-24'></div>
                        <div>
                          <a className='group-hover:text-sky-600 text-12 text-blue-700 leading-15'>Android Enthusiasts</a>
                          <p className='group-hover:text-zinc-500 text-gray-250 text-12 leading-15'>For enthusiasts and power users of the Android operating system</p>
                        </div>                       
                      </div>
                    </li>
                    <li className='group hover:bg-gray-50 pt-2 px-7 border-b-1 border-gray-150'>
                      <div className='flex flex-row p-8 cursor-pointer'>
                        <div className='mr-24'></div>
                        <div>
                          <a className='group-hover:text-sky-600 text-12 text-blue-700 leading-15'>Anime & Manga</a>
                          <p className='group-hover:text-zinc-500 text-gray-250 text-12 leading-15'>For anime and manga fans</p>
                        </div>                       
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-row">
              <Link
                href="/users/sign_in"
                className="flex justify-center items-center border border-blue-400 bg-cyan-50 hover:bg-cyan-300 text-sky-700 hover:text-blue-350 text-13 font-400 w-[58.2px] h-[33px] shadow-bm rounded "
              >
                Log in
              </Link>
              <Link
                href="/users/sign_up"
                className="flex justify-center items-center border border-sky-600 hover:border-blue-700 ml-4 bg-sky-600 hover:bg-blue-700 text-white text-13 font-400 w-[66.88px] h-[33px] shadow-bs rounded text-center"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
