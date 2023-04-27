import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { ArticleProps } from "../../constants/articles";
import { colors } from "../../theme";

export default function ArticleListing({
  title,
  date,
  author,
  slug,
}: ArticleProps) {
  return (
    <Link
      href={`/#/articles/${slug}`}
      underline="none"
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
          {date && (
            <Typography sx={{ color: colors.green, mr: 2 }}>{date}</Typography>
          )}
          {author && (
            <Typography sx={{ color: colors.grays[300] }}>
              by {author.name}
            </Typography>
          )}
        </Box>
      </Stack>
    </Link>
  );
}
