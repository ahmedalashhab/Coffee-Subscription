import React from "react";
import { Routes, Route, Switch, Link } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/*MAKE SURE ALL ROUTES ARE WORKING*/}
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default App;
