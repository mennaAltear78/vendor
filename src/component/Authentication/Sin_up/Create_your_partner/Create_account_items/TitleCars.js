import React from 'react'


function TitleCars(props) {
  return (
    <div className="flex  text-[#D99E20] gap-2 mr-[90px] font-[Poppins] items-center">
        <img className='w-[30px] h-[30px]'  src={props.icon}/>
        <p>{props.name}</p>
    </div>
  )
}

export default TitleCars