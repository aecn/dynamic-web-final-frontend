import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Header from '../components/Header';
import CreatePostForm from '../components/CreatePostForm';

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

            /*image url*/
            const caption = e.currentTarget.caption.value;
            const imageAlt = e.currentTarget.imageAlt.value;
            const imageUrl = "";
            const location = e.currentTarget.location.value;
            const userName = userInformation.displayName;
            const userId = userInformation.uid;

            try {
                const docRef = await addDoc(collection(db, "posts"), {
                    caption,
                    imageAlt,
                    imageUrl,
                    location,
                    userName,
                    userId: userId,
                });
                    console.log("Document written with ID: ", docRef.id);
                    setPostSuccessful(true)
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
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
                <p>Create Post</p>
                <CreatePostForm createPost={createPost} />
                {postSuccessful && <p>Successfully Posted!</p>}
            </div>
        </>
    );       
}

export default CreatePostPage;