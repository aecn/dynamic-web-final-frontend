import React from "react";
import { Link } from "react-router-dom";

function SignupHeader() {
  return (
    <div className="LSHeader">
      <p className="Logo">
        <Link to="/"></Link>
      </p>
      <p className="Logo">
        <Link to="/login">Log In</Link>
      </p>
      <nav></nav>
    </div>
  );
}

export default SignupHeader;
