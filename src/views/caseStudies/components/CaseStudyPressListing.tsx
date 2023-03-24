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
        width: "fit-content",
        "&:hover": {
          opacity: 0.7,
        },
      }}
    >
      <Stack spacing={1}>
        <Typography variant="h4" sx={{ textDecoration: "underline" }}>
          {title}
        </Typography>
        <Box
          sx={{
            alignItems: ["flex-start", "center"],
            display: "flex",
            flexDirection: ["column", "row"],
          }}
        >
          <Typography sx={{ color: color, mr: 2 }}>{date}</Typography>
          {author && (
            <Typography sx={{ color: colors.grays[300] }}>
              by {author}
            </Typography>
          )}
          {publication && (
            <Typography sx={{ color: colors.grays[300], ml: [0, author && 2] }}>
              {publication}
            </Typography>
          )}
        </Box>
      </Stack>
    </Link>
  );
}
