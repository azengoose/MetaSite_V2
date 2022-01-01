import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles/styles.css";

import Title from "./pages/Title";
import Home from "./pages/home";
import Site from "./pages/site";
import WebsiteDemo from "./pages/website/website";
import About from "./pages/about";
import Internet from "./pages/internet";
import Practical from "./pages/pract";
import Design from "./pages/design";
import NotFound from "./pages/not";

export default function Paths() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/hello" element={<Title />} />
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<About />} />
          <Route path="/w" element={<Site />} />
          <Route path="/demo" element={<WebsiteDemo />} />
          <Route path="/i" element={<Internet />} />
          <Route path="/p" element={<Practical />} />
          <Route path="/d" element={<Design />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
