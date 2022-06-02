import React from "react";
import { Link } from "react-router-dom";

const How = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center all-width background-cream">
        <div className="how-width">
          <div className="">
            <span className="fraunces-700 text-gray text-[32px]">
              How it works
            </span>
          </div>
          <div className="flex mt-16 ">
            <div className="flex w-full relative mb-12">
              <div className="flex flex-col w-1/3">
                <div className="circles background-cream"></div>
                <div className="behind-line absolute top-4 translate-x-1"></div>
                <span className="numbers fraunces-900 text-[72px] mt-12">
                  01
                </span>
                <h3 className="text-blue text-[32px] fraunces-900 mt-6 mr-24">
                  Pick your coffee
                </h3>
                <p className="text-blue barlow-400 text-[16px] mt-8 mr-12">
                  Select from our evolving range of artisan coffees. Our beans
                  are ethically sourced and we pay fair prices for them. There
                  are new coffees in all profiles every month for you to try
                  out.
                </p>
              </div>
              <div className="flex flex-col w-1/3">
                <div className="circles background-cream"></div>
                <div className="behind-line absolute top-4 translate-x-1"></div>
                <span className="numbers fraunces-900 text-[72px] mt-12">
                  02
                </span>
                <h3 className="text-blue text-[32px] fraunces-900 mt-6 mr-24">
                  Choose the frequency
                </h3>
                <p className="text-blue barlow-400 text-[16px] mt-8 mr-12">
                  Customize your order frequency, quantity, even your roast
                  style and grind type. Pause, skip or cancel your subscription
                  with no commitment through our online portal.
                </p>
              </div>
              <div className="flex flex-col w-1/3">
                <div className="circles background-cream"></div>
                <span className="numbers fraunces-900 text-[72px] mt-12">
                  03
                </span>
                <h3 className="text-blue text-[32px] fraunces-900 mt-6 mr-24">
                  Receive and enjoy!
                </h3>
                <p className="text-blue barlow-400 text-[16px] mt-8 mr-12">
                  We ship your package within 48 hours, freshly roasted. Sit
                  back and enjoy award-winning world-class coffees curated to
                  provide a distinct tasting experience.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button></button>
          </div>
          <button className="button-green hover:bg-teal-400 transition-all duration-100 text-cream fraunces-700 text-[18px] py-3 px-9 rounded-lg mb-52">
            <Link to="/create">Create your plan</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default How;
