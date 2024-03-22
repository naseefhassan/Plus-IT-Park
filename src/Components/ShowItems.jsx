import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

function ShowItems() {
  const [product, setProduct] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/items");
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        {product.map((item, index) => {
          <div
            key={index}
            className="max-w-xs rounded overflow-hidden shadow-lg"
          >
            <img className="w-full" src={item.image} alt={item.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
              <p className="text-gray-700 text-base">
                Category: {item.category}
              </p>
              <p className="text-gray-700 text-base">Price: ${item.price}</p>
              <p className="text-gray-700 text-base">
                Rating: {item.rating.rate}/5 ({item.rating.count} reviews)
              </p>
            </div>
          </div>;
        })}
      </div>
    </>
  );
}

export default ShowItems;
