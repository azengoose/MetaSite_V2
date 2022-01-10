import React, { useState } from "react";
import { UpArrow } from "../components/arrows";
import { motion } from "framer-motion";

export default function Critical() {
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
        <h1>Criticality</h1>
        <p className="sub-text">
          The only thing I want for Christmas is...
          <br></br>critical thinking.
        </p>
        <p>
          Disappointed? Well, I want to hold off from publishing too much
          unfiltered and poorly edited work. This page, among many others in
          this ouevre, <em>excusi moi</em>, include:
        </p>
        <li>Bug and Features</li>
        <li>Peopleness</li>
        <p>and the very boring,</p>
        <li>Technological Design and Decision</li>
        <button
          className="arrow-btn up"
          onClick={() => handleClick("up")}
          style={Disappear}
        >
          <UpArrow link="/" />
        </button>
      </motion.div>
    </>
  );
}
