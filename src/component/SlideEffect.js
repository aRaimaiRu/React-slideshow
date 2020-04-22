import React from "react";
import { Slide } from "react-slideshow-image";
import "./SlideEffect.css";

const slideImages = ["./test.jpg", "./test2.png", "./test3.png"];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = () => {
  return (
    <div className="slide-container container" style={{ maxWidth: "100%" }}>
      <Slide {...properties}>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
            }}
          >
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
