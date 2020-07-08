import React from "react";
import "./index.scss";

const Users = ({ users }) => {
  const cellNames = [
    "Id",
    "First Name",
    "Last Name",
    "E-mail",
    "Description",
    "Role",
    "Password",
  ];
  return (
    <div className="usersContainer">
      <div className="usersHeader">
        {cellNames.map((item, index) => (
          <div key={index} className="headerCell">
            {item}
          </div>
        ))}
      </div>
      {users.map((item, index) => (
        <div key={index} className="userRow">
          {Object.values(item).map((cell, index) => (
            <div key={index} className="cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Users;

{
  /* {  }, */
}
