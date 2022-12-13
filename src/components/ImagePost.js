import React from 'react';
import { Link } from 'react-router-dom';

function ImagePost({imageSrc, imageAlt, caption, location,userId, userName }){
    return (
        <div className="ImagePostWrapper">
        <div className="ImagePost">
        <img src={imageSrc} alt={imageAlt} />
            <div className="ImagePostText">
                <p className="Caption">{caption}</p>
                <p className="Location">{location}</p>
                <p>Posted by: <Link to={`user/${userId}`}>{userName}</Link></p>
            </div>
            </div>
        </div>
    )
}

export default ImagePost;