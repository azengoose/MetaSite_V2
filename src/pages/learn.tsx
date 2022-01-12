import React, { useState } from "react";
import { UpArrow, RightArrow, DownArrow } from "../components/arrows";
import { motion } from "framer-motion";
import Survey from "../components/survey";

export default function Learn() {
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
        <h2 className="h2-body">Secret survey page</h2>
        <p>
          If you would be the kindest and drop some of your best feedback,
          you'll be a cool kid.
        </p>
        <Survey />
      </motion.div>
      <div className="arrow-footer">
        <button
          className="arrow-btn"
          onClick={() => handleClick("down")}
          style={Disappear}
        >
          <DownArrow link="/a" />
        </button>
      </div>
    </>
  );
}
