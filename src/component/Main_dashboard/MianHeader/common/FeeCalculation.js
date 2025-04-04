import React, { useState } from "react";
import TextField from "../../../Authentication/regular_components/TextField";
import styles from "./ChoisenHotel.module.css";
import icon from "../../../../Assets/Frame 1707481174.svg";
function FeeCalculation() {
  const [AddFee, SetAddFee] = useState([{ id: 0 }]); 

  const addingFeeHandle = () => {
    SetAddFee((prev) => [
      ...prev,
      { id: prev.length } 
    ]);
    console.log(AddFee);
    
  };

  return (
    <div className="flex flex-col  align center mt-[-30px] ">
      <div className="flex  justify-between mb-[-10px]">
        <p>Cancelation fee</p>
        <div className={styles.imgNote} >
        <img className="mr-[-100px]" src={icon} width={'24px'}/>
        <div className={styles.Note}>you should ....</div>
    </div>
      </div>

    
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
        {AddFee.map((item, index) => (
          <div key={item.id} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <TextField Intext="Number of days" type="number" label="Number of days" textfild="textBoxSmal" name="Description" />
            <TextField Intext="Fee Percentage" type="number" label="Fee Percentage" textfild="textBoxSmal" name="Description" />
            
  
            {index === AddFee.length - 1 && (
              <div className={styles.btn} onClick={addingFeeHandle}>
                <button>+</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeeCalculation;
