import React, { useState } from "react";
import Movix from "../ImageResources/movixLogo.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [visible, setVisible] = useState(false);

  const togglePassword = () => {
    setVisible(!visible);
  };

  return (
    <div className="container w-[80%] flex flex-col justify-center items-center mx-auto mt-[15%] py-12 px-6 border border-solid border-veryLightgrey rounded-lg md:w-[450px] md:mt-[3%]">
      <img
        src={Movix}
        alt="Movix Logo"
        className="flex justify-center items-center mx-auto mb-8"
      />
      <div>
        <h1 className="text-3xl font-bold flex justify-center  font-700 font-WorkSans">
          Hi, Welcome
        </h1>
        <p className="text-lightGrey text-center font-WorkSans">
          Please sign-up to start your experience
        </p>
      </div>
      <form className="flex flex-col mb-8 space-y-4 mt-4 w-[100%]">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-[100%] p-1.5 border border-solid border-veryLightgrey rounded-md md:p-3 font-WorkSans"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-[100%] p-1.5 border border-solid border-veryLightgrey rounded-md md:p-3 font-WorkSans"
          />
          <div>
            <input
              type={visible ? "text" : "password"}
              placeholder="Password"
              className="w-[100%] p-1.5 border border-solid border-veryLightgrey rounded-md md:p-3 font-WorkSans"
            />
            <div
              className="relative left-[85%] -mt-8  md:left-[90%] md:-mt-10 md:mb-4"
              onClick={togglePassword}>
              {visible ? (
                <FaEyeSlash size={30} color={"lightGrey"} />
              ) : (
                <FaEye size={30} color={"lightGrey"} />
              )}
            </div>
          </div>
        </div>
        <button className="text-white bg-black rounded-md p-1.5 md:p-3 font-Inter">
          REGISTER
        </button>
      </form>
      <p className="text-lightGrey text-center font-WorkSans">
        Already have an account?{" "}
        <Link to={"/Login"}>
          <span className="text-orangeRed">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
