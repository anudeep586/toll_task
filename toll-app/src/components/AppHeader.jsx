import React from "react";
import { useState } from "react";
import Model from "./Model";
import Model1 from "./Model1";
import TollList from "./TollList";
import ListOfEntries from "./ListOfEntries";

const AppHeader = ({data,setData,data1,setDat,check,setCheck,selected,setSelected}) => {
  const [var1,setVar]=useState('view Item')
  const [check1,setCheck1]=useState(false)
  const [var2,setVar2]=useState('view Entry List')
  const onChange=(value)=>{
    if(value==="Go Back"){
      setVar("view toll list")
    }
    else{
      setVar("Go Back")
    }
    setCheck(!check)
  }
  const onChange1=(value)=>{
    if(value==="Go Back"){
      setVar2("view Entry list")
    }
    else{
      setVar2("Go Back")
    }
    setCheck1(!check1)
  }
  return (
    <>
      <div>
        <button onClick={(e)=>onChange(e.target.value)} value={var1}>{var1}</button>
        <button onClick={(e)=>onChange1(e.target.value)} value={var2}>{var2}</button>
        <div className="phale" style={{display:"flex"}}>
        <Model1 data={data} data1={data1} setDat={setDat} setSelected={setSelected}/>
        <Model data={data} setData={setData} data1={data1}/>
        </div>
    {check1 &&   <ListOfEntries data={data} setDat={setDat} selected={selected} setSelected={setSelected}/>}
      {check &&  <TollList data1={data1}/>}
      </div>
    </>
  );
};

export default AppHeader;
