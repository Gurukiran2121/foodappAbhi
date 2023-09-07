import React from "react";
import { Navigate, Outlet } from 'react-router-dom'
const Privatecomp = () => {
  const user = localStorage.getItem("authtoken");
  return user ? <Outlet /> : <Navigate to="/signup" />;
};

export default Privatecomp;
