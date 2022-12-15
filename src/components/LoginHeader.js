import React from "react";
import { Link } from "react-router-dom";

function LoginHeader() {
  return (
    <div className="LSHeader">
      <nav>
        <p className="Logo">
          <Link to="/">explored</Link>
        </p>
        <p><Link to="/create">Sign Up</Link></p>
      </nav>
    </div>
  );
}

export default LoginHeader;
