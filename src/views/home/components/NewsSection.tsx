import React from "react";
import { Box, Container, Link, Stack,  Typography, useTheme } from "@mui/material";
import Carousel from "../../../commons/carousel/Carousel";
import { colors } from "../../../theme"
import ExternalLinkIcon from "../../../assets/imgs/external-link-icon.svg";
import { newsCards, NewsCardProps } from "../../../constants/news"

export const NewsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box my={16} px={4}>
      <Container maxWidth="lg" disableGutters>
        <Typography
          variant="h6"
          component="h2"
          textTransform="uppercase"
          textAlign="center"
          letterSpacing={6}
        >
          We&apos;re getting noticed <span role="img" aria-label="fire">🔥</span>
        </Typography>
        <Box mt={8}>
          <Carousel
            swipeable
            draggable
            arrows={newsCards.length > 3}
            showDots={newsCards.length > 3}
            shouldResetAutoplay
            itemsPerRow={[1,1,3,3]}
          >
            {newsCards.map((card: NewsCardProps, index) => (
              <Link href={card.path} key={index} target='_blank' underline="none" sx={{alignSelf: "stretch"}}>
                <Stack
                  spacing={4}
                  direction="column"
                  sx={{
                    mb: 12,
                    p: 4,
                    justifyContent: "flex-start",
                    border: `4px solid ${colors.grays[700]}`,
                    borderRadius: "24px",
                    color: colors.white,
                    transition: "all 0.25s ease-in-out",
                    "& .read-link": {
                      transition: "opacity 0.25s ease-in-out",
                    },
                    [theme.breakpoints.up('md')]: {
                      ml: 3,
                    },
                    "&:hover": {
                      background: `linear-gradient(rgba(255,255,255,50%), rgba(255,255,255,0))`,
                      borderColor: colors.white,
                      " .read-link": {
                        opacity: 0.6,
                      }
                    }
                  }}
                >
                  <Box display="flex" justifyContent="flex-start">
                    <img src={card.image} alt={card.slug} style={{height: "40px", width: "auto"}}/>
                  </Box>
                  <Typography variant="body1" lineHeight={1.5}>
                    {card.text}
                  </Typography>
                  <Stack direction="row" spacing={2} className="read-link">
                    <Typography variant="body1" textTransform="uppercase" fontWeight={800} letterSpacing={3}>
                      {card.type ? (
                        `Read the ${card.type}` 
                      ) : (
                        "Read more"
                      )}
                    </Typography>
                    <img src={ExternalLinkIcon} alt="" style={{width: "1rem"}} />
                  </Stack>
                </Stack>
              </Link>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};
