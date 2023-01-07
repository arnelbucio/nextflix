import Image from "next/image";
import NetflixLogo from "../../components/NetflixLogo";
import loginBg from "../../public/login-bg.jpg";

type Props = {};

function LoginPage({}: Props) {
  return (
    <div className='relative flex h-screen w-screen max-w-full flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <Image
        src={loginBg}
        alt='login background'
        className='-z-10 !hidden object-cover opacity-60 sm:!inline'
        fill={true}
      />

      <NetflixLogo
        height={25}
        fill={`rgb(229, 9, 20)`}
        className='absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6'
      />

      <form className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
        <h1 className='text-4xl font-semibold'>Sign in</h1>
        <div className='space-y-4'>
          <label className='inline-block w-full'>
            <input type='email' placeholder='Email' className='input' />
          </label>
          <label className='inline-block w-full'>
            <input type='password' placeholder='Password' className='input' />
          </label>
        </div>

        <button
          type='submit'
          className='w-full rounded bg-[#e50914] py-3 font-semibold'
        >
          Sign In
        </button>

        <div className='text-[gray]'>
          New to Netflix?{" "}
          <button className='text-white hover:underline'>Sign up now</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
