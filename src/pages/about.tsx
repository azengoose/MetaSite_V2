import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Contents from "../components/contents";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: 2 },
  exit: { opacity: 0 }
};

export default function About() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
    >
      <h1>(A Bout)</h1>

      <p className="sub-text">
        Am I even finnished? Do I derserve to exist <br /> if I'm spelled
        improperly?
      </p>
      <div>
        <h2>About Site</h2>
        <p>
          This is a <strong>React</strong> project. That just means that these
          web pages were created using something called React. This is a
          React-flavoured website, if you will. page, and check out README.md in
          the editor for additional detail plus next steps you can take!
        </p>
        <p>
          I am a <strong>Website</strong>. Some digital space that, in short,
          stores pages somewhere in abstract land. A weird thing you can check
          out is my <Link to="/about">About</Link> page. If you want to see my
          internal workings, you can either: {/*use a pop up*/}
          <a
            className="as"
            href="https://www.thoughtco.com/get-inspect-element-tool-for-browser-756549"
          >
            {" "}
            inspect element
          </a>
          , or see the source files that make me up on{" "}
          <a className="as" href="https://github.com/azengoose/Glitchtest">
            {" "}
            GitHub
          </a>
          , a place where people put their code. I'm definitely not at all
          associated with that Github account btw
        </p>
      </div>
      {/* <iframe
        title="purple"
        src="https://my.spline.design/noisedisplacecopy-3d477ebfafb2828c71ad9c5523cbdfee/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
      <iframe
        title="3D"
        src="https://my.spline.design/glasscirclescopy-8e624d68ede96a09025b2b2540715290/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe> */}
      <div>{/* <Contents /> */}</div>
    </motion.div>
  );
}
