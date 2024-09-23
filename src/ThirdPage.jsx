import "./ThirdPage.css";
import bottle from "./img/ThirdPage/Bottle.png";
import bubble1 from "./img/ThirdPage/Bubble 1.png";
import bubble2 from "./img/ThirdPage/Bubble 2.png";
import bubble3 from "./img/ThirdPage/Bubble 3.png";
import bubble4 from "./img/ThirdPage/Bubble 4.png";
import bubble5 from "./img/ThirdPage/Bubble 5.png";
import bubble6 from "./img/ThirdPage/Bubble 6.png";
import bubble7 from "./img/ThirdPage/Bubble 7.png";
import bubble8 from "./img/ThirdPage/Bubble 8.png";
import textBlock1 from "./img/ThirdPage/TextBlock 1.png";
import iconTextBlok1 from "./img/ThirdPage/IconTextBlock 1.png";
import textBlock2 from "./img/ThirdPage/TextBlock 2.png";
import iconTextBlok2 from "./img/ThirdPage/IconTextBlock 2.png";
import buttonMore from "./img/ThirdPage/ButtonMore.png";
import blockAdvantages from "./img/ThirdPage/BlockAdvantages.png";
import buttonClose from "./img/ThirdPage/ButtonClose.png";
import bgAdvantages from "./img/ThirdPage/BgAdvantages.png";
import buttonNext from "./img/ThirdPage/ButtonNext.png";
import buttonBack from "./img/ThirdPage/ButtonBack.png";

export default function ThirdPage() {
  const onClickButtonMore = () => {
    document.querySelector(".advantages").style.display = "block";
  };

  const onClickButtonClose = () => {
    document.querySelector(".advantages").style.display = "none";
    document.querySelector(".textAdvantagesPage2").style.display = "none";
    document.querySelector(".circle2").style.border = "solid 3px rgb(0, 0, 0)";
    document.querySelector(".circle2").style.backgroundColor =
      "rgb(255, 255, 255)";
  };

  const onClickButtonNext = () => {
    document.querySelector(".textAdvantagesPage2").style.display = "block";
    document.querySelector(".circle2").style.border = "none";
    document.querySelector(".circle2").style.backgroundColor =
      "rgb(252, 109, 169)";
  };

  const onClickButtonBack = () => {
    document.querySelector(".textAdvantagesPage2").style.display = "none";
    document.querySelector(".circle2").style.border = "solid 3px rgb(0, 0, 0)";
    document.querySelector(".circle2").style.backgroundColor =
      "rgb(255, 255, 255)";
  };

  return (
    <div className="third-page">
      <img src={bottle} className="bottle" alt="Error"></img>
      <img src={bubble1} className="bubble1" alt="Error"></img>
      <img src={bubble2} className="bubble2" alt="Error"></img>
      <img src={bubble3} className="bubble3" alt="Error"></img>
      <img src={bubble4} className="bubble4" alt="Error"></img>
      <img src={bubble5} className="bubble5" alt="Error"></img>
      <img src={bubble6} className="bubble6" alt="Error"></img>
      <img src={bubble7} className="bubble7" alt="Error"></img>
      <img src={bubble8} className="bubble8" alt="Error"></img>
      <div className="blockText">
        <p className="title3">Ключевое сообщение</p>
        <p className="brand">
          Brend<span className="xy">xy</span>
        </p>
      </div>
      <img src={textBlock1} className="textBlock1" alt="Error"></img>
      <img src={iconTextBlok1} className="iconTextBlock1" alt="Error"></img>
      <p className="textForBlock1">
        Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
        lorem sed risus ultricies
      </p>
      <img src={textBlock2} className="textBlock2" alt="Error"></img>
      <img src={iconTextBlok2} className="iconTextBlock2" alt="Error"></img>
      <p className="textForBlock2">
        A arcu <br />
        cursus vitae
      </p>
      <img
        src={buttonMore}
        className="buttonMore"
        alt="Error"
        onClick={onClickButtonMore}
      ></img>
      <div className="advantages">
        <img src={bgAdvantages} className="bgAdvantages" alt="Error"></img>
        <img src={blockAdvantages} className="bodyAdvantages" alt="Error"></img>
        <div className="blockAdvantages">
          <img
            src={buttonClose}
            className="buttonClose"
            alt="Error"
            onClick={onClickButtonClose}
          ></img>
          <p className="title3">Преимущества</p>
          <p className="brand">
            Brend<span className="xy">xy</span>
          </p>
          <div className="textAdvantages">
            <p className="number">01</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="number">02</p>
            <p className="text">Faucibus pulvinar elementum integer enim</p>
            <p className="number">03</p>
            <p className="text">Faucibus pulvinar elementum integer enim </p>
            <img
              src={buttonBack}
              className="buttonBack"
              alt="Error"
              onClick={onClickButtonBack}
            ></img>
            <img
              src={buttonNext}
              className="buttonNext"
              alt="Error"
              onClick={onClickButtonNext}
            ></img>
            <div className="circle"></div>
            <div className="circle2"></div>
          </div>
          <div className="textAdvantagesPage2">
            <p className="number">04</p>
            <p className="text">
              Mi bibendum neque egestas congue quisque egestas diam
            </p>
            <p className="number">05</p>
            <p className="text">Venenatis lectus magna fringilla urna</p>
            <p className="number">06</p>
            <p className="text">Venenatis lectus magna fringilla urna</p>
          </div>
        </div>
      </div>
    </div>
  );
}
