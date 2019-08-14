import React, { useState } from "react";

const Form = props => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: []
  });

  const handleChange = event => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newTeamMember = {
      ...teamMember,
      id: Date.now()
    };
    props.addNewTeamMember(newTeamMember);
    setTeamMember({
      name: "",
      email: "",
      role: []
    });
  };

  return (
    <div>
      <h1>Come Join Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={teamMember.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={teamMember.email} onChange={handleChange} />

        <label htmlFor="role">Role:</label>
        <input type="text" name="role" value={teamMember.role} onChange={handleChange} />

        <button type="submit">Become</button>
      </form>
    </div>
  );
};

export default Form;
