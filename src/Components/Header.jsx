import React from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const Handledelete = async () => {
    try {
      await axiosInstance.delete("/api/delete-user");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="h-20  bg-gray-200 flex justify-around items-center">
        <div className="text-3xl font-bold px-10">Plus IT</div>
        <div className="flex gap-5">
          <Link to={"/home"}>
            <button>Home</button>
          </Link>
          <Link to={"/profile"}>
            <button className="">Update</button>
          </Link>
          <button onClick={Handledelete} className="">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
