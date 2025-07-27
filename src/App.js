// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar />
      <SignUp setUser={setUser} />
      {user && <UserCard name={user.name} email={user.email} />}
    </div>
  );
}

export default App;
