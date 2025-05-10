import React from "react";
import { Link } from "react-router-dom";
import notfound from './../Assets/page-not-found-404-error-concept-illustration-free-vector.jpg'
const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" ,color:'red'}}>
      <img style={{width:'600px'}} src={notfound}/>
      <div style={{color:'gray' ,marginTop:'-50px'}}>
      <Link to="/" >Go Back to Home</Link>
    </div></div>
  );
};

export default NotFound;