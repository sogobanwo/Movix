import React from "react";
import Navbar from "./Navbar";
import item from "../../ImageResources/itemFruit.png";
import tag from "../../ImageResources/Tag.png";
import preview from "../../ImageResources/preview.png";
const HeroSection = () => {
  return (
    <div className="bg-center bg-cover sogo">
      <Navbar />
      <div className="mt-6 text-white mx-[7.5%] pb-4 mb-4 md:w-[60%] md:pt-8 md:pb-16 lg:w-[35%] lg:pt-16 lg:pb-24">
        <h1 className="font-bold font-DMSans text-3xl mb-4 lg:text-5xl">John Wick 3: Parabellum</h1>
        <div className="flex space-x-8 mb-4 items-center">
          <div className="flex space-x-2 items-center">
            <img src={tag} alt="" />
            <p className="font-DMSans">86.0/100</p>
          </div>
          <div className="flex space-x-2 items-center">
            <img src={item} alt="" />
            <p className="font-DMSans">97%</p>
          </div>
        </div>
        <p className="font-DMSans mb-4 lg:text-xl">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="flex font-DMSans font-bold items-center bg-darkRed p-2 rounded-md space-x-2 lg:text-xl">
          <img src={preview} alt="" />
          <p>WATCH TRAILER</p>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
