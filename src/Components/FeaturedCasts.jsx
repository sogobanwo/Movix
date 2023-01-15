import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import john from "../ImageResources/Keanu-reaves.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FeaturedCasts = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <> 
      <div className="flex justify-between mx-[7.5%] items-center">
        <h1 className="text-2xl font-bold font-DMSans md:text-4xl">Featured Cast</h1>
        <button className="flex space-x-4 font-DMSans text-darkRed items-center">See more <span className="ml-2"><FaChevronRight/></span></button>
      </div>
      <div className="mx-[5%] mb-8 mt-8">
        <Slider
          {...settings}
          className="mx-8"
          prevArrow={<FaChevronLeft color="black" size={30} />}
          nextArrow={<FaChevronRight color="black" size={30} />}
        >
          <div>
            <img
              src={john}
              alt=""
              height={"370px"}
              width={"250px"}
              className="rounded-md"
            />
            <h3 className="font-bold font-DMSans mt-2 ">Keanu Reave</h3>
          </div>
          <div>
            <img src={john} alt="" height={"370px"} width={"250px"} />
            <h3 className="font-bold font-DMSans mt-2">Keanu Reave</h3>
          </div>
          <div>
            <img src={john} alt="" height={"370px"} width={"250px"} />
            <h3 className="font-bold font-DMSans mt-2">Keanu Reave</h3>
          </div>
          <div>
            <img src={john} alt="" height={"370px"} width={"250px"} />
            <h3 className="font-bold font-DMSans mt-2">Keanu Reave</h3>
          </div>
          <div>
            <img src={john} alt="" height={"370px"} width={"250px"} />
            <h3 className="font-bold font-DMSans mt-2">Keanu Reave</h3>
          </div>
          <div>
            <img src={john} alt="" height={"370px"} width={"250px"} />
            <h3 className="font-bold font-DMSans mt-2">Keanu Reave</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default FeaturedCasts;
