import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import CreateUserForm from "../components/CreateUserForm";
import SignupHeader from "../components/SignupHeader";

function CreateUserPage({ isLoggedIn, setIsLoggedIn, setUserInformation }) {
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();
      if (!e.currentTarget) return;

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const displayName = e.currentTarget.displayName.value;

      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsLoggedIn(true);
          setErrors();

          updateProfile(user, { displayName: displayName })
            .then(() => {
              // provide info about user
              setUserInformation({
                email: user.email,
                displayName: displayName,
                uid: user.uid,
                accessToken: user.accessToken,
              });
            })
            .catch((err) => {
              const errorCode = err.code;
              const errorMessage = err.message;
              console.warn({ err, errorCode, errorMessage });
              setErrors(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
          setErrors(errorMessage);
        });
    },
    [setErrors, setIsLoggedIn, setUserInformation]
  );

  return (
    <>
      <SignupHeader />
      <div className="PageWrapper LoginWrapper">
        <h1 className="LoginLogo">Sign Up</h1>
        <CreateUserForm signUpUser={signUpUser} />
        <p className="BoldLoginText">
          <Link to="/login">Already have an account? Log in here</Link>
        </p>
        <p>{errors}</p>
      </div>
    </>
  );
}

export default CreateUserPage;
