import Card from "../../../Assets/Table.png";
import Tabel from "../../../Assets/List.png";
import Select from "react-select";

function Header({
  optionFilter,
  optionSort,
  filterValueHandeler,
  sortValueHandeler,
  setViewMode,
  viewMode,
  keyword,
  setKeyword,
  totaldata,
  PageName,
  Room,
  addName,
  addFunction,
}) {

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "120px", // Set the width of the control to 150px
      minWidth: "150px", // Ensure it doesn't shrink below this
      borderRadius: "0.5rem",
      height: "10px", // Set a custom height (e.g., 40px, adjust as needed)
      minHeight: "40px",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.5rem",
      width: "200px", // Slightly wider menu to fit long labels
      minWidth: "200px",
    }),
  };
  return (
    <div>
      <div className="w-[98%] m-auto grid sm:justify-between  items-center lg:flex md:grid  font-usedFont">
        <div className="display   sm:flex gap-4 items-center sm:mb-0 mb-10  ">
          <div className=" flex items-center">
            <b className="text-xl mr-4	sm:w-full ">{PageName}</b>
            <div className="bg-[#3538e69a] px-2 text-[#2F32DE]  sm:text-[13px] text-[10px] sm:mb-0 mb-2  sm:w-full   rounded-[6px] h-[27px]  items-center display flex">
              {totaldata} {Room ? "Room" : "properties"}
            </div>
          </div>
          <div className="display flex  gap-2">
            <Select
              onChange={(e) => {
                sortValueHandeler(e);
              }}
              options={optionSort}
              placeholder={"sort by"}
              isSearchable={false}
              styles={customStyles}
            />
            <Select
              onChange={(e) => {
                filterValueHandeler(e);
              }}
              options={optionFilter}
              placeholder={"Filter"}
              isSearchable={false}
              styles={customStyles}
            />
          </div>
        </div>
        <div className=" flex gap-2 mt-[-30px] sm:mt-0 items-center">
          {Room ? null : (
            <div className="mb-1 flex  ">
              <div
                className={`w-10 h-10 sm:flex hidden ${
                  viewMode === "table" ? "bg-[#ff8c004d] " : "bg-slate-200"
                } rounded-[10px] items-center  flex justify-center `}
              >
                <img
                  src={Card}
                  onClick={() => {
                    setViewMode("table");
                    localStorage.setItem("veiwMode", "table");
                  }}
                />
              </div>
              <div
                className={`w-10 h-10  
                            ${
                              viewMode != "table"
                                ? "bg-[#ff8c004d] "
                                : "bg-slate-200"
                            } rounded-[10px] items-center display flex justify-center ml-[2px]`}
              >
                <img
                  src={Tabel}
                  onClick={() => {
                    setViewMode("Card");
                    localStorage.setItem("veiwMode", "Card");
                  }}
                />
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <div className="w-[170px] mb-1 h-[35px] flex items-center border-solid border   border-gray-300 rounded-[10px] pl-5 overflow-hidden">
              <span class="material-symbols-outlined ml-[-10px] text-[gray] text-[14px]">
                search
              </span>
              <input
                type="text"
                id="search"
                name="query"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full sm:placeholder:text-[10px]  placeholder:text-[10px] border-none outline-none text-black bg-transparent placeholder-gray-300 placeholder:text-gray-500 "
              />
            </div>
            <button
              onClick={addFunction}
              className="bg-[#2F32DE] pr-2  sm:w-[210px]  place-content-center pt-[7px] cursor-pointer flex h-[37px] text-sm items-center pb-[7px]  text-white font-bold rounded-[10px] gap-3 outline-none border-none"
            >
              <div className="mt-[2px] ">
                <span class="material-symbols-outlined w-[10px]">add</span>
              </div>
              {addName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
