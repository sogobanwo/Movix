import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import Movix from "../ImageResources/tv.png"
const Navbar = () => {
  return (
    <div className="pt-6 mx-[7.5%] flex justify-between items-center">
      <div className="flex space-x-4 items-center">
        <img src={Movix} alt="movixTv" width={40} height={40} />
        <h3 className="font-bold font-DMSans text-.5xl text-white md:text-2xl">Movix</h3>
      </div>
      <div className="w-[40%] hidden md:block">
      <input type="text" placeholder="What do you want to watch?" className=" border border-white rounded-md p-1 md:flex bg-transparent w-[100%]"/>
      <div className="relative left-[93%] -mt-7 mb-3"><FaSearch size={20} color={"lightgrey"}/></div>
      </div>
      <div className="flex space-x-4 items-center">
        <h3 className="font-bold font-DMSans text-.5xl text-white md:text-2xl">Hi, Sogo</h3>
        <div className="bg-darkRed text-white p-2 rounded-full">
        <FaBars size={20}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;