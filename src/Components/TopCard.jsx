import { Images } from '@/Assets'
import Image from 'next/image'
import React from 'react'

const TopCard = ({data}) => {
  return (
    <div className="w-[237.32px] h-[120px] rounded-xl bg-white drop-shadow-card px-[27px] py-[18.5px]">
      <div
        className={`w-[31.829px] h-[31.829px] rounded-full ${
          data?.title === "Total Revenue"
            ? "bg-[#7FCD93]"
            : data.title === "Total Transactions"
            ? "bg-[#DEBF85]"
            : data.title === "Total Likes"
            ? "bg-[#ECA4A4]"
            :data.title === "Total Users" && "bg-[#A9B0E5]"
        } flex items-center justify-center`}
      >
        <Image src={data.icon} alt="revenue" className="object-fit" />
      </div>
      <div className="flex flex-col mt-[7.36px] h-[44px]">
        <h6 className="text-[11px]"> {data.title}</h6>
        <div className="flex items-center justify-between ">
          <h1 className="font-bold text-[21px]">{data.value}</h1>

          <div className="flex justify-center items-center py-[4px] px-[8px] bg-[#E9F9EB] rounded-[34px] w-[47px] h-[24px]">
            <p className="text-[#3CC952] center text-[10px] font-semibold leading-[16px] reaming-[0.5px] uppercase">
              {data.change}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCard