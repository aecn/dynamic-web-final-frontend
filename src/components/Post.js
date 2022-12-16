import React from "react";
import { Link } from "react-router-dom";

function Post({ location, rating, review, userId, userName }) {
  return (
    <div className="PostWrapper">
      <div className="Post">
        <div className="PostText">
          <p className="Location"><strong>Where?</strong> {location}</p>
          <p className="Review"><strong>Review:</strong> {review}</p>
          <p className="Rating"><strong>Rating:</strong> {rating}</p>
          <p>
            <strong>By</strong> <Link to={`user/${userId}`}>{userName}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
