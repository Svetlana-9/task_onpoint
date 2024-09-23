import spermBlurry from "./img/FirstPage/SpermBlurry.png";
import bacterium1 from "./img/FirstPage/Bacterium 1.png";
import buttonWhatNext from "./img/FirstPage/ButtonWhatNext.png";
import sperm from "./img/FirstPage/Sperm.png";
import virus1 from "./img/FirstPage/Virus 1.png";
import bacteriumBlurry1 from "./img/FirstPage/BacteriumBlurry 1.png";
import bacteriumBlurry2 from "./img/FirstPage/BacteriumBlurry 2.png";
import virus2 from "./img/FirstPage/Virus 2.png";
import bacillus from "./img/FirstPage/Bacillus.png";
import bacterium2 from "./img/FirstPage/Bacterium 2.png";
import "./FirstPage.css";

export default function FirstPage(props) {
  return (
    <div className="first-page">
      <img src={spermBlurry} className="spermBlurry" alt="Error"></img>
      <img src={bacterium1} className="bacterium1" alt="Error"></img>
      <div className="txt">
        <p className="helloTxt">Привет,</p>
        <p className="title">
          Это <span className="not">не </span>
          коммерческое задание
        </p>
        <img
          src={buttonWhatNext}
          className="buttonWhatNext"
          alt="Error"
          onClick={props.goNext}
        ></img>
        <img src={sperm} className="sperm" alt="Error"></img>
        <img src={virus1} className="virus1" alt="Error"></img>
        <img
          src={bacteriumBlurry1}
          className="bacteriumBlurry1"
          alt="Error"
        ></img>
        <img
          src={bacteriumBlurry2}
          className="bacteriumBlurry2"
          alt="Error"
        ></img>
        <img src={virus2} className="virus2" alt="Error"></img>
        <img src={bacillus} className="bacillus" alt="Error"></img>
        <img src={bacterium2} className="bacterium2" alt="Error"></img>
      </div>
    </div>
  );
}
