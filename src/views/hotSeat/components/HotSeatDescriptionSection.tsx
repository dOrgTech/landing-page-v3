import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export interface Stats {
  stats: StatProps[];
}

export interface StatProps {
  id: string;
  title: string;
  statNumber: string;
  color: string;
  activeColors?: string[];
}

export const HotSeatDescriptionSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box mt={[16, 24, 32]}>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={useMediaQuery(theme.breakpoints.up("lg")) ? 4 : 8}
          alignItems='center'
          justifyContent='center'>
          <Grid item xs={12} sm={12} lg={12}>
            <Typography
              component='h2'
              variant='h2'
              textAlign='center'
              sx={{
                color: "#888888",
                fontSize: "2rem",
                fontWeight: 500,
                [theme.breakpoints.up("md")]: {
                  fontSize: "2.25rem",
                },
                [theme.breakpoints.up("lg")]: {
                  paddingRight: theme.spacing(8),
                },
                "& strong": {
                  color: "#E5E5E5",
                  fontWeight: 800,
                },
              }}>
              We collectively{" "}
              <strong>interview tech leads and founders </strong>
              of our favorite{" "}
              <strong>web3 infrastructure, products, and protocols.</strong> We
              get into the nitty-gritty details web3 devs and enthusiasts want
              to hear!
            </Typography>
            <Typography
              component='h2'
              variant='h2'
              textAlign='center'
              sx={{
                color: "#888888",
                fontSize: "2rem",
                fontWeight: 500,
                [theme.breakpoints.up("md")]: {
                  fontSize: "2.25rem",
                },
                [theme.breakpoints.up("lg")]: {
                  paddingRight: theme.spacing(8),
                },
                "& strong": {
                  color: "#E5E5E5",
                  fontWeight: 800,
                },
              }}>
              <strong>Listen to us</strong> on{" "}
              <strong
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/playlist?list=PL6f1W8NPPUfhpZFyqa8PEKAKAuJqCuZco",
                    "_blank"
                  )
                }>
                Youtube
              </strong>{" "}
              or{" "}
              <strong
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://open.spotify.com/show/0hoGNLY8fsvTivEBnSW0JK",
                    "_blank"
                  )
                }>
                Spotify
              </strong>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
