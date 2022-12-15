import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../components/LoginForm';
import LoginHeader from '../components/LoginHeader';

function LoginPage({ isLoggedIn, setIsLoggedIn, setUserInformation }) {
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) navigate("/");
    }, [isLoggedIn, navigate]);

    const loginUser = useCallback((e) => {
        e.preventDefault();
        // assign email & password to variables from form
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // since user is true, set logged in
                setIsLoggedIn(true);
                // provide info about user via setState
                setUserInformation({
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                    accessToken: user.accessToken,
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn({ error, errorCode, errorMessage });
                setErrors(errorMessage);
            });
        }, [setIsLoggedIn, setUserInformation]);

    return (
        <>
            <LoginHeader />
            <div className="PageWrapper LoginWrapper">
                <h1 className="LoginLogo">Log in to start!</h1>
                <LoginForm loginUser={loginUser} />
                <p className="BoldLoginText"><Link to="/create">Click here to create an account</Link></p>
                <p>{errors}</p>
            </div>
        </>
    );       
}

export default LoginPage;