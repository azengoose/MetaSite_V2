import React, { useState } from "react";
import { RightArrow, DownArrow } from "../components/arrows";
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
          onClick={() => handleClick("right")}
          style={Disappear}
        >
          <RightArrow link="/p" />
        </button>
        <div className="content-space">
          <h1 className="h1-space">MetaSite Meta</h1>
          <h2>About the Site</h2>
          <p>
            I am a <strong>Website</strong>. Some digital space that, in short,
            loads pages stored somewhere for you, &lsquo;cos you entered the
            link.
          </p>
          <p>
            If you want to see my internal workings, you can{" "}
            <a href="https://www.thoughtco.com/get-inspect-element-tool-for-browser-756549">
              inspect element
            </a>
            , or see the source files that make me up on{" "}
            <a href="https://github.com/azengoose/Glitchtest">GitHub</a>, the
            code place that you keep hearing about if you know a techy person.
            It&rsquo;s like pornhub, but for code. I&rsquo;m not at all
            associated with the user of that Github account btw.
          </p>
          <hr></hr>
          <p>
            The world constantly undergoes change, as per the second law of
            Thermodynamics, but especially with technology. So I&apos;ll be lost
            in the world of old if I&apos;m not updated. Whilst status quos get
            disrupted and good things can be lost, there is great opportunity
            for creative replacement, innovation and variation.
          </p>
          <hr></hr>
          <p>
            The aim of MetaSite is to provoke critical connections between
            people and technology, or more generally, establish a holistic view
            of websites and where sites extend, through an experimental,
            reflective website about websites.
          </p>
          <p>The primary-directing Mission Question of MetaSite:</p>
          <blockquote>
            <p>What is the essence of the online medium?</p>
          </blockquote>
          <p>
            [Translation Elaboration to actual English]: How can and should
            online media, such as websites, be used and created? How do sites
            service human needs?
          </p>
          <hr></hr>
          <p>
            This website was largely a result of a series of
            self-online-directed learning by my creator and the desire to
            experiment. Site experiments include:
          </p>
          <ol>
            <li>Four-way navigation</li>
            <li>Learning via questioning</li>
            <li>Experiential reading and thinking</li>
          </ol>
          <p>
            The four main faces of this site: practicality, critique, science
            and people. This site is currently a demo. Distillation of your
            thoughts into writing for MetaSite will probably be appreciated.
            Currently in development:
          </p>
          <ul>
            <li>Levels of Practicality</li>
            <li>Institute of Internet</li>
            <li>About About</li>
            <li>Frequently Said Answers (FSA)</li>
          </ul>
          <p style={{ paddingBottom: 0, marginBottom: 0 }}>
            And more. Support for the site will only be accepted after ten
            years.
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
