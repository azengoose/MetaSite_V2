import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  hover: { scale: 1.5 },
  tap: { scale: 0.9 }
};

export function RightArrow() {
  let navigate = useNavigate();
  function goToNextPage() {
    navigate(1);
  }

  return (
    <>
      <motion.button
        variants={variants}
        whileHover="hover"
        whileTap="tap"
        className="right-arrow arrow"
        onClick={goToNextPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </motion.button>
    </>
  );
}

export function LeftArrow() {
  let navigate = useNavigate();
  function goToPreviousPage() {
    navigate(-1);
  }
  return (
    <>
      <motion.button
        variants={variants}
        whileHover="hover"
        whileTap="tap"
        className="left-arrow arrow"
        onClick={goToPreviousPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>{" "}
      </motion.button>
    </>
  );
}

export function UpArrow() {
  return (
    <>
      <motion.button
        variants={variants}
        whileHover="hover"
        whileTap="tap"
        className="up-arrow arrow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </svg>
      </motion.button>
    </>
  );
}

export function DownArrow() {
  return (
    <>
      <motion.button
        variants={variants}
        whileHover="hover"
        whileTap="tap"
        className="down-arrow arrow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </motion.button>
    </>
  );
}
