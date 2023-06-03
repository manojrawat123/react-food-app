import react, { useState , useEffect} from "react";
import { NavLink } from "react-router-dom";

const MobileDrop = () => {
    
  return (
    <>
      <div className="text-center">
      <NavLink to="/"><div className=" underline font-bold my-4">Home </div></NavLink>
      <NavLink to="/menu"> <div className=" underline  font-bold my-4">  Menu </div></NavLink>
      <NavLink to="/contact">  <div className=" underline font-bold my-4">Contact  </div></NavLink>
      <NavLink to="/about">  <div className=" underline font-bold my-4">   About  </div></NavLink>
            <br/> 
            <br/>
      {/* <div className="mr-8 relative">
        <input type="text" className="border-2 border-solid border-gray-700 pl-2 w-[20rem] h-[2rem] rounded" placeholder="Search"/> 
            </div>
             */}
    </div>
 

    </>
  )
}

export default MobileDrop
