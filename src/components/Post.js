import React from "react";
import { Link } from "react-router-dom";

function Post({ location, rating, review, userId, userName }) {
  return (
    <div className="PostWrapper">
      <div className="Post">
        <div className="PostText">
          <p className="Location">{location}</p>
          <p className="Review">{review}</p>
          <p className="Rating">{rating}</p>
          <p>
            Posted by: <Link to={`user/${userId}`}>{userName}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
