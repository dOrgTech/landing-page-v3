import React from "react";
import { PresentationSection } from "./components/PresentationSection";
import { StatsSection } from "./components/StatsSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { NewsSection } from "./components/NewsSection";
import { ServicesSection } from "./components/ServicesSection";
import { Box } from "@mui/material";

export const HomeView: React.FC = () => {
  return (
    <Box>
      <PresentationSection />
      <StatsSection />
      <ServicesSection />
      <BenefitsSection />
      <NewsSection />
    </Box>
  );
};
