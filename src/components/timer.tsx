import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setSeconds((seconds) => Math.round((seconds + 0.01) * 1000) / 1000);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  return (
    <div>
      <h2>{seconds}</h2>
      {/* <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
      <button className="btn--cool" onClick={reset}>
        Reset
      </button> */}
    </div>
  );
}
