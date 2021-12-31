import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Contents from "../components/contents";
import { RightArrow } from "../components/arrows";

export default function About() {
  const [initial] = useState({ opacity: 0, x: 0 });
  var animate = { opacity: 1 };
  const [exit, setExit] = useState({ opacity: 0, x: 0, y: 0 });

  const [clicked, setClicked] = useState(false);

  function handleClickRight() {
    setExit({ opacity: 0, x: -500, y: 0 });
    setClicked(true);
  }
  function handleClickLeft() {
    setExit({ opacity: 0, x: 500, y: 0 });
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
      >
        <button
          className="right-arrow arrow"
          onClick={handleClickRight}
          style={Disappear}
        >
          <RightArrow link="/" />
        </button>

        <h1>(A Bout)</h1>

        <div className="mouse_scroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </div>
        </div>

        <p className="sub-text">
          Am I even finnished? Do I derserve to exist <br /> if I'm spelled
          improperly?
        </p>
        <div>
          <h2>About Site</h2>
          <p>
            This is a <strong>React</strong> project. That just means that these
            web pages were created using something called React. This is a
            React-flavoured website, if you will. page, and check out README.md
            in the editor for additional detail plus next steps you can take!
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
        <div>
          <h2>Change and Variation</h2>
          <p>
            The world constantly undergoes change, as per the second law of
            Thermodynamics, but especially with technology. So I'll be lost in
            the world of old if I'm not updated. Whilst status quos get
            disrupted and good things can be lost, there is great opportunity
            for creative replacement. This sometimes results in things like
            variation.
          </p>
          <p>
            I don't know what that above paragraph means, but it'd sure as hell
            be useful to get all the other page content and general outline set
            up.
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
        height="500px"
      ></iframe> */}
        <div>{/* <Contents /> */}</div>
      </motion.div>
    </>
  );
}
