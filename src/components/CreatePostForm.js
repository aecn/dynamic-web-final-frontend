import React from "react";

function CreatePostForm({ createPost }) {
  return (
    <div className="CreatePostForm">
      <form className="FormElement" onSubmit={(e) => createPost(e)}>
        <div className="location">
          <label htmlFor="location">Location</label>
          <input type="text" name="location" />
        </div>
        <div className="review">
          <label htmlFor="review">Review</label>
          <input type="text" name="review" />
        </div>
        <div className="rating">
          <label htmlFor="rating">Rating (/5)</label>
          <input type="text" name="rating" />
        </div>
        <button type="submit" className="Button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
