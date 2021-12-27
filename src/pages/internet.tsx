import * as React from "react";
// import Contents from "../components/contents";
import { Link } from "react-router-dom";
// import Sound from "../components/sound";
import { motion } from "framer-motion";

const slidevar = {
  initial: { x: 10000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 10000, opacity: 0 }
};

export default function Internet() {
  return (
    <motion.div
      variants={slidevar}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      <h1>INT</h1>
      <p className="sub-text">Institute of Internet</p>

      {/* <Sound /> */}

      <div>
        <h2>Internet Stuff</h2>
        <p>A culture is some passing on of non-hereditary information.</p>
        <p>
          People can be thought to occupy loose roles in society, which coalesce
          as wider organisations and institutions that have more specified
          titles and roles. How far have people gone in terms of organising
          themselves on the internet? Perhaps decentralisation, and web3 is a
          grand experiment in an egalitarian democratic techno-society.
        </p>
        <p>
          On one level, global and large-scale entities and companies manage
          executive functioning and management of many digital products, or in
          the case of open-source, many individuals and groups contribute to the
          internet. Yet aren't people also confined and defined by the limits of
          the very choice of mediums and tools at their disposal?
        </p>
      </div>

      <Link to="/sc">Siteception</Link>

      {/* <div>
        <Contents />
      </div> */}
    </motion.div>
  );
}
