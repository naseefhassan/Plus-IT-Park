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
      <div className="h-20 w-full -my-24 fixed  bg-gray-200 flex justify-around items-center">
        <div className="text-3xl font-bold px-10">Plus IT</div>
        <div className="flex gap-5">
          <Link to={"/home"}>
            <button className="cursor-pointer hover:border-b-black hover:border-2 leading-5">
              Home
            </button>
          </Link>
          <Link to={"/profile"}>
            <button className="cursor-pointer hover:border-b-black hover:border-2 leading-5">
              Update
            </button>
          </Link>
          <button
            onClick={Handledelete}
            className="cursor-pointer hover:border-b-black hover:border-2 leading-5"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
