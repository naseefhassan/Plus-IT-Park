import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";

function AuthGuard() {
  const navigate = useNavigate();
  const [Isprotected, setProtected] = useState(false);

  useEffect(() => {
    try {
      const ProtectedRoute = async () => {
        const response = await axiosInstance.get("/api/protected");
        console.log(response);
        if (response.status === 200) {
          setProtected(true);
        } else {
          navigate("/");
        }
        console.log(response);
      };
      ProtectedRoute();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return <>{Isprotected && <Outlet />}</>;
}

export default AuthGuard;
