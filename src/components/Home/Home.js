import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Nav from "../shared/Nav";
import Hero from "./Hero";
import Collection from "./Collection";
import Why from "./Why";
import How from "./How";
import Footer from "../shared/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0.5, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: -100 }}
    >
      <div>
        <Nav />
        <Hero />
        <Collection />
        <Why />
        <How />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
