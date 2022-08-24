import React from "react";
import { PresentationSection } from "./components/PresentationSection";
import { NewsSection } from "./components/NewsSection";
import { Box } from "@mui/material";

export const HomeView: React.FC = () => {
  return (
    <Box>
      <PresentationSection />
      <NewsSection />
    </Box>
  );
};
