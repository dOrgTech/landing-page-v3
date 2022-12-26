import React from 'react';
import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import useIsDesktop from '../../../hooks/useIsDesktop';
import { Button } from '../../../commons/button/Button';
import GameOfLifeAnimationCanvas from '../../../commons/gameOfLifeAnimation/GameOfLifeAnimation';
import {
  ClientIconLinks,
  clientIconLinks,
  IconLink,
} from '../../../constants/routes';
import { colors } from '../../../theme';

const StyledLogo = styled('img')({
  height: 'auto',
  objectFit: 'contain',
  cursor: 'pointer',
});

const PresentationSectionContainer = styled(Box)({
  width: '100vw',
  minHeight: '100vh',
  position: 'relative',
});

export const PresentationSection: React.FC = () => {
  const isDesktop = useIsDesktop();

  const sortObjectByKeys = (object: ClientIconLinks) =>
    Object.fromEntries(
      Object.entries(object).sort(([k1], [k2]) => (k1 < k2 ? -1 : 1))
    );
  const clientIcons = Object.values(sortObjectByKeys(clientIconLinks));
  console.log(clientIcons, 'line');
  return (
    <PresentationSectionContainer>
      <GameOfLifeAnimationCanvas opacity={0.25} className="presentation" />
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid
          container
          spacing={1}
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '90vh',
          }}
        >
          <Grid
            item
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Stack spacing={6} maxWidth={1000}>
              <script async={true} type="application/ld+json">
                {JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Organization',
                  email: 'mailto:contact@dorg.tech',
                  name: `dOrg`,
                  keywords: [
                    'web3',
                    'fullstack',
                    'development',
                    'web services',
                    'dapp',
                    'web3 dapp',
                    'decentralize',
                    'web',
                    'onchain',
                    'swarm',
                    'builders',
                    'community',
                    'web3 community',
                  ],
                  knowsAbout: [
                    'web3',
                    'fullstack',
                    'development',
                    'web services',
                    'dapp',
                    'web3 dapp',
                    'decentralize',
                    'web',
                    'onchain',
                    'swarm',
                    'builders',
                    'community',
                    'web3 community',
                  ],
                  slogan: 'Building for the decentralized web',
                  url: 'https://www.dorg.tech/',
                  ethicsPolicy:
                              'https://www.dorg.tech/#/privacy-policy',
                })}
              </script>
              <Typography
                variant="h1"
                textAlign={isDesktop ? 'initial' : 'center'}
              >
                        Building for the decentralized web.
              </Typography>
              <Grid
                container
                gap={5}
                mt={isDesktop ? 0 : 10}
                flexDirection={isDesktop ? 'row' : 'column'}
                alignItems={'center'}
                justifyContent={isDesktop ? 'initial' : 'center'}
              >
                <Grid item>
                  <Button href="/#/hire" variant="contained">
                              Leverage our expertise
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    href="/#/join"
                    variant="outlined"
                    sx={{ bgcolor: colors.black }}
                  >
                              Become a member
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          columnGap={[4, 6, 7, 10]}
          rowGap={[2, 3, 4]}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          {clientIcons.map((iconLink: IconLink, index) => (
            <Grid item key={index}>
              <Link
                href={iconLink.path}
                target="_blank"
                className="--centered"
              >
                <script type="application/ld+json">
                  {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    areaServed: 'web3',
                    name: `${iconLink.name}`,
                    '@id': `${iconLink.path}`,
                  })}
                </script>
                {iconLink.name === 'Acre Daos' ||
                        iconLink.name === 'Aragon' ? (
                    <StyledLogo
                      sx={{
                        width: [95, 100, 110, 120],
                        height: 42,
                        opacity: 0.85,
                        transition: 'all 0.25s ease-in-out',
                        '&:hover': {
                          opacity: 1,
                          transform: 'scale(1.08)',
                        },
                      }}
                      alt={iconLink.name}
                      src={iconLink.icon}
                    />
                  ) : (
                    <StyledLogo
                      sx={{
                        width: [95, 100, 110, 120],
                        height: 42,
                        opacity: 0.85,
                        transition: 'all 0.25s ease-in-out',
                        '&:hover': {
                          opacity: 1,
                          transform: 'scale(1.08)',
                        },
                      }}
                      loading="lazy"
                      alt={iconLink.name}
                      src={iconLink.icon}
                    />
                  )}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PresentationSectionContainer>
  );
};
