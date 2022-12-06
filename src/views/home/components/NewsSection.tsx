import React, { MouseEvent, useState } from "react";
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Carousel from "../../../commons/carousel/Carousel";
import { ButtonGroup } from "../../../commons/carousel/ButtonGroup";
import { colors } from "../../../theme";
import { newsCards, NewsCardProps } from "../../../constants/news";

export const NewsSection: React.FC = () => {
  const [isMoving, setMoving] = useState<boolean>(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (e: MouseEvent) => {
    if (isMoving) {
      e.preventDefault();
    }
  };

  return (
    <Box
      sx={{
        mt: [16, 24, 32],
        pb: 8,
        position: "relative",
        [theme.breakpoints.up("sm")]: {
          pb: 16,
        },
      }}
    >
      <Container maxWidth="lg" disableGutters={isMobile}>
        <Typography
          variant="h6"
          component="h2"
          textTransform="uppercase"
          textAlign="center"
          letterSpacing={5}
        >
          We&apos;re getting noticed{" "}
          <span role="img" aria-label="eyes">
            👀
          </span>
        </Typography>
        <Box mt={12}>
          <Carousel
            swipeable
            draggable
            arrows={false}
            showDots={newsCards.length > 3}
            renderButtonGroupOutside={true}
            shouldResetAutoplay
            infinite
            itemsPerRow={[1, 2, 3, 3]}
            beforeChange={() => setMoving(true)}
            afterChange={() => setMoving(false)}
            customButtonGroup={
              isMobile || newsCards.length > 3 ? (
                <ButtonGroup offset={theme.spacing(7)} />
              ) : null
            }
          >
            {newsCards.map((card: NewsCardProps, index) => (
              <Box px={isMobile ? 2 : undefined} key={index}>
                <Link
                  href={card.path}
                  target="_blank"
                  underline="none"
                  draggable={false}
                  onClick={(e) => handleClick(e)}
                  sx={{ alignSelf: "stretch" }}
                >
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "OpinionNewsArticle",
                      gender: `${card.type}`,
                      about: `${card.type} featuring dorg`,
                      headline: card.text,
                      dateline: card.text,
                      name: `${card.slug} ${card.type} post about dorg`,
                      author: {
                        "@type": "Organization",
                        name: card.slug,
                        url: card.author
                      },
                      url: card.path,
                    })}
                  </script>
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
                      [theme.breakpoints.up("md")]: {
                        ml: 3,
                      },
                      "&:hover": {
                        background: `linear-gradient(rgba(255,255,255,50%), rgba(255,255,255,0))`,
                        borderColor: colors.white,
                        " .read-link": {
                          opacity: 0.6,
                        },
                      },
                    }}
                  >
                    <Box display="flex" justifyContent="flex-start">
                      <img
                        src={card.image}
                        alt={card.slug}
                        style={{ height: "40px", maxWidth: 200, width: "auto" }}
                      />
                    </Box>
                    <Typography
                      variant="body1"
                      lineHeight={1.5}
                      textAlign="left"
                    >
                      {card.text}
                    </Typography>
                    {/* <Stack direction="row" spacing={2} className="read-link">
                      <Typography
                        variant="body1"
                        textTransform="uppercase"
                        fontWeight={800}
                        letterSpacing={3}
                      >
                        {card.type ? `Read the ${card.type}` : "Read more"}
                      </Typography>
                      <img
                        src={ExternalLinkIcon}
                        alt=""
                        style={{ width: "1rem" }}
                      />
                    </Stack> */}
                  </Stack>
                </Link>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};
