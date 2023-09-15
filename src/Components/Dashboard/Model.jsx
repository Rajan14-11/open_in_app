import { Images } from '@/Assets';
import Image from 'next/image';
import React, { useState } from 'react'

const Model = ({setModelActive,setData}) => {
    const [basicActive,setBasicActive] =useState(true)
    const [socialActive,setSocialActive] =useState(false)
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [number,setNumber] =useState('')
    const [insta,setInsta] =useState('')
    const [yt,setYt] =useState('')



    // let data= {}

    const handleSubmit =()=>{
        if(basicActive) {setSocialActive(true);setBasicActive(false)}
        else{
            if(name.length<5) alert('Name should be of 5 letters atleast.')
           else if(!email.includes("@")) alert('Enter valid email')
           else if(number.length<10) alert('Enter valid Mobile Number')
            setData({
                name,email,number,insta,yt
            })

            setModelActive(false);

        }
    }
  return (
    // <div className="w-full h-full ">
    <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
      <div
        className={`w-[95%] xsm:w-4/5 sm:w-[544px] ${
          basicActive ? "h-[553px]" : "h-[463px]"
        } rounded-[16px] bg-white shadow-model pt-[16px] flex flex-col justify-between items-center`}
      >
        <div className="w-full px-[24px] flex justify-between mb-[15px]">
          <h1 className="w-[252px] text-[20px] text-[#231F20] font-[600] leading-[32px] ">
            Add New Profile
          </h1>
          <Image src={Images.cross} alt="cross" width={24} height={24} onClick={()=>setModelActive(false)} />
        </div>
        <div
          className={`flex flex-col gap-[24px] p-[24px] ${
            basicActive ? "h-[400px]" : "h-[312px]"
          } w-full border-y-[1px] border-y-color-[#F2F2F2]`}
        >
          <div className="h-[40px] w-full flex justify-between">
            <div
              onClick={() => {
                setBasicActive(true);
                setSocialActive(false);
              }}
              className="w-[213px] flex flex-col items-center justify-between cursor-pointer"
            >
              <p className="text-[16px] font-[600] leading-[24px] text-[#231F20]">
                Basic
              </p>
              <div
                className={`w-full h-[4px] ${
                  basicActive ? "bg-[#3F84F8]" : "bg-[#D9D9D9]"
                } rounded-[30px]`}
              ></div>
            </div>
            <div
              onClick={() => {
                setBasicActive(false);
                setSocialActive(true);
              }}
              className="w-[213px] flex flex-col items-center justify-between cursor-pointer"
            >
              <p className="text-[16px] font-[600] leading-[24px] text-[#231F20]">
                Contact
              </p>
              <div
                className={`w-full h-[4px] ${
                  socialActive ? "bg-[#3F84F8]" : "bg-[#D9D9D9]"
                } rounded-[30px]`}
              ></div>
            </div>
          </div>
          {basicActive && (
            <>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-[#231F20] text-[16px] leading-[24px]"
                >
                  Enter Name*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Eg. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-[16px] py-[12px] text-[#999CA0] text-[16px] rounded-[8px] border-[1px] border-color-[#F2F2F2] bg-white mt-[8px]"
                />
              </div>
              <div className="flex flex-col relative">
                <label
                  htmlFor="email"
                  className="text-[#231F20] text-[16px] leading-[24px]"
                >
                  Enter Email*
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Eg. John@xyz.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative px-[16px] py-[12px] text-[#999CA0] text-[16px] rounded-[8px] border-[1px] border-color-[#F2F2F2] bg-white mt-[8px]"
                />
                <div className="w-[24px] h-[24px] rounded-[8px] p-[4px] hover:bg-[#F5F5F5] absolute right-[12px] top-[44px] bottom-0">
                  <Image src={Images.dropdown} alt="dropdown" className="" />
                </div>
              </div>
              <div className="flex flex-col relative">
                <label
                  htmlFor="name"
                  className="text-[#231F20] text-[16px] leading-[24px]"
                >
                  Enter Phone*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Eg.  9123456789"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="px-[16px] py-[12px] text-[#999CA0] text-[16px] rounded-[8px] border-[1px] border-color-[#F2F2F2] bg-white mt-[8px]"
                />
                <div className="w-[24px] h-[24px] rounded-[8px] p-[4px] hover:bg-[#F5F5F5] absolute right-[12px] top-[44px] bottom-0">
                  <Image src={Images.dropdown} alt="dropdown" className="" />
                </div>
              </div>
            </>
          )}
          {socialActive && (
            <>
              <div className="flex flex-col">
                <label
                  htmlFor="insta"
                  className="text-[#231F20] text-[16px] leading-[24px]"
                >
                  Instagram Link (Optional)
                </label>
                <input
                  type="text"
                  name="insta"
                  placeholder="Eg. ..instagram.com/username"
                  value={insta}
                  onChange={(e) => setInsta(e.target.value)}
                  className="px-[16px] py-[12px] text-[#999CA0] text-[16px] rounded-[8px] border-[1px] border-color-[#F2F2F2] bg-white mt-[8px]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="yt"
                  className="text-[#231F20] text-[16px] leading-[24px]"
                >
                  Youtube Link (Optional)
                </label>
                <input
                  type="text"
                  name="yt"
                  placeholder="Eg. ..youtube/username"
                  value={yt}
                  onChange={(e) => setYt(e.target.value)}
                  className="px-[16px] py-[12px] text-[#999CA0] text-[16px] rounded-[8px] border-[1px] border-color-[#F2F2F2] bg-white mt-[8px]"
                />
              </div>
            </>
          )}
        </div>
        <div className="w-full h-[88px] py-[24px]">
          <div className="px-[24px] flex justify-end w-full h-[40px]">
            <button className="bg-[#3E84F8] rounded-[8px] py-[8px] px-[16px] font-[600] text-white text-[14px] leading-[24px] hidden"></button>
            <div className="flex gap-[8px] items-center">
              <button
               onClick={()=>{
                setSocialActive(false);
                setBasicActive(true)
               }}
                className={`border-[1px] border-color-[#999CA0] rounded-[8px] py-[8px] px-[16px] font-[600] text-[#231F20] text-[14px] leading-[24px] ${
                  basicActive && "hidden"
                }`}
              >
                Back
              </button>
              <button
                className="bg-[#3E84F8] rounded-[8px] py-[8px] px-[16px] font-[600] text-white text-[14px] leading-[24px]"
                onClick={handleSubmit}
              >
                {socialActive ? "Done" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Model