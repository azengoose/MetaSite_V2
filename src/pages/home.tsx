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
  const [exit, setExit] = useState({ opacity: 0, x: 0 });

  function handleClick() {
    setExit({ opacity: 0, x: -500 });
  }

  var variants = {
    initial: initial,
    animate: animate,
    exit: exit
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      <Browser />

      <button onClick={handleClick}>
        {" "}
        <RightArrow link="/i"></RightArrow>
      </button>
      <LeftArrow link="/a" />

      <UpArrow link="/p" />

      <h1> &lt;MetaSite/&gt;</h1>

      <p className="sub-text">
        Arrow component handles click. Passes exit prop up to parent motion div
      </p>

      {/* <Randompage /> */}

      {/* <ButtonChange /> */}

      {/* <Contents /> */}
      <div style={{ height: 100 }}>
        <DownArrow link="/" />
      </div>
    </motion.div>
  );
}
