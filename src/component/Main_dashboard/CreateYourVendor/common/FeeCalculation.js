import React, { useEffect, useState } from "react";
import TextField from "../../../Authentication/regular_components/TextField";
import styles from "./ChoisenHotel.module.css";
import icon from "../../../../Assets/Frame 1707481174.svg";
import { v4 as uuidv4 } from "uuid";

function FeeCalculation({ feeObjectHandeler, editt, dataFee }) {
  const [AddFee, SetAddFee] = useState([{ id: 0, key: 0, value: 0 }]);
  // const [fee, setFee] = useState(dataFee || {});
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    console.log("dataFee:", dataFee);
    console.log("AddFee:", AddFee);

    // Map over dataFee entries and create new fee objects
    if(dataFee){
    const newFees = Object.entries(dataFee).map(([key, value]) => ({
      id: uuidv4(),
      key: +key,
      value: value,
    }));

    // Update AddFee by appending new entries (or replacing, depending on your intent)
    SetAddFee([...newFees]);}
  }, [dataFee]);

  const addingFeeHandle = () => {
    if (AddFee.length === 6) return;
    SetAddFee((prev) => [
      ...prev,
      { id: uuidv4(), key: 0, value: 0 }, // Add new row with empty key and value
    ]);
  };

  const handleKeyChange = (index, newKey) => {


    const updated = [...AddFee];
    updated[index].key = newKey; // Update key for this specific row
    SetAddFee(updated);

    const fee = updated.reduce((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {});

    // Pass the updated fee to the parent after filtering empty values
    const filteredFee = Object.fromEntries(
      Object.entries(fee).filter(([_, value]) => value !== 0)
    );
    feeObjectHandeler(filteredFee);
  };

  const handleValueChange = (index, newValue) => {
    const parsedKey = +newValue;
    if (isNaN(parsedKey) || parsedKey < 0) return;

    const updated = [...AddFee];
    updated[index].value = newValue; // Update value for this specific row
    SetAddFee(updated);

    const fee = updated.reduce((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {});

 
    // Pass the updated fee to the parent after filtering empty values
    const filteredFee = Object.fromEntries(
      Object.entries(fee).filter(([key,value]) =>Number(key)!== 0)
    );
    feeObjectHandeler(filteredFee);
  };

  return (
    <div className="flex flex-col align center mt-[-30px]">
      <div className="flex justify-between mb-[-10px]">
        <p className="w-full">Cancelation fee</p>
        {editt ? (
          <div
            className="w-full flex justify-end "
            onClick={() => setDisabled(!disabled)}
          >
            <span className="material-symbols-outlined text-[15px] w-4 h-4 p-1 rounded-lg bg-[#0000ff2a] mt-[14px] text-[blue] cursor-pointer">
              edit
            </span>
          </div>
        ) : (
          <div className={styles.imgNote}>
            <img className="mr-[-100px]" src={icon} width={"24px"} />
          </div>
        )}
        <div className={styles.Note}>you should ....</div>
      </div>
      {console.log("addfee", AddFee)}

      <div className="flex flex-col gap-[10px] mt-[10px]">
        {AddFee.map((item, index) => (
          <div key={item.id} className="flex gap-[10px] items-center">
            <TextField
              value={item.key}
              OnchangeHnadeler={(e) => handleKeyChange(index, +e.target.value)}
              Intext="Number of days"
              type="number"
              label="Number of days"
              textfild="textBoxSmal"
              name="Description"
              disabled={editt ? disabled : false}
            />
            <TextField
              value={item.value}
              OnchangeHnadeler={(e) =>
                handleValueChange(index, +e.target.value)
              }
              Intext="Fee Percentage"
              type="number"
              label="Fee Percentage"
              textfild="textBoxSmal"
              name="Description"
              disabled={editt ? disabled : false}
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
