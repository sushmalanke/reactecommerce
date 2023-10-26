import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
