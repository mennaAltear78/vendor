import { useContext, useEffect, useState } from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Select from "react-select";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import appData from "../../../../../config/appData";
import InputField from "../../common/InputField";
import CreateCardContainer from "../../common/CreateCardContainer";
import { AuthContext } from "../../../../Authentication/Context/auth-context";

function Payment() {
  const [error, setError] = useState(null);
  const [payment_agreed_options, setPayment] = useState({
    payment_agreed_options: [],
  });

  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
    if (
      !payment_agreed_options[0].payment_method.en ||
      payment_agreed_options[0].payment_method.en === "options"
    ) {
      setError("You should choose a payment method");
      return;
    }

    ctx.setHotelinfo({
      ...ctx.HotelInfo,
      policies: { ...ctx.HotelInfo.policies, payment_agreed_options },
    });
    navigate("/LocattionDataHotel");
  };

  const timeFromHandelercheckIn = (payment) => {
    setPayment([
      { payment_method: { en: payment.label }, payment_icon: "Paypal.jpg" },
    ]);
  };
  useEffect(() => {
    document.title = "Payment Methods";
  }, []);
  return (
    <div>
      <MainDashBoardWrapper>
        <form
          onSubmit={onClickHandler}
          className="w-[90vw] h-screen  mb-[700px]"
        >
          <div className="sm:w-[88vw] w-[100vw]">
            <CreateHotelWrapper clickHandeler={()=>navigate(-1)}>
              <div>
                <div className="ml-[10px] sm:ml-[150px]">
                  <ProgressSteps pageNumber={6} count={7} circle={true} />
                </div>
                <CreateCardContainer>
                  <div className="grid justify-center sm:w-fullitems-center pl-2">
                    <div className="font-usedFont p-[20px] min-w-[290px] sm:w-[430px]  border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
                      <b className="text-[20px]">
                        <b>payment methods</b>
                        <hr />
                      </b>
                      <Select
                        onChange={timeFromHandelercheckIn}
                        options={appData.PaymentMethod}
                        isSearchable={false}
                      />
                    </div>
                    <div className="font-usedFont p-[20px]  min-w-[290px] sm:w-[430px]  border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
                      <b className="text-[20px]">
                        Detailed Terms
                        <hr />
                      </b>
                      <InputField
                        editt={false}
                        textarea={true}
                        label="Detailed Terms"
                        name="Description"
                        className="w-[94%]"
                      />
                    </div>
                  </div>
                </CreateCardContainer>
              </div>
              {error && <p className="error">{error}</p>}
            </CreateHotelWrapper>
          </div>
        </form>
      </MainDashBoardWrapper>
    </div>
  );
}

export default Payment;
