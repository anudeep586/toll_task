import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';
const ListOfEntries = ({data,selected,setSelected,setDat}) => {
  const [toll,setToll]=useState('All')
  const handleChange=(value)=>{
      setSelected(value)
      setToll(value)
      setDat(data)
  }

  useEffect(()=>{
  },[data])
    var result = [];
    var seen=[];
    data.forEach(function(item) {
        if(!seen.includes(item.TOLLNAME)) {
            result.push(item);
            seen.push(item.TOLLNAME)
        }
    });
    console.log(result)
    
  
  return (
    <><div className='Filter'>
      <select id="select" value={selected} onChange={(e) => handleChange(e.target.value)} className="select_filter">
        <option>All</option>
        {result.map((val, key) => {
          return (
            <option>{val.TOLLNAME}</option>
          );
        })}
      </select>
    </div><div className="App">
        <table>
          <tr>
            <th>VEHICLE_TYPE</th>
            <th>VEHICLE_NUMBER</th>
            <th>DATE_TIME</th>
            <th>TOLLNAME</th>
            <th>TARIFF</th>
          </tr>
          {data.map((val, key) => {
            return (
              (selected === val.TOLLNAME || selected === "All") &&
              <tr key={key}>
                <td>{val?.VEHICLE_TYPE==='FourVehicles'?'CAR/BIKE':val?.VEHICLE_TYPE==="MOREFOUR"?"TRUCK/BUS":val?.VEHICLE_TYPE}</td>
                <td>{val.VEHICLE_NUMBER}</td>
                <td>{val.DATE_TIME}</td>
                <td>{val.TOLLNAME}</td>
                <td>{val.TARIFF}</td>
              </tr>
            );
          })}
        </table>
      </div></>
  )
}

export default ListOfEntries