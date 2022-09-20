import React,{useEffect} from 'react'

const TollList = ({data1}) => {
    const cool="Car/Jeep/Van"
  return (
    <div className="App">
    <table>
      <tr>
        <th>TOLL NAME</th>
        <th>HEAVY VEHICLES</th>
        <th>LCV</th>
        <th>TRACK/BUS</th>
        <th>CAR/JEEP/VAN</th>
      </tr>
      {data1.map((val, key) => {
        return (
            <tr key={key}>
            <td>{val.tollName}</td>
            <td>{val.HeavyVehicles.single}/{val.HeavyVehicles.return}</td>
            <td>{val?.FourVehicles?.single}/{val?.FourVehicles?.return}</td>
            <td>{val?.LCV?.single}/{val?.LCV?.return}</td>
            <td>{val.MOREFOUR?.single}/{val.MOREFOUR?.return}</td>
          </tr>
        
        )
      })}
    </table>
    </div>
  )
}

export default TollList