import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Button } from "../../../commons/button/Button";
import { colors } from "../../../theme";
import SwarmBenefit from "../../../assets/imgs/benefits/swarm.svg";
import TechBenefit from "../../../assets/imgs/benefits/tech.svg";
import CoordinationBenefit from "../../../assets/imgs/benefits/coordination.svg";
import AlignmentBenefit from "../../../assets/imgs/benefits/alignment.svg";
import GameOfLifeAnimation from "../../../commons/gameOfLifeAnimation/GameOfLifeAnimation";

const benefits = [
  {
    slug: "swarm",
    color: colors.green,
    icon: SwarmBenefit,
    title: "Swarm Methodology",
    description:
      "Work with the right builders at the right time based on your project’s week-to-week needs.",
  },
  {
    slug: "tech",
    color: colors.orange,
    icon: TechBenefit,
    title: "Bleeding Edge",
    description:
      "Leverage our experience building with the latest web3 tech and best practices.",
  },
  {
    slug: "coordination",
    color: colors.purple,
    icon: CoordinationBenefit,
    title: "Continuous Coordination",
    description:
      "Interface through a dedicated PM to ensure we continuously satisfy your requirements.",
  },
  {
    slug: "alignment",
    color: colors.magenta,
    icon: AlignmentBenefit,
    title: "Long-Term Alignment",
    description:
      "Utilize your project’s tokens to align incentives with our builders.",
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <Box mt={[16, 24, 32]} position="relative">
      <GameOfLifeAnimation fadeFromBlack className="benefits" />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography
          variant="h6"
          component="h2"
          textTransform="uppercase"
          textAlign="center"
          letterSpacing={5}
        >
          The Dorg Difference{" "}
          <span role="img" aria-label="magic wand">
            🪄
          </span>
        </Typography>
        <Grid container spacing={5} alignItems="stretch" mt={8}>
          {benefits.map((benefit) => {
            return (
              <Grid item key={benefit.slug} xs={12} sm={6} lg={3}>
                <Stack
                  px={3}
                  py={8}
                  direction="column"
                  spacing={3}
                  sx={{
                    bgcolor: "rgba(0,0,0,0.8)",
                    border: `4px solid ${benefit.color}`,
                    borderRadius: "24px",
                    height: "100%",
                    "&:hover": {
                      background: `linear-gradient(rgba(0,0,0,0.8) 40%, ${benefit.color})`,
                    },
                  }}
                >
                  <img
                    src={benefit.icon}
                    alt={benefit.slug}
                    height={50}
                    width="auto"
                  />
                  <Typography variant="h6" component="h3" textAlign="center">
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    lineHeight={1.5}
                    textAlign="center"
                  >
                    {benefit.description}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
        <Grid container justifyContent="center" mt={12}>
          <Grid item>
            <Button href="/#/hire" variant="outlined">
              Let&apos;s Talk
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
