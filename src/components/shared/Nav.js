import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";

const Nav = () => {
  return (
    <div className="flex justify-center">
      <div className=" all-width background-cream ">
        <div className=" flex justify-between py-10 px-20">
          <div>
            <Link to="/">
              <img alt="logo" src={logo} className="cursor-pointer" />
            </Link>
          </div>
          <div className="justify-between">
            <Link
              to="/"
              className="mr-8 barlow-500 text-gray text-[12px] hover:text-slate-900 cursor-pointer"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="mr-8 barlow-500 text-gray text-[12px] hover:text-slate-900 cursor-pointer"
            >
              ABOUT US
            </Link>
            <Link
              to="/create"
              className="barlow-500 text-gray text-[12px] hover:text-slate-900 cursor-pointer"
            >
              CREATE YOUR PLAN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
