import React from "react";
import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminLayout(){
    const {user} = useAuthContext();
    return user.role === "admin" ? <Outlet/> : <Navigate to="/"/>
}