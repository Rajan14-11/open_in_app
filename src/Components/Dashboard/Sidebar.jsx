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
    <div className='h-[944px] w-[280px] bg-sidebar-gradient rounded-[20px]'>
        <div className='w-1/2 mx-auto flex flex-col justify-between py-16 h-full'>
            <div className='text-white flex flex-col gap-16'>
                <h1 className='text-white font-bold text-4xl'>Board.</h1>
                <div className="flex flex-col gap-8">
                    {SidebarOptions.map((option,index)=>(
                    <div key={index} className='flex'>
                        <Image src={option.icon} alt="option" className=''/>
                        <p className={`${option.active && 'font-bold'} text-[18px] ml-4 cursor-pointer`}>{option.title}</p>
                    </div>
                    ))}
                </div>

            </div>
                <div className='text-white flex flex-col gap-6'>
                    <h6>Help</h6>
                    <h6>Contact Us</h6>
                </div>

        </div>
    </div>
  )
}

export default Sidebar