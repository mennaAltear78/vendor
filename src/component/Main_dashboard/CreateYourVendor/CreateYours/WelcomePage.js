import React, { useContext, useEffect, useState } from "react";
import Title from "../common/Title";
import gif from "../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";
import PopupMessage from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import { useNavigate } from "react-router-dom";
import AuthContext1 from "../../../Authentication/Context/Mian-Page-Context";
import TotalCard from "../../Statistics/TotalCard";
import AreaCharts from "../../Statistics/Charts/AreaChart";
import CoulmnCharts from "../../Statistics/Charts/CoulmnChart";
import PieChart from "../../Statistics/Charts/PieChart";
import RatingOverView from "../../Statistics/RatingOverView";
import RecentReview from "../../Statistics/RecentReview";
const cards = [
  {
    bgImageCss: 'bg-[#f59dac]',
    precent: 'bg-[#ffa6003f] text-[orange]',
    IconCss: 'text-[#f1294b]',
    iconName: 'calendar_add_on',
  },
  {
    bgImageCss: 'bg-[#ffa6005e]',
    precent: 'bg-[#f59dac] text-[#f1294b]',
    IconCss: 'text-[orange]',
    iconName: 'moving',
  },
  {
    bgImageCss: 'bg-[#0000ff79]',
    precent: 'bg-[#ffa6003f] text-[orange]',
    IconCss: 'text-[blue]',
    iconName: 'moving',
  },
  {
    bgImageCss: 'bg-[#0080007c]',
    precent: 'bg-[#f59dac] text-[#f1294b]',
    IconCss: 'text-[green]',
    iconName: 'finance_mode',
  },
];
function WelcomePage() {
  const [isPop_up, SetPop_up] = useState(false);
  const navigate = useNavigate();

  const CancelHandeler = () => {
    navigate("/CompleteProfie");
  };
  const GoToHandeler = () => {
    SetPop_up(false);
    navigate("/MianDahboard/CreateHotel");
  };
  return (
    <MainDashBoardWrapper>
      <div className="w-[100vw]   bg-[#80808028]">
        <div className="ml-[120px]">
          {/*         
      <Title
        Title="Start by List Your🏨 Property and Create Hotels👋"
        description="To Start Choose type of Property You need to do"
      /> */}

          <Title Title="Quick Insights " />
          <div className="flex w-full">
            <div >
              <div className="flex gap-[10px] ">
    {cards.map((props, idx) => (
      <TotalCard key={idx} {...props} />
    ))}
              </div>

              <div>
                <AreaCharts  />
                <div className="flex mt-[10px] ">
                  <CoulmnCharts  />
                  <PieChart />
                </div>
              </div>
            </div>
            <div className="ml-[10px]">
              <RatingOverView />
              <RecentReview/>
            </div>
          </div>

          {isPop_up && (
            <PopupMessage
              popMessageCss="popupMain"
              title="compelete your Profile"
              details=" For Continue You Must be complete Your Profile first to can set your Property easily"
              CancelbtnCss="blueCssS"
              messageImg={gif}
              cancel={true}
              btnCss="whiteCssS"
              btnMessage2="Go to"
              btnMessage1="Avoid"
              cancelHandeler={CancelHandeler}
              close={true}
              handlebackNavigation={GoToHandeler}
              handleTogglePopup={CancelHandeler}
            />
          )}
        </div>
      </div>
    </MainDashBoardWrapper>
  );
}

export default WelcomePage;
