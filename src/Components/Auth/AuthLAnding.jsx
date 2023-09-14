import { Images } from '@/Assets'
import Image from 'next/image'
import React from 'react'
import { useSession, signIn} from "next-auth/react";
import { useRouter } from 'next/router';

const AuthLAnding = () => {
    const socialIcons = [
        Images.discord,Images.gitHub,Images.linkedin, Images.twitter
    ]
    const router =useRouter()
    const { data, status } = useSession();
    console.log(data)
    if (status === "loading") return <h1> loading... please wait</h1>;
    if(status==='authenticated')
    // redirect('/dashboard')
    router.push('/dashboard')

  return (
    <div className="flex w-[100vw] h-screen justify-between bg-background">
      <div className="w-1/2 relative h-full flex flex-col justify-between z-10 pb-4">
        <h1 className="text-white text-2xl font-bold relative z-10 p-6">LOGO</h1>
        <div className="relative z-10 flex items-center justify-center">
          <h1 className="text-white font-bold text-5xl text-center">BOARD</h1>
        </div>

        <div className="grid grid-cols-4 md:grid-cold-4 z-10 w-1/2 mx-auto">
          {socialIcons.map((icon, index) => (
            <Image key={index} src={icon} alt="icon" className="w-[50px] h-[48px]" />
          ))}
        </div>
        <div className="absolute top-0 bottom-0 left-0 right 0 w-full h-full">
          <Image
            src={Images.leftSide}
            alt="leftSide"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-1/2 h-full z-10">
        <div className="h-full flex flex-col justify-center w-1/2 mx-auto">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <h3 className="text-base">Sign in to your account</h3>

          <div className="flex w-full my-6 items-center justify-between">
            <button className="px-4 py-2 flex items-center bg-white rounded-[10px]" onClick={()=>signIn('google')}>
              <Image src={Images.google} alt='google' />
              <p className="text-secondary text-sm ml-4">Sign in with Google</p>
            </button>
            <button className="px-4 py-2 flex items-center bg-white rounded-[10px]">
              <Image src={Images.apple} alt='apple' />
              <p className="text-secondary text-sm ml-4">Sign in with Apple</p>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <form
              action=""
              method="post"
              className="bg-white rounded-[20px] py-8 px-6 flex flex-col gap-4"
            >
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="email" className="">
                  Email address
                </label>
                <input
                  type={"email"}
                  required
                  className="rounded-[10px] bg-[#F5F5F5] px-4 py-2"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input
                  type={"password"}
                  required
                  className="rounded-[10px] bg-[#F5F5F5] px-4 py-2"
                />
              </div>
              <p className="text-link cursor-pointer">Forgot password?</p>
              <button
                type="submit"
                className="bg-[#4285F4] rounded-[10px] w-full py-3"
              >
                Sign In
              </button>
            </form>

            <h3 className='w-full text-center text-secondary'>
              Don’t have an account? <span className='text-link cursor-pointer'>Register here</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLAnding