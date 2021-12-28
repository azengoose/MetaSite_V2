import * as React from "react";
// import Contents from "../components/contents";
import Browser from "../components/browser";
// import Randompage from "../components/randompage";
// import ButtonChange from "../components/buttonchange";
import { motion } from "framer-motion";

//glitch intro for home https://codepen.io/team/nclud/pen/MwaGGE

const variants = {
  initial: { opacity: 0, y: -1000 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -1000 }
};

export default function Home() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      <Browser />

      <h1> &lt;MetaSite/&gt;</h1>

      <p className="sub-text">
        Now, it'd be epic if transitions could change based on the history e.g.
        Home -> Site (slide left), About &lt;- Home (right)
      </p>

      {/* <Randompage /> */}

      {/* <ButtonChange /> */}

      <div>
        <h2>Change and Variation</h2>
        <p>
          The world constantly undergoes change, as per the second law of
          Thermodynamics, but especially with technology. So I'll be lost in the
          world of old if I'm not updated. Whilst status quos get disrupted and
          good things can be lost, there is great opportunity for creative
          replacement. This sometimes results in things like variation.
        </p>
        <p>
          I don't know what that above paragraph means, but it'd sure as hell be
          useful to get all the other page content and general outline set up.
        </p>
      </div>

      {/* <Contents /> */}
    </motion.div>
  );
}
