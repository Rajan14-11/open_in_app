'use client'
import React, { useState } from 'react'
import DashboardBody from './DashboardBody'
import Model from './Model'
import Sidebar from './Sidebar'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Landing = () => {
    const [modelActive, setModelActive] = useState(false);
    const [data, setData] = useState();
    const { status } = useSession();
    const router = useRouter();
    if (status === "loading") return <h1> loading... please wait</h1>;
    if (status !== "authenticated") router.push("/");


  return (
    <div className="px-[45px] py-[40px] flex w-[1440px] justify-between bg-background relative">
      <Sidebar />
      <DashboardBody modelActive={modelActive} setModelActive={setModelActive} data={data} />
      {
        modelActive &&
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <Model setModelActive={setModelActive} setData={setData} />
      </div>
      }
    </div>
  );
}

export default Landing