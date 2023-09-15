import { Images } from "@/Assets";
import React from "react";
import TopCard from "../TopCard";
import Barchart from "./Barchart";
import DoughnutChart from "./DoughnutChart";
import Model from "./Model";
import ProfileCard from "./ProfileCard";
import Topbar from "./Topbar";

const DashboardBody = ({setModelActive,data}) => {
  const topcards = [
    {
      icon: Images.revenue,
      title: "Total Revenue",
      value: "$2,129,430",
      change: "+2.5%",
      color: "#7FCD93",
    },
    {
      icon: Images.txns,
      title: "Total Transactions",
      value: "1,520",
      change: "+1.7%",
      color: "#DEBF85",
    },
    {
      icon: Images.likes,
      title: "Total Likes",
      value: "9,721",
      change: "+1.4%",
      color: "#ECA4A4",
    },
    {
      icon: Images.users,
      title: "Total Users",
      value: "9,7210",
      change: "+4.2%",
      color: "#A9B0E5",
    },
  ];
  return (
    <div className="laptop:min-w-[1000px] lg:w-[75%] w-[calc(95%-6rem)] flex flex-col gap-y-6 mt-8 relative">
      <Topbar />
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 laptop:min-w-[1000px] w-[100%] gap-[17px] items-start">
        {topcards.map((card, index) => (
          <TopCard key={index} data={card} />
        ))}
      </div>
      <Barchart />

      <div className="flex flex-col md:flex-row justify-between w-full gap-x-4 gap-y-4 laptop:gap-x-0 desktop:gap-x-4">
        <DoughnutChart />
        <ProfileCard setModelActive={setModelActive} data={data} />
      </div>
    </div>
  );
};

export default DashboardBody;
