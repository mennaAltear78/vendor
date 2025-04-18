import React, { useContext, useState } from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import classes from "./CreateHotel.module.css";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../common/Title";
import SquareRadio from "../common/SquareRadio";
import appData from "../../../../config/appData";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Authentication/Context/auth-context";
function Facilities() {
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [error,setError]=useState(null)
    const[description,setdescription]=useState([])
    const ctx=useContext(AuthContext)
    const navigate = useNavigate();

  const handleRadioChange = (value,desc) => {
    setSelectedFacilities(value)
    console.log("hre",desc);
    
    setdescription(desc)
  };
  const clickPrivHandeler = () => {
    navigate(-1);
  };
  const onSumbitHandeler=(e)=>{
         e.preventDefault()
         if(selectedFacilities.length===0){
          setError("you should select language")
          return
        }
        ctx.setHotelinfo({
          ...ctx.HotelInfo,
          facilities: {
            facility: { en: selectedFacilities },
            description: { en: description}
          }
        });
        navigate('/polices')
  }
  const AllowanceHandling =()=>{

  }
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onSumbitHandeler} className="w-[100vw] h-screen ml-[100px] sm:ml-[150px] mb-[400px]">
        <div style={{ width: "100vw" }}>
          <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
            <div className={classes.mainContaint}>
              <ProgressSteps pageNumber={4} count={6} circle={true}/>
              <Title
                Title="What can guests use at your hotel?"
                description="To Start Choose type of Property You need to do"
              />
           
            </div>  
             <div className="font-[Poppins] p-[20px] w-[300px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px] sm:w-[450px]">
                <b style={{fontSize:'20px'}} >Add Facilities </b>
           
                <div>
                  <SquareRadio
                  round="rounded-[20%]"
                    name="customRadio"
                    options={appData.facilities.map((lang) => ({
                      value: lang.value,
                      label: lang.facilitie,
                    }))}
                    description='Additonal Cost'
                    onChange={handleRadioChange}
                    cost={true}
                    radio={true}
                    AllowanceHandling={AllowanceHandling}
                  />
                </div>
              
              
              </div>
            {error &&   <p className="error">{error}</p>}
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default Facilities;
