import { Images } from '@/Assets'
import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    const SidebarOptions =[
        {
            icon: Images.dashboard,
            title:'Dashboard',
            active:true
        },
        {
            icon: Images.transaction,
            title:'Transactions',
            active:false
        },
        {
            icon: Images.schedule,
            title:'Schedules',
            active:false
        },
        {
            icon: Images.user,
            title:'Users',
            active:false,
        },
        {
            icon: Images.setting,
            title:'Settings',
            active:false,
        },
    ]
  return (
    <div className="h-auto lg:h-[944px] w-24 lg:w-[20%] laptop:min-w-[280px] bg-sidebar-gradient rounded-[20px]">
      <div className="w-full px-6 xl:px-0 xl:w-2/3 laptop:w-auto mx-auto laptop:m-0 flex flex-col justify-between py-7 lg:py-16 laptop:py-[60px] laptop:px-[50px] h-full">
        <div className="text-white flex flex-col gap-16">
          <h1 className="text-white font-[700] text-[36px] font-mont hidden lg:block">
            Board.
          </h1>
          <h1 className="text-white font-[700] text-[20px] font-mont lg:hidden">
            logo
          </h1>
          <div className="flex flex-col gap-8">
            {SidebarOptions.map((option, index) => (
              <div key={index} className="flex">
                <Image
                  src={option.icon}
                  alt="option"
                  className="w-2/3 m-auto lg:w-auto lg:m-0"
                />
                <p
                  className={`${
                    option.active && "font-[700]"
                  } text-[18px] ml-4 cursor-pointer font-mont hidden lg:block`}
                >
                  {option.title}
                </p>
              </div>
            ))}
            <Image
              src={Images.sidebarSearch}
              alt="searchicon"
              className="w-2/3 cursor-pointer m-auto xsm:hidden sm:hidden"
            />
            <Image
              src={Images.sidebarnoti}
              alt="bell"
              className="cursor-pointer w-2/3 m-auto xsm:hidden"
            />
          </div>
        </div>
        <div className="text-white flex flex-col gap-6 font-mont text-[14px]">
          <h6>Help</h6>
          <h6>Contact Us</h6>
        </div>
      </div>
    </div>
  );
}

export default Sidebar