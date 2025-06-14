import Title from "../common/Title";
import gif from "../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";
import PopupMessage from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import { useNavigate } from "react-router-dom";
import TotalCard from "../../Statistics/TotalCard";
import AreaCharts from "../../Statistics/Charts/AreaChart";
import CoulmnCharts from "../../Statistics/Charts/CoulmnChart";
import PieChart from "../../Statistics/Charts/PieChart";
import RatingOverView from "../../Statistics/RatingOverView";
import RecentReview from "../../Statistics/RecentReview";
import Notification from "../../../Authentication/regular_components/Notification";
import AuthContext1 from "../../../Authentication/Context/Mian-Page-Context";
import { useContext, useEffect, useState, useRef } from "react";
import appData from "../../../../config/appData";

function WelcomePage() {
  const [isPop_up, SetPop_up] = useState(false);

  const GoToHandeler = () => {
    SetPop_up(false);
    navigate("/MianDahboard/CreateHotel");
  };


  return (
    <MainDashBoardWrapper>
      <div className="w-[100%] pt-2 pb-10 bg-[#80808028]">
        <div className="sm:ml-[120px] ml-3">
          <Title Title="Quick Insights " />

          <div className=" lg:flex w-full">
            <div>
              <div className="flex flex-wrap gap-[10px] ">
                {appData.cards.map((props, idx) => (
                  <TotalCard key={idx} {...props} />
                ))}
              </div>

              <div>
                <AreaCharts />
                <div className="lg:flex md:grid  mt-[10px] ">
                  <CoulmnCharts />
                  <PieChart />
                </div>
              </div>
            </div>

            <div className="lg:ml-[10px] md:w-[91%]  md:grid lg:grid">
              <RatingOverView />
              <RecentReview />
            </div>
          </div>

          {/* ✅ Pop-up if profile not complete */}
          {isPop_up && (
            <PopupMessage
              popMessageCss="popupMain"
              title="compelete your Profile"
              details="For Continue You Must be complete Your Profile first to can set your Property easily"
              CancelbtnCss="blueCssS"
              messageImg={gif}
              cancel={true}
              btnCss="whiteCssS"
              btnMessage2="Go to"
              btnMessage1="Avoid"
              cancelHandeler={() => navigate("/CompleteProfie")}
              close={true}
              handlebackNavigation={GoToHandeler}
              handleTogglePopup={() => navigate("/CompleteProfie")}
            />
          )}
        </div>
      </div>
    </MainDashBoardWrapper>
  );
}

export default WelcomePage;
