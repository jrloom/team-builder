import React, { useState } from "react";
import TeamMembers from "./Components/TeamMembers";
import Form from "./Components/Form";

import { teamMemberData } from "./data";

import "./App.css";

function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberData);

  const addNewTeamMember = teamMember => {
    setTeamMembers([...teamMembers, teamMember]);
  };

  return (
    <div className="App">
      <Form addNewTeamMember={addNewTeamMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
