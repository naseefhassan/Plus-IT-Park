import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      console.log(loginData);
      const email = loginData.email;
      const password = loginData.password;

      const response = await axiosInstance.post("/api/login", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="m-auto bg-gray-100 w-[500px] p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-2xl mb-4">Login</h1>
        <form onSubmit={Submit} className="space-y-4">
          <div className="flex flex-col">
            <label className="flex flex-col">
              <span className="mb-1">Email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLogin}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Password</span>
              <input
                required
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLogin}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-800 transition-colors"
          >
            Login
          </button>
          <p>
            If you don't have an account, please{" "}
            <Link to={"/"}>
              <span className="text-red-500">Signup</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
