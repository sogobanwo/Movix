import React from "react";
import tag from "../../ImageResources/Tag.png";
import item from "../../ImageResources/itemFruit.png";
import { FaHeart } from "react-icons/fa";

const MovieCardArrival = ({title, poster_path,genre_id, release_date, vote_average }) => {
  return (
    <div>
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
        alt=""
        height={"370px"}
        width={"250px"}
        className="rounded-md"
      />
      <p className="mt-4 font-DMSans font-bold text-lightGrey">
        {release_date}
      </p>
      <h3 className="font-bold font-DMSans text-xl">{title}</h3>
      <div className="flex justify-between items-center mt-2">
        <div className="flex space-x-2">
          <img src={tag} alt="" />
          <p className="font-DMSans font-normal">{vote_average}</p>
        </div>
        <div className="flex space-x-2">
          <img src={item} alt="" />
          <p className="font-DMSans font-normal">75%</p>
        </div>
      </div>
      <p className="mt-2 font-DMSans font-bold text-lightGrey"></p>
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

export default MovieCardArrival;
