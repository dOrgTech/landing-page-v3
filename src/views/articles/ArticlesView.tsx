import React, { useState } from "react";
import { articles } from "../../constants/articles";
import ArticlePresentationSection from "./ArticlePresentationSection";
import ArticleListing from "./ArticleListing";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { colors } from "../../theme";
import { Close } from "@material-ui/icons";

export default function ArticlesView() {
  const [searchParams, setSeachParams] = useSearchParams();
  const [tag, setTag] = useState<string | null>(searchParams.get("tag"));

  console.log(tag);

  const filteredArticles = tag
    ? articles.filter((article) => {
        console.log(article.tags, tag, article.tags.includes(tag));
        return article.tags.includes(tag);
      })
    : articles;

  const handleTagClick = () => {
    setTag("");
  };

  return (
    <Box>
      <ArticlePresentationSection />
      <Container sx={{ mb: 16, position: "relative" }}>
        {tag && (
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Typography sx={{ color: colors.grays[200], fontSize: 14 }}>
              Results for:
            </Typography>
            <Stack
              onClick={handleTagClick}
              direction="row"
              spacing={0.5}
              sx={{
                alignItems: "center",
                cursor: "pointer",
                transition: "color 0.25s ease-in-out",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>{tag}</Typography>
              <Box
                sx={{
                  borderRadius: 999,
                  bgcolor: colors.grays[100],
                  color: colors.black,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 12,
                  width: 12,
                }}
              >
                <Close
                  style={{ color: "currentColor", width: 10, height: 10 }}
                />
              </Box>
            </Stack>
          </Stack>
        )}
        {filteredArticles.map((article, i) => (
          <ArticleListing key={i} {...article} />
        ))}
      </Container>
    </Box>
  );
}
