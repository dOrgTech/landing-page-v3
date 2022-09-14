import React, { useEffect, useState } from "react";
import ChartGraphic from "./ChartGraphic"
import { Box, Stack, styled, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
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
  const {id, title, statNumber, color, activeColors} = stat;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [hoverId, setHoverId] = useState<string | null>(null)

  const handleStatCardEnter = (id: StatProps["id"]) => {
    setHoverId(id);
  }

  const handleStatCardLeave = () => {
    if (!isMobile) {
      setHoverId(null);
    }
  }

  useEffect(() => {
    if (isMobile) {
      setHoverId(id);
    }
  }, [isMobile])

  return (
    <StyledStatCard
      onMouseEnter={() => handleStatCardEnter(id)}
      onMouseLeave={() => handleStatCardLeave()}
      sx={{
        backgroundColor: hoverId? "#222" : "transparent",
        border: `6px solid ${hoverId ? "#E5E5E5" : colors.grays[700]}`,
      }}
    >
      <Box position="relative">
        <ChartGraphic
          id={id}
          hoverId={hoverId}
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
                marginBlockStart: 0,
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
                transform: `scale(${hoverId === id ? 1.4 : 1})`,
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