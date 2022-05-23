import React from "react";
import hero from "../assets/home/desktop/image-hero-coffeepress.jpg";
import logo from "../assets/shared/desktop/logo.svg";

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="all-width background-cream">
        <div className=" flex justify-between py-10 px-20">
          <div>
            <img alt="logo" src={logo} />
          </div>
          <div className="justify-between">
            <span className="mr-8 barlow-500 text-gray text-[12px] hover:text-slate-900 cursor-pointer">
              HOME
            </span>
            <span className="mr-8 barlow-500 text-gray text-[12px] hover:text-slate-900 cursor-pointer">
              ABOUT US
            </span>
            <span className="barlow-500 text-gray text-[12px] hover:text-slate-900 cursor-pointer">
              CREATE YOUR PLAN
            </span>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className=" bg-hero hero-size rounded-xl">
            <div className="flex flex-col ml-24 w-1/2 gap-8">
              <h1 className="fraunces-900 text-cream text-[76px] tracking-wider mt-28 leading-none">
                Great coffee made simple.
              </h1>
              <p className="barlow-400 text-cream pr-48">
                Start your mornings with the world’s best coffees. Try our
                expertly curated artisan coffees from our best roasters
                delivered directly to your door, at your schedule.
              </p>
              <div className="justify-items-start">
                <button className="button-green text-[18px] text-cream fraunces-700 py-3 px-9 rounded mt-2 hover:bg-teal-400">
                  Create your plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
