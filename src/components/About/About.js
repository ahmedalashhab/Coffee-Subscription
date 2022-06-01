import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Nav from "../shared/Nav";
import commitment from "../assets/about/desktop/image-commitment.jpg";
import quality from "../assets/about/desktop/image-quality.jpg";
import uk from "../assets/about/desktop/illustration-uk.svg";
import canada from "../assets/about/desktop/illustration-canada.svg";
import australia from "../assets/about/desktop/illustration-australia.svg";
import Footer from "../shared/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0.5, y: -100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0.5, y: -100, scale: 0.9 }}
    >
      <section>
        <Nav />
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center all-width background-cream">
            <div className="flex about-us-bg rounded-xl">
              <div className="flex flex-col ml-24 w-1/2 gap-8">
                <h1 className="fraunces-900 text-cream text-[40px] tracking-wider mt-32 leading-none">
                  About Us
                </h1>
                <p className="barlow-400 text-cream pr-48">
                  Coffeeroasters began its journey of exotic discovery in 1999,
                  highlighting stories of coffee from around the world. We have
                  since been dedicated to bring the perfect cup - from bean to
                  brew - in every shipment.
                </p>
              </div>
            </div>
          </div>
          <div className="background-cream all-width flex justify-center">
            <div className="flex how-width gap-32 mt-48">
              <img
                className="rounded-xl"
                alt="barista pouring coffee"
                src={commitment}
              />
              <div className="flex flex-col justify-center gap-8 ">
                <h3 className=" fraunces-900 text-[40px] text-blue">
                  Our commitment
                </h3>
                <p className="barlow-400 text-blue">
                  We’re built on a simple mission and a commitment to doing good
                  along the way. We want to make it easy for you to discover and
                  brew the world’s best coffee at home. It all starts at the
                  source. To locate the specific lots we want to purchase, we
                  travel nearly 60 days a year trying to understand the
                  challenges and opportunities in each of these places. We
                  collaborate with exceptional coffee growers and empower a
                  global community of farmers through with well above fair-trade
                  benchmarks. We also offer training, support farm community
                  initiatives, and invest in coffee plant science. Curating only
                  the finest blends, we roast each lot to highlight tasting
                  profiles distinctive to their native growing region.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center all-width background-cream pt-36">
            <div className="flex justify-center why most-width rounded-xl">
              <div className="flex items-center gap-16 how-width ">
                <div className="-mt-12">
                  <h2 className="fraunces-900 text-cream text-[40px] tracking-wide">
                    Uncompromising quality
                  </h2>
                  <p className="barlow-400 text-cream mt-6">
                    Although we work with growers who pay close attention to all
                    stages of harvest and processing, we employ, on our end, a
                    rigorous quality control program to avoid over-roasting or
                    baking the coffee dry. Every bag of coffee is tagged with a
                    roast date and batch number. Our goal is to roast
                    consistent, user-friendly coffee, so that brewing is easy
                    and enjoyable.
                  </p>
                </div>
                <img className="-translate-y-20 rounded-xl" src={quality} />
              </div>
            </div>
          </div>
          {/*<span className="text-gray fraunces-900 text-[24px]">*/}
          {/*        Our headquarters*/}
          {/*      </span>*/}
          <div className="flex flex-col justify-center all-width background-cream pt-36 pb-48">
            <div className="mx-48">
              <span className="text-gray  fraunces-900 text-[24px]">
                Our headquarters
              </span>
            </div>
            <div>
              <div className="flex most-width mx-48">
                <div className="flex flex-col mr-28">
                  <div>
                    <img alt="map of the UK" className="mt-16" src={uk} />
                  </div>
                  <h3 className="fraunces-900 text-blue text-[32px] mt-8">
                    United Kingdom
                  </h3>
                  <span className="mt-6 barlow-400 text-blue">
                    68 Asfordby Rd
                  </span>
                  <span className="barlow-400 text-blue">Alcaston</span>
                  <span className="barlow-400 text-blue">SY6 1YA</span>
                  <span className="barlow-400 text-blue">+44 1241 918425</span>
                </div>
                <div>
                  <div className="flex flex-col mr-52">
                    <div>
                      <img alt="map of Canada" className="mt-16" src={canada} />
                    </div>
                    <h3 className="fraunces-900 text-blue text-[32px] mt-8">
                      Canada
                    </h3>
                    <span className="mt-6 barlow-400 text-blue">
                      1528 Eglinton Avenue
                    </span>
                    <span className="barlow-400 text-blue">Toronto</span>
                    <span className="barlow-400 text-blue">
                      Ontario M4P 1A6
                    </span>
                    <span className="barlow-400 text-blue">
                      +1 416 485 2997
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <div>
                      <img
                        alt="map of Australia"
                        className="mt-16"
                        src={australia}
                      />
                    </div>
                    <h3 className="fraunces-900 text-blue text-[32px] mt-8">
                      Australia
                    </h3>
                    <span className="mt-6 barlow-400 text-blue">
                      36 Swanston Street
                    </span>
                    <span className="barlow-400 text-blue">Kewell</span>
                    <span className="barlow-400 text-blue">Victoria</span>
                    <span className="barlow-400 text-blue">
                      +61 4 9928 3629
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </motion.div>
  );
};

export default About;
