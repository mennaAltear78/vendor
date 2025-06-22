import React from "react";
import style from "./ProgressSteps.module.css";
function ProgressSteps({ circle, count, pageNumber }) {
  return (
    <div className={!circle ? "flex -mt-5 mb-5 -ml-1.5" : "flex mb-[30px] ml-2.5 w-[84%]"}>
      {Array.from({ length: count }).map((_, index) => (
        <React.Fragment key={index}>
          {pageNumber > index + 1 ? (
            <>
              {circle && (
                <div className="w-[35px] h-[35px] bg-[#28A746] rounded-[20px] mt-2.5 text-white flex justify-center items-center">
                  {index + 1}
                </div>
              )}
              {index + 1 !== count && (
                <div
                  className={
                    !circle
                      ? "w-[210px] h-[6px] bg-[#D99E20] mt-[25px] ml-2.5"
                      : "w-[215px] h-[5px] bg-[#28A746] mt-[25px]"
                  }
                />
              )}
            </>
          ) : (
            <>
              {pageNumber === index + 1 ? (
                circle && (
                  <div className="w-[35px] h-[35px] bg-[rgba(51,48,48,0.664)] rounded-[20px] mt-2.5 text-white flex justify-center items-center">
                    {index + 1}
                  </div>
                )
              ) : (
                circle && (
                  <div className="w-[35px] h-[35px] bg-[#F2F2F2] rounded-[20px] mt-2.5 text-black flex justify-center items-center">
                    {index + 1}
                  </div>
                )
              )}
              {index + 1 !== count && (
                <div
                  className={
                    count > 8
                      ? "w-[110px] h-[5px] bg-[rgba(128,128,128,0.151)] mt-[25px]"
                      : "w-[215px] h-[5px] bg-[rgba(128,128,128,0.151)] mt-[25px]"
                  }
                />
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProgressSteps;


