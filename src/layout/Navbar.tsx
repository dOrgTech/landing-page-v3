import React from "react";
import { Header } from "../commons/header/Header";
import { Box } from "@mui/material";

export const Navbar: React.FC = ({ children }) => {
  return (
    <Box sx={{minHeight: "100vh"}}>
      <Header />
      {children}
    </Box>
  );
};
