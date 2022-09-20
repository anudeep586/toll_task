import logo from './logo.svg';
import './App.css';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import React, { useState } from "react";
import { useEffect } from 'react';


function App() {
  const data2 = [
    { VEHICLE_TYPE: "Anom", VEHICLE_NUMBER: 19, DATE_TIME: "12/09/2022" ,TOLLNAME:"JDSAS",TARIFF:67},
    { VEHICLE_TYPE: "Anom", VEHICLE_NUMBER: 19, DATE_TIME: "12/09/2022" ,TOLLNAME:"JKAS",TARIFF:67},
    { VEHICLE_TYPE: "Anom", VEHICLE_NUMBER: 19, DATE_TIME: "12/09/2022" ,TOLLNAME:"JDSKA",TARIFF:67},
    { VEHICLE_TYPE: "Anom", VEHICLE_NUMBER: 19, DATE_TIME: "12/09/2022" ,TOLLNAME:"JDSKAS",TARIFF:67},
    { VEHICLE_TYPE: "Anom", VEHICLE_NUMBER: 19, DATE_TIME: "12/09/2022" ,TOLLNAME:"DSKAS",TARIFF:67},
    { VEHICLE_TYPE: "Anom", VEHICLE_NUMBER: 19, DATE_TIME: "12/09/2022" ,TOLLNAME:"JKAS",TARIFF:67}
  ]
  const data3={
    tollName:"ongole",
    HeavyVehicles:{
      single:12,
      return:45
    },
    FourVehicles:{
      single:43,
      return:56
    },
    LCV:{
      single:32,
      return:87
    },
    MOREFOUR:{
      single:23,
      return:9
    }
  }
  const [data,setDat]=useState(data2)
  const [data1,setData]=useState([data3])
  const [check,setCheck]=useState(false)
  const [selected,setSelected]=useState('All')

  return (
    <div className="App">
      <PageTitle>Toll List</PageTitle>
      <div className='Header'>
        <AppHeader data={data} setData={setData} data1={data1} setDat={setDat} check={check} setCheck={setCheck} selected={selected} setSelected={setSelected}/>
      </div>
    </div>
  );
}

export default App;
