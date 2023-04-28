import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { Resource } from "../../constants/articles";
import { colors } from "../../theme";

export default function ArticleResource({
  title,
  date,
  link,
  publication,
  author,
}: Resource) {
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
        <Typography
          variant="h6"
          component="h3"
          sx={{ textDecoration: "underline" }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            alignItems: ["flex-start", "center"],
            display: "flex",
            flexDirection: ["column", "row"],
            fontSize: 12,
          }}
        >
          {date && (
            <Typography sx={{ color: colors.green, mr: 2 }}>{date}</Typography>
          )}
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
