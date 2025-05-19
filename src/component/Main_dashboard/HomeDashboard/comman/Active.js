import React from 'react'

function Active({complete,ActiveName,NotActiveName}) {
  return (
    <div>
         <div className="w-full flex justify-end">
          <div
            className={`${
            complete
                ? "bg-[#23e62334] text-[green]"
                : "bg-[#5353533b] "
            } rounded-md w-[70px] px-1  h-[15px] text-[10px] flex justify-center items-center`}
          >
            <div
              className={`${
                complete ? "bg-[green] " : "bg-[#535353b7] text-[white]"
              } rounded-full h-2 w-2  mr-[3px] `}
            />
            {complete ? ActiveName: NotActiveName}
          </div>
        </div>
    </div>
  )
}

export default Active
