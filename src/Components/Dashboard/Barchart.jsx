'use client'
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {Bar}  from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const url = "https://api.potterdb.com/v1/movies";
const options = {
  method: "GET",
};
let budget =[]
let box_office=[]
let names=[]
try {
  const response = await fetch(url, options);
  const result = await response.json();
  budget = await result.data?.map((bud,index)=>(
      bud.attributes.budget.substring(1,4)
      )
  )

box_office = await result.data.map((collection)=>collection.attributes.box_office.split(' ')[0].substring(1))

names = await result.data.map((name)=>name.attributes.release_date)
  // console.log(result,budget,box_office)
} catch (error) {
  console.error(error);
}

const labels = names;

export const chartoptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'topLeft',
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Budget",
      data: budget,
      backgroundColor: "#98D89E",
    },
    {
      label: "Box Office",
      data: box_office,
      backgroundColor: "#EE8484",
    },
  ],
};

const Barchart = () => {
  return (
    <div className="w-[1000px] h-auto bg-white px-[40px] py-[30px] rounded-[20px] border-2 border-color-[#E0E0E0] shadow-barchart">
      <div className="flex w-full justify-between mb-4 ">
        <div className="">
          <h1 className="text-[18px] font-[700]">Harry Potter Movies</h1>
          <p className="text-[#858585] text-[14px]">In Million Dollars</p>
        </div>

        <div className="flex">
          <div className="flex items-center mr-[35px]">
            <div className="bg-[#98D89E] w-[10px] h-[10px] rounded-full mr-[10.47px]"></div>
            <p className="text-[14px]">Budget</p>
          </div>
          <div className="flex items-center">
            <div className="bg-[#EE8484] w-[10px] h-[10px] rounded-full mr-[10.47px]"></div>
            <p className="text-[14px]">Box Office</p>
          </div>
        </div>
      </div>

      <Bar options={chartoptions} data={data} className="barchart" />
    </div>
  );
}

export default Barchart