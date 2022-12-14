import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function SignupHeader({ setIsLoggedIn, setUserInformation }) {
  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  return (
    <div className="LoginHeader">
      <p className="Logo">
        <Link to="/">explored</Link>
      </p>
      <p className="Logo">
        <Link to="/login">Log In</Link>
      </p>
      <nav></nav>
    </div>
  );
}

export default SignupHeader;
