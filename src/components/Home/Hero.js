import React from "react";

import logo from "../assets/shared/desktop/logo.svg";

const Hero = () => {
  return (
    <section>
      <div>
        <div className="flex">
          <div>
            <img alt="logo" src={logo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
