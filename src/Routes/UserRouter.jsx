import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Home from "../Pages/Home";

function UserRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/home/*' element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default UserRouter;
