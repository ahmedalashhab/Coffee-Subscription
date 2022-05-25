import React from "react";

import Nav from "../shared/Nav";
import Hero from "./Hero";
import Collection from "./Collection";
import Why from "./Why";
import How from "./How";
import Footer from "../shared/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Collection />
      <Why />
      <How />
      <Footer />
    </div>
  );
};

export default Home;
