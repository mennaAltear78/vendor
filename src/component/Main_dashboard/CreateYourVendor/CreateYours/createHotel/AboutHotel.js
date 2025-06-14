import { useContext, useState } from "react";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../../common/Title";
import stars from "../../../../../Assets/icons/Star 112.svg";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import icon from "../../../../../Assets/Frame 1707481174.svg";
import { useNavigate } from "react-router-dom";
import "../../../../../index.css";
import InputField from "../../common/InputField";

import CreateCardContainer from "../../common/CreateCardContainer";
import Error from "../../common/Error";
import { AuthContext } from "../../../../Authentication/Context/auth-context";
function AboutHotel() {
  const [error, setError] = useState(null);
  const [property, setProperty] = useState("");
  const [description, setDescription] = useState("");
  const [selectedStar, setSelectedStar] = useState();

  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const isValidForm = () => {
    if (!selectedStar || !property || !description) {
      setError("you should fill all requirement");
      return false;
    }
    if (description.length < 26) {
      setError("description should be more than 26 character");
      return false;
    }
    setError(null);
    return true;
  };

  const onClickHandler = (e) => {
    e.preventDefault();

    if (!isValidForm()) return;
    ctx.setHotelinfo({
      ...ctx.HotelInfo,
      hotel_star_rating: selectedStar,
      name: 3,
      description: { en: description },
    });
    navigate("/Languages");
  };

  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler} className="w-[90vw] mb-[100px]">
        <div className="sm:w-[88vw] w-[100vw]">
          <CreateHotelWrapper clickHandeler={() => navigate(-1)}>
            <div className="sm:ml-[150px]">
              <ProgressSteps pageNumber={2} count={7} circle={true} />
            </div>
            <CreateCardContainer>
              <Title
                Title="Tell us about your hotel"
                description="To Start Choose type of Property You need to do"
              />
              <div className="font-usedFont border-solid p-5  ml-2  sm:w-[440px]  border-2 border-gray-400/40 rounded-[15px] mt-[50px]">
                <div className="flex justify-between">
                  <p className="font-medium">What's the name of your hotel?</p>
                  <img className="w-[30px] h-[30px] mt-[10px]" src={icon} />
                </div>
                <InputField
                  editt={false}
                  label="Property Name"
                  value={property}
                  name="name"
                  className="w-[96%]"
                  onChange={(e) => setProperty(e.target.value)}
                />
                <InputField
                  editt={false}
                  label="Description"
                  value={description}
                  name="name"
                  className="w-[96%]"
                  onChange={(e) => setDescription(e.target.value)}
                  textarea={true}
                />
                <hr className="border border-gray-400/40" />
                <p className="font-medium">
                  What is the star rating of your hotel?
                </p>
                <div>
                  <div>
                    {[1, 2, 3, 4, 5, 6, 7].map((star) => (
                      <div key={star} style={{ display: "flex" }}>
                        <label key={star} className="block cursor-pointer">
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
            </CreateCardContainer>
            <Error error={error} />
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default AboutHotel;
