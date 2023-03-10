import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  FaChevronRight } from "react-icons/fa";
import MovieCardArrival from "./MovieCardArrival";
import { SlickArrowLeft, SlickArrowRight } from "../Arrows";
import {getLatestMovies} from '../../Features/Movies/Movies.services'
import { toast } from 'react-toastify';

const NewArrival = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const res =async()=>{
      try{
      const movies = await getLatestMovies()
      setMovies(movies)
      }catch(error){
        toast.error(error)
      }
    } 
    res()
  }, [])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
        <h1 className="text-2xl font-bold font-DMSans md:text-4xl">New Arrival</h1>
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
          {movies.map((movies,index)=>{
            return <MovieCardArrival key={index} {...movies}/>
          })}
        </Slider>
      </div>
    </>
  );
};

export default NewArrival