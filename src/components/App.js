import React from "react";
import { Routes, Route, Switch, Link } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Create from "./Create/Create";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="create" element={<Create />} />
    </Routes>
  );
};

export default App;
