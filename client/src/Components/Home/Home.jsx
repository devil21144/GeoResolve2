import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
const Home = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async () => {
    try {
      const results = await axios.post("http://localhost:3002/register", {
        username,
        password,
      });
      if (results.statusText === "OK") {
        alert("Selection successful");
        console.log(results.data);
      }
    } catch (err) {
      console.log(err);
      let message =
        err.response?.data?.message || err.message || "Unknown error";
      if (
        message ===
        'duplicate key value violates unique constraint "users_pkey"'
      ) {
        message = `Duplicate Username\nPlease select another one`;
      }
      alert(`Error: ${message}`);
    }
  };
  return (
    <div>
      <TextField
        variant="outlined"
        required
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        label="Username"
      />
      <TextField
        variant="outlined"
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        label="Password"
      />
      <Button onClick={handleSubmit} variant="contained" color="secondary">
        Submit
      </Button>
    </div>
  );
};

export default Home;
