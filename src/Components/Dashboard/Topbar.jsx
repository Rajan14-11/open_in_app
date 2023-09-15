import { Images } from '@/Assets'
import Image from 'next/image'
import React from 'react'
import {signOut,useSession} from 'next-auth/react'

const Topbar = () => {
  const {data} = useSession()
  return (
    <div className="w-full h-[29px] flex justify-between items-center">
      <h1 className="text-xl sm:text-[24px] font-[700] font-mont">Dashboard</h1>

      <div className="flex items-center">
        <div className=" laptop:min-w-[197.596px] h-[32.933px] relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full px-[15px] py-[7px] rounded-[10px] bg-white text-[14px] text-[#B0B0B0] font-secondary"
          />
          <Image
            src={Images.searchIcon}
            alt="searchicon"
            className="absolute right-[22.6px] top-[9px] bottom-[11.93px] w-[12px] h-[12px]"
          />
        </div>
        <Image
          src={Images.searchIcon}
          alt="searchicon"
          className="w-[18px] h-[20.888px] mr-[13.82px] cursor-pointer hidden xsm:block sm:hidden"
        />
        <Image
          src={Images.noti}
          alt="bell"
          className="cursor-pointer w-[18px] h-[20.888px] ml-[13.79px] mr-[27.61px] hidden xsm:block"
        />
        <div
          onClick={() => signOut()}
          className="w-[30px] h-[30px] rounded-full cursor-pointer"
        >
          <Image
            src={data?.user?.image}
            alt="userImg"
            width={30}
            height={30}
            className="w-full h-full rounded-full object-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar