import React, { useState } from "react";
import { LeftArrow, UpArrow } from "../components/arrows";
import { motion } from "framer-motion";

export default function Medium() {
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
          className="arrow-btn up"
          onClick={() => handleClick("up")}
          style={Disappear}
        >
          <UpArrow link="/p" />
        </button>
        <button
          className="arrow-btn left"
          onClick={() => handleClick("left")}
          style={Disappear}
        >
          <LeftArrow link="/" />
        </button>
        <div className="content-space">
          <h1 className="h1-space">Mediums</h1>
          <p className="sub-text">So mediums I guess.</p>
          <p>
            Technology, and the mediums that govern our world, such as websites,
            video, music and writing, inevitably govern our thoughts, how we
            work, live and belong. Medium governs us.&nbsp;
          </p>
          <p>
            For one, writing has, as much of its unlimited breadth, flair and
            content, an unlimited limit.
          </p>
          <p>
            My writer is faced up against a tsunami of cultural norms about what
            it means to write, bound and constrained by the confines of whatever
            software they use to write. More freedom asserts itself, strictly in
            terms of visual and material expression, on physical paper. But
            paper is without the immense capability of a computer hooked up to
            the internet. Software is bound by its imposed limits and rules,
            paper is offline to the myriad wonders of software.&nbsp;
          </p>
          <p>
            Mostly, this is just an issue for my writer. But it is also
            fundamentally about the problems that people have when faced with a
            blank page. And that their immediate response is to think that they
            must come up with some idea, or start writing, or start doodling.
          </p>
          <p>
            A possible answer to the implicit question posed here is that you do
            not need to do any of the above.&nbsp;
          </p>
          <p>
            Humans are bound in and of themselves. They are their medium and
            their biology asserts mediums of experience. That is, people are
            bound in their biology (their body), or for those of faith, in some
            spirit however defined, and for the most part, people experience the
            world it seems, on the most surface level, through their 5 primary
            and plethora of other senses.
          </p>
          <p>
            I have a lot of questions. And if you &ndash; website visitor, user,
            reader, audience &ndash; are disturbed by what is so basic, please,
            be my guest and formulate one or a series of questions. Here, you
            can have a nice space to type one if you wish (and store it
            somewhere cos it&apos;s not getting saved here).
          </p>
        </div>
      </motion.div>
    </>
  );
}
