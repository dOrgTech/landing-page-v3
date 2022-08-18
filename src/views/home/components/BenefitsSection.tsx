import React from "react";
import { Box, Container, Grid, Link, styled, Stack,  Typography } from "@mui/material";
import { Button } from "../../../commons/button/Button";
import { colors } from "../../../theme"
import SwarmBenefit from "../../../assets/imgs/benefits/swarm.svg";
import TechBenefit from "../../../assets/imgs/benefits/tech.svg";
import CoordinationBenefit from "../../../assets/imgs/benefits/coordination.svg";
import AlignmentBenefit from "../../../assets/imgs/benefits/alignment.svg";

const benefits = [
  {
    slug: "swarm",
    color: colors.green,
    icon: SwarmBenefit,
    title: "Swarm Methodology",
    description: "Work with the right builders at the right time based on your project’s week-to-week needs.",
  },
  {
    slug: "tech",
    color: colors.orange,
    icon: TechBenefit,
    title: "Bleeding Edge",
    description: "Leverage our experience building with the latest web3 tech and best practices.",
  },
  {
    slug: "coordination",
    color: colors.purple,
    icon: CoordinationBenefit,
    title: "Continuous Coordination",
    description: "Interface through a dedicated PM to ensure we continuously satisfy your requirements.",
  },
  {
    slug: "alignment",
    color: colors.magenta,
    icon: AlignmentBenefit,
    title: "Long-Term Alignment",
    description: "Utilize your project’s tokens to align incentives with our builders.",
  },
]

export const BenefitsSection: React.FC = () => {
  return (
    <Box my={16} px={4}>
      <Container maxWidth="lg" disableGutters>
        <Typography
          variant="h6"
          component="h2"
          textTransform="uppercase"
          textAlign="center"
          letterSpacing={6}
        >
          The Dorg Difference <span role="img" aria-label="magic wand">🪄</span>
        </Typography>
        <Grid container spacing={5} alignItems="stretch" mt={8}>
          {benefits.map((benefit) => {
            return (
              <Grid
                item
                key={benefit.slug}
                xs={12}
                sm={6}
                lg={3}
              >
                <Stack
                  px={3}
                  py={8}
                  direction="column"
                  spacing={3}
                  border={`6px solid ${benefit.color}`}
                  borderRadius="24px"
                  sx={{
                    "&:hover": {
                      background: `linear-gradient(transparent 40%, ${benefit.color})`
                    }
                  }}
                >
                  <img src={benefit.icon} alt={benefit.slug} height={50} width="auto" />
                  <Typography variant="h6" component="h3" textAlign="center">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" lineHeight={1.5} textAlign="center">
                    {benefit.description}
                  </Typography>
                </Stack>
              </Grid>
            )
          })}
        </Grid>
        <Grid container justifyContent="center" mt={12}>
          <Grid item>
            <Button variant='outlined'>Let&apos;s do it</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
