import React from 'react'

function Error({error}) {
  return (
           <div className="error  flex justify-center items-center ">{error && <p  >{error}</p>}
            </div> 
  )
}

export default Error