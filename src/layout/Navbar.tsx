import React from "react";
import { Header } from "../commons/header/Header";

export const Navbar: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
