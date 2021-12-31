import * as React from "react";
import { useState } from "react";
// import Contents from "../components/contents";
import Browser from "../components/browser";
// import Randompage from "../components/randompage";
// import ButtonChange from "../components/buttonchange";
import { motion } from "framer-motion";
import {
  RightArrow,
  LeftArrow,
  DownArrow,
  UpArrow
} from "../components/arrows";

//glitch intro for home https://codepen.io/team/nclud/pen/MwaGGE

export default function Home() {
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
    display: clicked ? "none" : "block"
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
        style={{ height: "70vh", marginTop: "10vh" }}
      >
        <Browser />

        <button
          className="right-arrow arrow"
          onClick={() => handleClick("right")}
          style={Disappear}
        >
          <RightArrow link="/i" />
        </button>
        <button
          className="left-arrow arrow"
          onClick={() => handleClick("left")}
          style={Disappear}
        >
          <LeftArrow link="/a" />
        </button>
        <button
          className="up-arrow arrow"
          onClick={() => handleClick("up")}
          style={Disappear}
        >
          <UpArrow link="/p" />
        </button>

        <h1> &lt;MetaSite/&gt;</h1>

        <p className="sub-text">
          Now just seeing if we can run an exit animation, but otherwise putting
          in demo content.
        </p>

        {/* <Randompage /> */}

        {/* <ButtonChange /> */}

        {/* <Contents /> */}
      </motion.div>
      <button
        className="down-arrow arrow"
        onClick={() => handleClick("down")}
        style={Disappear}
      >
        <DownArrow link="/d" />
      </button>
    </>
  );
}
