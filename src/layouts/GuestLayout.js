import React from "react";
import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestLayout(){
    const {user} = useAuthContext();
    return !user ? <Outlet/> : <Navigate to="/"/>;
}