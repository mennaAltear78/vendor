import React, { useContext, useEffect, useState } from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import { useNavigate } from "react-router-dom";
import Title from "../../common/Title";
import SquareRadio from "../../common/SquareRadio";
import appData from "../../../../../config/appData";
import FeeCalculation from "../../common/FeeCalculation";
import InputField from "../../common/InputField";
import CreateCardContainer from "../../common/CreateCardContainer";
import Error from "../../common/Error";
import TimeCheck from "../../common/TimeCheck";
import { AuthContext } from "../../../../Authentication/Context/auth-context";

function Polices() {
  const [SelectedPolices, setSelectedPolices] = useState({});
  const [error, setError] = useState(null);
  const [CancelActive, SetCancelActive] = useState(false);
  const [fee, setfee] = useState();
  const [descriptions, setDescriptions] = useState({
    description_1: { en: "" },
    description_2: { en: "" },
    children_and_families: { en: "" },
    cancelation_policy: { en: "" },
  });
  const [timeSelected, setTimeSelected] = useState({
    check_in: { from: { time: "", date: "" }, until: { time: "", date: "" } },
    check_out: { from: { time: "", date: "" }, until: { time: "", date: "" } },
  })
  
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const onSumbitHandeler = (e) => {
    e.preventDefault();
    if (
      SelectedPolices.length === 0 ||
      timeSelected.check_in.from.date === "" ||
      timeSelected.check_in.until.date === "" ||
      timeSelected.check_out.from.date === "" ||
      timeSelected.check_out.until.date === "" ||
      descriptions.cancelation_policy.en=== "" ||
      descriptions.children_and_families.en === "" 
    ) {
      setError("All fields are required.");
      return;
    } else if (
      (timeSelected.check_in.until.time === timeSelected.check_in.from.time &&
        timeSelected.check_in.until.date === timeSelected.check_in.from.date) ||
      (timeSelected.check_out.until.time === timeSelected.check_out.from.time &&
        timeSelected.check_out.until.date === timeSelected.check_out.from.date)
    ) {
      setError("Time and Date from and until cannot be exactly the same");
      return;
    } else if (
      (
        descriptions.children_and_families.en.length < 10 ||
        descriptions.cancelation_policy.en.length < 10)
    ) {
      setError("Dscription should be more than 10 character");
      return;
    } else if (CancelActive && !fee) {
      setError("You should add cancelation fee");
      return;
    }
    const policies = {
      ...ctx.HotelInfo.policies,
      ...timeSelected,
      pet_policy: { en: SelectedPolices.pet_policy[0] },
      smoking_policy: { en: SelectedPolices.smoking_policy[0] },
      cancelation_fee_rule: fee,
      cancelation_allowed: CancelActive,  
     children_and_families : {
        en: descriptions.children_and_families.en,
      },
      cancelation_policy: { en: descriptions.cancelation_policy.en }
    };

    // Add optional fields
    if (descriptions.description_1.en.trim()) {
      policies.description = { en: descriptions.description_1.en };
    }

    if (descriptions.description_2.en.trim()) {
      policies.description = { en: descriptions.description_2.en };
    }

    ctx.setHotelinfo({
      ...ctx.HotelInfo,
      policies,
    });
    navigate("/payment");
  };

  const handleTimeChange = (type, direction, time, date) => {
    setTimeSelected((prevState) => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        [direction]: { time, date },
      },
    }));
  };
    useEffect(() => {
      document.title = "Add your Terms, Polices";
    }, []);
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onSumbitHandeler} className="w-[90vw] mb-[200px]">
        <div className="sm:w-[88vw] w-[100vw]">
          <CreateHotelWrapper clickHandeler={()=>navigate(-1)}>
            <div>
              <div className=" sm:ml-[150px]">
                <ProgressSteps pageNumber={5} count={7} circle={true} />
              </div>

              <CreateCardContainer>
                <Title
                  Title="Add your Terms, Polices "
                  description="Here you can add what you need and define your terms as you want "
                />
                <div className="font-usedFont p-[20px] sm:w-[430px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
                  <b className="font-bold font-usedFont text-[22px] ">
                    What are your check-in and check-out times?
                  </b>
                  <hr />
                  <TimeCheck
                    checkType="Check In"
                    checkKey="check_in"
                    checkFromOPtions={appData.times}
                    checkUntilPtions={appData.times}
                    handleTimeChange={handleTimeChange}
                    InputFieldHnadeler={(e) => {
                      setDescriptions((prev) => ({
                        ...prev,
                        description_1: { en: e.target.value },
                      }));
                    }}
                  />
                  <TimeCheck
                    checkType="Check Out"
                    checkKey="check_out"
                    checkFromOPtions={appData.times}
                    checkUntilPtions={appData.times}
                    handleTimeChange={handleTimeChange}
                    InputFieldHnadeler={(e) => {
                      setDescriptions((prev) => ({
                        ...prev,
                        description_2: { en: e.target.value },
                      }));
                    }}
                  />

                  <div className="mb-[20px]">
                    <SquareRadio
                      name="customRadio"
                      options={[
                        {
                          value: "police",
                          label: "Cancelation Policy",
                        },
                      ]}
                      cost={true}
                      description="Cancelation Allowed"
                      AllowanceHandling={(activeValue)=>SetCancelActive(activeValue["Cancelation Policy"])}
                    />
                  </div>

                  <InputField
                    editt={false}
                    label="Description"
                    name="Description"
                    className="w-[96%]"
                    textarea
                    onChange={(e) => {
                      setDescriptions((prev) => ({
                        ...prev,
                        cancelation_policy: { en: e.target.value },
                      }));
                    }}
                  />
                  {CancelActive ? (
                    <div className="mt-[20px]">
                      <FeeCalculation
                        CancelActive={CancelActive}
                        feeObjectHandeler={(feevalue) => {
                          setfee(feevalue);
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="font-usedFont text-[19px] mb-[-5px] ">
                    Children and Familes
                  </p>
                  <InputField
                    editt={false}
                    label="Description"
                    name="Description"
                    className="w-[96%]"
                    textarea
                    onChange={(e) => {
                      setDescriptions((prev) => ({
                        ...prev,
                        children_and_families: { en: e.target.value },
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
                      onChange={(value) =>
                        setSelectedPolices({
                          ...SelectedPolices,
                          pet_policy: value,
                        })
                      }
                      radio={true}
                      onevalue={true}
                    />
                    <p className="mb-[-8px] mt-10">Smoking Policy</p>
                    <SquareRadio
                      round="rounded-[50%]"
                      name="customRadio"
                      options={appData.smokingPolicy.map((policy) => ({
                        value: policy.value,
                        label: policy.policy,
                      }))}
                      description="Additonal Cost"
                      onChange={(value) =>
                        setSelectedPolices({
                          ...SelectedPolices,
                          smoking_policy: value,
                        })
                      }
                      radio={true}
                      onevalue={true}
                    />
                  </div>
                </div>
              </CreateCardContainer>
            </div>
            <Error error={error} />
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default Polices;
