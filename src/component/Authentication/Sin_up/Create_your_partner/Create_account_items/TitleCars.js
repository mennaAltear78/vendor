import React from 'react'


function TitleCars(props) {
  return (
    <div className="flex sm:text-[25px] text-[18px]  text-[#D99E20] gap-2 mr-[90px] font-[Poppins] items-center">
       {props.icon? <img className='w-[30px] h-[30px]'  src={props.icon}/>:null}
        <p>{props.name}</p>
    </div>
  )
}

export default TitleCars