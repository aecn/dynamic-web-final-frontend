import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Post from "../components/Post";

const queryData = async (app) => {
  if (!app) return [];
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, "posts"));
  const data = [];
  querySnapshot.forEach((doc) => {
    const dataToPush = doc.data();
    data.push(dataToPush);
  });
  return data;
};

function UserProfilePage({
  app,
  isLoading,
  isLoggedIn,
  userInformation,
  setIsLoggedIn,
  setUserInformation,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) navigate("/login");
  }, [isLoading, isLoggedIn, navigate]);

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    if (!isLoggedIn && !isLoading) navigate("/login");
  }, [isLoading, isLoggedIn, navigate]);

  useEffect(() => {
    if (!app) return;
    queryData(app).then(setPostData);
  }, [app]);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation}
      />
      <div className="PageWrapper">
        <h1>My Profile</h1>
        <p>
          <strong>Username: </strong>
          {userInformation.displayName}
        </p>
        <p>
          <strong>Email: </strong>
          {userInformation.email}
        </p>

        {postData.map((post) => (
          <Post
            location={post.location}
            rating={post.rating}
            review={post.review}
          />
        ))}
      </div>
    </>
  );
}

export default UserProfilePage;
