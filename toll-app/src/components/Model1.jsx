import React, { useEffect, useState } from "react";
import ListOfEntries from "./ListOfEntries";
import "./Model1.css";

export default function Modal1({ data1, data,setDat,setSelected }) {
  const [modal, setModal] = useState(false);
  const [vehicle, setVehicle] = useState("");

  const [tollName, settollName] = useState(data1[0]?.tollName);
  const [vehicleType, setvehicleType] = useState("HeavyVehicles");
  const [price, setPrice] = useState(data1[0]?.HeavyVehicles?.single);
  const [gre,setGre]=useState(false)

  const handleOnChange = (value) => {
    settollName(value)
    console.log(value)
    let pre;
    data1.find((v,key)=>{
        if(v.tollName===value){
            console.log(v.tollName,value)
            pre=v[vehicleType].single
        }
    })
    setPrice(pre)
  };
  const handleOnVehicleType=(value)=>{
    setvehicleType(value)
    console.log(value)
    let pre;
    data1.find((v,key)=>{
        if(v.tollName===tollName){
            console.log(v,tollName,value,v[vehicleType],value)
            pre=v[vehicleType].single
        }
    })
    setPrice(pre)
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const Submit = (e) => {
    e.preventDefault();
    data.push({ VEHICLE_TYPE: vehicleType, VEHICLE_NUMBER: vehicle, DATE_TIME: "Male" ,TOLLNAME:tollName,TARIFF:price},)
    setDat(data)
    setGre(!gre)
    setSelected("All")
    toggleModal()
  };
  useEffect(()=>{
  },[])

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Add New Entry
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add New Toll</h2>
            <form onSubmit={Submit}>
              <div
                className="container"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div>
                  <label>select toll Name</label>
                  <select onChange={(e) => handleOnChange(e.target.value)}>
                    {console.log(data1)}
                    {data1.map((val, key) => {
                      return <option>{val.tollName}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <label>select vehicle Type</label>
                  <select onChange={(e) => handleOnVehicleType(e.target.value)}>
                    <option value="Heavyvehicles">Heavyvehicles</option>
                    <option value="FourVehicles">Car/Jeep/Van</option>
                    <option value="LCV">LCV</option>
                    <option value="MOREFOUR">Truck/Bus</option>

                  </select>
                </div>
                <div>
                  <label> Vehicle Number</label>
                  <input type="text" placeholder="vehicle number" required onChange={(e)=>setVehicle(e.target.value)}></input>
                </div>
                <div>
                  <label> price</label>
                  <input type="number" value={price}></input>
                </div>
                <button type="submit">Submit</button>
              </div>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
