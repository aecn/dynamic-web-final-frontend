import React from 'react';
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Header({ /*isLoggedIn,*/ setIsLoggedIn, setUserInformation }) {
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
        <div class="Header">
            <p className="Logo">Food image share</p>
            <nav>
                <p>
                <Link to="/">
                    My Profile
                </Link>
                </p>
                <p>
                <Link to="/">
                    Search
                </Link>
                </p>
                <p onClick={() => logout()}>Log Out</p>
                <button className="Button"><Link to="/create-post">Create Post</Link></button>
            </nav>
        </div>
    );      
}

export default Header;