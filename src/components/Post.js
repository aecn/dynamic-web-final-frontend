import React, { useState } from "react";
import { Link } from "react-router-dom";

function Post({
  location,
  rating,
  review,
  userId,
  userName,
}) {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="PostWrapper">
      <div className="Post">
        <div className="PostText">
          <p className="Location">
            <strong>Location:</strong> {location}
          </p>
          <p className="Review">
            <strong>Review:</strong> {review}
          </p>
          <p className="Rating">
            <strong>Rating:</strong> {rating}
          </p>
          <p>
            <strong>By</strong> <Link to={`user/${userId}`}>{userName}</Link>
          </p>
        </div>
        <button onClick={incrementCount}> {count} 💛 </button>
      </div>
    </div>
  );
}

export default Post;
