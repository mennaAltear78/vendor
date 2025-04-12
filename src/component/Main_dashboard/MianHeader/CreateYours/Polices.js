import React, { useContext, useState ,useEffect} from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import { useNavigate } from "react-router-dom";
import classes from "./CreateHotel.module.css";
import Title from "../common/Title";
import TextField from "../../../Authentication/regular_components/TextField";
import SquareRadio from "../common/SquareRadio";
import appData from "../../../../config/appData";
import Menue from "../../../Authentication/regular_components/Menue";
import FeeCalculation from "../common/FeeCalculation";
import AuthContext from "../../../Authentication/Context/auth-context";
function Polices() {
  const [SelectedPolices, setSelectedPolices] = useState({});
  const [error, setError] = useState(null);
  const [CancelActive, SetCancelActive] = useState(true);
  const[timeSelected ,setTimeSelected]=useState({
    check_in:{from:{time:'' ,date:''},until:{time:'' ,date:''}},
    check_out:{from:{time:'' ,date:''},until:{time:'' ,date:''}}
  })
  const ctx =useContext(AuthContext)
  const navigate = useNavigate();
  useEffect(() => {

console.log(SelectedPolices);
if (SelectedPolices?.pet_policy?.length) {
  console.log(SelectedPolices.pet_policy[0]);
}

  }, [SelectedPolices]); 
  console.log(SelectedPolices);

  const clickPrivHandeler = () => {
    navigate(-1);
  };
  const onSumbitHandeler = (e) => {
    e.preventDefault();
    if (setSelectedPolices.length === 0 || (timeSelected.check_in.from.date==='' ||timeSelected.check_in.until.date===''||timeSelected.check_out.from.date===''||timeSelected.check_out.until.date==='')) {
      setError("All fields are required");
      return;
    }
 
    ctx.setHotelinfo({...ctx.HotelInfo,policies:{...timeSelected},pet_policy:{en:SelectedPolices.pet_policy[0]},smoking_policy:{en:SelectedPolices.smoking_policy[0]}})
    navigate("/payment");
  };
  const AllowanceHandling = (activeValue) => {
    
   ctx.setHotelinfo({...ctx.HotelInfo,cancelation_allowed:!activeValue["Cancelation Policy "]})
    SetCancelActive(!activeValue["Cancelation Policy "]);
  };
  const  timeFromHandelercheckIn=(time,date)=>{
    console.log(time ,date);
    setTimeSelected(prevState => ({
      ...prevState,
      check_in: {
        ...prevState.check_in,
        from: { time, date }
      }
    }));
  }
  const  timeUntilHandelercheckIn=(time,date)=>{
    console.log(time ,date);
    setTimeSelected(prevState => ({
      ...prevState,
      check_in: {
        ...prevState.check_in,
        until: { time, date }
      }
    }));
  }
  const  timeFromHandelercheckOut=(time,date)=>{
    console.log(time ,date);
    setTimeSelected(prevState => ({
      ...prevState,
      check_out: {
        ...prevState.check_out,
        from: { time, date }
      }
    }));
  }
  const  timeUntilHandelercheckOut=(time,date)=>{
    console.log(time ,date);
    setTimeSelected(prevState => ({
      ...prevState,
      check_out: {
        ...prevState.check_out,
        until: { time, date }
      }
    }));
  }
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onSumbitHandeler} className="w-[100vw]  h-screen ml-[100px] sm:ml-[150px] mb-[700px]">
        <div>
          <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
            <div className={classes.mainContaint}>
              <ProgressSteps pageNumber={5} count={6} circle={true} />
              <Title
                Title="Add your Terms, Polices "
                description="Here you can add what you need and define your terms as you want "
              />
            </div>
            <div className="font-usedFont p-5 w-[420px] pr-[50px] border-solid  border-2 border-gray-400/40 rounded-[15px] mt-5">
              <b className="font-bold font-usedFont text-[22px]">
                What are your check-in and check-out times?
              </b>
              <hr />
              <p>Check In</p>
              <div className="flex gap-10 mt-[-10px] mb-[10px]">
                <Menue
                  textfild="textBoxSmall"
                  label="from"
                  options={appData.times}
                  timeHandeler={timeFromHandelercheckIn}
                />
                <Menue
                  textfild="textBoxSmall"
                  label="until"
                  options={appData.times}
                  timeHandeler={timeUntilHandelercheckIn}
                />
              </div>
              <TextField
                label="Description(Optional)"
                textfild="bigTextBox"
                name="Description"
                Intext="Description"
              />

              <p className="mt-[-10px] font-usedFont  ">Check out</p>
              <div className="flex gap-10 mt-[-10px] mb-[10px]">
                <Menue
                  textfild="textBoxSmall"
                  label="from"
                  options={appData.times}
                  timeHandeler={timeFromHandelercheckOut}
                />
                <Menue
                  textfild="textBoxSmall"
                  label="until"
                  options={appData.times}
                  timeHandeler={timeUntilHandelercheckOut}
                />
              </div>
              <TextField
                label="Description(Optional)"
                textfild="bigTextBox"
                Intext="Description"
                name="Description"
                

              />
              <div className="mb-[20px]"> <SquareRadio
                name="customRadio"
                options={[
                  {
                    value: "police",
                    label: "Cancelation Policy ",
                  },
                ]}
                cost={true}
                description="Cancelation Allowed "
                AllowanceHandling={AllowanceHandling}
              /></div>
             

              <TextField
              Intext="Description"
                textfild="textBox2"
                name="Description"
                textarea={true}
              />
              {!CancelActive && <FeeCalculation />}
              <p className="font-usedFont text-[19px] mt-[-15px] mb-[10px]">
                Children and Familes
              </p>
              <TextField
       
                Intext="Description"
                textfild="textBox2"
                name="Description"
                textarea={true}
              />

              <div>
                <p className="mb-[-10px]">Pets Policy</p>
                <SquareRadio
                round="rounded-[50%]"
                  name="customRadio"
                  options={appData.petsPolicy.map((policy) => ({
                    value: policy.value,
                    label: policy.policy,
                  }))}
                  description="Additonal Cost"
                  onChange={(value)=>setSelectedPolices({...SelectedPolices,pet_policy:value})}
                  radio={true}
                  onevalue={true}
                />
                <p className="mb-[-8px] mt-10">
                  Smoking Policy
                </p>
                <SquareRadio
                round="rounded-[50%]"
                  name="customRadio"
                  options={appData.smokingPolicy.map((policy) => ({
                    value: policy.value,
                    label: policy.policy,
                  }))}
                  description="Additonal Cost"
                  onChange={(value)=>setSelectedPolices({...SelectedPolices,smoking_policy:value})}
                  radio={true}
                  onevalue={true}
                />
              </div>
            </div>
            {error && <p className="error">{error}</p>}
          </CreateHotelWrapper>

        </div>
      </form>
     
    </MainDashBoardWrapper>
  );
}

export default Polices;
