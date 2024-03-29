import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { ArticleProps } from "../../constants/articles";
import { colors } from "../../theme";

export default function ArticleListing({
  title,
  date,
  authors,
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
            <Typography sx={{ color: colors.magenta, mr: 2 }}>
              {date}
            </Typography>
          )}
          {authors && authors.length > 0 && (
            <Stack direction="row" spacing={1}>
              <Typography sx={{ color: colors.grays[300] }}>by</Typography>
              {authors.map((author, i) => (
                <Typography key={i} sx={{ color: colors.grays[300] }}>
                  {author.name}
                  {i < authors.length - 1 ? "," : null}
                </Typography>
              ))}
            </Stack>
          )}
        </Box>
      </Stack>
    </Link>
  );
}
