import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

function ShowItems() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/items");
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-6 my-24 justify-around">
        {product.map((item, index) => (
          <div
            key={index}
            className="max-w-xs rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-[300px]"
              src={item.image}
              alt={item.title}
            />
            <div className="px-6 py-4 text-justify">
              <div className="font-bold  text-xl mb-2 text-center">
                {item.title}
              </div>
              <p className="text-gray-700 text-base">
                <h1 className="text-center font-bold">Description</h1>
                {item.description}
              </p>
              <p className=" flex text-gray-700 mt-7 text-base ">
                <h1 className="font-bold px-2"> Category: </h1>
                {item.category}
              </p>
              <p className=" flex text-gray-700 text-base mt-2">
                <h1 className="font-bold px-2"> Price:</h1>${item.price}
              </p>
              <p className=" flex text-gray-700 text-base mt-2">
                <h1 className="font-bold px-2"> Rating:</h1>
                {item.rating.rate}/5 ({item.rating.count} reviews)
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowItems;
