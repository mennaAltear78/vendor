import React, { useEffect, useState } from "react";
import TextField from "../../../Authentication/regular_components/TextField";
import styles from "./ChoisenHotel.module.css";
import icon from "../../../../Assets/Frame 1707481174.svg";

function FeeCalculation({ props, disabledd, editt }) {
  const [AddFee, SetAddFee] = useState([{ id: 0, key: "", value: "" }]); // Initialize with key and value
  const [fee, setFee] = useState({});

  const addingFeeHandle = () => {
    if (AddFee.length === 6) return;
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
        <p className="w-full">Cancelation fee</p>
        {editt ?
           (
            <div className="w-full flex justify-end ">
              <span className="material-symbols-outlined text-[15px] w-4 h-4 p-1 rounded-lg bg-[#0000ff2a] mt-[14px] text-[blue] cursor-pointer">
                edit
              </span>
            </div>
          ) : (
        <div className={styles.imgNote}>    <img className="mr-[-100px]" src={icon} width={"24px"} />
          </div>)}
          <div className={styles.Note}>you should ....</div>
        
      </div>

      <div className="flex flex-col gap-[10px] mt-[10px]">
        {AddFee.map((item, index) => (
          <div key={item.id} className="flex gap-[10px] items-center">
            <TextField
              value={item.key}
              OnchangeHnadeler={(e) => handleKeyChange(index, e.target.value)}
              Intext="Number of days"
              type="text"
              label="Number of days"
              textfild="textBoxSmal"
              name="Description"
              disabled={disabledd}
            />
            <TextField
              value={item.value}
              OnchangeHnadeler={(e) => handleValueChange(index, e.target.value)}
              Intext="Fee Percentage"
              type="number"
              label="Fee Percentage"
              textfild="textBoxSmal"
              name="Description"
              disabled={disabledd}
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
