import React from "react";

const TeamMembers = props => {
  return (
    <div>
      <h2>Current Team Members</h2>
      <div className="container">
        {props.teamMembers.map(teamMember => {
          return (
            <div className="card" key={teamMember.id}>
              <h3>{teamMember.name}</h3>
              <p>{teamMember.role}</p>
              <p>{teamMember.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMembers;
