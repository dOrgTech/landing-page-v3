import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import GameOfLifeAnimation from "../../commons/gameOfLifeAnimation/GameOfLifeAnimation";

export default function ArticlesPresentationSection() {
  return (
    <>
      <Box sx={{ minHeight: "60vh", width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: 0,
            filter: "blur(8px)",
          }}
        >
          <GameOfLifeAnimation
            resolution={128}
            animate={false}
            opacity={0.08}
            className="case-studies"
          />
        </Box>
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Grid
            container
            spacing={8}
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "60vh",
              transform: "translateY(5vh)",
            }}
          >
            <Grid item>
              <Typography variant="h1" sx={{ fontSize: ["3r7em", "4rem"] }}>
                Articles
              </Typography>
              <Typography sx={{ fontSize: 20, mt: 2, maxWidth: 600 }}>
                Stay informed and up-to-date on the latest blockchain and
                decentralized technology trends, advancements, and use cases
                through our collection of insightful articles from our dev
                experts.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
