import React from "react";

function Header() {
  return (
    <>
      <div className="h-20  bg-gray-200 flex justify-around items-center">
        <div className="text-3xl font-bold px-10">Plus IT</div>
        <div className="flex gap-5">
          <button className="bg-orange-900 p-2">Update</button>
          <button className="bg-orange-900 p-2">Delete</button>
        </div>
      </div>
    </>
  );
}

export default Header;
