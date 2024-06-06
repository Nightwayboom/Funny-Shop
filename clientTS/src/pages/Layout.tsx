import React from "react";
import { Outlet } from "react-router-dom";
import { UserProps } from "../components/app.type";
import NavBar from "../components/NavBar";


export default function Layout({ user, setUser}: UserProps) : JSX.Element  {
  return (
    <>
      <NavBar user={user} setUser={setUser} />
    <div className="container" style={{ marginTop: "20px" }}>
      <Outlet />
    </div>
    </>
  );
}