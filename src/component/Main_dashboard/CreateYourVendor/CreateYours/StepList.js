import { useContext } from "react";
import { StepCard } from "../common/StepCard";
import AuthContext from "../../../Authentication/Context/auth-context";

function StepList({ steps, HotelImageDone, onBtnAction }) {
     const ctx = useContext(AuthContext);
   
    
  return (
    <div className="sm:ml-[150px] ml-4 mt-[100px]  sm:mt-[50px]">
      {steps.map((step, index) => (
        <StepCard
          key={index}
          {...step}
          handlingBtnAction={() => onBtnAction(step)}
          stepCompleted={ctx. isHotelImageDone.includes(step.stepNumber)}
        />
      ))}
    </div>
  );
}
export default StepList;