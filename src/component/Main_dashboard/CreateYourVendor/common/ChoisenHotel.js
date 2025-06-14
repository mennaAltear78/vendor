import { Icon } from "lucide-react";
import classes from "./ChoisenHotel.module.css";

function ChoisenHotel(props) {
  return (
    <div
      className="sm:w-[220px] w-[300px] h-[200px] font-usedFont border-solid text-[13px] border-2 border-[#8080805b] rounded-[15px] p-[10px] mt-[50px]"
      style={
        props.selected
          ? { backgroundColor: "#d99e2041", borderColor: "#d99e20e3" }
          : { borderColor: "#8080805b" }
      }
    >
      <label className={classes.choice}>
        <div className={classes.OptionDiv}>
          <input
            type="radio"
            name="choice"
            value={props.Title}
            className={classes.custom_radio}
            onChange={props.onSelect}
          />
          <span className={classes.custom_radio_label}></span>
        </div>

        <div className={classes.mainDescription}>
          <div
            className={classes.imgeContainer}
            style={{
              background: props.selected
                ? "rgba(255, 123, 0, 0.17)"
                : undefined,
            }}
          >
            <div
              className="w-10 h-10 flex items-center justify-center "
              // style={{ backgroundImage: `url(${props.icon})` }}
            >
              {/* <props.icon className="w-[900px]" /> */}
              <span
                class="material-symbols-outlined text-[35px]"
                style={{ color: props.selected ? "orange" : undefined }}
              >
                {props.icon}
              </span>
            </div>
          </div>

          <b className="font-bold -mb-[100px]">{props.Title}</b>
          <p
            className="-mb-[100px] text-[13px] text-[gray]"
            style={{ color: props.selected ? "#d99e20e3" : undefined }}
          >
            {props.desription}
          </p>
        </div>
      </label>
    </div>
  );
}

export default ChoisenHotel;
