/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Button } from "../../../commons/button/Button";
import { colors } from "../../../theme";
import GameOfLifeAnimation from "../../../commons/gameOfLifeAnimation/GameOfLifeAnimation";
import Card from "../../../commons/card/Card";
import {
  ENGINEERING_SERVICE,
  MECHANISM_SERVICE,
} from "../../../constants/services";
import {
  IconLink,
  projectClientIconLinks,
  ProjectClientIconLinks,
} from "../../../constants/routes";

export interface ServiceProps {
  id: string;
  color: string;
  title: string;
  description: string;
}

const StyledLogo = styled("img")({
  height: "auto",
  objectFit: "contain",
  cursor: "pointer",
});

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
      "We embed engineers with your core team to augment and accelerate their web3 development capabilities. We'll help transition the project to your team when the time is right.",
  },
  {
    id: "partnership",
    color: colors.green,
    title: "Protocol Partnership",
    description:
      "Ready to start scaling your developer ecosystem? We'll assemble a specialized team that works autonomously to advance roadmap items, battle-test your developer tools, and support 3rd parties looking to integrate your tech.",
  },
  {
    id: "scoping",
    color: colors.grays[600],
    title: "Scoping sprints",
    description:
      "If you are not sure about how to execute your idea, or exactly which are the services that you need. Let's collaborate on a scoping sprint to determine what’s the best way to work together.",
  },
];

export const ServicesSection: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [currentServices, updateServices] = useState<ServiceProps[]>(services);
  const sortObjectByKeys = (object: ProjectClientIconLinks) =>
    Object.fromEntries(
      Object.entries(object).sort(([k1], [k2]) => (k1 < k2 ? -1 : 1))
    );
  const projectClientIcon = Object.values(
    sortObjectByKeys(projectClientIconLinks)
  );

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
    <Box mt={[24, 32]} position='relative'>
      <GameOfLifeAnimation
        fadeFromBlack
        opacity={0.1}
        resolution={40}
        className='services'
      />
      <Container maxWidth='lg' sx={{ position: "relative" }}>
        <Typography
          variant='h6'
          component='h2'
          textTransform='uppercase'
          textAlign='center'
          letterSpacing={5}>
          Development Services{" "}
          <span role='img' aria-label='hammer and wrench'>
            🛠
          </span>
        </Typography>

        <Stack
          direction={"column"}
          spacing={5}
          justifyContent={"center"}
          alignItems={"center"}>
          <Typography variant='h5'>
            Our services cover a vast array of areas to meet your dApps and
            blockchain projects unique needs, including:
          </Typography>
          <Stack>
            <Stack spacing={10} direction={isDesktop ? "row" : "column"}>
              <Stack>
                <Typography variant='h3' fontWeight={700}>
                  Engineering Services
                </Typography>
                <Typography variant='h6' fontWeight={500}>
                  Unlock your project&apos;s potential with dOrg&apos;s
                  expertise in DevOps, cross-chain integrations, SDKs, oracles,
                  AMMs, protocol development, blockchain network development,
                  token/NFTs launches, API integrations, among others.
                </Typography>
                <Stack spacing={5} mt={10}>
                  {ENGINEERING_SERVICE.map((service) => (
                    <Card
                      key={service.title}
                      color={service.color}
                      title={service.title}
                      description={service.description}
                      icon={
                        <img
                          src={service.icon as string}
                          alt={service.title}
                          style={{ width: "72px", height: "72px" }}
                        />
                      }
                    />
                  ))}
                </Stack>
              </Stack>

              <Stack>
                <Typography variant='h3' fontWeight={700}>
                  Mechanism Design Services
                </Typography>
                <Typography variant='h6' fontWeight={500}>
                  From tokenomics to governance models, our expertise ensures
                  aligning incentives, security, and thriving ecosystems whether
                  you&apos;re launching a new token, building a governance
                  system, or optimizing network participation.
                </Typography>
                <Stack spacing={5} mt={10}>
                  {MECHANISM_SERVICE.map((service) => (
                    <Card
                      key={service.title}
                      color={service.color}
                      title={service.title}
                      description={service.description}
                      icon={
                        <img
                          src={service.icon as string}
                          alt={service.title}
                          style={{ width: "72px", height: "72px" }}
                        />
                      }
                    />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack mt={9}>
          <Stack spacing={4} direction='column'>
            <Typography variant='h5' m={0}>
              Some Projects we&apos;ve built
            </Typography>
          </Stack>
          <Stack
            columnGap={[4, 6, 7, 10]}
            rowGap={[2, 3, 4]}
            direction='row'
            pt={5}
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}>
            {projectClientIcon.map((iconLink: IconLink, index) => (
              <Link
                key={index}
                href={iconLink.path}
                target='_blank'
                className='--centered'>
                <StyledLogo
                  sx={{
                    width: [120, 140, 160, 180],
                    height: 42,
                    opacity: 0.85,
                    transition: "all 0.25s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                      transform: "scale(1.08)",
                    },
                  }}
                  loading='lazy'
                  alt={iconLink.name}
                  src={iconLink.icon}
                />
              </Link>
            ))}
          </Stack>
        </Stack>

        <Stack mt={9} justifyContent='center' alignItems='center'>
          <Typography variant='h4' mt={0} mb={4}>
            Accelerate your roadmap with us!
          </Typography>
          <Box maxWidth='265'>
            <Button href='/#/hire' variant='outlined'>
              Get a Quote
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
