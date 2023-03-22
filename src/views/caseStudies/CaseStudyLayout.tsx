import React, { ReactNode } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { CaseStudyLinkProps } from "../../constants/caseStudies";
import GameOfLifeAnimation from "../../commons/gameOfLifeAnimation/GameOfLifeAnimation";
import { Button } from "../../commons/button/Button";

interface CaseStudyLayoutProps extends CaseStudyLinkProps {
  children: ReactNode;
}

export const CaseStudyLayout = ({
  children,
  title,
  summary,
  thumbnail,
  color,
  roles,
  projects,
  ...props
}: CaseStudyLayoutProps) => {
  return (
    <Box sx={{ minHeight: "80vh", position: "relative", width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: "140vh",
          position: "absolute",
          top: 0,
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
        <Box component="section" sx={{ pb: 12, pt: [20, 20, 20, 0] }}>
          <Grid container spacing={8} sx={{ flexDirection: "row-reverse" }}>
            <Grid item xs={12} lg={8}>
              {children}
            </Grid>
            <Grid item xs={12} lg={4}>
              <Stack spacing={8}>
                {roles && (
                  <Stack spacing={3}>
                    <Typography
                      textTransform="uppercase"
                      letterSpacing={5}
                      lineHeight={1}
                    >
                      Role
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 3 }}>
                      {roles.map((role, i) => (
                        <Typography key={i} sx={{ fontSize: 14 }}>
                          {role}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                )}
                {projects && (
                  <Stack spacing={3}>
                    <Typography
                      textTransform="uppercase"
                      letterSpacing={5}
                      lineHeight={1}
                    >
                      Projects
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 3 }}>
                      {projects.map((project, i) => (
                        <Typography key={i} sx={{ fontSize: 14 }}>
                          {project}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box
          component="section"
          sx={{ borderTop: `2px solid ${color}`, py: 12 }}
        >
          <Grid container spacing={4}>
            <Grid item xs={0} lg={4}></Grid>
            <Grid item xs={12} lg={8}>
              <Stack spacing={4}>
                <Stack spacing={2}>
                  <Typography
                    variant="h2"
                    sx={{ fontSize: ["3rem", "4rem", "5rem"], mt: 0 }}
                  >
                    Do you need something built?
                  </Typography>
                  <Typography sx={{ fontSize: 20 }}>
                    dOrg has a longstanding history of complex web3 development
                    and integration partnerships. We’ve worked with over 65 web3
                    projects since 2019 with more than 2 billion dollars of
                    total lifetime value in shipped products as well as more
                    than 5 million on-chain revenue.
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{ width: "fit-content" }}
                  href="/#/hire"
                >
                  Hire Us
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
