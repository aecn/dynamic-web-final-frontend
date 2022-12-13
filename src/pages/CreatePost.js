import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
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
            const storage = getStorage();

            // text
            const caption = e.currentTarget.caption.value;
            const location = e.currentTarget.location.value;

            // images
            const imageToUpload = e.currentTarget.imageToUpload.files[0];
            const imageAlt = e.currentTarget.imageAlt.value;
            const imageRef = ref(storage, imageToUpload.name);
            //const imageUrl = e.currentTarget.imageToUpload.files[0];

            // user
            const userName = userInformation.displayName;
            const userId = userInformation.uid;

            try {
                const imageUpload = await uploadBytes(imageRef, imageToUpload).then(
                    (snapshot) => {
                    console.log("Uploaded a blob or file!", snapshot);
                    return snapshot;
                    }
                );

                const docRef = await addDoc(collection(db, "posts"), {
                    caption,
                    imageAlt,
                    imageUrl: imageUpload.metadata.fullPath,
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