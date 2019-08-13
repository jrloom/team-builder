import React from "react";

const TeamMembers = props => {
  return (
    <div>
      <h2>Current Team Members</h2>
      {props.teamMembers.map(teamMember => {
        return (
          <div key={teamMember.id}>
            <p>
              {teamMember.name}, {teamMember.role}
            </p>
            <p>{teamMember.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;
