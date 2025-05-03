import React, { Fragment, useContext, useState } from "react";
import style from "./Side_bar.module.css";
import IconDiv from "./IconDiv";
import home from "../../../Assets/icons/home.png";
import graph from "../../../Assets/icons/graph.svg";
import logo from "../../../Assets/icons/Screenshot 2025-02-10 023419.png";
import logo2 from "../../../Assets/icons/log.png";
import AuthContext1 from "../../Authentication/Context/Mian-Page-Context";
import logout from "../../../Assets/logout_24dp_BB271A_FILL0_wght400_GRAD0_opsz24.svg";
import PopupMessage from "../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import SpinnerLoading from "../../Authentication/regular_components/SpinnerLoading";

function SideBar(props) {
  const ctx = useContext(AuthContext1); // Use correct context name
  const [popMessage, isPopMessage] = useState(false);
  const [loading, setIsloading] = useState(false);

  const LogoutHandler = () => {
    console.log("succ log out");
    isPopMessage(true);
  };
  const handleTogglePopup = () => {
    ctx.logout(); // Call logout function from context
    setIsloading(true);
  };
  const handlebackNavigation = () => {
    isPopMessage(false);
  };
  const icons = [
    { ActiveLine: true, img: graph, label: "Home" },
    { ActiveLine: false, img: home, label: "Reservations" },
    { ActiveLine: false, img: graph, label: "Finance" },
    { ActiveLine: false, img: home, label: "Guest Reviews" },
    { ActiveLine: false, img: graph, label: "Property",path:'/PropertyList' },
    { ActiveLine: false, img: home, label: "Analytics" },
    { ActiveLine: false, img: graph, label: "Inbox" },
    { ActiveLine: false, img: home, label: "Rates & Aviablity" },
    
  ];
  return (
    <div >
      <div
        className={props.hover ? style.side_bar : style.NOHoverSide_bar}
        onMouseEnter={props.onHoverHandeler}
        onMouseLeave={props.onHoverNoHandeler}
        onTouchStart={props.onHoverHandeler}
        onTouchEnd={props.onHoverNoHandeler}
      >
        <div>
          <div className={style[`imgeoverlay`]}>
            {props.hover ? (
              <img src={logo} />
            ) : (
              <img className="mr-[22px]" src={logo2} />
            )}
          </div>
          <div className={style["iconsDivs"]}>
         
            {icons.map((icon, index) => (
              <IconDiv
                key={index}
                path={icon.path?icon.path:`/MianDahboard`}
                ActiveLine={icon.ActiveLine}
                img={icon.img}
                label={icon.label}
                isHovered={props.hover}
              />
            ))}
            <div style={{ marginTop: "70px" }} onClick={LogoutHandler}>
              <IconDiv
                ActiveLine={false}
                img={logout}
                label="logout"
                isHovered={props.hover}
              />
            </div>
          </div>
        </div>
        {props.hover && (
          <div className={style["footer"]}>
            <p>
              Need help? Check out our{" "}
              <span style={{ fontSize: "15px", color: "#D99E20" }}>FAQ </span>{" "}
              or reach out to us at{" "}
              <span style={{ color: "#D99E20", fontSize: "12px" }}>
                spanhotelsupport @sphinx.com{" "}
              </span>
            </p>
          </div>
        )}
      </div>
      {popMessage &&
        (loading ? (
          <SpinnerLoading spinner={true} />
        ) : (
          <PopupMessage
            popMessageCss="ErrorPopupMessage"
            handleTogglePopup={handlebackNavigation}
            title="Are you sure you wanna leave"
            btnCss="closebtnCss"
            CancelbtnCss="whiteCssS"
            handlebackNavigation={handleTogglePopup}
            btnMessage1="cancel"
            btnMessage2="ok"
            cancel={true}
          />
        ))}
    </div>
  );
}

export default SideBar;
