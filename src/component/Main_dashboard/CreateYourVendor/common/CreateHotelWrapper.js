import classes from "../CreateYours/CreateHotel.module.css";
import Button from "../../../Authentication/regular_components/Button";
import SpinnerLoading from "../../../Authentication/regular_components/SpinnerLoading";
function CreateHotelWrapper(props) {
  
  return (
    <div>
      {props.children}
      <footer>
        <div className={classes.lineFooter} />
        <div className="flex justify-end h-[70px] sm:ml-[10px] ml-[52px] items-center w-[87%] sm:gap-[10px] z-[9999] " >
          <Button
            btnCss="whiteCssS"
            name="previous"
            onClickAction={props.clickHandeler}
            type="button"
            
          />
         {props.isLoading? <SpinnerLoading/>:<Button btnCss="blueCssS" name="continue" />}
        </div>
      </footer>
    </div>
  );
}

export default CreateHotelWrapper;
