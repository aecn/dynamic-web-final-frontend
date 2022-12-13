import React from "react";

function CreatePostForm({ createPost }) {
  return (
    <form className="FormElement" onSubmit={(e) => createPost(e)}>
        <label for="imageToUpload">Upload Your Image</label>
        <input type="file" name="imageToUpload" 
        accept="image/png, image/jpeg, image/jpg, image/gif"></input>

        <label htmlFor="caption">Caption</label>
        <input type="text" name="caption" />
        <label htmlFor="location">Location</label>
        <input type="text" name="location" />
        <label htmlFor="imageAlt">Image Alt Text</label>
        <input type="text" name="imageAlt" />

      <button type="submit" className="Button">
        Submit
      </button>
    </form>
  );
}

export default CreatePostForm;
