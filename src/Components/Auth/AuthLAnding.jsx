import { Images } from '@/Assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSession, signIn} from "next-auth/react";
import { useRouter } from 'next/navigation';

const AuthLAnding = () => {
    const socialIcons = [
        Images.discord,Images.gitHub,Images.linkedin, Images.twitter
      ]
    const [sidebar,setsidebar] = useState(false)
    const router =useRouter()
    const { data, status } = useSession();
    console.log(data)
    if (status === "loading") return <h1> loading... please wait</h1>;
    if(status==='authenticated')
    // redirect('/dashboard')
    router.push('/dashboard')


  return (
    <div className="flex laptop:w-[1440px] desktop:w-[100vw] md:h-screen flex-col md:flex-row justify-between bg-background overflow-y-hidden">
      <div className="w-full md:w-[40%] lg:w-1/2 relative h-full flex flex-col justify-between z-10 md:px-[73px] md:py-[60px] hidden md:flex">
        <h1 className="text-white text-2xl laptop:text-[24px] desktop:text-3xl laptop:font-[700] font-pop relative z-10">
          LOGO
        </h1>
        <div className="relative z-10 m-auto laptop:m-0 desktop:m-auto">
          <h1 className="text-white font-[700] text-5xl laptop:text-[72px] font-mont laptop:ml-[100px] desktop:ml-0">
            Board.
          </h1>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-4 z-10 w-full lg:w-2/3 mx-auto desktop:w-1/2 laptop:w-[299px] laptop:mx-0 laptop:ml-[71px] desktop:mx-auto">
          {socialIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt="icon"
              className="w-[42px] h-[41px] hover:scale-[1.1] ease-in cursor-pointer"
            />
          ))}
        </div>
        <div className="absolute top-0 bottom-0 left-0 right 0 w-full h-full">
          <Image
            src={Images.leftSide}
            alt="leftSide"
            className="w-full h-full object-fill"
          />
        </div>
      </div>

      <div className="bg-[#4285F4] flex w-full justify-between items-center h-20 py-4 px-8 md:hidden mb-6 ">
        <h1 className="text-white text-xl sm:text-2xl font-pop relative z-10">
          LOGO
        </h1>

        <div className="relative z-10 m-auto">
          <h1 className="text-white font-[700] text-3xl sm:text-4xl font-mont">
            Board.
          </h1>
        </div>

        <div className='w-8' onClick={() => setsidebar(!sidebar)}>
          {
            sidebar? <Image src={Images.close} alt="close"/>:
          <h1 className="text-white text-lg sm:text-xl cursor-pointer font-pop relative z-10">
            Links
          </h1>
          }
        </div>
        {sidebar && (
          <div className={`${sidebar?'translate-y-0':'translate-y-[100%]'} absolute right-0 left-0 bottom-0 h-20 bg-[#4285F4] w-full z-[100] m-auto flex items-center justify-center ease-out duration-[20000ms]`}>
            <div className="grid grid-cols-4 md:grid-cols-4 z-10 w-full mx-auto place-items-center">
              {socialIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  alt="icon"
                  className="w-[42px] h-[41px] hover:scale-[1.1] ease-in cursor-pointer"
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="w-full md:w-[60%] lg:w-1/2 h-[calc(100vh-8rem)] xl:h-auto z-10 mb-6 md:mb-0">
        <div className="h-full flex flex-col justify-center w-[80%] sm:w-2/3 lg:w-1/2 mx-auto">
          <h1 className="text-2xl md:text-3xl laptop:text-[36px] font-[700] font-mont ">
            Sign In
          </h1>
          <h3 className="text-[16px] font-secondary mt-[6px]">
            Sign in to your account
          </h3>

          <div className="flex gap-x-6 laptop:gap-x-0 desktop:gap-x-6 desktop:w-full w-full laptop:w-[423px] my-6 laptop:my-[28.5px] items-center justify-between">
            <button
              className="px-[20.86px] py-[8.78px] flex items-center bg-white rounded-[10px] laptop:w-[198px] laptop:h-[33px] desktop:w-full desktop:h-full"
              onClick={() => signIn("google")}
            >
              <Image src={Images.google} alt="google" />
              <p className="text-secondary text-[12px] font-mont ml-[11px]">
                Sign in with Google
              </p>
            </button>
            <button className="px-[20.86px] py-[8.78px] flex items-center bg-white rounded-[10px] laptop:w-[198px] laptop:h-[33px] desktop:w-full desktop:h-full">
              <Image src={Images.apple} alt="apple" />
              <p className="text-secondary text-[12px] font-mont ml-[11px]">
                Sign in with Apple
              </p>
            </button>
          </div>
          <div className="flex flex-col">
            <form
              action=""
              method="post"
              className="bg-white rounded-[20px] p-[33px] flex flex-col gap-4 laptop:gap-[22px] laptop:w-[423px] laptop:h-[348px] desktop:w-full "
            >
              <div className="w-full flex flex-col gap-2 laptop:gap-[11px]">
                <label htmlFor="email" className="font-secondary text-[16px]">
                  Email address
                </label>
                <input
                  type={"email"}
                  required
                  className="text-[16px] font-secondary rounded-[10px] bg-[#F5F5F5] px-4 py-2"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="font-secondary text-[16px]"
                >
                  Password
                </label>
                <input
                  type={"password"}
                  required
                  className="text-[16px] font-secondary rounded-[10px] bg-[#F5F5F5] px-4 py-2"
                />
              </div>
              <p className="text-link text-[16px] font-secondary cursor-pointer">
                Forgot password?
              </p>
              <button
                type="submit"
                className="bg-[#4285F4] font-mont text-[16px] font-[700] text-white rounded-[10px] w-full py-3"
              >
                Sign In
              </button>
            </form>

            <h3 className="w-full text-center text-secondary laptop:mt-[22px] text-[16px] font-secondary">
              Don’t have an account?{" "}
              <span className="text-link cursor-pointer">Register here</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLAnding