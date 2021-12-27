import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./styles/styles.css";

import Home from "./pages/home";
import About from "./pages/about";
import Internet from "./pages/internet";

export default function App() {
  const location = useLocation();

  return (
    <>
      <main role="main" className="wrapper">
        <div className="content">
          <div>
            <nav>
              <ul>
                <li className="App-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="App-link">
                  <Link to="/a">About</Link>
                </li>
                <li className="App-link">
                  <Link to="/i">Internet</Link>
                </li>
              </ul>
            </nav>
          </div>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/a" element={<About />} />
              <Route path="/i" element={<Internet />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
