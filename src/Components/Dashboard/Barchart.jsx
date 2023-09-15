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
    <div className="laptop:min-w-[1000px] w-full h-auto bg-white p-4 sm:px-[40px] sm:py-[30px] rounded-[20px] border-2 border-color-[#E0E0E0] shadow-barchart">
      <div className="flex flex-col sm:flex-row w-full justify-between mb-4 ">
        <div className="">
          <h1 className="text-[18px] font-[700] font-mont">Harry Potter Movies</h1>
          <p className="text-[#858585] text-[14px] font-mont">In Million Dollars</p>
        </div>

        <div className="flex">
          <div className="flex items-center mr-[35px]">
            <div className="bg-[#98D89E] w-[10px] h-[10px] rounded-full mr-[10.47px]"></div>
            <p className="text-[14px] font-secondary">Budget</p>
          </div>
          <div className="flex items-center">
            <div className="bg-[#EE8484] w-[10px] h-[10px] rounded-full mr-[10.47px]"></div>
            <p className="text-[14px] font-secondary">Box Office</p>
          </div>
        </div>
      </div>
      <div className='w-full h-full overflow-x-scroll'>
      <Bar options={chartoptions} data={data} className="barchart" />
      </div>
    </div>
  );
}

export default Barchart