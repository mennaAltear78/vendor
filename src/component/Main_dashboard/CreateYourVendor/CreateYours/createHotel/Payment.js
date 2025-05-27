import React, { useContext, useState } from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import AuthContext from "../../../../Authentication/Context/auth-context";
import Menue from '../../../../Authentication/regular_components/Menue'
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import classes from "../../CreateYours/CreateHotel.module.css";
import TextField from "../../../../Authentication/regular_components/TextField";
import appData from "../../../../../config/appData";
import InputField from "../../common/InputField";

function Payment() {
 
  const [error, setError] = useState(null); 
  const [payment_agreed_options ,setPayment]=useState({payment_agreed_options:[]})

  const ctx =useContext(AuthContext)
  const navigate = useNavigate();


  const onClickHandler = (e) => {
    e.preventDefault();
   console.log(payment_agreed_options[0].payment_method.en);
   
    if (
      !payment_agreed_options[0].payment_method.en||
     
      payment_agreed_options[0].payment_method.en=== "options"
    ) {
      setError("You should choose a payment method");
      return
    }
    
   ctx.setHotelinfo({...ctx.HotelInfo,policies:{...ctx.HotelInfo.policies,payment_agreed_options}})
    navigate('/LocattionDataHotel')
  };

  const clickPrivHandeler = () => {
    navigate(-1);
 
  };
 
  const timeFromHandelercheckIn = (time, date) => {
    console.log(time);
    setPayment([{payment_method:{en:time},payment_icon:"Paypal.jpg"}])
 }

  return (
    <div>
      <MainDashBoardWrapper>
        <form onSubmit={onClickHandler} className="w-[90vw] h-screen  mb-[700px]">
        
        <div  className="w-[88vw]">
          <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
            <div >
            <div className="ml-[10px] sm:ml-[150px]">
              <ProgressSteps pageNumber={4} count={7} circle={true} />
             </div>
             <div className="grid justify-center sm:w-full sm:ml-[150px]  items-center">
             <div className=" bg-[#80808010] min-w-[300px]   rounded-[20px] p-2">
              <div className="grid justify-center sm:w-full      items-center">
     


              <div className="font-usedFont p-[20px] min-w-[290px] sm:w-[430px]  border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
                <b style={{ fontSize: "20px" }}>
                    <b >payment methods</b>     
                  <hr />
                </b>
                <Menue
                 NObtn={true}
                  textfild="textBox"
                  options={appData.PaymentMethod}
                  timeHandeler={timeFromHandelercheckIn}
                />
              </div>

              <div className="font-usedFont p-[20px]  min-w-[290px] sm:w-[430px]  border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
                <b  className="text-[20px]">
                  Detailed Terms
                  <hr />
                </b>
                {/* <TextField               
                  textfild="textBox2"
                  name="Description"
                 
                  Intext="Detailed Terms"


                /> */}
                     <InputField
                    editt={false} 
                    textarea={true}
                    label="Detailed Terms"
                    // value={property}
                    name="Description"
                    className="w-[94%]"
                    // onChange={propertyNameHandeler}

                  />
              </div></div> </div> </div></div>
              {error && <p className="error">{error}</p>}
            </CreateHotelWrapper>
        </div>
        </form>
 
      </MainDashBoardWrapper>
    </div>
  );
}

export default Payment;
