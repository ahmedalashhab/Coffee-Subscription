import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="all-width background-cream">
        <div className="flex justify-center">
          <div className="hero-create rounded-xl">
            <div className="flex flex-col ml-24 w-1/2 gap-8">
              <h1 className="fraunces-900 text-cream text-[72px] tracking-wider mt-32 leading-none">
                Create a plan
              </h1>
              <p className="barlow-400 text-cream pr-48">
                Build a subscription plan that best fits your needs. We offer an
                assortment of the best artisan coffees from around the globe
                delivered fresh to your door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
