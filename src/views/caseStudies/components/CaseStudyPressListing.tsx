import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { PressProps } from "../../../constants/caseStudies";
import { colors } from "../../../theme";

interface CaseStudyListingProps extends PressProps {
  color: string;
}

export default function CaseStudyListing({
  color,
  title,
  date,
  link,
  publication,
  author,
}: CaseStudyListingProps) {
  return (
    <Link
      href={link}
      underline="none"
      target="_blank"
      rel="noredirect"
      sx={{
        color: "white",
        transition: "opacity 0.25s ease-in-out",
        "&:hover": {
          opacity: 0.6,
        },
      }}
    >
      <Stack spacing={1}>
        <Typography variant="h4" sx={{ textDecoration: "underline" }}>
          {title}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: color }}>{date}</Typography>
          {author && (
            <Typography sx={{ color: colors.grays[300] }}>
              by {author}
            </Typography>
          )}
          {publication && (
            <Typography sx={{ color: colors.grays[300] }}>
              {publication}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Link>
  );
}
