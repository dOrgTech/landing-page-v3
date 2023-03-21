import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import GameOfLifeAnimation from "../../../commons/gameOfLifeAnimation/GameOfLifeAnimation";

export default function CaseStudiesPresentationSection() {
  return (
    <>
      <Box sx={{ minHeight: "60vh", width: "100%" }}>
        <GameOfLifeAnimation opacity={0.1} className="presentation" />
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Grid
            container
            spacing={8}
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "60vh",
            }}
          >
            <Grid item>
              <Typography variant="h1" sx={{ fontSize: ["3r7em", "4rem"] }}>
                Case Studies
              </Typography>
              <Typography sx={{ mt: 2, maxWidth: 440 }}>
                Lorem ipsum information about our case studies and another call
                out to our values as an org/ benefits our clients have
                experienced.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
