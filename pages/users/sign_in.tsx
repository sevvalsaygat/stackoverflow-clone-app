import { AppLayout } from '@layouts';
import { Icons, Buttons } from '@components';
import { Api, useAuth } from '@hooks';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const SignIn = () => {
  const { setUser } = useAuth();

  const { mutate } = Api.Authentication.useLogin({
    onSuccess: (data: any) => {
      console.log(data);

      setUser(data);
      setTimeout(() => {
        router.push('/top_questions');
      }, 500)
    },
    onError: () => {},
  });

  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <AppLayout hideFooter={true}>
      <div
        className="flex flex-col justify-center items-center w-full bg-gray-150"
        style={{
          height: 'calc(100vh - 50px)',
        }}
      >
        <div className="flex mx-auto justify-center align-center p-6">
          <div className="w-80">
            <div className="flex flex-col justify-center align-center ">
              <div className="flex justify-center">
                <Icons.SvgLogoSmall className="h-37 w-36 mb-24" />
              </div>
              <div className="flex flex-col mb-8">
                <div className="flex justify-center mb-8">
                  <Buttons.Omniauth
                    text="Log in with Google"
                    className="border-gray-200 bg-white hover:bg-gray-100 text-neutral-700 flex justify-center items-center"
                  >
                    <Icons.SvgGoogle className="h-18 w-18" />
                  </Buttons.Omniauth>
                </div>
                <div className="flex justify-center mb-8">
                  <Buttons.Omniauth
                    text="Log in with Github"
                    className=" border-gray-300 bg-neutral-800 hover:bg-neutral-900 text-white flex justify-center items-center"
                  >
                    <Icons.SvgGithub className="h-18 w-18 text-white" />
                  </Buttons.Omniauth>
                </div>
                <div className="flex justify-center mb-8">
                  <Buttons.Omniauth
                    text="Log in with Facebook"
                    className="bg-blue-800 hover:bg-sky-800 text-white flex justify-center items-center"
                  >
                    <Icons.SvgFacebook className="h-18 w-18 text-white" />
                  </Buttons.Omniauth>
                </div>
              </div>
              <div className="shadow-xl bg-white p-24 mb-[24px] rounded-lg max-w-[316px] max-h-[234.19px]">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col"
                >
                  <div className="flex flex-col">
                    <label className="m-1 cursor-pointer text-15 font-600 leading-19.61 text-neutral-800">
                      Email
                    </label>
                    <div className="m-2 flex">
                      <input
                        {...register('email')}
                        className="w-full m-0 h-32.59 border-[1px] rounded-sm bg-white"
                      ></input>
                    </div>
                  </div>
                  <div className="flex flex-col mt-3">
                    <div className="flex flex-row justify-between">
                      <label className="m-1 cursor-pointer text-15 font-600 leading-19.61 text-neutral-800">
                        Password
                      </label>
                      <a className="flex justify-center items-center text-blue-700 hover:text-sky-600 cursor-pointer text-12 font-400">
                        Forgot password?
                      </a>
                    </div>
                    <div className="m-2 flex">
                      <input
                        type="password"
                        {...register('password')}
                        className="w-full m-0 h-32.59 border-[1px] rounded-sm bg-white"
                      ></input>
                    </div>
                  </div>
                  <div className="flex mt-3">
                    <button
                      type="submit"
                      className="border border-sky-600 hover:border-blue-700 bg-sky-600 hover:bg-blue-700 w-full h-37.78 rounded text-white text-[13px] font-400 leading-15 shadow-bs"
                    >
                      Log in
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col p-4 mx-auto w-full">
                <div className="flex align-center justify-center gap-1 text-13 font-400 text-zinc-800 ">
                  Don&apos;t have an account?
                  <a className="text-blue-700 text-13 cursor-pointer font-400 hover:text-sky-600">
                    {' '}
                    Sign up
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
      </div>
    </AppLayout>
  );
};

export default SignIn;
