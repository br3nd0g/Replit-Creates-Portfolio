import React from "react";
import {Outlet} from "react-router-dom";
import Header from "/src/header/header";

export default function Layout(){
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};