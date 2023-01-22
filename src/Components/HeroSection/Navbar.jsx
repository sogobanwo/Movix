import React, { useState } from "react";
import { FaBars, FaSearch, FaSignOutAlt, FaWindowClose } from "react-icons/fa";
import Movix from "../../ImageResources/tv.png";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [users, setUser] = useState(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="pt-6 mx-[7.5%] flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <img src={Movix} alt="movixTv" width={40} height={40} />
          <h3 className="font-bold font-DMSans text-.5xl text-white md:text-2xl">
            Movix
          </h3>
        </div>
        <div className="w-[40%] hidden md:block">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className=" border border-white text-white rounded-md p-1 md:flex bg-transparent w-[100%]"
          />
          <div className="relative left-[93%] -mt-7 mb-3">
            <FaSearch size={20} color={"lightgrey"} />
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <h3 className="font-bold font-DMSans text-.5xl text-white md:text-2xl">
            {user ? `Hi, ${users.displayName.split(" ")[0]}` : ""}
          </h3>

          <div
            className="bg-darkRed text-white p-2 rounded-full cursor-pointer"
            onClick={handleNav}
          >
            {nav ? <FaWindowClose size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[70%] h-full border-r-2 bg-gray-800 text-white border-lightGrey z-10 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex space-x-4 items-center px-4 pt-8">
          <img src={Movix} alt="movixTv" width={40} height={40} />
          <h3 className="font-bold font-DMSans text-2xl text-white md:text-2xl">
            Movix
          </h3>
        </div>
        <ul className="pt-12">
          <li
            className="p-4 flex just items-center space-x-4 text-2xl border-b-2 border-lightGrey cursor-pointer"
            onClick={async () => {
              await dispatch(logout());
              navigate("/Login");
            }}
          >
            <h1>LOGOUT</h1>{" "}
            <div>
              <FaSignOutAlt size={25} />
            </div>
          </li>
        </ul>
      </div>
      <div
      onClick={async () => {
        await dispatch(logout());
        navigate("/Login");
      }}
        className="fixed bg-darkRed text-white p-2 rounded-full cursor-pointer right-8 bottom-8 md:fixed"
      >
       <FaSignOutAlt size={30} /> 
      </div>
    </>
  );
};

export default Navbar;
