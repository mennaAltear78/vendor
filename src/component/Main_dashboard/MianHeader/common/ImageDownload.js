import React, { useRef, useState } from 'react'
import folder from '../../../../Assets/rectangle.png'
import folder2 from '../../../../Assets/Rectangle 24120.svg'
import classes from "../CreateYours/CreateHotel.module.css";

function ImageDownload(props) {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.ImageDownload}>

      <div style={{ position: "relative"}}>

 <div className={image?classes.ImageTypeBlue:classes.ImageType}>{props.name}</div>

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
        style={{
          position: "absolute",
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "-1", 
          opacity: "0.8", 
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          overflowY:'hidden'
        }}
      />
    )}


    <img
      src={image ? folder2 : folder}
      width="150px"
      onClick={() => fileInputRef.current.click()}
      style={{ cursor: "pointer", position: "relative", zIndex: "0" }} // المجلد في الأمام
      alt="Folder Icon"
    />
  </div>
    </div>
  );
}

export default ImageDownload