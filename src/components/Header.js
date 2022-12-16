import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Image from "../images/search.png";

function Header({ setIsLoggedIn, setUserInformation }) {
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
    <div className="Header">
      <p className="Logo">
        <Link to="/">explored</Link>
      </p>
      <nav>

        <form className="SearchBar">
          <input type="text" placeholder=" Search Locations..." name="search"></input>
          <button type="submit"><img src={Image} width="24px" height="24px"></img></button>
        </form>

        <button className="Button">
          <Link to="/createpost">+</Link>
        </button>
        <p>
          <Link to="/user/0">My Reviews</Link>
        </p>
        <p onClick={() => logout()}>Log Out</p>
      </nav>
    </div>
  );
}

export default Header;
