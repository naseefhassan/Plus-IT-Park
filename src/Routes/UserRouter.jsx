import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

function UserRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default UserRouter;
