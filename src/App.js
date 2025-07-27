// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <Navbar />
      <SignUp />
      <UserCard name="Aditya Bhardwaj" email="aditya@example.com" />
    </div>
  );
}

export default App;
