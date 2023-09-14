import { Images } from '@/Assets';
import Image from 'next/image';
import React from 'react'

const ProfileCard = ({setModelActive,data}) => {
    // console.log(data)
  return (
    <div className="w-[480px] h-[300px] bg-white px-[40px] py-[30px] rounded-[20px] border-2 border-color-[#E0E0E0] shadow-barchart">
      <div className="w-full h-full flex justify-center items-center">
        {data ? (
          <div className="flex flex-col py-[48px] px-[41px]">
            <h1 className="capitalize text-[24px] font-[600] leading-[24px]">
              {data.name}
            </h1>
            <div className="grid grid-cols-2 mt-[60px] gap-y-[26px] gap-x-[50px]">
              <div className="flex items-center w-full">
                <div className="w-[28px] h-[28px] pt-[5px] pr-[5px] pb-[6px] pl-[6px] flex justify-center items-center mr-[12px] bg-[#e9f9eb] rounded-full">
                  <Image
                    src={Images.whatsapp}
                    alt="whatsapp"
                    className="w-[17px] h-[17px]"
                  />
                </div>
                <p className="text-[#231F20] text-[14px] underline leading-[24px]">
                  {data.number}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[28px] h-[28px] pt-[5px] pr-[5px] pb-[6px] pl-[6px] flex justify-center items-center mr-[12px] bg-[#FFE9E9] rounded-full">
                  <Image
                    src={Images.instagram}
                    alt="instagram"
                    className="w-[17px] h-[17px]"
                  />
                </div>
                <p className="text-[#231F20] text-[14px] underline leading-[24px]">
                  {data.insta}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[28px] h-[28px] pt-[5px] pr-[5px] pb-[6px] pl-[6px] flex justify-center items-center mr-[12px] bg-[#ebe6f9] rounded-full">
                  <Image
                    src={Images.mail}
                    alt="mail"
                    className="w-[17px] h-[17px]"
                  />
                </div>
                <p className="text-[#231F20] text-[14px] underline leading-[24px] w-[108px] break-all">
                  {data.email}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[28px] h-[28px] pt-[5px] pr-[5px] pb-[6px] pl-[6px] flex justify-center items-center mr-[12px] bg-[#FFE9E9] rounded-full">
                  <Image
                    src={Images.twitterIcon}
                    alt="twitter"
                    className="w-[17px] h-[17px]"
                  />
                </div>
                <p className="text-[#231F20] text-[14px] underline leading-[24px]">
                  {data.yt}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[82px] h-[117px] flex flex-col justify-between">
            <div
              onClick={() => setModelActive(true)}
              className="w-[76.78px] h-[76.78px] rounded-full bg-[#F5F5F5] flex justify-center items-center cursor-pointer"
            >
              <Image
                src={Images.controls}
                alt='controls'
                className="w-[51.18px] h-[51.18px]"
              />
            </div>
            <p className="text-[#858585] text-[16px] font-[600]">Add Profile</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard