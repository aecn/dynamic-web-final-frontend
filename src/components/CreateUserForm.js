import React from "react";

function CreateUserForm({ signUpUser }) {
  return (
      <form className="FormElement" onSubmit={(e) => signUpUser(e)}>
        <label htmlFor="displayName">Username</label>
        <input type="text" name="displayName" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <button type="submit" className="Button">
          Submit
        </button>
      </form>
  );
}

export default CreateUserForm;
