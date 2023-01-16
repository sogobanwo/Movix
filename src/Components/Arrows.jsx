import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={"slick-prev slick-arrow"}
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <FaChevronLeft color="black" size={30} />
  </button>
);

export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={"slick-next slick-arrow"}
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <FaChevronRight color="black" size={30} />
  </button>
);
