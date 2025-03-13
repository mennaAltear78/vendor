import React from "react";
import classes from "../CreateYours/CreateHotel.module.css";
import Button from "../../../Authentication/regular_components/Button";
function CreateHotelWrapper(props) {
  return (
    <div>
      {props.children}
      <footer>
        <div className={classes.lineFooter} />
        <div className={classes.btnFooter}>
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
