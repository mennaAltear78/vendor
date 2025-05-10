import React from "react";
import style from "./ProgressSteps.module.css";
function ProgressSteps({circle,count,pageNumber }) {
  return (
    <div className={!circle?style.progressStepsNoCircle:style["progressSteps"]}>
      {Array.from({ length: count }).map((_, index) => (
        <React.Fragment key={index}>
          {pageNumber > index + 1 ? (
            <>
           {  circle&&  <div className={style.circlegreen}>{index + 1}</div>}
              {index + 1 != count && <div className={style[!circle?'linebrown' :'linegreen']} />}
            </>
          ) : (
            <>
              {pageNumber === index + 1 ? (
             circle&&  <div className={style.circle1}>{index + 1}</div>
              ) : (
                
                circle&& <div className={style.circle}>{index + 1}</div>
              )}
              {index + 1 != count && <div className={style[count>8?'lineDash':'line']} />}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProgressSteps;


