import React, { useContext, useEffect, useState } from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../../common/Title";
import appData from "../../../../../config/appData";
import SquareRadio from "../../common/SquareRadio";
import { useNavigate } from "react-router-dom";
import CreateCardContainer from "../../common/CreateCardContainer";
import Error from "../../common/Error";
import { AuthContext } from "../../../../Authentication/Context/auth-context";
function Languages() {
  const [selectedLang, setSelectedLang] = useState([]);

  const [error, setError] = useState(null);

  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
    if (selectedLang.length === 0) {
      setError("Please select at least one language.");
      return;
    }
    ctx.setHotelinfo({
      ...ctx.HotelInfo,
      language_spoken: { en: selectedLang },
    });
    navigate("/facilities");
  };

  useEffect(() => {
    document.title = "Languages Spoken";
  }, []);
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler} className="w-[90vw] h-screen ">
        <div className="sm:w-[88vw] w-[100vw]">
          <CreateHotelWrapper clickHandeler={()=> navigate(-1)} >
            <div>
              <div className="ml-[10px] sm:ml-[150px]">
                <ProgressSteps pageNumber={3} count={7} circle={true} />
              </div>
              <CreateCardContainer>
                <Title
                  Title="What languages do you or your staff speak?"
                  description="Select Language as you need"
                />

                <div className="font-usedFont p-[20px] sm:w-[430px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
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
                      onChange={(value)=>setSelectedLang(value)}
                      radio={true}
                    />
                  </div>
                  {/* <p className="mt-7">Add additional languages</p> */}
                  <div></div>
                </div>
              </CreateCardContainer>
            </div>
           <Error error={error}/>
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default Languages;
