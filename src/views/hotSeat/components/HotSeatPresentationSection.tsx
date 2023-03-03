import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import useIsDesktop from "../../../hooks/useIsDesktop";
import { Button } from "../../../commons/button/Button";
import GameOfLifeAnimationCanvas from "../../../commons/gameOfLifeAnimation/GameOfLifeAnimation";
import {
  HotSeatGuestIconLinks,
  hotSeatIconLinks,
  IconLink,
} from "../../../constants/routes";
import HotSeatLogo from "../../../assets/imgs/hot-seat-logo.svg";
import HotSeatMobileLogo from "../../../assets/imgs/hot-seat-logo-mobile.svg";

const StyledLogo = styled("img")({
  height: "auto",
  objectFit: "contain",
  cursor: "pointer",
});

const HotSeatPresentationSectionContainer = styled(Box)({
  width: "100vw",
  minHeight: "100vh",
  position: "relative",
});

const TITLE = "The podcast about the hard tech questions";
export const HotSeatPresentationSection: React.FC = () => {
  const isDesktop = useIsDesktop();

  const sortObjectByKeys = (object: HotSeatGuestIconLinks) =>
    Object.fromEntries(
      Object.entries(object).sort(([k1], [k2]) => (k1 < k2 ? -1 : 1))
    );
  const guestIcons = Object.values(sortObjectByKeys(hotSeatIconLinks));

  return (
    <HotSeatPresentationSectionContainer>
      <GameOfLifeAnimationCanvas opacity={0.25} className='presentation' />
      <Container maxWidth='lg' sx={{ position: "relative" }}>
        <Grid
          container
          spacing={1}
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "90vh",
          }}>
          <Grid
            item
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              display: "flex",
            }}>
            <Stack spacing={6} maxWidth={1000}>
              {isDesktop ? (
                <Box>
                  <StyledLogo src={HotSeatLogo} sx={{ maxWidth: 450 }} />
                  <Typography
                    textAlign={"initial"}
                    sx={{
                      fontWeight: 600,
                      fontSize: "2.25em",
                      marginBlockStart: "2.5rem",
                      lineHeight: 1,
                      margin: "0px",
                      display: "block",
                    }}>
                    {TITLE}
                  </Typography>
                </Box>
              ) : (
                <Grid
                  container
                  spacing={4}
                  flexDirection={"column"}
                  justifyContent='center'>
                  <Grid item>
                    <StyledLogo
                      src={HotSeatMobileLogo}
                      sx={{ maxWidth: 250 }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      textAlign={"center"}
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.8rem",
                        marginBlockStart: "2.5rem",
                        lineHeight: 1,
                        margin: "0px",
                        padding: "0px",
                        display: "block",
                      }}>
                      {TITLE}
                    </Typography>
                  </Grid>
                </Grid>
              )}

              <Grid
                container
                gap={5}
                mt={isDesktop ? 0 : 10}
                flexDirection={isDesktop ? "row" : "column"}
                alignItems={"center"}
                justifyContent={isDesktop ? "initial" : "center"}>
                <Grid item>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://airtable.com/shr4VGh3iZCIVhCg3",
                        "_blank"
                      )
                    }
                    variant='contained'>
                    Become A Sponsor Of The Podcast
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          columnGap={[4, 6, 7, 10]}
          rowGap={[2, 3, 4]}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
          {guestIcons.map((iconLink: IconLink, index) => (
            <Grid item key={index}>
              <Link href={iconLink.path} target='_blank' className='--centered'>
                <script type='application/ld+json'>
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    areaServed: "web3",
                    name: `${iconLink.name}`,
                    "@id": `${iconLink.path}`,
                  })}
                </script>
                {iconLink.name === "Acre Daos" || iconLink.name === "Aragon" ? (
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
                    alt={iconLink.name}
                    src={iconLink.icon}
                  />
                ) : (
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
                )}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </HotSeatPresentationSectionContainer>
  );
};
