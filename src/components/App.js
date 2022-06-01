import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Home/Home";
import About from "./About/About";
import Create from "./Create/Create";

const App = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
