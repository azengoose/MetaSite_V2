import React, { useState } from "react";
import { UpArrow, RightArrow, DownArrow } from "../components/arrows";
import { motion } from "framer-motion";

export default function About() {
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
  // function to send external links to new tab
  function externalLinks() {
    var anchors = document.querySelectorAll("a");
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].hostname !== window.location.hostname) {
        anchors[i].setAttribute("target", "_blank");
      }
    }
  }
  externalLinks();
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
          className="arrow-btn"
          onClick={() => handleClick("up")}
          style={Disappear}
        >
          <UpArrow link="/l" />
        </button>
        <button
          className="arrow-btn"
          onClick={() => handleClick("right")}
          style={Disappear}
        >
          <RightArrow link="/p" />
        </button>
        <div className="content-space">
          <h1 className="h1-space">About</h1>
          <p className="sub-text">This About page is MetaSite meta. </p>
          <h2 className="h2-body">Introduction</h2>
          <p>Hello and warmest welcome to this cosy nook of the internet.</p>
          <p>I am a website. Howdy.</p>
          <p>
            If you wish to take a little peek at my internals, feel free to{" "}
            <a href="https://www.thoughtco.com/get-inspect-element-tool-for-browser-756549">
              inspect element
            </a>
            , or waltz on over to my source files on{" "}
            <a href="https://github.com/azengoose/MetaSite_V2">GitHub</a>. It's
            like pornhub, but for code. If you're a minor, ignore that.
          </p>
          <h2 className="h2-body"> Aims</h2>
          <p>
            An aim of MetaSite is to provoke critical connections between people
            and technology, or more generally, establish a holistic view of the
            web through an experimental, reflective website about websites.
          </p>
          <p>
            The Mission Question of MetaSite:
            <em> What is the web?</em>
          </p>
          <p>This site is largely experimental. Site experiments include:</p>
          <ol>
            <li>Spatial navigation</li>
            <li>Learning via questioning</li>
            <li>Experiential reading and thinking</li>
          </ol>
          <p>
            This site is currently a demo. Some of the pages located in this
            demo illustrate the outline of potential pages currently in
            development. Other ideas:{" "}
          </p>
          <ul>
            <li>About About</li>
            <li>Frequently Said Answers (FSA)</li>
          </ul>
          <p style={{ paddingBottom: 0, marginBottom: 0 }}>
            Distillation of your thoughts into writing for MetaSite will
            probably be appreciated. You can leave feedback by navigating
            upwards.
          </p>
        </div>
      </motion.div>
      <button
        className="arrow-btn"
        onClick={() => handleClick("down")}
        style={Disappear}
      >
        {" "}
        <DownArrow link="/" />
      </button>
    </>
  );
}
