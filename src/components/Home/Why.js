import React from "react";

import bean from "../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../assets/home/desktop/icon-gift.svg";
import truck from "../assets/home/desktop/icon-truck.svg";

const Why = () => {
  return (
    <section className="flex justify-center">
      <div className="flex justify-center all-width background-cream pb-80 ">
        <div className="why rounded-xl most-width">
          <div className="flex justify-center">
            <div className="flex flex-col gap-10 items-center w-2/5">
              <span className="mt-24 fraunces-900 text-cream text-[40px]">
                Why choose us?
              </span>
              <p className="text-center text-cream barlow-400 ">
                A large part of our role is choosing which particular coffees
                will be featured in our range. This means working closely with
                the best coffee growers to give you a more impactful experience
                on every level.
              </p>
            </div>
          </div>
          <div className=" bottom-1 flex justify-center translate-y-32 ">
            <div className="flex w-4/5 gap-10 ">
              <div className="button-green rounded-xl">
                <div className="flex flex-col items-center py-16 px-8 ">
                  <div>
                    <img alt="coffee bean" src={bean} />
                  </div>
                  <span className="mt-16 fraunces-700 text-[24px] text-cream">
                    Best Quality
                  </span>
                  <p className="text-center mt-6 barlow-400 text-cream">
                    Discover an endless variety of the world's best artisan
                    coffee from each of our roasters.
                  </p>
                </div>
              </div>
              <div className="button-green rounded-xl">
                <div className="flex flex-col justify-center items-center py-16 px-8  ">
                  <div>
                    <img alt="coffee bean" src={gift} />
                  </div>
                  <span className="mt-16 fraunces-700 text-[24px] text-cream">
                    Exclusive benefits
                  </span>
                  <p className="text-center mt-6 barlow-400 text-cream">
                    Special offers and swag when you subscribe, including 30%
                    off your first shipment.
                  </p>
                </div>
              </div>
              <div className="button-green rounded-xl">
                <div className="flex flex-col items-center py-12 px-8  ">
                  <div className="h-12 mt-10">
                    <img alt="coffee bean" src={truck} />
                  </div>
                  <span className="mt-16 fraunces-700 text-[24px] text-cream">
                    Free shipping
                  </span>
                  <p className="text-center mt-6 barlow-400 text-cream">
                    We cover the cost and coffee is delivered fast. Peak
                    freshness: guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
