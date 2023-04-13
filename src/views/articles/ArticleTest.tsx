import React from "react";
import { ArticleLayout } from "./ArticleLayout";
import { Typography } from "@mui/material";

export default function ArticleTest() {
  return (
    <ArticleLayout>
      <Typography variant="h1" sx={{ mt: 0 }}>
        Hello
      </Typography>
      <Typography>This is a test</Typography>
    </ArticleLayout>
  );
}
