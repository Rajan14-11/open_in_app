import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

let newdata =[]
const url = "https://openlibrary.org/subjects/love.json";
try {
  const response = await fetch(url);
  const result = await response.json();
  // console.log(result.works.map((work)=>work.first_publish_year))
  let less17 = result.works.filter((work)=>work.first_publish_year<1700)
  let less19 = result.works.filter(
    (work) => work.first_publish_year < 1900 && work.first_publish_year > 1700
  );
  let less20 = result.works.filter(
    (work) => work.first_publish_year < 2000 && work.first_publish_year > 1900
  );
  // console.log(less17,less19,less20)
  newdata.push(less17?.length)
  newdata.push(less19?.length)
  newdata.push(less20?.length)
  } catch (error) {
    console.log(error)
}

const total = newdata.reduce((acc,dat)=>acc+dat)
export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      //   label: "# of Votes",
      data: newdata,
      backgroundColor: [
        "#98D89E",
        "#F6DC7D",
        "#EE8484",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 0,
    },
  ],
};

const DoughnutChart = () => {

  return (
    <div className="w-[480px] h-[300px] bg-white px-[40px] py-[30px] rounded-[20px] border-2 border-color-[#E0E0E0] shadow-barchart">
      <div className="flex flex-col w-full justify-between mb-4 ">
        <div className="flex justify-between">
          <h1 className="text-[18px] font-[700]">Books Published</h1>
          <p className="text-[#858585] text-[14px]">1500-2000</p>
        </div>
        <div className="flex w-[450px] justify-between">
          <Doughnut data={data} className="chart" />
          <div className="flex flex-col w-[185px] justify-evenly">
            <div>
              <div className="flex">
                <div className="bg-[#98D89E] w-[10px] h-[10px] rounded-full mr-[10.47px] mt-[6px]"></div>
                <p className="text-[14px] flex flex-col">
                  Before 1700
                  <span className="text-[12px] text-[#858585]">
                    {(newdata[0] / total) * 100}%
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="bg-[#F6DC7D] w-[10px] h-[10px] rounded-full mr-[10.47px]  mt-[6px]"></div>
                <p className="text-[14px] flex flex-col">
                  Before 1900
                  <span className="text-[12px] text-[#858585]">
                    {(newdata[1] / total) * 100}%
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="bg-[#EE8484] flex flex-col w-[10px] h-[10px] rounded-full mr-[10.47px]  mt-[6px]"></div>
                <p className="text-[14px] flex flex-col">
                  Before 2100
                  <span className="text-[12px] text-[#858585]">
                    {(newdata[2] / total) * 100}%
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart