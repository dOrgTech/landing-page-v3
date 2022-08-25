import React from "react";
import { PresentationSection } from "./components/PresentationSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { NewsSection } from "./components/NewsSection";
import { Box } from "@mui/material";

export const HomeView: React.FC = () => {
  return (
    <Box>
      <PresentationSection />
      <BenefitsSection />
      <NewsSection />
    </Box>
  );
};
