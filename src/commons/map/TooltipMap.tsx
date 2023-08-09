import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Countries } from "./BuildersMap";

interface TooltipProps {
  mouseX: number;
  mouseY: number;
  country: Countries;
}

enum Colors {
  India = "#4494F8",
  Singapore = "#4494F8",
  Ghana = "#EFEE02",
  Switzerland = "#73F25F",
  Romania = "#73F25F",
  Norway = "#73F25F",
  Finland = "#73F25F",
  Italy = "#73F25F",
  "United Kingdom" = "#73F25F",
  France = "#73F25F",
  Spain = "#73F25F",
  Portugal = "#73F25F",
  Germany = "#73F25F",
  Croatia = "#73F25F",
  Peru = "#FF7B22",
  Argentina = "#FF7B22",
  Venezuela = "#FF7B22",
  Mexico = "#E65688",
  Canada = "#E65688",
  "United States" = "#E65688",
}

enum Builders {
  India = 6,
  Switzerland = 1,
  Singapore = 1,
  Ghana = 1,
  Romania = 2,
  Norway = 1,
  Finland = 1,
  Italy = 5,
  "United Kingdom" = 1,
  France = 4,
  Spain = 5,
  Portugal = 1,
  Germany = 2,
  Croatia = 1,
  Peru = 1,
  Argentina = 2,
  Venezuela = 25,
  Mexico = 1,
  Canada = 3,
  "United States" = 52,
}

const TooltipMap: React.FC<TooltipProps> = ({ mouseX, mouseY, country }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1000,
        top: mouseY,
        left: mouseX,
        paddingLeft: 20,
        paddingBottom: 10,
      }}>
      <Grid container flexDirection='column' gap={1} justifyContent={"end"}>
        <Grid item sx={{ width: { xs: "100px", sm: "140px", md: "240px" } }}>
          <Grid
            container
            flexDirection='column'
            justifyContent='end'
            alignItems={"end"}>
            <Grid item>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 16, md: 16 },
                  color: Colors[country],
                  fontWeight: "500",
                }}>
                {country}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 16, md: 16 },
                  fontWeight: "400",
                }}>
                {Builders[country]} builders
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "white",
              borderRadius: "50%",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                height: 2,
                width: { xs: "100px", sm: "140px", md: "240px" },
                bgcolor: "white",
                left: "100%",
                top: "50%",
                transform: "translateY(-50%)",
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TooltipMap;
