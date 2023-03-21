import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { type } from "os";
import { CaseStudyLinkProps } from "../../../constants/caseStudies";

import AbstractIcon from "../../../assets/imgs/benefits/swarm.svg"; // Placeholder

const types = {
  abstract: {
    icon: AbstractIcon,
    title: "Abstract: ",
  },
  background: {
    icon: AbstractIcon,
    title: "Background",
  },
  team: {
    icon: AbstractIcon,
    title: "Team",
  },
  focus: {
    icon: AbstractIcon,
    title: "Focus Areas",
  },
  "long-term": {
    icon: AbstractIcon,
    title: "Long Term Alignment",
  },
  conclusion: {
    icon: AbstractIcon,
    title: "Conclusion",
  },
};

interface CaseStudyHeadingProps {
  color: string;
  type:
    | "abstract"
    | "background"
    | "team"
    | "focus"
    | "long-term"
    | "conclusion";
}

export default function CaseStudyHeading({
  color,
  type,
}: CaseStudyHeadingProps) {
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <Box sx={{ display: "inline-flex" }}>
        <img
          src={types[type].icon}
          alt="Gnosis Guild Abstract"
          loading="lazy"
          height={24}
          width="auto"
        />
      </Box>
      <Typography variant="h3" color={color}>
        {types[type].title}
      </Typography>
    </Stack>
  );
}
