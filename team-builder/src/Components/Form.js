import React, { useState } from "react";

const Form = props => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: []
  });

  return (
    <div>
      <h1>Come Join Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />

        <label htmlFor="role">Role:</label>
        <input type="text" name="role" />

        <button type="submit">Become</button>
      </form>
    </div>
  );
};

export default Form;
