import Landing from '@/Components/Dashboard/Landing'
import React from 'react'
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/router';

const dashboard = () => {
   const { data, status } = useSession();
   const router = useRouter()
   if (status === "loading") return <h1> loading... please wait</h1>;
   if (status !== "authenticated") router.push("/");
  return (
    <Landing/>
  )
}

export default dashboard