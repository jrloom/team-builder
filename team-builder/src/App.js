import React, { useState } from "react";
import TeamMembers from "./Components/TeamMembers";
import Form from "./Components/Form";

import { teamMemberData } from "./data";

import "./App.css";

function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberData);

  return (
    <div className="App">
      <Form />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
