import React from "react";
import { Link } from "react-router-dom";

function SignupHeader() {
  return (
    <div className="LSHeader">
      <nav>
        <p className="Logo">
          <Link to="/">explored</Link>
        </p>
          <p><Link to="/login">Log In</Link></p>
      </nav>
    </div>
  );
}

export default SignupHeader;
