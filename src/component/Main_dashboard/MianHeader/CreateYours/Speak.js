import React, { useContext, useState } from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../common/Title";
import classes from "./CreateHotel.module.css";
import appData from "../../../../config/appData";
import SquareRadio from "../common/SquareRadio";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Authentication/Context/auth-context";
function Speak() {
  const [selectedLang, setSelectedLang] = useState([]);
  const [error,setError]=useState(null)
  const ctx=useContext(AuthContext)
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
  if(selectedLang.length===0){
    setError("you should select language")
    return
  }
  ctx.setHotelinfo({...ctx.HotelInfo,language_spoken:{en:selectedLang}})
    navigate("/facilities");
  };
  const handleRadioChange = (value) => {
    setSelectedLang(value)
  };
  const clickPrivHandeler = () => {
    navigate(-1);
  };
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler}className="w-[100vw] h-screen ml-[100px] sm:ml-[150px]">
        <div style={{ width: "100vw" }}>
          <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
            <div >
              <ProgressSteps pageNumber={3} count={6} circle={true} />
              <Title
                Title="What languages do you or your staff speak?"
                description="Select Language as you need"
              />
            </div>
            <div className="font-[Poppins] p-5 w-[450px] border-solid  border-2 border-gray-400/40 rounded-[15px] mt-5">
              <b className="text-[24px]">Select Language </b>
              <hr />
              <div>
                <SquareRadio
                round="rounded-[20%]"
                  name="customRadio"
                  options={appData.languages.map((lang) => ({
                    value: lang.value,
                    label: lang.lang,
                  }))}
                  onChange={handleRadioChange}
                  radio={true}
                />
              </div>
              <p className="mt-7">Add additional languages</p>
              <div></div>
            </div>
            {error&&   <p className="error">{error}</p>}
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default Speak;
