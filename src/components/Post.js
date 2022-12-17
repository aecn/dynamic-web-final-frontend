import React, { setState } from "react";
import { Link } from "react-router-dom";

function Post({
  increment,
  location,
  rating,
  review,
  userId,
  userName,
  state,
}) {

  state = {
    likes: 100
  };

  increment = () => {
    let newCount = state.likes + 1;
      setState({
      likes: newCount,
    });
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
        <button onClick={increment}> {state.likes} 💛 </button>
      </div>
    </div>
  );
}

export default Post;
