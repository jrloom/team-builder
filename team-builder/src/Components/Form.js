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

        {/* 
        Issue: Using enter on <select> throws an error: Assertion failed: Input argument is not an HTMLInputElement in onloadwff.js
        A little research brought this: Basically workaround is to just assume customers don't have LastPass and if they do, just explain its a LastPass issue...
        from https://forums.lastpass.com/viewtopic.php?f=12&t=326565
        Disabling LastPass removes the error, but hitting enter then does nothing - instead of rendering a new Team Member card
        Enter does work on Name and Email
        Using Firefox at the moment. Have not tried in Chrome
        */}

        <button type="submit">Become</button>
      </form>
    </div>
  );
};

export default Form;
