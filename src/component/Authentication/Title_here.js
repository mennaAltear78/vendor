import React, { useContext, useEffect } from "react";
import style from "./Title_here.module.css";
import { useState } from "react";
import bluecheckCircle from "../../Assets/Ellipse 407.svg";
import checkCircle from "../../Assets/Ellipse 409.svg";
import scrollleft from "../../Assets/cancel (1).svg";
import scrollright from "../../Assets/cancelRight.svg";

import frame19 from "../../Assets/Frame 1707481219.png";
import frame20 from "../../Assets/Frame 1707481220.png";
import stars from "../../Assets/Group 1261153538.png";
import dashboardpic from '../../Assets/Dark.svg'
import { AuthContext } from "./Context/auth-context";
function Title_here() {
  const ctx = useContext(AuthContext);

  const [scroll, setScroll] = useState(dashboardpic);
  const [i, setI] = useState(0);
  let img = [dashboardpic, dashboardpic, dashboardpic];

  const HanelPositionScroLeft = () => {
    const nextIndex = (i + 1) % img.length;
    console.log(img[nextIndex], i + 1); // This will cycle through the images
    setScroll(img[nextIndex]);
    setI(nextIndex);
  };
  const HanelPositionScroRight = () => {
    // For right scroll, go to the previous index, and wrap around when at 0
    const prevIndex = (i - 1 + img.length) % img.length; // This ensures cycling backward
    console.log(i, "right scroll", prevIndex); // Debugging
    setScroll(img[prevIndex]);
    setI(prevIndex);
  };
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100); // بعد 300ms يظهر العنصر
  }, []);
  return (
    <div>
      <div
        className={style["imgSlider"]}
        style={{
          opacity: visible ? 1 : 0.3, // يظهر تدريجيًا
          transform: visible ? "translateX(0px)" : "translateX(40px)",
          transition: "opacity 0.3s linear, transform 0.3s linear",
          textAlign: "center",
          // padding: "20px",
          fontSize: "24px",
        }}
      >
        <img className="w-[400px] sm:w-[500px]" src={scroll} />
        {ctx.isRequest ? (
          <div className={style["frame19"]}>
         
            <img style={{ width: "150px" }} src={frame19} />
          </div>
        ) : (
          ""
        )}
        {ctx.isRequest ? (
          <div className={style["frame20"]}>
            <img style={{ width: "120px" }} src={frame20} />
          </div>
        ) : (
          ""
        )}
        {ctx.isRequest ? (
          <div className={style["stars"]}>
            <img style={{ width: "60px" }} src={stars} />
          </div>
        ) : (
          ""
        )}
        <div className={style["Title_here"]}>
          <b>Title Here</b>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>

          <div className={style["checkCircle"]}>
            <img  src={checkCircle} />
            <img  src={bluecheckCircle} />
            <img  src={checkCircle} />
            <img  src={checkCircle} />
          </div>
          <div className={style.scroll}>
            <div className={style.scrolleft} onClick={HanelPositionScroLeft}>
              <img src={scrollleft} />
            </div>
            <div
              className={style.scrolleft}
              onClick={HanelPositionScroRight}
            >
              <img src={scrollright} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title_here;
