import Menue from "../../Authentication/regular_components/Menue";
import Card from "../../../Assets/Table.png";
import Tabel from "../../../Assets/List.png";


function Header({ setViewMode, viewMode, keyword, setKeyword ,totaldata, PageName,Room,addName ,addFunction}) {

  return (
    <div >
      <div className="w-full m-auto block justify-between items-center sm:flex font-usedFont">
      <div className="display   flex gap-4 items-center sm:mb-0 mb-4 ">
        <b className="text-xl	">{PageName}</b>
        <div className="bg-[#3538e69a] text-[#2F32DE] rounded-[6px] h-[27px] px-2 items-center display flex">
        {totaldata} {Room?"Room":"properties"}
        </div>
        <div className="display flex  gap-2">
          <Menue
            table={true}
            options={[]}
            labelMenue="Sort by"
            NObtn={true}
            timeHandeler={() => {}}
          />
          <Menue
            table={true}
            options={[]}
            labelMenue="filter by"
            NObtn={true}
            timeHandeler={() => {}}
          />
        </div>
      </div>
      <div className=" flex gap-2 items-center">
     { Room?null:<div className="flex"> <div
          className={`w-10 h-10  ${
            viewMode === "table" ? "bg-[#ff8c004d] " : "bg-slate-200"
          } rounded-[10px] items-center  flex justify-center `}
        >
          <img
            src={Card}
            onClick={() => {
              setViewMode("table");
              localStorage.setItem("veiwMode","table")
            }}
         
          />
        </div>
        <div
          className={`w-10 h-10  
      ${
        viewMode != "table" ? "bg-[#ff8c004d] " : "bg-slate-200"
      } rounded-[10px] items-center display flex justify-center ml-[2px]`}
        >
          <img
            src={Tabel}
            onClick={() => {
              setViewMode("Card");
              localStorage.setItem("veiwMode","Card")
            }}
          />
        </div></div> }

        <div className="w-[170px] h-[35px] flex items-center border-solid border   border-gray-300 rounded-[10px] pl-5 overflow-hidden">
          <span class="material-symbols-outlined ml-[-10px] text-[gray] text-[14px]">search</span>
          <input
            type="text"
            id="search"
            name="query"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            // onKeyDown={handleSearch}
            placeholder="What are you looking for?"
            className="w-full border-none outline-none text-black text-[17px] bg-transparent placeholder-gray-300 placeholder:text-gray-500 p-0"
          />
        </div>
        <button onClick={addFunction} className="bg-[#2F32DE] w-[210px] place-content-center pt-[7px] cursor-pointer flex h-[37px] text-sm items-center pb-[7px]  text-white font-bold rounded-[10px] gap-3 outline-none border-none">
        
        <div className="mt-[2px]"><span class="material-symbols-outlined" >add</span></div>  
         { addName}
        </button>

      </div>    
      </div>

    </div>
  );
}

export default Header;
