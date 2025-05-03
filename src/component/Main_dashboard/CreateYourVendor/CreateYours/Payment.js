import React, { useContext, useState } from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import AuthContext from "../../../Authentication/Context/auth-context";
import Menue from '../../../Authentication/regular_components/Menue'
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import classes from "./CreateHotel.module.css";
import TextField from "../../../Authentication/regular_components/TextField";
import appData from "../../../../config/appData";

function Payment() {
 
  const [error, setError] = useState(null); 
  const [payment_agreed_options ,setPayment]=useState({payment_agreed_options:[]})

  const ctx =useContext(AuthContext)
  const navigate = useNavigate();


  const onClickHandler = (e) => {
    e.preventDefault();
   console.log(payment_agreed_options);
   
    if (
      !payment_agreed_options.payment_method ||
      payment_agreed_options.payment_method.length === 0 ||
      payment_agreed_options.payment_method=== "options"
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
        <form onSubmit={onClickHandler} className="w-[100vw] h-screen ml-[100px] sm:ml-[150px] ">
        
            <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
              <div className={classes.mainContaint}>
                <ProgressSteps pageNumber={6} count={7} circle={true}/>
           
              </div>

              <div className="font-usedFont p-5 w-[420px] pr-[50px] border-solid  border-2 border-gray-400/40 rounded-[15px] mt-5" style={{ marginBottom: "-35px" }}>
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

              <div className="font-[Poppins] p-5 w-[420px] pr-[50px] border-solid  border-2 border-gray-400/40 rounded-[15px] mt-10">
                <b style={{ fontSize: "20px" }}>
                  Detailed Terms
                  <hr />
                </b>
                <TextField               
                  textfild="textBox2"
                  name="Description"
                  textarea={true}
                  Intext="Detailed Terms"


                />
              </div>
              {error && <p className="error">{error}</p>}
            </CreateHotelWrapper>
        
        </form>
 
      </MainDashBoardWrapper>
    </div>
  );
}

export default Payment;
