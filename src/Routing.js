import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";


export default function Routing() {
  const routes = [
    { Component: Home, path: '/' },
    { Component: About, path: '/about' }
  ];

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' component={<NotFound />} />
      </Routes>
    </Router>
  );
}
