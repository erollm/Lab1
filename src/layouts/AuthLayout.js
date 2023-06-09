import React from "react";
import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../components/Login";

export default function AuthLayout(){
    const {user} = useAuthContext();
    return user ? <Outlet/> : <Login/>
}