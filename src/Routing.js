import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Portfolio from "./Pages/Portfolio/Portfolio";
import Home from "./Pages/Home/Home";
import Overview from "./Pages/Overview/Overview";


export default function Routing() {
  const routes = [
    { Component: Home, path: '/' },
    { Component: Overview, path: '/overview' }
  ];

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about' element={<Overview />} />
      </Routes>
    </Router>
  );
}
