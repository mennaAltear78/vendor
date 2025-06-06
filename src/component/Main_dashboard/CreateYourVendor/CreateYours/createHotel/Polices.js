import React, { useContext, useState} from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import { useNavigate } from "react-router-dom";
import Title from "../../common/Title";
import SquareRadio from "../../common/SquareRadio";
import appData from "../../../../../config/appData";
import Menue from "../../../../Authentication/regular_components/Menue";
import FeeCalculation from "../../common/FeeCalculation";
import AuthContext from "../../../../Authentication/Context/auth-context";
import InputField from "../../common/InputField";

function Polices() {
  const [SelectedPolices, setSelectedPolices] = useState({});
  const [error, setError] = useState(null);
  const [CancelActive, SetCancelActive] = useState(false);
  const [fee, setfee] = useState()
  const [descriptions, setDescriptions] = useState({
    description_1: { en: '' },
    description_2: { en: '' },
    children_and_families: { en: '' },
    cancelation_policy: { en: '' }
  })
  const [timeSelected, setTimeSelected] = useState({
    check_in: { from: { time: '', date: '' }, until: { time: '', date: '' } },
    check_out: { from: { time: '', date: '' }, until: { time: '', date: '' } }
  })
  const ctx = useContext(AuthContext)
  const navigate = useNavigate();

  const clickPrivHandeler = () => {
    navigate(-1);
  };
  const onSumbitHandeler = (e) => {
    e.preventDefault();
    if (SelectedPolices.length === 0 || (descriptions.children_and_families.en.length < 10
      || descriptions.cancelation_policy.en.length <10
      || timeSelected.check_in.from.date === ''
      || timeSelected.check_in.until.date === ''
      || timeSelected.check_out.from.date === ''
      || timeSelected.check_out.until.date === '')) {
      setError("All fields are required. and discription should be more than 10 characters");
      return;
    } 
    else if (
      
      (timeSelected.check_in.until.time === timeSelected.check_in.from.time &&
       timeSelected.check_in.until.date === timeSelected.check_in.from.date) ||
    
  
      (timeSelected.check_out.until.time === timeSelected.check_out.from.time &&
       timeSelected.check_out.until.date === timeSelected.check_out.from.date)
    ) {
      setError("Time and Date from and until cannot be exactly the same");
      return;
    }
    ctx.setHotelinfo({
      ...ctx.HotelInfo
      , policies: {
        ...ctx.HotelInfo.policies,
        cancelation_policy: { en: descriptions.cancelation_policy.en },
        description: {en:descriptions.description_1.en},
        description: {en:descriptions.description_2.en},
        children_and_families: { en: descriptions.children_and_families.en },
        ...timeSelected,
        pet_policy: { en: SelectedPolices.pet_policy[0] },
        smoking_policy: { en: SelectedPolices.smoking_policy[0] },
        cancelation_fee_rule: fee,
        cancelation_allowed: CancelActive
      }
    })
    navigate("/payment");
  };
  const AllowanceHandling = (activeValue) => {
    SetCancelActive(activeValue["Cancelation Policy "]);
  };
  const timeFromHandelercheckIn = (time, date) => {

    setTimeSelected(prevState => ({
      ...prevState,
      check_in: {
        ...prevState.check_in,
        from: { time, date }
      }
    }));
  }
  const timeUntilHandelercheckIn = (time, date) => {
    console.log(time, date);
    setTimeSelected(prevState => ({
      ...prevState,
      check_in: {
        ...prevState.check_in,
        until: { time, date }
      }
    }));
  }
  const timeFromHandelercheckOut = (time, date) => {
    console.log(time, date);
    setTimeSelected(prevState => ({
      ...prevState,
      check_out: {
        ...prevState.check_out,
        from: { time, date }
      }
    }));
  }
  const timeUntilHandelercheckOut = (time, date) => {
    console.log(time, date);
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
      <form onSubmit={onSumbitHandeler}        
      className="w-[90vw] h-screen  mb-[700px]">
        <div  className="w-[88vw]">
          <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
            <div>
           <div className="ml-[10px] sm:ml-[150px]">
                      <ProgressSteps pageNumber={5} count={7} circle={true} />
            </div>

            <div className="grid justify-center sm:w-full sm:ml-[150px]  items-center">
            <div className=" bg-[#80808010] sm:min-w-[450px] grid justify-center  rounded-[20px] p-2">
              <Title
                Title="Add your Terms, Polices "
                description="Here you can add what you need and define your terms as you want "
              />
         
         <div className="font-usedFont p-[20px] sm:w-[430px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
              <b className="font-bold font-usedFont text-[22px]">
                What are your check-in and check-out times?
              </b>
              <hr />
              <p>Check In</p>
              <div className="sm:flex gap-10 mt-[-10px] mb-[10px]">

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
              {/* <TextField
                label="Description(Optional)"
                textfild="bigTextBox"
                name="Description"
                Intext="Description"
                OnchangeHnadeler={(e) => {
                  setDescriptions((prev) => ({
                    ...prev,
                    description_1: { en: e.target.value }
                  }));
                }}
              /> */}
                            <InputField
                    editt={false}
                    label="Description(Optional)"
                    name="Description"
                    className="w-[96%]"
                    textarea
                    onChange={(e) => {
                      setDescriptions((prev) => ({
                        ...prev,
                        description_1: { en: e.target.value }
                      }));
                    }}

                  />

              <p className=" font-usedFont  ">Check out</p>
              <div className="sm:flex gap-10 mt-[-10px] mb-[10px]">
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
              {/* <TextField
                label="Description(Optional)"
                textfild="bigTextBox"
                Intext="Description"
                name="Description"
                OnchangeHnadeler={(e) => {
                  setDescriptions((prev) => ({
                    ...prev,
                    description_2: { en: e.target.value }
                  }));
                }}

              /> */}

                  <InputField
                    editt={false}
                    label="Description(Optional)"
                    name="Description"
                    className="w-[96%]"
                    textarea
                    onChange={(e) => {
                      setDescriptions((prev) => ({
                        ...prev,
                        description_2: { en: e.target.value }
                      }));
                    }}

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


              {/* <TextField
                Intext="Description"
                textfild="textBox2"
                name="Description"
                textarea={true}
                OnchangeHnadeler={(e) => {
                  setDescriptions((prev) => ({
                    ...prev,
                    cancelation_policy: { en: e.target.value }
                  }));
                }}
              /> */}
                      <InputField
                    editt={false}
                    label="Description(Optional)"
                    name="Description"
                    className="w-[96%]"
                    textarea
                    onChange={(e) => {
                      setDescriptions((prev) => ({
                        ...prev,
                        cancelation_policy: { en: e.target.value }
                      }));
                    }}
                  />
              {CancelActive ? <FeeCalculation CancelActive={CancelActive} feeObjectHandeler={(feevalue) => {
                setfee(feevalue); console.log(feevalue);
              }
              } /> : null}
              <p className="font-usedFont text-[19px]  mb-[10px]">
                Children and Familes
              </p>
              {/* <TextField
                OnchangeHnadeler={(e) => {
                  setDescriptions((prev) => ({
                    ...prev,
                    children_and_families: { en: e.target.value }
                  }));
                }}
                Intext="Description"
                textfild="textBox2"
                name="Description"
                textarea={true}
              /> */}
                     <InputField
                    editt={false}
                    label="Description(Optional)"
                    name="Description"
                    className="w-[96%]"
                    textarea
                    onChange={(e) => {
                      setDescriptions((prev) => ({
                        ...prev,
                        children_and_families: { en: e.target.value }
                      }));
                    }}
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
                  onChange={(value) => setSelectedPolices({ ...SelectedPolices, pet_policy: value })}
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
                  onChange={(value) => setSelectedPolices({ ...SelectedPolices, smoking_policy: value })}
                  radio={true}
                  onevalue={true}
                />
              </div>
            </div>   </div> </div>
            </div>
            {error && <p className="error">{error}</p>}
          </CreateHotelWrapper>

        </div>
      </form>

    </MainDashBoardWrapper>
  );
}

export default Polices;
