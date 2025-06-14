import React from 'react'

function CreateCardContainer({children}) {
  return (
             <div className="grid justify-center sm:w-full   sm:ml-[130px]  items-center">
              <div className=" bg-[#80808010] min-w-[350px] max-w-[490px]  rounded-[20px] pr-3 pb-5">
                {children}
                </div>
                </div>
  )
}

export default CreateCardContainer