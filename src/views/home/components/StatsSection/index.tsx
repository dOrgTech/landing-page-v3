import React from "react";
import StatCard from "./StatCard";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { colors } from "../../../../theme";

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

export const StatsSection: React.FC = () => {
  const theme = useTheme();

  const stats = [
    {
      id: "active_members",
      title: "Active Members",
      statNumber: "63",
      color: colors.purple,
      activeColors: [colors.purple, colors.magenta],
    },
    {
      id: "clients_served",
      title: "Clients Served",
      statNumber: "65+",
      color: colors.green,
      activeColors: [colors.blue, colors.green],
    },
    {
      id: "on-chain_revenue",
      title: "On-Chain Revenue",
      statNumber: "$6M",
      color: colors.orange,
      activeColors: [colors.orange, colors.yellow],
    },
    {
      id: "funding_raised",
      title: "Funding Raised",
      statNumber: "$0",
      color: colors.grays[700],
    },
  ];

  return (
    <Box my={20}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={useMediaQuery(theme.breakpoints.up("lg")) ? 4 : 8}
          alignItems="center"
        >
          <Grid item xs={12} sm={8} lg={6}>
            <Typography
              component="h2"
              variant="h2"
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
              }}
            >
              <strong>dOrg</strong> provides <strong>web3 development</strong>{" "}
              services to projects seeking <strong>real-world impact</strong>.
              We’ve been operating as a DAO <strong>since 2019</strong>.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={2} sx={{ overflow: "hidden" }}>
              {stats.map((stat: StatProps, index) => {
                return (
                  <Grid item key={index} xs={12} sm={6}>
                    <StatCard stat={stat} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
