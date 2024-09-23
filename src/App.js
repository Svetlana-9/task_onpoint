import "./App.css";
import React from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import home from "./img/Global/Home.png";
import line from "./img/Global/Line.png";
import logo from "./img/Global/logo.png";

function App() {
  const sliderRef = React.useRef(null);
  const onHomeButtonClick = () => {
    if (!sliderRef.current) {
      return;
    }
    sliderRef.current.scrollLeft = 0;
  };

  const goToSecondSlide = () => {
    if (!sliderRef.current) {
      return;
    }
    const scrollLeft = sliderRef.current.children.length
      ? sliderRef.current.children[0].clientWidth
      : 0;
    sliderRef.current.scrollLeft = scrollLeft;
  };

  return (
    <div className="app">
      <div className="home-panel">
        <img
          src={home}
          className="buttonHome"
          onClick={onHomeButtonClick}
          alt="Error"
        ></img>
        <img
          src={line}
          className="line"
          onClick={onHomeButtonClick}
          alt="Error"
        ></img>
        <p className="project">Project</p>
      </div>
      <img src={logo} className="logo" alt="Error"></img>
      <div className="slider" ref={sliderRef}>
        <div className="slider-section">
          <FirstPage goNext={goToSecondSlide} />
        </div>
        <div className="slider-section">
          <SecondPage />
        </div>
        <div className="slider-section">
          <ThirdPage />
        </div>
      </div>
    </div>
  );
}

export default App;
