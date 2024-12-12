import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Edit from "./components/Edit";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
