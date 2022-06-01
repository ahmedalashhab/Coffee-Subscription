import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Nav from "../shared/Nav";
import Hero from "./Hero";
import How from "./How";
import Order from "./Order";

const Create = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0.5, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: 100 }}
    >
      <section>
        <Nav />
        <Hero />
        <How />
        <Order />
      </section>
    </motion.div>
  );
};

export default Create;
