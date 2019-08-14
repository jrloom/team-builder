import React, { useState } from "react";

import { teamMemberRoles } from "../data";

const Form = props => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: ""
  });

  const handleChange = event => setTeamMember({ ...teamMember, [event.target.name]: event.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    const newTeamMember = { ...teamMember, id: Date.now() };
    props.addNewTeamMember(newTeamMember);
    setTeamMember({
      name: "",
      email: ""
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
        <select name="role" onChange={handleChange}>
          {teamMemberRoles.map(teamMemberRole => {
            return (
              <option key={teamMemberRole.id} value={teamMemberRole.role}>
                {teamMemberRole.role}
              </option>
            );
          })}
        </select>

        <button type="submit">Become</button>
      </form>
    </div>
  );
};

export default Form;
