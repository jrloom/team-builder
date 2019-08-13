import React, { useState } from "react";
import TeamMembers from "./Components/TeamMembers";

import { teamMemberData } from "./data";

import "./App.css";

function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberData);

  return (
    <div className="App">
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
