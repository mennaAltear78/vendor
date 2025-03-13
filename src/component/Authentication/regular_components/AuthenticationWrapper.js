import React from "react";
import Header from "../Header";
import Title_here from "../Title_here";

function AuthenticationWrapper(props) {
  return (
    <div>
      <Header />

      <div className="maincontent">
        {props.children}
        <Title_here />
      </div>
    </div>
  );
}

export default AuthenticationWrapper;
