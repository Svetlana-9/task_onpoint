import "./SecondPage.css";
import sperm1 from "./img/SecondPage/Sperm 1.png";
import sperm2 from "./img/SecondPage/Sperm 2.png";
import sperm3 from "./img/SecondPage/Sperm 3.png";
import sperm4 from "./img/SecondPage/Sperm 4.png";
import sperm5 from "./img/SecondPage/Sperm 5.png";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

export default function SecondPage() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div className="second-page" ref={ref}>
      <img
        src={sperm1}
        className={classNames("sperm1", { animation: inView })}
        alt="Error"
      ></img>
      <img
        src={sperm2}
        className={classNames("sperm2", { animation: inView })}
        alt="Error"
      ></img>
      <img
        src={sperm3}
        className={classNames("sperm3", { animation: inView })}
        alt="Error"
      ></img>
      <img
        src={sperm4}
        className={classNames("sperm4", { animation: inView })}
        alt="Error"
      ></img>
      <img
        src={sperm5}
        className={classNames("sperm5", { animation: inView })}
        alt="Error"
      ></img>
      <p className="title2">
        Текст <br />
        сообщения
      </p>
      <div className="wrapper">
        <div className="bg" />
        <div className="container">
          <div className="textForContainer">
            <span className="bold">Lorem ipsum dolor sit amet </span>,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in
            aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec
            ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
            sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
            lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
            interdum consectetur libero id. Nec ullamcorper sit amet risus
            nullam eget felis eget. Mollis aliquam ut porttitor leo a diam
            sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
            mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
            tortor condimentum lacinia. Et malesuada fames ac turpis egestas
            integer eget. Elementum pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere. Amet justo donec enim diam vulputate ut
            pharetra sit. Risus ultricies tristique nulla aliquet enim tortor at
            auctor. Velit sed ullamcorper morbi tincidunt ornare massa. Quis
            hendrerit dolor magna eget est lorem ipsum. Etiam dignissim diam
            quis enim. Gravida neque convallis a cras. Ut enim blandit volutpat
            maecenas volutpat. Mauris sit amet massa vitae tortor condimentum
            lacinia quis vel. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut
            morbi tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam
            eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi
            etiam dignissim diam quis enim lobortis. Est sit amet facilisis
            magna. Neque laoreet suspendisse interdum consectetur libero id. Nec
            ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut
            porttitor leo a diam sollicitudin tempor id. Euismod quis viverra
            nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit
            amet massa vitae tortor condimentum lacinia. Et malesuada fames ac
            turpis egestas integer eget. Elementum pulvinar etiam non quam lacus
            suspendisse faucibus interdum posuere. Amet justo donec enim diam
            vulputate ut pharetra sit. Risus ultricies tristique nulla aliquet
            enim tortor at auctor. Velit sed ullamcorper morbi tincidunt ornare
            massa. Quis hendrerit dolor magna eget est lorem ipsum. Etiam
            dignissim diam quis enim. Gravida neque convallis a cras. Ut enim
            blandit volutpat maecenas volutpat. Mauris sit amet massa vitae
            tortor condimentum lacinia quis vel. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in
            aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec
            ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
            sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
            lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
            interdum consectetur libero id. Nec ullamcorper sit amet risus
            nullam eget felis eget. Mollis aliquam ut porttitor leo a diam
            sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
            mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
            tortor condimentum lacinia. Et malesuada fames ac turpis egestas
            integer eget. Elementum pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere. Amet justo donec enim diam vulputate ut
            pharetra sit. Risus ultricies tristique nulla aliquet enim tortor at
            auctor. Velit sed ullamcorper morbi tincidunt ornare massa. Quis
            hendrerit dolor magna eget est lorem ipsum. Etiam dignissim diam
            quis enim. Gravida neque convallis a cras. Ut enim blandit volutpat
            maecenas volutpat. Mauris sit amet massa vitae tortor condimentum
            lacinia quis vel. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut
            morbi tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam
            eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi
            etiam dignissim diam quis enim lobortis. Est sit amet facilisis
            magna. Neque laoreet suspendisse interdum consectetur libero id. Nec
            ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut
            porttitor leo a diam sollicitudin tempor id. Euismod quis viverra
            nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit
            amet massa vitae tortor condimentum lacinia. Et malesuada fames ac
            turpis egestas integer eget. Elementum pulvinar etiam non quam lacus
            suspendisse faucibus interdum posuere. Amet justo donec enim diam
            vulputate ut pharetra sit. Risus ultricies tristique nulla aliquet
            enim tortor at auctor. Velit sed ullamcorper morbi tincidunt ornare
            massa. Quis hendrerit dolor magna eget est lorem ipsum. Etiam
            dignissim diam quis enim. Gravida neque convallis a cras. Ut enim
            blandit volutpat maecenas volutpat. Mauris sit amet massa vitae
            tortor condimentum lacinia quis vel.
          </div>
        </div>
      </div>
    </div>
  );
}
