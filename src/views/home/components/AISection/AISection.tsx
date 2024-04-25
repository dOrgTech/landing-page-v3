/** @format */

import { Stack, Typography, Link, styled, Container } from "@mui/material";
import React from "react";

import {
  IconLink,
  ProjectAiIconLinks,
  projectAiIconLinks,
} from "../../../../constants/routes";

const StyledLogo = styled("img")({
  height: "auto",
  objectFit: "contain",
  cursor: "pointer",
});

export const AISection: React.FC = () => {
  const sortObjectByKeys = (object: ProjectAiIconLinks) =>
    Object.fromEntries(
      Object.entries(object).sort(([k1], [k2]) => (k1 < k2 ? -1 : 1))
    );
  const projectClientIcon = Object.values(sortObjectByKeys(projectAiIconLinks));
  return (
    <Stack mt={12}>
      <Stack spacing={4} direction='column'>
        <Typography
          variant='h6'
          component='h2'
          textTransform='uppercase'
          textAlign='center'
          letterSpacing={5}>
          Collaborative AI Projects{" "}
          <span role='img' aria-label='hammer and wrench'>
            🧠
          </span>
        </Typography>
        <Typography variant='h5' m={0}></Typography>
      </Stack>

      <Container maxWidth={"md"}>
        <Stack
          columnGap={[4, 6, 7, 10]}
          rowGap={[2, 3, 4]}
          direction='row'
          pt={5}
          sx={{
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
          {projectClientIcon.map((iconLink: IconLink, index) => (
            <Link
              key={index}
              href={iconLink.path}
              target='_blank'
              className='--centered'>
              <StyledLogo
                sx={{
                  width: [120, 140, 160, 180],
                  height: 42,
                  opacity: 0.85,
                  transition: "all 0.25s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                    transform: "scale(1.08)",
                  },
                }}
                loading='lazy'
                alt={iconLink.name}
                src={iconLink.icon}
              />
            </Link>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};
