import { Box } from "@mui/material";
import React from "react";
import { EpisodeSection } from "./components/EpisodeSection";
import { HotSeatDescriptionSection } from "./components/HotSeatDescriptionSection";
import { HotSeatPresentationSection } from "./components/HotSeatPresentationSection";

export const HotSeatView: React.FC = () => {
  return (
    <Box>
      <HotSeatPresentationSection />
      <HotSeatDescriptionSection />
      <EpisodeSection />
    </Box>
  );
};
