import React, { useRef, useState } from "react";
import folder from "../../../../Assets/rectangle.png";
import folder2 from "../../../../Assets/Rectangle 24120.svg";
import classes from "../CreateYours/CreateHotel.module.css";

function ImageDownload(props) {
  const [image, setImage] = useState();
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageData = {
        id: props.id,
        image: file,
      };
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      props.ImageHandeler(imageData);
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className={classes.ImageDownload}>
      <div style={{ position: "relative" }}>
        <div className={image ? classes.ImageTypeBlue : classes.ImageType}>
          {props.name}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        {image && (
          <img
            src={image}
            width="70px"
            alt="Selected"
            className="absolute top-[40px] left-1/2 -translate-x-1/2 -z-[1] opacity-80 rounded-md shadow-md overflow-hidden"
          />
        )}
        <img
          src={image ? folder2 : folder}
          onClick={() => fileInputRef.current.click()}
          className="cursor-pointer relative z-0 w-[140px] sm:w-[150px]" // المجلد في الأمام
          alt="Folder Icon"
        />
      </div>
    </div>
  );
}

export default ImageDownload;
