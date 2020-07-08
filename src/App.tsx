import React, { useState } from "react";
import axios from "axios";
import Button from "./components/Button";
import Users from "./components/Users";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = (e:any) => {
    console.log("users");
    e.preventDefault();
    axios({
      method: "GET",
      url: "http://localhost:5000/users",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setUsers(res.data);
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {!!users.length && <Users users={users} />}
        <Button
          actionType="button"
          type="primary"
          text="get all users"
          onClickHandler={getAllUsers}
        />
      </header>
    </div>
  );
};

export default App;
