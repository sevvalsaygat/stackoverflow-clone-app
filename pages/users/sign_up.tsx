import { AppLayout } from '@layouts';
import { Icons, Buttons } from '@components';
import ReCAPTCHA from 'react-google-recaptcha';

const SignUp = () => {
  return (
    <AppLayout hideFooter={true}>
      <div
        className="flex flex-col justify-center items-center w-full bg-gray-150"
        style={{
          height: 'calc(100vh - 50px)',
        }}
      >
        <div className="flex flex-row">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[421.33px] mr-[48px] mb-128">
              <h1 className="flex flex-row justify-between text-27 font-400 text-zinc-800 leading-27 mb-32px">
                Join the Stack Overflow <br /> community
              </h1>
              <div className="flex flex-row mb-24">
                <div>
                  <Icons.SvgQuestion className="text-sky-600 mr-8" />
                </div>
                <div className="text-15 text-zinc-800 leading-19.61">
                  Get unstuck — ask a question
                </div>
              </div>
              <div className="flex flex-row mb-24">
                <div>
                  <Icons.SvgArrow className="text-sky-600 mr-8" />
                </div>
                <div className="text-15 text-zinc-800 leading-19.61">
                  Unlock new privileges like voting and commenting
                </div>
              </div>
              <div className="flex flex-row mb-24">
                <div>
                  <Icons.SvgTag className="text-sky-600 mr-8" />
                </div>
                <div className="text-15 text-zinc-800 leading-19.61">
                  Save your favorite tags, filters, and jobs
                </div>
              </div>
              <div className="flex flex-row mb-24">
                <div>
                  <Icons.SvgCupWithStar className="text-sky-600 mr-8" />
                </div>
                <div className="text-15 text-zinc-800 leading-19.61">
                  Earn reputation and badges
                </div>
              </div>
              <div>
                <div className="text-gray-250 text-13 leading-17">
                  Collaborate and share knowledge with a private group for FREE.
                </div>
                <a
                  className="text-blue-700 text-13 leading-17 hover:text-sky-600"
                  href=""
                >
                  Get Stack Overflow for Teams free for up to 50 users.
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col mb-16">
              <div className="flex justify-center my-4">
                <Buttons.Omniauth
                  text="Sign up with Google"
                  className="border-gray-200 bg-white hover:bg-gray-100 text-neutral-700 flex justify-center items-center"
                >
                  <Icons.SvgGoogle className="h-18 w-18" />
                </Buttons.Omniauth>
              </div>
              <div className="flex justify-center my-4">
                <Buttons.Omniauth
                  text="Sign up with Github"
                  className=" border-gray-300 bg-neutral-800 hover:bg-neutral-900 text-white flex justify-center items-center"
                >
                  <Icons.SvgGithub className="h-18 w-18 text-white" />
                </Buttons.Omniauth>
              </div>
              <div className="flex justify-center my-4">
                <Buttons.Omniauth
                  text="Sign up with Facebook"
                  className="bg-blue-800 hover:bg-sky-800 text-white flex justify-center items-center"
                >
                  <Icons.SvgFacebook className="h-18 w-18 text-white" />
                </Buttons.Omniauth>
              </div>
            </div>

            <div className="w-[316px]">
              <div className="mx-auto shadow-xl p-24 mb-[24px] bg-white rounded-lg ">
                <form className="flex flex-col">
                  <div className="flex flex-col my-6">
                    <label className="m-2 cursor-pointer text-15 font-600 leading-19.61 text-neutral-800">
                      Display name
                    </label>
                    <div className="mt-2 flex">
                      <input className="w-full m-0 h-32.59 border-[1px] border-gray-300 rounded-3 bg-white"></input>
                    </div>
                  </div>
                  <div className="flex flex-col my-6">
                    <div className="flex flex-row justify-between">
                      <label className="m-2 cursor-pointer text-15 font-600 leading-19.61 text-neutral-800">
                        Email
                      </label>
                    </div>
                    <div className="mt-2 flex">
                      <input className="w-full m-0 h-32.59 border-[1px] border-gray-300 rounded-3 bg-white"></input>
                    </div>
                  </div>
                  <div className="flex flex-col my-6">
                    <label className="m-2 cursor-pointer text-15 font-600 leading-19.61 text-neutral-800">
                      Password
                    </label>
                    <div className="mt-2 flex">
                      <input className="w-full m-0 h-32.59 border-[1px] border-gray-300 rounded-3 bg-white"></input>
                    </div>
                    <p className="my-4 font-400 text-12 leading-15 text-gray-250">
                      Passwords must contain at least eight characters,
                      including at least 1 letter and 1 number.
                    </p>
                  </div>

                  <div className="flex flex-col my-6 pb-[2px] pt-2">
                    <div className="flex">
                      <div className="w-full h-[156px] m-0 border-[1px] border-gray-50 rounded-3 bg-gray-150">
                        <div className="flex justify-center items-center h-full">
                          <ReCAPTCHA
                            className="pt-6"
                            sitekey="6Lf_bTskAAAAAC1XtxLArz7UPCmSIXBRc3n3SSzP"
                            size="compact"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row mt-3">
                    <div className="flex mr-1 content-start">
                      <input type="checkbox" className="mt-0 h-13 w-13 mr-4" />
                    </div>
                    <div className="mb-6">
                      <p className="text-12 font-400 leading-15.6923 cursor-pointer text-neutral-900">
                        Opt-in to receive occasional product updates, user
                        research invitations, company announcements, and
                        digests.
                      </p>
                    </div>
                    <div>
                      <Icons.SvgHelp className="h-14 w-14 text-gray-250" />
                    </div>
                  </div>
                  <div className="flex">
                    <button className="my-6 border border-sky-600 hover:border-blue-700 bg-sky-600 hover:bg-blue-700 w-full h-37.78 rounded text-white text-[13px] font-400 leading-15 shadow-bs">
                      Sign up
                    </button>
                  </div>
                </form>
                <div className="mt-32">
                  <div className="text-12 font-400 leading-0.98 mt32 text-gray-250">
                    By clicking “Sign up”, you agree to our
                    <a className="text-blue-700 hover:text-sky-600" href="">
                      {' '}
                      terms of service
                    </a>
                    ,
                    <a className="text-blue-700 hover:text-sky-600" href="">
                      {' '}
                      privacy policy
                    </a>{' '}
                    and
                    <a className="text-blue-700 hover:text-sky-600" href="">
                      {' '}
                      cookie policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-4 mx-auto w-full">
              <div className="flex align-center justify-center gap-1 text-13 font-400 text-zinc-800 ">
                Already have an account?
                <a className="text-blue-700 text-13 cursor-pointer font-400 hover:text-sky-600">
                  {' '}
                  Log in
                </a>
              </div>
              <div className="flex align-center justify-center gap-1 text-13 font-400 text-zinc-800 mt-3">
                Are you an employer?
                <div className="flex flex-row gap-1 justify-center items-center">
                  <a className="text-blue-700 text-13 cursor-pointer font-400 hover:text-sky-600">
                    {' '}
                    Sign up on Talent
                  </a>
                  <div>
                    <Icons.SvgOpenLink className="h-14 w-14 text-blue-700 cursor-pointer hover:text-sky-600" />
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

export default SignUp;
