import React, { useState } from "react";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../common/Title";
import classes from "./CreateHotel.module.css";
import TextField from "../../../Authentication/regular_components/TextField";
import stars from "../../../../Assets/icons/Star 112.svg";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import icon from "../../../../Assets/Frame 1707481174.svg";
import { useNavigate } from "react-router-dom";
import '../../../../index.css'
function AboutHotel() {
  const [error, setError] = useState(null);
  const [property,setProperty] = useState('')
  const [description ,setDescription] =useState('')
  const [selectedStar, setSelectedStar] = useState();
  const navigate=useNavigate()
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log("Selected Hotel:", selectedStar ,property,description);
   if(!selectedStar | !property || !description){
    setError("you should fill all requirement")
    return
   }
        navigate('/speak')
  };
  const propertyNameHandeler=(e)=>{
    setProperty (e.target.value)
  }
  const propertyDescHandeler=(e)=>{
    setDescription(e.target.value)
  }
  const clickPrivHandeler=()=>{
    navigate('/MianDahboard/CreateHotel')
  }
  return (
    <MainDashBoardWrapper>
         
      <form onSubmit={onClickHandler} className="w-[100vw] h-screen ml-[60px] sm:ml-[150px]
">
        <div>
          <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
            <div className={classes.mainContaint}>
              <ProgressSteps pageNumber={2} count={6} circle={true}/>
              <Title
                Title="Tell us about your hotel"
                description="To Start Choose type of Property You need to do"
              />
            </div>
            <div className={classes.rating}>
              <div style={{display:'flex' ,justifyContent:'space-between'}}>
                <p>What's the name of your hotel?</p>
                <img className="w-[30px] h-[30px] mt-[10px]" src={icon}/>
              </div>
              
              <TextField
                label="Property Name"
                textfild="bigTextBox"
                name="Property Name"
                Intext="Property Name"
                OnchangeHnadeler={propertyNameHandeler}
              />

              <TextField
                label="Description"
                textfild="bigTextBox"
                name="Description"
                Intext="Description"
                OnchangeHnadeler={propertyDescHandeler}
              />
              <hr />
              <p>What is the star rating of your hotel?</p>
              <div>
                <div>
                  {[1, 2, 3, 4, 5, 6, 7].map((star) => (
                    <div style={{ display: "flex" }}>
                      <label
                        key={star}
                       className="block cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="starRating"
                          
                          value={star}
                          checked={selectedStar === star}
                          onChange={() => setSelectedStar(star)}
                         className="mr-2"
                        />
                        {star} Star{star > 1 ? "s" : " "}
                      </label>

                      <div className="pl-4">
                   
                        {[...Array(star)].map((_, i) => (
                          <img
                            key={i}
                            src={stars}
                            alt="star"
                            width="20"
                            height="20"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
         {error&&   <p className="error">{error}</p>}
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default AboutHotel;
