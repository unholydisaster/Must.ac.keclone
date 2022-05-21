import axios from "axios"
import React, { useEffect, useState } from "react"

function Calculation(){
const [ip,setIp]=useState('')
const [lat1,setLat1]=useState('')
const [lat2,setLat2]=useState('')
const [lon1,setLon1]=useState('')
const [lon2,setLon2]=useState('')

const getData=async()=>{
    const res=await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIp(res.data.IPv4)
}

useEffect(()=>{
    getData()
},[])

return(
    <div>
        <h2>{ip}</h2>
        <h2>{lat1}</h2>
        <h2>{lon1}</h2>
    </div>
)
}

export default Calculation
  