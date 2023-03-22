import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { type } from "os";
import {
  AbstractIcon,
  BackgroundIcon,
  TeamIcon,
  FocusIcon,
  IncentivesIcon,
  ConclusionIcon,
} from "./CaseStudiesIcons";

interface CaseStudyHeadingProps {
  color: string;
  type:
    | "abstract"
    | "background"
    | "team"
    | "focus"
    | "alignment"
    | "conclusion";
}

export default function CaseStudyHeading({
  color,
  type,
}: CaseStudyHeadingProps) {
  const types = {
    abstract: {
      icon: <AbstractIcon color={color} />,
      title: "Abstract: ",
    },
    background: {
      icon: <BackgroundIcon color={color} />,
      title: "Background",
    },
    team: {
      icon: <TeamIcon color={color} />,
      title: "Team",
    },
    focus: {
      icon: <FocusIcon color={color} />,
      title: "Focus Areas",
    },
    alignment: {
      icon: <IncentivesIcon color={color} />,
      title: "Long Term Alignment",
    },
    conclusion: {
      icon: <ConclusionIcon color={color} />,
      title: "Conclusion",
    },
  };

  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <Box sx={{ display: "inline-flex" }}>
        {/* <img
          src={types[type].icon}
          alt="Gnosis Guild Abstract"
          loading="lazy"
          height={24}
          width="auto"
        /> */}
        {types[type].icon}
      </Box>
      <Typography variant="h3" color={color}>
        {types[type].title}
      </Typography>
    </Stack>
  );
}
