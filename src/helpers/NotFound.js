import React from "react";
import { Link } from "react-router-dom";
import notfound from './../Assets/page-not-found-404-error-concept-illustration-free-vector.jpg'
const NotFound = () => {
  return (
<div className="text-center py-12 text-red-500">
  <img src={notfound} className="sm:w-[600px] w-[340px] mx-auto" />
  <div className="text-gray-500 -mt-12">
    <Link to="/" className="underline hover:text-gray-700">Go Back to Home</Link>
  </div>
</div>

  );
};

export default NotFound;