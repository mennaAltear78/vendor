import { useContext } from "react";
import { StepCard } from "../common/StepCard";
import AuthContext from "../../../Authentication/Context/auth-context";

function StepList({ steps, HotelImageDone, onBtnAction }) {
     const ctx = useContext(AuthContext);
   
    
  return (
    <div className="ml-[150px] mt-[50px]">
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