import React from "react";
import { Box, Container, Grid, Link, styled, Stack,  Typography } from "@mui/material";
import { Button } from "../../../commons/button/Button";
import Carousel from "../../../commons/carousel/Carousel";
import { colors } from "../../../theme"

const newsCards = [
  {
    path: "https://twitter.com/dOrg_tech/status/1560323471393038344",
    slug: "time",
    text: "In march this year Time Magazine published an article titled No Bosses: What It’s Like Working at a DAO, in which dOrg was featured throughout its entirety.",
    type: "article",
  },
  {
    path: "https://twitter.com/dOrg_tech/status/1560323471393038344",
    slug: "delphi",
    text: "A deep dive with dOrg’s Ori Shimony and Nestor Amesty, covering DAO ontology and taxonomy, the future of DAO tooling, and much more.",
    type: "podcast",
  },
  {
    path: "https://twitter.com/dOrg_tech/status/1560323471393038344",
    slug: "stanford",
    text: "In this lecture presented at Stanford's BioE60 Beyond Bitcoin course, Ron Bogerand Ori Shimony of dOrg present an overview on DAOs.",
    type: "lecture",
  },
  {
    path: "https://twitter.com/dOrg_tech/status/1560323471393038344",
    slug: "time",
    text: "In march this year Time Magazine published an article titled No Bosses: What It’s Like Working at a DAO, in which dOrg was featured throughout its entirety.",
    type: "article",
  },
  {
    path: "https://twitter.com/dOrg_tech/status/1560323471393038344",
    slug: "delphi",
    text: "A deep dive with dOrg’s Ori Shimony and Nestor Amesty, covering DAO ontology and taxonomy, the future of DAO tooling, and much more.",
    type: "podcast",
  },
  {
    path: "https://twitter.com/dOrg_tech/status/1560323471393038344",
    slug: "stanford",
    text: "In this lecture presented at Stanford's BioE60 Beyond Bitcoin course, Ron Bogerand Ori Shimony of dOrg present an overview on DAOs.",
    type: "lecture",
  },
]

interface NewsCard {
  path: string;
  text: string;
  image?: string;
}

export const NewsSection: React.FC = () => {

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
            arrows
            showDots
            infinite
            shouldResetAutoplay
            itemsPerRowDesktop={3}
            // responsive={responsive}
          >
            {newsCards.map((card: NewsCard, index) => (
              <Link href={card.path} key={index} target='_blank' sx={{alignSelf: "stretch"}}>
                <Stack
                  ml={3}
                  px={3}
                  py={8}
                  direction="column"
                  spacing={3}
                  border={`6px solid ${colors.grays[700]}`}
                  borderRadius="24px"
                  color={colors.white}
                >
                  <Typography variant="body1" lineHeight={1.5} textAlign="left">
                    {card.text}
                  </Typography>
                </Stack>
              </Link>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};
