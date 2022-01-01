import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/title.css";

export default function Title() {
  return (
    <>
      <motion.div
        className="background"
        initial={{ opacity: 0, x: -74 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0.9, y: [0, -30, -35, -40 - 800] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          time: [0, 0.1, 0.15, 0.2, 1.8]
        }}
      >
        <div className="title-content">
          <h1 className="title-heading"> &lt;MetaSite/&gt;</h1>

          <p className="sub-text title-sub">
            MetaSite is an experimental, satirical and
            <br />
            critical website &ndash; about websites.
          </p>

          <Link className="btn--cool title-button" to="/">
            Begin Experience
          </Link>
        </div>
      </motion.div>
    </>
  );
}
