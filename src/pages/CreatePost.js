import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Header from "../components/Header";
import CreatePostForm from "../components/CreatePostForm";

function CreatePostPage({
  app,
  isLoading,
  isLoggedIn,
  setIsLoggedIn,
  setUserInformation,
  userInformation,
}) {
  const [postSuccessful, setPostSuccessful] = useState(false);
  const navigate = useNavigate();
  const createPost = useCallback(
    async (e) => {
      e.preventDefault();
      const db = getFirestore(app);

      const location = e.currentTarget.location.value;
      const rating = e.currentTarget.rating.value;
      const review = e.currentTarget.review.value;
      const userName = userInformation.displayName;
      const userId = userInformation.uid;

      try {
        const docRef = await addDoc(collection(db, "posts"), {
          location,
          rating,
          review,
          userName,
          userId: userId,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setPostSuccessful(true)
    },
    [app, userInformation]
  );

  useEffect(() => {
    if (!isLoggedIn && !isLoading) navigate("/login");
  }, [isLoading, isLoggedIn, navigate]);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation}
      />
      <div className="PageWrapper CreatePostWrapper">
      <h1>Add A Review</h1>
        <CreatePostForm createPost={createPost} />
        {postSuccessful && <p>Successfully Posted!</p>}
      </div>
    </>
  );
}

export default CreatePostPage;
