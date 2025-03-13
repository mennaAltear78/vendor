import React from "react";
import style from "./ProgressSteps.module.css";
function ProgressSteps(props) {
  return (
    <div className={!props.circle?style.progressStepsNoCircle:style["progressSteps"]}>
      {Array.from({ length: props.count }).map((_, index) => (
        <React.Fragment key={index}>
          {props.pageNumber > index + 1 ? (
            <>
           {  props.circle&&  <div className={style.circlegreen}>{index + 1}</div>}
              {index + 1 != props.count && <div className={style[!props.circle?'linebrown' :'linegreen']} />}
            </>
          ) : (
            <>
              {props.pageNumber === index + 1 ? (
              props.circle&&  <div className={style.circle1}>{index + 1}</div>
              ) : (
                
                props.circle&& <div className={style.circle}>{index + 1}</div>
              )}
              {index + 1 != props.count && <div className={style[props.count>8?'lineDash':'line']} />}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProgressSteps;


