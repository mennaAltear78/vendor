function SpinnerLoading({dimentians='h-12 w-12 text-blue-600'}) {

  
  return (
    <div className="flex justify-center items-center w-[150px] mt-[-10px]">
      <svg
        className={`animate-spin ${dimentians} `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 12a8 8 0 0116 0"
        ></path>
      </svg>
    </div>

  )
}

export default SpinnerLoading