import React from "react";
import { PresentationSection } from "./components/PresentationSection";

import { Box } from "@mui/material";
import ActionSection from "./components/ActionSection";

export const HomeView: React.FC = () => {
  return (
    <Box>
      <PresentationSection />
      <ActionSection />
    </Box>
  );
};
