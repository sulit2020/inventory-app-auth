import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client";

const RequireAuth = ({ children }) => {
  const { user, setUser } = useStateContext();
  const { location } = useLocation();
  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  console.log(user.role);

  const USER_TYPE = user.role;

  const USER_TYPES = {
    Admin: "Admin",
    Non_admin: "Non-admin",
  };

  const CURRENT_USER_TYPE = USER_TYPE;

  if (CURRENT_USER_TYPE === USER_TYPES.Admin) {
    return <>{children}</>;
  } else {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
