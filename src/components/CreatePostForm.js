import React from "react";

function CreatePostForm({ createPost }) {
  return (
    <form className="FormElement" onSubmit={(e) => createPost(e)}>
      <label htmlFor="location">Location</label>
      <input type="text" name="location" />
      <label htmlFor="review">Review</label>
      <input type="text" name="review" />
      <label htmlFor="rating">Rating</label>
      <input type="text" name="rating" />

      <button type="submit" className="Button">Submit</button>
    </form>
  );
}

export default CreatePostForm;
