import React from "react";
import classes from "../CreateYours/CreateHotel.module.css";
import Button from "../../../Authentication/regular_components/Button";
function CreateHotelWrapper(props) {
  return (
    <div>
      {props.children}
      <footer>
        <div className={classes.lineFooter} />
        <div className="flex justify-end h-[70px] ml-[10px] items-center w-[87%] sm:gap-[10px] " >
          <Button
            btnCss="whiteCssS"
            name="previous"
            onClickAction={props.clickHandeler}
            type="button"
          />
          <Button btnCss="blueCssS" name="continue" />
        </div>
      </footer>
    </div>
  );
}

export default CreateHotelWrapper;
