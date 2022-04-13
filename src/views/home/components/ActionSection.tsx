import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import BoxIcon from "../../../assets/imgs/box.svg";
import HandIcon from "../../../assets/imgs/hand.svg";
import UnlockIcon from "../../../assets/imgs/unlock.svg";
import useIsDesktop from "../../../hooks/useIsDesktop";

const ActionSection: React.FC = () => {
  const isDesktop = useIsDesktop();
  return (
    <Grid
      container
      px={isDesktop ? 10 : 3.5}
      mt={isDesktop ? 25.5 : 20}
      mb={isDesktop ? 17 : 9.5}
      flexDirection='column'
      alignItems='center'
      gap={12.5}>
      <Grid item>
        <Grid container justifyContent='center' alignItems='center' gap={isDesktop ? 25 : 12.5}>
          <Grid item sx={{ maxWidth: 318 }}>
            <Grid container flexDirection={"column"} justifyContent='center' alignItems='center' gap={6.5}>
              <Box component='img' src={BoxIcon} sx={{ width: 106 }} />
              <Typography textAlign='center' variant='h6'>
                <span>We’re a community for talented builders </span> to earn, learn, and cultivate autonomy while
                working on bleeding edge tech.
              </Typography>
            </Grid>
          </Grid>
          <Grid item sx={{ maxWidth: 318 }}>
            <Grid container flexDirection={"column"} justifyContent='center' alignItems='center' gap={6.5}>
              <Box component='img' src={HandIcon} sx={{ width: 70 }} />
              <Typography textAlign='center' variant='h6'>
                <span>We’re a service provider for high-potential projects </span> accelerate development with minimal
                friction. on bleeding edge tech.
              </Typography>
            </Grid>
          </Grid>
          <Grid item sx={{ maxWidth: 318 }}>
            <Grid container flexDirection={"column"} justifyContent='center' alignItems='center' gap={6.5}>
              <Box component='img' src={UnlockIcon} sx={{ width: 60 }} />
              <Typography textAlign='center' variant='h6'>
                <span>We’re an open-source template </span> for aspiring collectives to fork and iterate upon.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button fullWidth={isDesktop ? false : true}>Learn more</Button>
      </Grid>
    </Grid>
  );
};

export default ActionSection;
