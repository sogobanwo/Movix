import React from "react";
import Dune from "../ImageResources/MoivePics.png";
import tag from "../ImageResources/Tag.png";
import item from "../ImageResources/itemFruit.png";
import { FaHeart } from "react-icons/fa";

const MovieCard = () => {
  return (
    <div>
      <img
        src={Dune}
        alt=""
        height={"370px"}
        width={"250px"}
        className="rounded-md"
      />
      <p className="mt-4 font-DMSans font-bold text-lightGrey">
        USA, 2016 - Current
      </p>
      <h3 className="font-bold font-DMSans text-xl">No Time To Die</h3>
      <div className="flex justify-between items-center mt-2">
        <div className="flex space-x-2">
          <img src={tag} alt="" />
          <p className="font-DMSans font-normal">84.0/100</p>
        </div>
        <div className="flex space-x-2">
          <img src={item} alt="" />
          <p className="font-DMSans font-normal">75%</p>
        </div>
      </div>
      <p className="mt-2 font-DMSans font-bold text-lightGrey">Action, Drama</p>
      <div className="flex justify-between absolute top-0 p-2 w-[5%] md:w-[4.3%]">
        <p className="bg-absBack p-2 rounded-full text-[10px] font-DMSans font-bold">
          TV SERIES
        </p>
        <div className="bg-absBack text-white p-2 rounded-full">
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
