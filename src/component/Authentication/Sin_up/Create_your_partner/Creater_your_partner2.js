import React, { useContext, useRef, useState } from "react";
import Tiltle from "../../Tiltle";
import ProgressSteps from "./Create_account_items/ProgressSteps";
import Card from "../../regular_components/Card";
import TitleCars from "./Create_account_items/TitleCars";
import TextField from "../../regular_components/TextField";
import Button from "../../regular_components/Button";
import AuthenticationFooter from "../../AuthenticationFooter/AuthenFooter";
import style from "./Creater_your_partner2.module.css";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationWrapper from "../../regular_components/AuthenticationWrapper";
import AuthContext1 from "../../Context/Mian-Page-Context";
import location from "../../../../Assets/location.svg"
import PopMap from "./Create_account_items/PopMap";

import LocationGoogltMap from "./Create_account_items/LocationGoogltMap";

// import Context from "../../Context/Context";
function Creater_your_partner2() {
  const navigate = useNavigate();

  const [longitude, setLongitude] = useState(""); // Stores the longitude
  const [latitude, setLatitude] = useState(""); // Stores the latitude
  // const [locationn, setLocation] = useState({ lat: 37.7749, lng: -122.4194 });

  const [placeName, setPlaceName] = useState({country:'',city:'',place:''});
  const [popMessage, setpopMessage] = useState(false);
  const [error, seterror] = useState(null);

  const mapRef = useRef();
  const cityRef=useRef()
  const country=useRef()
  const ctx = useContext(AuthContext1);

  console.log(ctx.formData, "??????????????");

  const SubmitHandere = (e) => {
    e.preventDefault();

    if (latitude != "" && longitude != "") {
      seterror(null);
      navigate("/CreateAccount3");
      const data = { latitude: latitude, longitude: longitude };
      ctx.sinUpFormData(data);
    } else {
      console.log("you have to add your location");
      seterror("you have to add your location");
    }
    console.log("dataaaa",ctx.formData);
    
  };
  const displayNameHandeler = (place, longitude, latitude) => {
    mapRef.current.value = place;

    setLongitude(longitude);
    setLatitude(latitude);
    setPlaceName(place);
  };
  const handleTogglePopup = (place, longitude, latitude) => {
    setpopMessage(false);
    setLongitude(longitude);
    setLatitude(latitude);
    setPlaceName(place);
    mapRef.current.value = place;

    
  };
  const openMapHandeler = () => {
    setpopMessage(true);
  };
  const setlocationHandeler=(location,city,countryy,log,lat)=>{
    mapRef.current.value = location;
    country.current.value=countryy
    cityRef.current.value=city
    // setPlaceName(location)
    setLongitude(log)
    setLatitude(lat)
  }
  return (
    <AuthenticationWrapper>
      <form onSubmit={SubmitHandere} >
        <div className={style["mainInfo"]}>
          <div style={{ marginLeft: "60px" }}>
            <Tiltle
              title="Request to Join With Us"
              title_discription="Fill Our Form to let us know more about your business and approve your account"
            />
          </div>
          <ProgressSteps pageNumber={2} count={3} circle={true}/>
          <Card cssCard="sin_in_Bigcard">
            <TitleCars name="Location Details" icon={location} />
            <div className={style["information"]}>
              <div>
                <TextField
                  label="Country"
                  Intext="Name"
                  textfild="textBoxSmall"
                  ref={country}
                  disabled={true}
                />
              </div>
              <div>
                <TextField
                  label="City"
                  Intext="choose Form"
                  textfild="textBoxSmall"
                  ref={cityRef}
                  disabled={true}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <TextField
                label="Address Details"
                Intext="Grab it from Map"
                ref={mapRef}
                textfild="textBox"
                disabled ={true}
              />
              <Link>
                <Button
                  btnCss="blueCssSmall"
                  name="Go to Map >> "
                  onClickAction={openMapHandeler}
                />
              </Link>
            </div>
            {error && (
              <p style={{ color: "red" }}>you should enter your location</p>
            )}
            {/* <Location
              displayNameHandeler={displayNameHandeler}
              containerSize="SmallContainerSize"
            /> */}

            <LocationGoogltMap setlocation={setlocationHandeler}/>
           
            <hr />
            <div className={style["btnsInfo"]}>
              <Link to="/CreateAccount">
                <Button btnCss="whiteCssS" name="previous" />
              </Link>

              <Button btnCss="blueCssS" name="continue" />
            </div>
            <AuthenticationFooter
              title="Have a account"
              link=" Sign in >>"
              title2="Need help? Check out our"
              title1="FAQ"
              title3="or reach out to us a"
              title4="hotelsupport@sphinx.com"
            />
          </Card>
          {popMessage && (
            <PopMap
              popMessageCss="popup"
              handleTogglePopup={handleTogglePopup}
              title="Thanks For Fill Our Form"
              details="  What next, Now our team will
             review your request and will contact
            you by email soon"
              setImag={true}
              btnCss="whiteCssG"
            />
          )}
        </div>
      </form>
    </AuthenticationWrapper>
  );
}

export default Creater_your_partner2;
