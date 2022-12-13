import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ImagePost from '../components/ImagePost';

function FeedPage({ 
    isLoading, 
    isLoggedIn, 
    setIsLoggedIn, 
    setUserInformation 
    }) {
    const navigate = useNavigate();

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
            <div className="PageWrapper">
                <h1>Feed / Landing Page</h1>
                <div className="ImagePostWrapper">
                    <ImagePost 
                        location="name, place"
                        imageAlt=""
                        imageSrc="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        caption="yummy"
                        userName="The One"
                    />
                    <ImagePost />
                    <ImagePost />
                    <ImagePost />
                    <ImagePost />
                </div>
            </div>
        </>
    );       
}

export default FeedPage;