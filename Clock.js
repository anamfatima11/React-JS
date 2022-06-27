

import React, { useState } from "react";

 export default function Clock(){
    let time = new Date().toLocaleString()
    const[ClockTime,updateTime]= useState (time)
    setInterval(() => {
        updateTime(new Date().toLocaleString())
    },1000)
return(
    <h1> This is the current time {ClockTime} </h1>
)
    
}