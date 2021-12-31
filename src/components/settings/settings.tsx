import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/settings.css";
import Fullscreen from "./fullscreen";
import Timer from "../timer";

export default function Settings() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const fade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    },
    exit: { opacity: 0 }
  };

  const Backdrop = ({ children, onClick }) => {
    return (
      <motion.div
        onClick={onClick}
        className="backdrop"
        variants={fade}
        initial="hidden"
        animate={{ opacity: 0.98 }}
        exit="exit"
      >
        {children}
      </motion.div>
    );
  };
  //also try and trigger with esc key

  const Modal = ({ handleClose }) => {
    return (
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal orange-gradient"
          variants={fade}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2 className="modal-h2">
            Settings{" "}
            <svg
              style={{ top: "4px", position: "relative" }}
              xmlns="http://www.w3.org/2000/svg"
              className="settings-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </h2>
          <p>For tweaks and site customisations.</p>
          <Fullscreen />
          <button className="btn--cool">Speedrun Mode</button>
          <button onClick={handleClose}>Close</button>
        </motion.div>
      </Backdrop>
    );
  };

  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        <div
          style={{
            display: modalOpen ? "block" : "none",
            color: "white",
            top: "6rem",
            position: "fixed",
            zIndex: 4,
            textAlign: "center"
          }}
        >
          <p style={{}}>Time elapsed on MetaSite:</p>
          <Timer />
        </div>

        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}

        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="settings-button"
            onClick={() => (modalOpen ? close() : open())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="settings-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </motion.button>
        </div>
      </AnimatePresence>
    </>
  );
}
