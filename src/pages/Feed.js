import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";
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

function FeedPage({
  app,
  isLoading,
  isLoggedIn,
  setIsLoggedIn,
  setUserInformation,
}) {
  const navigate = useNavigate();
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
        <h1>Popular Reviews</h1>
        <div className="PostWrapper">
          {postData.map((post) => (
            <Post
              location={post.location}
              rating={post.rating}
              review={post.review}
              userId={post.userId}
              userName={post.userName}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FeedPage;
