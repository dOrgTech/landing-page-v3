import { Box, Container, Grid, Link, Typography, styled } from "@mui/material";
import React from "react";
import {
  BuildersCompaniesIconLinks,
  IconLink,
  previousBuildersCompanies,
} from "../../../../constants/routes";
import BuildersMap from "../../../../commons/map/BuildersMap";
import Marquee from "react-fast-marquee";

const StyledLogo = styled("img")({
  cursor: "pointer",
  filter: "brightness(10) saturate(0%)",
  height: "auto",
  objectFit: "contain",
  transform: "translateY(5px)",
  width: 100,
  "&:hover": {
    filter: "brightness(1) saturate(100%)",
  },
});

export const BuildersSection: React.FC = () => {
  const sortObjectByKeys = (object: BuildersCompaniesIconLinks) =>
    Object.fromEntries(
      Object.entries(object).sort(([k1], [k2]) => (k1 < k2 ? -1 : 1))
    );
  const buildersCompany = Object.values(
    sortObjectByKeys(previousBuildersCompanies)
  );

  return (
    <Box mt={[16, 24, 32]} position='relative'>
      <Container maxWidth='lg' sx={{ position: "relative" }}>
        <Typography
          variant='h6'
          component='h2'
          textTransform='uppercase'
          textAlign='center'
          letterSpacing={5}>
          OUR BUILDERS&apos; PREVIOUS COMPANIES
          <span role='img' aria-label='company building'>
            🏢
          </span>
        </Typography>
        <Box mt={8}>
          <Marquee>
            {buildersCompany.map((iconLink: IconLink, index) => (
              <Grid item key={index}>
                <Link
                  sx={{ margin: "0px 30px" }}
                  href={iconLink.path}
                  target='_blank'
                  className='--centered'>
                  <script type='application/ld+json'>
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      areaServed: "technology company",
                      name: `${iconLink.name}`,
                      "@id": `${iconLink.path}`,
                    })}
                  </script>

                  <StyledLogo
                    sx={{
                      width: [95, 100, 110, 120],
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
              </Grid>
            ))}
          </Marquee>
        </Box>
      </Container>
      <Container maxWidth='lg' sx={{ position: "relative", marginTop: "64px" }}>
        <Typography
          variant='h6'
          component='h2'
          textTransform='uppercase'
          textAlign='center'
          letterSpacing={5}>
          WHERE OUR BUILDERS ARE FROM
          <span role='img' aria-label='company building'>
            🌎
          </span>
        </Typography>
        <Box mt={12}>
          <Box>
            <BuildersMap />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
