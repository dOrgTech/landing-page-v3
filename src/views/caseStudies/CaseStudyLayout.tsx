import React, { ReactNode } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { CaseStudyLinkProps } from "../../constants/caseStudies";
import GameOfLifeAnimation from "../../commons/gameOfLifeAnimation/GameOfLifeAnimation";

interface CaseStudyLayoutProps extends CaseStudyLinkProps {
  children: ReactNode;
}

export const CaseStudyLayout = ({
  children,
  title,
  summary,
  thumbnail,
  color,
  ...props
}: CaseStudyLayoutProps) => {
  return (
    <Box sx={{ minHeight: "80vh", position: "relative", width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          // maxHeight: 600,
          position: "absolute",
          bottom: 0,
          filter: "blur(8px)",
        }}
      >
        <GameOfLifeAnimation
          resolution={128}
          animate={false}
          opacity={0.08}
          className="case-study"
        />
      </Box>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid
          container
          rowSpacing={8}
          columnSpacing={20}
          sx={{
            alignItems: "center",
            flexDirection: "row-reverse",
            mt: [16, 10, 0],
            minHeight: "100vh",
          }}
        >
          <Grid item xs={12} lg={6}>
            <Box sx={{ width: "100%" }}>
              <img src={thumbnail} alt={title} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography
              textTransform="uppercase"
              letterSpacing={5}
              lineHeight={1}
            >
              Case Study
            </Typography>
            <Typography
              variant="h1"
              sx={{ color: color, fontSize: ["3rem", "4rem"], mt: 0 }}
            >
              {title}
            </Typography>
            <Typography sx={{ mt: 2 }}>{summary}</Typography>
          </Grid>
        </Grid>
        <Box component="section" sx={{ pb: 20 }}>
          <Grid container spacing={8}>
            <Grid item xs={12} lg={4}>
              <Typography
                textTransform="uppercase"
                letterSpacing={5}
                lineHeight={1}
              >
                Role
              </Typography>
              <Typography
                textTransform="uppercase"
                letterSpacing={5}
                lineHeight={1}
              >
                PROJECTS
              </Typography>
            </Grid>
            <Grid item xs={12} lg={8}>
              {children}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
