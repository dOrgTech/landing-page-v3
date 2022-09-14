import React from "react";
import { PresentationSection } from "./components/PresentationSection";
import { StatsSection } from "./components/StatsSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { NewsSection } from "./components/NewsSection";
import { CommunitySection } from "./components/CommunitySection";
import { ServicesSection } from "./components/ServicesSection";
import { Box } from "@mui/material";

export const HomeView: React.FC = () => {
  return (
    <Box>
      <PresentationSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <BenefitsSection />
      <CommunitySection />
      <NewsSection />
    </Box>
  );
};
