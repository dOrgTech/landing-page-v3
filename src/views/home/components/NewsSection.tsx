import React from "react";
import { Box, Container, Link, Stack,  Typography } from "@mui/material";
import Carousel from "../../../commons/carousel/Carousel";
import { colors } from "../../../theme"
import ExternalLinkIcon from "../../../assets/imgs/external-link-icon.svg";
import TimeIcon from "../../../assets/imgs/news/time.svg";
import DelphiIcon from "../../../assets/imgs/news/delphi.svg";
import StanfordIcon from "../../../assets/imgs/news/stanford.svg";

const newsCards = [
  {
    image: TimeIcon,
    slug: "time",
    path: "https://time.com/6146406/working-at-dao-dorg/",
    text: "In march this year Time Magazine published an article titled No Bosses: What It’s Like Working at a DAO, in which dOrg was featured throughout its entirety.",
    type: "article",
  },
  {
    image: DelphiIcon,
    slug: "delphi",
    path: "https://members.delphidigital.io/media/dorg-defining-daos-comparing-the-dao-model-to-traditional-llc-structures-and-the-future-of-dao-tooling",
    text: "A deep dive with dOrg’s Ori Shimony and Nestor Amesty, covering DAO ontology and taxonomy, the future of DAO tooling, and much more.",
    type: "podcast",
  },
  {
    image: StanfordIcon,
    slug: "stanford",
    path: "https://www.youtube.com/watch?v=SYPzqRaN4zA",
    text: "In this lecture presented at Stanford's BioE60 Beyond Bitcoin course, Ron Bogerand Ori Shimony of dOrg present an overview on DAOs.",
    type: "lecture",
  },
]

interface NewsCard {
  path: string;
  slug: string;
  text: string;
  type?: string;
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
            itemsPerRow={[1,1,3,3]}
          >
            {newsCards.map((card: NewsCard, index) => (
              <Link href={card.path} key={index} target='_blank' underline="none" sx={{alignSelf: "stretch"}}>
                <Stack
                  spacing={4}
                  direction="column"
                  sx={{
                    mb: 12,
                    ml: 3,
                    p: 4,
                    justifyContent: "flex-start",
                    border: `6px solid ${colors.grays[700]}`,
                    borderRadius: "24px",
                    color: colors.white,
                    transition: "all 0.25s ease-in-out",
                    "& .read-link": {
                      transition: "opacity 0.25s ease-in-out",
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
