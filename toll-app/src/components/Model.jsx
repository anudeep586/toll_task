import React, { useState } from "react";
import "./Model.css";

export default function Modal({setData,data1}) {
  const [set1r,set1]=useState('')
  const [setmainr,setmain]=useState('')
  const [set1s,set2]=useState('')
  const [set2r,set3]=useState('')
  const [set2s,set4]=useState('')
  const [set3r,set5]=useState('')
  const [set3s,set6]=useState('')
  const [set4r,set7]=useState('')
  const [set4s,set8]=useState('')

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const Submit=(e)=>{
    e.preventDefault()
   const data2={
      tollName:setmainr,
      HeavyVehicles:{
        single:set1s,
        return:set1r
      },
      FourVehicles:{
        single:set2s,
        return:set2r
      },
      LCV:{
        single:set3s,
        return:set3r
      },
      MOREFOUR:{
        single:set4s,
        return:set4r
      }
    }
    data1.push(data2)
    setData(data1)
    toggleModal()
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Add New TollData
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add New Toll</h2>
            <form onSubmit={Submit}>
                <div className="main" style={{display:"flex",flexDirection:"column"}}>
                <input type="text" placeholder="Enter Toll name" required onChange={(e)=>{
                  setmain(e.target.value)
                }} value={setmainr}></input>
                <div className="Type">
                    <label>Heavy vehicles</label>
                    <input type="number" placeholder="return journey" onChange={(e)=>{
                      set1(e.target.value)
                    }} required value={set1r}/>
                    <input type="number" placeholder="Single journey"onChange={(e)=>{
                      set2(e.target.value)
                    }} required value={set1s}/>
                </div>
                <div className="Type">
                    <label>Car/Jeep/Van</label>
                    <input type="number" placeholder="return journey"onChange={(e)=>{
                      set3(e.target.value)
                    }} required value={set2r}/>
                    <input type="number" placeholder="Single journey"onChange={(e)=>{
                      set4(e.target.value)
                    }} required value={set2s}/>
                </div>
                <div className="Type">
                    <label>LCV</label>
                    <input type="number" placeholder="return journey" required onChange={(e)=>{
                      set5(e.target.value)
                    }} value={set3r}/>
                    <input type="number" placeholder="Single journey" required onChange={(e)=>{
                      set6(e.target.value)
                    }} value={set3s}/>
                </div>
                <div className="Type">
                    <label>Truck/Bus</label>
                    <input type="number" placeholder="return journey" onChange={(e)=>{
                      set7(e.target.value)
                    }} required value={set4r}/>
                    <input type="number" placeholder="Single journey" onChange={(e)=>{
                      set8(e.target.value)
                    }} required value={set4s}/>
                </div>
                </div>
                <button type="submit">Submit</button>
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