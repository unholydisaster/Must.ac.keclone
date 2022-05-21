import Navbar from "../components/Navmeru"

import React from 'react';
import Head from "next/head";
import Calculation from "../components/Calculations";
import Nextcouresel from "../components/Couresel";




export default function Home(){
  return (
    <>
      <Head>
        <title>
          Home
        </title>
      </Head>
     <Navbar/>
     <Nextcouresel/>
    </>
  )
}


