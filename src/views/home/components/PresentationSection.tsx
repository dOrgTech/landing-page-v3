import React from "react";
import PixelAnimation from "../../../assets/imgs/animation.gif";
import { Box } from "@mui/system";
import { Grid, Link, styled, Typography } from "@mui/material";
import useIsDesktop from "../../../hooks/useIsDesktop";
import { IconLink, socialIconLinks, iconLinks } from "../../../constants/routes";

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
  const socialIcons = Object.values(socialIconLinks);
  const icons = Object.values(iconLinks);

  return (
    <PresentationSectionContainer>
      <Grid
        container
        height='100%'
        flexDirection='column'
        justifyContent={"center"}
        spacing={1}
        px={isDesktop ? 27 : 2}>
        <Grid item sx={{ height: "90%", justifyContent: "center", alignItems: "center", display: "flex" }}>
          <Grid container>
            <Grid item maxWidth={1000} mb={isDesktop ? 21 : 0}>
              <Typography variant='h1' textAlign={isDesktop ? "initial" : "center"}>
                We’re accelerating the adoption of web3.
              </Typography>
            </Grid>
            {isDesktop && (
              <Grid item>
                <Grid container alignItems='center' gap={9}>
                  {icons.map((iconLink: IconLink, index) => (
                    <Grid item key={`${index}-path`}>
                      <Link href={iconLink.path}>
                        <Box sx={{ cursor: "pointer" }} component='img' src={iconLink.icon} />
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item>
          <Grid container justifyContent={isDesktop ? "flex-end" : "center"} gap={7}>
            {socialIcons.map((iconLink: IconLink, index) => (
              <Grid item key={index}>
                <Link href={iconLink.path}>
                  <Box component='img' src={iconLink.icon} sx={{ width: 24, cursor: "pointer" }} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PresentationSectionContainer>
  );
};
