import React, { useState } from "react";
import axiosInstance from "../api/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [err, errmsg] = useState("");
  const [UserData, SetUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handlechage = (e) => {
    const { name, value } = e.target;
    SetUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    errmsg(""); // Clear error message on input change
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      console.log(UserData);
      const name = UserData.username;
      const email = UserData.email;
      const password = UserData.password;

      const response = await axiosInstance.post("/api/register", {
        name,
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="m-auto bg-gray-100 w-[500px] p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-2xl mb-4">Signup</h1>
        <form onSubmit={Submit} className="space-y-4">
          <div className="flex flex-col">
            <label className="flex flex-col">
              <span className="mb-1">Username</span>
              <input
                required
                type="text"
                name="username"
                placeholder="username"
                className="px-4 py-2 border border-gray-300 rounded-lg"
                value={UserData.username}
                onChange={handlechage}
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="email"
                className="px-4 py-2 border border-gray-300 rounded-lg"
                value={UserData.email}
                onChange={handlechage}
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Password</span>
              <input
                required
                type="password"
                name="password"
                placeholder="password"
                className="px-4 py-2 border border-gray-300 rounded-lg"
                value={UserData.password}
                onChange={handlechage}
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-800 transition-colors"
          >
            Signup
          </button>
          <p>
            if you have a account please?{" "}
            <Link to={"/login"}>
              <span className="text-red-500">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
