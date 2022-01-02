import React from "react";
import { UpArrow } from "../components/arrows";

export default function Critical() {
  return (
    <>
      <h1>Criticality</h1>
      <p className="sub-text">
        The only thing I want for Christmas is...
        <br></br>critical thinking.
      </p>
      <p>
        Disappointed? Well, I want to hold off from publishing too much
        unfiltered and poorly edited work. This page, among many others in this
        ouevre, <em>excusi moi</em>, include:
      </p>
      <li>Bug and Features</li>
      <li>Peopleness</li>
      <p>and the very boring,</p>
      <li>Technological Design and Decision</li>
      <UpArrow link="/" />
    </>
  );
}
