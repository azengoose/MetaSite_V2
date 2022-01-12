import React, { useState } from "react";
import { DownArrow, LeftArrow } from "../components/arrows";
import { motion } from "framer-motion";

export default function Practical() {
  const [initial] = useState({ opacity: 0, x: 0 });
  var animate = { opacity: 1 };
  const [exit, setExit] = useState({ opacity: 0, x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  function handleClick(direction) {
    if (direction === "right") {
      setExit({ opacity: 0, x: -1000, y: 0 });
    }
    if (direction === "left") {
      setExit({ opacity: 0, x: 1000, y: 0 });
    }
    if (direction === "up") {
      setExit({ opacity: 0, x: 0, y: 500 });
    }
    if (direction === "down") {
      setExit({ opacity: 0, x: 0, y: -500 });
    }
    setClicked(true);
  }
  const Disappear = {
    opacity: clicked ? "0" : "1"
  };
  var variants = {
    initial: initial,
    animate: animate,
    exit: exit
  };
  return (
    <>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <button
          className="arrow-btn left"
          onClick={() => handleClick("left")}
          style={Disappear}
        >
          <LeftArrow link="/a" />
        </button>
        <div className="content-space">
          <h1 className="h1-space">Practicality</h1>
          <p className="sub-text">How is this practical?</p>
          <p>
            Merry Christmas. This page is an illustration of how pages might
            connect in this navigation system. It is also a placeholder, a work
            in progress, a fledgling chick either on the cusp of maturing into a
            magnificently feathered vertebrate ...or on the cusp of falling off
            a very high cliff. Some current ideas in movement:
          </p>
          <li>Levels of Practicality</li>
          <li>Discomfort and Failure</li>
          <li>Limits of Writing</li>
        </div>
      </motion.div>

      <div className="arrow-footer">
        <button
          className="arrow-btn down"
          onClick={() => handleClick("down")}
          style={Disappear}
        >
          <DownArrow link="/m" />
        </button>
      </div>
    </>
  );
}
