import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { keyframes } from "@mui/system";
import { Button } from "../../../commons/button/Button";
import { colors } from "../../../theme";
import AddIcon from "@mui/icons-material/Add";
import GameOfLifeAnimation from "../../../commons/gameOfLifeAnimation/GameOfLifeAnimation";

export interface ServiceProps {
  id: string;
  color: string;
  title: string;
  description: string;
}

const services = [
  {
    id: "milestone",
    color: colors.purple,
    title: "Milestone Based",
    description:
      "Whether your organization is crypto-native or just exploring the space, our experts can help flesh out your project requirements and deliver a production-ready solution. You own the code and we train your team to maintain it. ",
  },
  {
    id: "extension",
    color: colors.magenta,
    title: "Team Extension",
    description:
      "We embed engineers with your core team to augment and accelerate their web3 development capabilities. We’ll help transition the project to your team when the time is right.",
  },
  {
    id: "partnership",
    color: colors.green,
    title: "Protocol Partnership",
    description:
      "Ready to start scaling your developer ecosystem? We’ll assemble a specialized team that works autonomously to advance roadmap items, battle-test your developer tools, and support 3rd parties looking to integrate your tech.",
  },
];

export const ServicesSection: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [currentServices, updateServices] = useState<ServiceProps[]>(services);

  useEffect(() => {
    const activeService = currentServices?.find(
      (service) => service.id === activeServiceId
    );
    if (activeService && isDesktop) {
      const _currentServices = currentServices.filter(
        (service) => service.id !== activeService.id
      );
      _currentServices.unshift(activeService);
      updateServices(_currentServices);
    } else {
      updateServices(services);
    }
  }, [activeServiceId, isDesktop]);

  return (
    <Box py={24} position="relative">
      <GameOfLifeAnimation
        fadeFromBlack
        opacity={0.1}
        resolution={40}
        className="services"
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography
          variant="h6"
          component="h2"
          textTransform="uppercase"
          textAlign="center"
          letterSpacing={5}
        >
          Development Services{" "}
          <span role="img" aria-label="hammer and wrench">
            🛠
          </span>
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 4,
            mb: activeServiceId ? 0 : -4,
            mt: 12,
            [theme.breakpoints.up("md")]: {
              gridTemplateColumns: `repeat(3, 1fr)`,
              gridTemplateRows: activeServiceId ? `repeat(2, auto)` : null,
            },
          }}
        >
          {currentServices.map((service: ServiceProps, index) => {
            const isActive = activeServiceId === service.id;
            const fadeIn = keyframes`
              0% { 
                opacity: 0;
                transform: scale(0.2) translateY(20%);
              }
              100% {
                opacity: 1;
                transform: scale(1) translateX(0);
              }
            `;
            return (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                p={2}
                sx={{
                  animation:
                    isActive && isDesktop
                      ? `${fadeIn} 0.5s forwards cubic-bezier(0.47, 0.06, 0.7, 1.14)`
                      : null,
                  backgroundColor: colors.black,
                  border: `3px solid ${service.color}`,
                  borderRadius: "16px",
                  cursor: "pointer",
                  height: "100%",
                  justifyContent: "space-between",
                  transition: "background 0.25s ease-in-out",
                  transformOrigin: "bottom right",
                  [theme.breakpoints.up("md")]: {
                    gridColumn: isActive ? "1 / span 2" : null,
                    gridRow: isActive ? "1 / span 2" : null,
                  },
                  "&:hover": {
                    background: colors.grays[800],
                  },
                }}
                onClick={() => setActiveServiceId(isActive ? null : service.id)}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    component="h3"
                    sx={{
                      textDecoration: isActive ? "underline" : "unset",
                      textUnderlineOffset: 2,
                    }}
                  >
                    {service.title}
                  </Typography>
                  {isActive && (
                    <Typography variant="body1" component="h3" mt={2}>
                      {service.description}
                    </Typography>
                  )}
                </Box>
                <Box onClick={() => setActiveServiceId(null)}>
                  <AddIcon
                    sx={{
                      color: colors.white,
                      transition: "transform 0.5s ease-in-out",
                      transitionDelay: isDesktop ? "0.4s" : 0,
                      transform: isActive ? "rotate(135deg)" : null,
                    }}
                  />
                </Box>
              </Stack>
            );
          })}
        </Box>
        <Container maxWidth="md" disableGutters sx={{ mt: isDesktop ? 6 : 8 }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={isDesktop ? 4 : 2}
          >
            <Grid item xs={12} md={3}>
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent={isDesktop ? "flex-end" : "center"}
              >
                <AddIcon sx={{ width: 12 }} />
                <Typography
                  variant="body1"
                  fontWeight={800}
                  textTransform="uppercase"
                  letterSpacing="4px"
                >
                  Packages
                </Typography>
              </Stack>
            </Grid>
            {["Scoping Sprint", "Tokenomics", "Marketing Audit"].map(
              (item: string) => (
                <Grid
                  item
                  key={item.toLowerCase()}
                  id={item.toLowerCase()}
                  xs={12}
                  sm={4}
                  md={3}
                >
                  <Box
                    sx={{
                      backgroundColor: colors.black,
                      border: `3px solid ${colors.grays[700]}`,
                      borderRadius: "16px",
                      px: 1,
                      py: 2,
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Box>
                </Grid>
              )
            )}
          </Grid>
        </Container>
        <Grid container justifyContent="center" mt={12}>
          <Grid item>
            <Button href="/#/hireUs" variant="outlined">
              Get a Quote
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
