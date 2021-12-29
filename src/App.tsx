import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./styles/styles.css";

import Home from "./pages/home";
import About from "./pages/about";
import Internet from "./pages/internet";
import NotFound from "./pages/not";

import Progress from "./components/progress";

export default function App() {
  const location = useLocation();

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <>
      <main role="main" className="wrapper">
        <div className="content">
          <Progress />

          <div>
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
          </div>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route path="/a" element={<About />} />
              <Route path="/i" element={<Internet />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
