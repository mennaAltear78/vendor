import React, { useRef, useState } from "react";
import SpinnerLoading from "../../../regular_components/SpinnerLoading"

function AddNewFile(props) {

    const fileInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isFileUpload,setIsFileUpload]=useState(null)
  
    const handleClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setIsFileUpload(false)
      if (file) {
        console.log("File selected:", file);

       

        props.onFileSelect(props.FileName, file);
        setIsLoading(true);  // بدأ التحميل
       
        setTimeout(() => {
          setIsFileUpload(true)
          setIsLoading(false);
        }, 1000);
        
      } else if(props.required && !file) {
       
        console.log("No file selected");
      }
    };
  
    return (
      <div style={{ width: '90%', marginTop: "-20px" }}>
        <p style={{ marginBottom: '-5px' }}>{props.FileName || 'Other file'}</p>
        <div
          style={{
            border: "1px dashed rgba(78, 80, 78, 0.36)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: '10px',
            height: "70px",
          }}
        >
          {isLoading ? (
            <SpinnerLoading /> // افتراضياً هنا يتم عرض الspinner عند تحميل الملف
          ) : (
            <div>
              <button
                onClick={handleClick}
                type="button"
                style={{
                  padding: "10px",
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "5px",
                  
                }}
              >
                Upload File
              </button>
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
                required={props.required ||false}
              />
            </div>
          )}
        
        </div>
        {isFileUpload && <p style={{color:'green ' ,paddingLeft:'200px' ,marginTop:'-10px',marginBottom:'-2px'}}>Done ✔️</p>}
      </div>
    );
  };
  

  

export default AddNewFile;
