import React, { useState } from "react";
import ChartGraphic from "./ChartGraphic"
import { Box, Stack, styled, Theme, Typography } from "@mui/material";
import { StatProps } from "."
import { colors } from "../../../../theme";

const StyledStatCard = styled(Box)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 20,
}));

export interface Stat {
  stat: StatProps;
}

const StatCard: React.FC<Stat> = ({stat}) => {
  const {title, statNumber, color, activeColors} = stat;

  const [hovering, setHovering] = useState<boolean>(false)

  const handleStatCardOver = () => {
    setHovering(true);
  }

  const handleStatCardOut = () => {
    setHovering(false);
  }

  return (
    <StyledStatCard
      onMouseOver={handleStatCardOver}
      onMouseOut={handleStatCardOut}
      sx={{
        backgroundColor: hovering? "#222" : "transparent",
        border: `6px solid ${hovering ? "#E5E5E5" : colors.grays[700]}`,
      }}
    >
      <Box position="relative">
        <ChartGraphic
          hovering={hovering}
          color={color}
          activeColors={activeColors}
        />
        <Box sx={{
          position: "absolute",
          inset: 0,
        }}>
          <Stack
            direction="column"
            spacing={4}
            sx={{
              position: "absolute",
              inset: 0,
            }}
          >
            <Typography
              component="h4"
              variant="h6"
              sx={{
                fontSize: "0.825rem",
                letterSpacing: 3,
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              {title}
            </Typography>
            <Typography
              component="h3"
              sx={{
                color: "#E5E5E5",
                fontSize: "3rem",
                fontWeight: 800,
                lineHeight: 1,
                transformOrigin: "bottom left",
                transform: `scale(${hovering ? 1.4 : 1})`,
                transition: "transform 0.25s ease-in-out",
              }}
            >
              {statNumber}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </StyledStatCard>
  )
};

export default React.memo(StatCard);