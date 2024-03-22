import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";

function AuthGuard() {
  const navigate = useNavigate();
  const [isProtected, setIsProtected] = useState(false);

  useEffect(() => {
    const fetchProtectedRoute = async () => {
      try {
        const response = await axiosInstance.get("/api/protected");
        if (response.status === 200) {
          setIsProtected(true);
        }
      } catch (error) {
        if(error.response && error.response.status === 400){
            navigate('/')
        }
        console.error(error);
      }
    };
    fetchProtectedRoute();
  }, []);

  return <>{isProtected && <Outlet />}</>;
}

export default AuthGuard;
