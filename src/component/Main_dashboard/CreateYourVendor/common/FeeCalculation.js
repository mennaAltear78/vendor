import React, { useEffect, useState } from "react";
import TextField from "../../../Authentication/regular_components/TextField";
import styles from "./ChoisenHotel.module.css";
import icon from "../../../../Assets/Frame 1707481174.svg";

function FeeCalculation(props) {
  const [AddFee, SetAddFee] = useState([{ id: 0, key: "", value: "" }]); // Initialize with key and value
  const [fee, setFee] = useState({});

  const addingFeeHandle = () => {
    if (AddFee.length===6) return
    SetAddFee((prev) => [
      ...prev,
      { id: prev.length, key: "", value: "" }, // Add new row with empty key and value
    ]);
  };

  const handleKeyChange = (index, newKey) => {
    const updated = [...AddFee];
    updated[index].key = newKey; // Update key for this specific row
    SetAddFee(updated);

    // Update fee object after key change
    const updatedFee = { ...fee, [newKey]: updated[index].value };
    setFee(updatedFee);

    // Pass the updated fee to the parent after filtering empty values
    const filteredFee = Object.fromEntries(
      Object.entries(updatedFee).filter(([_, value]) => value !== "")
    );
    props.feeObjectHandeler(filteredFee);
  };

  const handleValueChange = (index, newValue) => {
    const updated = [...AddFee];
    updated[index].value = newValue; // Update value for this specific row
    SetAddFee(updated);

    // Update fee object after value change
    const updatedFee = { ...fee, [updated[index].key]: newValue };
    setFee(updatedFee);

    // Pass the updated fee to the parent after filtering empty values
    const filteredFee = Object.fromEntries(
      Object.entries(updatedFee).filter(([_, value]) => value !== "")
    );
    props.feeObjectHandeler(filteredFee);
  };

  return (
    <div className="flex flex-col align center mt-[-30px]">
      <div className="flex justify-between mb-[-10px]">
        <p>Cancelation fee</p>
        <div className={styles.imgNote}>
          <img className="mr-[-100px]" src={icon} width={"24px"} />
          <div className={styles.Note}>you should ....</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {AddFee.map((item, index) => (
          <div
            key={item.id}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <TextField
              value={item.key}
              OnchangeHnadeler={(e) => handleKeyChange(index, e.target.value)}
              Intext="Number of days"
              type="text"
              label="Number of days"
              textfild="textBoxSmal"
              name="Description"
            />
            <TextField
              value={item.value}
              OnchangeHnadeler={(e) => handleValueChange(index, e.target.value)}
              Intext="Fee Percentage"
              type="number"
              label="Fee Percentage"
              textfild="textBoxSmal"
              name="Description"
            />

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
