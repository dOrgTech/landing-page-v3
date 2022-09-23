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
import { clientIconLinks, IconLink } from "../../../constants/routes";
import Carousel from "../../../commons/carousel/Carousel";
import { colors } from "../../../theme";

const StyledLogo = styled("img")({
  height: "auto",
  objectFit: "contain",
  cursor: "pointer",
  width: 100,
});

const PresentationSectionContainer = styled(Box)({
  width: "100vw",
  height: "100vh",
  position: "relative",
});

export const PresentationSection: React.FC = () => {
  const isDesktop = useIsDesktop();
  const clientIcons = Object.values(clientIconLinks);

  return (
    <PresentationSectionContainer>
      <GameOfLifeAnimationCanvas opacity={0.25} className="presentation" />
      <Container maxWidth="lg" sx={{ height: "90%", position: "relative" }}>
        <Grid
          container
          flexDirection="column"
          justifyContent={"center"}
          spacing={1}
          height="100%"
        >
          <Grid
            item
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Stack spacing={6} maxWidth={1000}>
              <Typography
                variant="h1"
                textAlign={isDesktop ? "initial" : "center"}
              >
                Building for the decentralized web.
              </Typography>
              <Grid
                container
                gap={5}
                mt={isDesktop ? 0 : 10}
                flexDirection={isDesktop ? "row" : "column"}
                alignItems={"center"}
                justifyContent={isDesktop ? "initial" : "center"}
              >
                <Grid item>
                  <Button variant="contained">Leverage our expertise</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" sx={{ bgcolor: colors.black }}>
                    Become a member
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Carousel
        swipeable={false}
        draggable={false}
        arrows={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        shouldResetAutoplay={true}
        rewindWithAnimation={false}
        rewind={false}
        additionalTransfrom={0}
        slidesToSlide={1}
        autoPlaySpeed={1}
        centerMode={false}
        pauseOnHover={true}
        customTransition="all 5s linear"
        transitionDuration={5000}
        itemsPerRow={[3, 3, 5, 5]}
        containerClass="carousel--presentation"
      >
        {clientIcons.map((iconLink: IconLink, index) => (
          <Link
            href={iconLink.path}
            key={index}
            target="_blank"
            className="--centered"
          >
            <StyledLogo
              sx={{ width: isDesktop ? 150 : 100, height: 42 }}
              src={iconLink.icon}
            />
          </Link>
        ))}
      </Carousel>
    </PresentationSectionContainer>
  );
};
