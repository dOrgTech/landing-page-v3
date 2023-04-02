import React from "react";
import { Box } from "@mui/material";
import CaseStudiesListing from "./components/CaseStudiesListing";
import CaseStudiesPresentationSection from "./components/CaseStudiesPresentationSection";

export const CaseStudiesView: React.FC = () => {
  return (
    <Box>
      <CaseStudiesPresentationSection />
      <CaseStudiesListing />
    </Box>
  );
};
