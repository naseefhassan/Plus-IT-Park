import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Home from "../Pages/Home";
import Profile from "../Components/Profile";
import AuthGuard from "../RouteGuard/AuthGuard";

function UserRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/" element={<AuthGuard />}>
          <Route path="/home/*" element={<Home />}></Route>
          <Route path="/profile/*" element={<Profile />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default UserRouter;
