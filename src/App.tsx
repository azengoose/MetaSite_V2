import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./styles/styles.css";

import Home from "./pages/home";
import About from "./pages/about";
import Internet from "./pages/internet";
import Practical from "./pages/pract";
import Design from "./pages/design";
import NotFound from "./pages/not";

import Progress from "./components/progress";
import Settings from "./components/settings/settings";
import Timer from "./components/timer";

export default function App() {
  const location = useLocation();
  console.log("Mate what d'you think you're doing back here. ");

  return (
    <>
      <main role="main" className="wrapper">
        <div className="content">
          <Progress />
          <motion.div
            whileHover={{ opacity: 1 }}
            style={{
              opacity: 0.05,
              left: "1rem",
              top: "0",
              position: "absolute"
            }}
          >
            <Timer />
          </motion.div>
          <Settings />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div>
                    <Home />
                  </motion.div>
                }
              />
              <Route path="/a" element={<About />} />
              <Route path="/i" element={<Internet />} />
              <Route path="/p" element={<Practical />} />
              <Route path="/d" element={<Design />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          {/* <div>
            <nav>
              <ul style={{ display: "flex", flexDirection: "row" }}>
                <li className="App-link" style={{ paddingRight: 25 }}>
                  <Link to="/">Home</Link>
                </li>
                <li className="App-link" style={{ paddingRight: 25 }}>
                  <Link to="/a">About</Link>
                </li>
                <li className="App-link">
                  <Link to="/i">Internet</Link>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </main>
    </>
  );
}
