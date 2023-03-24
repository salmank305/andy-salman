import React from "react";
import { AboutUs } from "./AboutUs";
import { Contact } from "./ContactSection/Contact";
import { Courses } from "./Courses";
import { Programs } from "./Programs";

export const Home = () => {
  return (
    <>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset={0}
        className="scrollspy-example"
        tabIndex={0}
      >
        <div className="home">
          <div className="overlay"></div>
          <video
            className="home"
            src="./assets/videoBg.mp4"
            autoPlay
            loop
            muted
            id="homeSection"
          />
          <div className="homeContainer">
            <p>
              “LEARNING DOESN'T JUST "HAPPEN"!{" "}
              <p>IT REQUIRES CAREFUL PLANNING AND IMPLEMENTATION.”</p>{" "}
              <h2>
                EASY WITH OUR <span style={{ color: "#f5a425" }}>CSELP</span>
              </h2>
            </p>
            <button>DISCOVER MORE</button>
          </div>
        </div>
      </div>
      <AboutUs />
      <Programs />
      <Courses />
      <Contact />
    </>
  );
};
