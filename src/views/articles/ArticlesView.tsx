import React from "react";
import { articles } from "../../constants/articles";
import ArticlePresentationSection from "./ArticlePresentationSection";
import ArticleListing from "./ArticleListing";
import { Box, Container } from "@mui/material";

export default function ArticlesView() {
  return (
    <Box>
      <ArticlePresentationSection />
      <Container sx={{ mb: 16, position: "relative" }}>
        {articles.map((article, i) => (
          <ArticleListing key={i} {...article} />
        ))}
      </Container>
    </Box>
  );
}
