import { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";
import "./styles/styles.css";

import Home from "./pages/home";
import About from "./pages/about";
import Internet from "./pages/internet";
import NotFound from "./pages/not";

export default function App() {
  const location = useLocation();

  let navigate = useNavigate();
  function goToPreviousPage() {
    navigate(-1);
  }
  function goToNextPage() {
    navigate(1);
  }

  function Example() {
    const [isComplete, setIsComplete] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

    return (
      <>
        <svg className="progress-icon" viewBox="0 0 60 60">
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="white"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1 // Reverse direction of line animation
            }}
          />
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="white"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
      </>
    );
  }

  return (
    <>
      <main role="main" className="wrapper">
        <div className="content">
          <Example />
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
            <button className="left-arrow" onClick={goToPreviousPage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
              </svg>{" "}
            </button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="right-arrow"
              onClick={goToNextPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
              </svg>
            </motion.button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </div>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
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
