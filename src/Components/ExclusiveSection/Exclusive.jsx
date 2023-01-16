import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight } from "react-icons/fa";
import ExclusiveVideo from './ExclusiveVideo';
import { SlickArrowLeft, SlickArrowRight } from "../Arrows";

const Exclusive = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className='hidden md:block'>
      <div className="flex justify-between mx-[7.5%] items-center">
        <h1 className="text-2xl font-bold font-DMSans md:text-4xl">Exclusive Videos</h1>
        <button className="flex space-x-4 font-DMSans text-darkRed items-center">
          See more{" "}
          <span className="ml-2">
            <FaChevronRight />
          </span>
        </button>
      </div>
      <div className="mx-[5%] mb-8 mt-8">
        <Slider
          {...settings}
          className="mx-8"
        >
         <ExclusiveVideo />
         <ExclusiveVideo />
         <ExclusiveVideo />
         <ExclusiveVideo />
         <ExclusiveVideo />
         <ExclusiveVideo />
        </Slider>
      </div>
    </div>
  )
}

export default Exclusive