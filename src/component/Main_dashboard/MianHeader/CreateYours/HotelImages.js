import React, { useContext, useState } from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import classes from "./CreateHotel.module.css";
import { useNavigate } from "react-router-dom";
import PopupMessage from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import gif from "../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";
import ImageDownload from "../common/ImageDownload";
import download from "../../../../Assets/solar_upload-bold.png";
import AuthContext from "../../../Authentication/Context/auth-context";

function HotelImages(props) {
  const [Done, SetDone] = useState(false);
  const [error, setError] = useState(null);
  const [isPop_up, SetPop_up] = useState(false);
 const ctx =useContext(AuthContext)
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
    SetPop_up(true);
    if(props.HotelImages){
      ctx.setHotelImageDone((prevSteps) => [...prevSteps,3]);
    }else if (!props.HotelImages)
      ctx.setHotelImageDone((prevSteps) => [...prevSteps,5]);
  };

  const clickPrivHandeler = () => {
    navigate("/CompleteProfie");
    SetDone(true);
  };
  const CancelHandeler = () => {
    navigate("/CompleteProfie");
  };

  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler} className="w-[100vw] h-screen ml-[100px] sm:ml-[150px] mb-[400px]">
        <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
          <div className={classes.rating}>
            <b>
              {/* Primary Images */}
              {props.title}
              <span style={{ color: "red" }}>{props.limits}</span>
            </b>
            <hr />
            <p>Upload it</p>
            <div className={classes.uploadImage}>
                <img src={download}/>
                <p style={{color:'gray' ,fontSize:'10px'}}>Upload From Max 10 MG Per File</p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <ImageDownload name="primary image" />
              <ImageDownload name="primary image" />
              <ImageDownload name="primary image" />
            </div>
           {props.HotelImages&&<> <hr />
            <b>
              cover Images
              <span style={{ color: "red" }}>
                (must upload at least 5 images up to 200)
              </span>
            </b>
            <div style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
              <ImageDownload name="cover image" />
              <ImageDownload name="cover image" />
              <ImageDownload name="cover image" />
            </div></>}
            <div style={{ display: "flex", gap: "5px" }}>
              <ImageDownload name="cover image" />
              <ImageDownload name="cover image" />
            </div>
          </div>
          {error && <p className="error">{error}</p>}
        </CreateHotelWrapper>
      </form>
      {isPop_up && (
        <PopupMessage
          popMessageCss="popupMain"
          // details="Now, proceed to upload images for the room. 😊📸"
          CancelbtnCss="blueCssS"
          highlighted="The Hotel images has been uploaded successfully!"
          messageImg={gif}
          // cancel={true}
          btnCss="blueCss"
          btnMessage2="Go to"
          btnMessage1="continue"
          cancelHandeler={CancelHandeler}
          close={true}
          handleTogglePopup={CancelHandeler}
        />
      )}
    </MainDashBoardWrapper>
  );
}

export default HotelImages;
