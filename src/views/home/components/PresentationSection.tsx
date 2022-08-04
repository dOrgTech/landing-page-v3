import React from "react";
import PixelAnimation from "../../../assets/imgs/pixel-animation.gif";
import { Box } from "@mui/system";
import { Grid, styled, Typography } from "@mui/material";
import useIsDesktop from "../../../hooks/useIsDesktop";
import { Button } from "../../../commons/button/Button";

const PresentationSectionContainer = styled(Box)({
  width: "100vw",
  height: "calc(100vh - 100px)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${PixelAnimation})`,
  opacity: 1,
});

export const PresentationSection: React.FC = () => {
  const isDesktop = useIsDesktop();

  return (
    <PresentationSectionContainer>
      <Grid
        container
        height='100%'
        flexDirection='column'
        justifyContent={"center"}
        spacing={1}
        px={isDesktop ? 27 : 2}>
        <Grid
          item
          sx={{
            height: "90%",
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
                  <Button variant='contained'>Leverage our expertise</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined'>Become a member</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PresentationSectionContainer>
  );
};
