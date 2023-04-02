import { Icons } from '@components';
import { useAuth } from '@hooks';
import Link from 'next/link';

type HeaderType = {
  hideHamburger?: boolean;
};

const Header = ({ hideHamburger }: HeaderType) => {
  const I18N_SCOPE = 'components.header';
  const { isAuthenticated } = useAuth();

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
              <div className="flex flex-row items-center justify-center px-10 hover:bg-gray-50 cursor-pointer text-zinc-500 hover:text-gray-800 h-[47px]">
                <Icons.SvgList className="w-18 h-18" />
              </div>
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
