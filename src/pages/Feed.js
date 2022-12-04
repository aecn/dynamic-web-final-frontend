import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

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
                <p>Feed</p>
            </div>
        </>
    );       
}

export default FeedPage;