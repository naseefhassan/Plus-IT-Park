import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const Handledelete = async () => {
    try {
      const response = await axiosInstance.delete("/api/delete-user");
      console.log(response);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <>
      <div className="h-20  bg-gray-200 flex justify-around items-center">
        <div className="text-3xl font-bold px-10">Plus IT</div>
        <div className="flex gap-5">
          <Link to={"/profile"}>
            <button className="bg-orange-900 p-2">Update</button>
          </Link>
          <button onClick={Handledelete} className="bg-orange-900 p-2">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
