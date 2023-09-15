import { Images } from '@/Assets';
import Image from 'next/image';
import React from 'react'

const ProfileCard = ({setModelActive,data}) => {
    // console.log(data)
  return (
    <div className="w-full md:w-[95%] laptop:min-w-[480px] h-fit md:h-[300px] bg-white  p-4 lg:px-[40px] lg:py-[30px] rounded-[20px] border-2 border-color-[#E0E0E0] shadow-barchart">
      <div className="w-full h-full flex justify-center items-center">
        {data ? (
          <div className="flex flex-col py-6  xsm:py-[40px] xsm:px-[30px] md:p-6 xl:py-[48px] xl:px-[41px] w-full">
            <h1 className="font-primary capitalize text-[24px] font-[600] leading-[24px]">
              {data.name}
            </h1>
            <div className="grid lg:grid-cols-2 mt-8 lg:mt-[60px] lg:gap-y-[26px] gap-6 xl:gap-x-[50px] w-full">
              <div className="flex items-center w-full">
                <div className="w-[28px] h-[28px] pt-[5px] pr-[5px] pb-[6px] pl-[6px] flex justify-center items-center mr-[12px] bg-[#e9f9eb] rounded-full">
                  <Image
                    src={Images.whatsapp}
                    alt="whatsapp"
                    className="w-[17px] h-[17px]"
                  />
                </div>
                <p className="font-primary text-[#231F20] text-lg sm:text-[14px] underline leading-[24px] break-all">
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
                <p className="font-primary text-[#231F20] text-lg sm:text-[14px] underline leading-[24px] break-all">
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
                <p className="font-primary text-[#231F20] text-lg sm:text-[14px] underline leading-[24px] sm:w-[108px] break-all">
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
                <p className="font-primary text-[#231F20] text-lg sm:text-[14px] underline leading-[24px] break-all">
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
                alt="controls"
                className="w-[51.18px] h-[51.18px]"
              />
            </div>
            <p className="text-[#858585] text-[16px] font-[600] text-center mt-4 w-full font-primary">
              Add Profile
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard