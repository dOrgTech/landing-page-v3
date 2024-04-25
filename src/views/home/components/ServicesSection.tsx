/** @format */

import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Button } from "../../../commons/button/Button";
import GameOfLifeAnimation from "../../../commons/gameOfLifeAnimation/GameOfLifeAnimation";
import Card from "../../../commons/card/Card";
import {
  ENGINEERING_SERVICE,
  MECHANISM_SERVICE,
} from "../../../constants/services";
import CustomerCard from "./ClientTestimonialsSection/CustomerCard";
import { caseStudiesDescriptions } from "../../caseStudies/utils/texts";

export interface ServiceProps {
  id: string;
  color: string;
  title: string;
  description: string;
}

export const ServicesSection: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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
          sx={{ mt: 12 }}
          spacing={5}
          justifyContent={"center"}
          alignItems={"center"}>
          <Stack>
            <Stack spacing={10} direction={isDesktop ? "row" : "column"}>
              <Stack>
                <Typography variant='h3' fontWeight={700}>
                  Engineering Services
                </Typography>
                <Typography variant='h6' fontWeight={500}>
                  Unlock your project&apos;s potential with dOrg&apos;s
                  expertise in DevOps, cross-chain integrations, SDKs, oracles,
                  AMMs, Protocol development, blockchain network development,
                  token/NFTs launches, API integrations, etc.
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
                          style={{ width: "72px", height: "72px", padding: 8 }}
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
                  From tokenomics to governance models our expertise ensures
                  aligning incentives, security, and thriving ecosystems.
                  Whether you&apos;re launching a new token, building a
                  governance system, or optimizing network participation.
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
                          style={{ width: "72px", height: "72px", padding: 8 }}
                        />
                      }
                    />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack mt={12}>
          <Stack spacing={4} direction='column'>
            <Typography
              variant='h6'
              component='h2'
              textTransform='uppercase'
              textAlign='center'
              letterSpacing={5}>
              Case studies{" "}
              <span role='img' aria-label='hammer and wrench'>
                🔍
              </span>
            </Typography>
            <Typography variant='h5' m={0}></Typography>
          </Stack>

          <Box
            sx={{
              columnCount: [1, 2, null, 3],
              columnGap: 4,
              mt: 12,
            }}>
            {caseStudiesDescriptions.map((caseStudy) => (
              <Box
                key={caseStudy.customerName}
                sx={{
                  breakInside: "avoid",
                  pageBreakInside: "avoid",
                  mb: 4,
                }}>
                <CustomerCard {...caseStudy} />
              </Box>
            ))}
          </Box>
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
