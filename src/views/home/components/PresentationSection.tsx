import React from "react";
import PixelAnimation from "../../../assets/imgs/pixel-animation.gif";
import { Box, Container, Grid, Link, styled, Typography } from "@mui/material";
import useIsDesktop from "../../../hooks/useIsDesktop";
import { Button } from "../../../commons/button/Button";
import { clientIconLinks, IconLink } from "../../../constants/routes";
import Carousel from "../../../commons/carousel/Carousel";

const StyledLogo = styled("img")({
  height: "auto",
  objectFit: "contain",
  cursor: "pointer",
  width: 100,
});

const PresentationSectionContainer = styled(Box)({
  width: "100vw",
  height: "calc(100vh - 114px)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${PixelAnimation})`,
  opacity: 1,
});

export const PresentationSection: React.FC = () => {
  const isDesktop = useIsDesktop();
  const clientIcons = Object.values(clientIconLinks);
  return (
    <PresentationSectionContainer>
      <Container maxWidth="lg" sx={{height: "90%"}}>
        <Grid
          container
          flexDirection='column'
          justifyContent={"center"}
          spacing={1}
          height="100%"
        >
          <Grid
            item
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}>
            <Grid container>
              <Grid item maxWidth={1000} mb={isDesktop ? 21 : 0}>
                <Typography
                  variant='h1'
                  textAlign={isDesktop ? "initial" : "center"}>
                  Building for the decentralized web.
                </Typography>
              </Grid>
              <Grid item width={"100%"}>
                <Grid
                  container
                  gap={5}
                  mt={isDesktop ? 0 : 10}
                  flexDirection={isDesktop ? "row" : "column"}
                  alignItems={"center"}
                  justifyContent={isDesktop ? "initial" : "center"}>
                  <Grid item>
                    <Button href="/#/hireUs" variant='contained'>Leverage our expertise</Button>
                  </Grid>
                  <Grid item>
                    <Button href="/#/joinUs" variant='outlined'>Become a member</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box>
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
          customTransition='all 4s linear'
          transitionDuration={4000}
        >
          {clientIcons.map((iconLink: IconLink, index) => (
            <Link href={iconLink.path} key={index} target='_blank'>
              <StyledLogo
                sx={{ width: isDesktop ? 150 : 100, height: 42 }}
                src={iconLink.icon}
              />
            </Link>
          ))}
        </Carousel>
      </Box>
    </PresentationSectionContainer>
  );
};
