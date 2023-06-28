import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../../../theme";
import Carousel from "../../../commons/carousel/Carousel";
import { Button } from "../../../commons/button/Button";
import { ButtonGroup } from "../../../commons/carousel/ButtonGroup";
import { YoutubeCard } from "../../../commons/youtube/YoutubeCard";

const YOUTUBE_PREFIX_TEXT = "dOrg Hot Seat Podcast | EP";
export const EpisodeSection: React.FC = () => {
  const EPISODES = [
    {
      id: "9_lDSJXRyHI",
      text: `${YOUTUBE_PREFIX_TEXT} 1 ft. Polywrap`,
      description:
        "Welcome to the hot seat! In this series, we sit with the founders of some of the most exciting web3 projects to discuss their vision and journey ...",
    },
    {
      id: "y5JlYSlAgOg",
      text: `${YOUTUBE_PREFIX_TEXT} 2 ft. Utopia Labs`,
      description:
        "Managing Web3 Organizations with Utopia Labs 00:00 Intro 01:15 Utopia Presentation QUESTIONS 6:26 With that mockup you ...",
    },
    {
      id: "19OVFg4GGHs",
      text: `${YOUTUBE_PREFIX_TEXT} 3 ft. Superfluid`,
      description:
        "In this episode of the hot seat podcast, we sit down with Michele D'Aliessi one of the founders of Superfluid ...",
    },
    {
      id: "rPgq7pxw6aU",
      text: `${YOUTUBE_PREFIX_TEXT} 4 ft. Kleros`,
      description:
        "Decentralized Justice: The Future of Dispute Resolution ...",
    },
    {
      id: "qpPbLZrjhfc",
      text: `${YOUTUBE_PREFIX_TEXT} 5 ft. Bloom Network`,
      description: "Building Regenerative Communities with Bloom Network ...",
    },
    {
      id: "q1voqfj1GUo",
      text: `${YOUTUBE_PREFIX_TEXT} 6 ft. /Auth`,
      description: "/Auth: The ultimate solution for Web3 authentication ...",
    },
    {
      id: "_bajTdUIf-A",
      text: `${YOUTUBE_PREFIX_TEXT} 7 ft. Vocdoni`,
      description:
        "The Next Generation of Voting: Exploring Vocdoni's Anonymous Voting System ...",
    },
    {
      id: "itIaPLOn6Ew",
      text: `${YOUTUBE_PREFIX_TEXT} 8 ft. SISMO`,
      description: "The New Era of Identity and Privacy in web3 with SISMO ...",
    },
    {
      id: "Wr6JX3lEL-Y",
      text: `${YOUTUBE_PREFIX_TEXT} 9 ft. Ownco`,
      description:
        "Ownco: A Simple Solution for Creating Web3 Organizations and Distributing Ownership...",
    },
    {
      id: "JA7ZdYOQI-4",
      text: `${YOUTUBE_PREFIX_TEXT} 10 ft. LENS`,
      description:
        "Lens Protocol is one of the most innovative projects in web3, social media, and blockchain...",
    },
    {
      id: "RV9ZwvuASYQ",
      text: `ETHDenver | Cefi vs. Defi ft. BNB Chain, ConsenSys, 1inch and ETHTrust.`,
      description:
        "FTX, DCG, 3AC, Celsius, BlockFi… A story of Grifters and Greed...",
    },
    {
      id: "XMHacGigGkw",
      text: `${YOUTUBE_PREFIX_TEXT} 12 ft. Safe`,
      description:
        "Tune in to this episode of dOrg Hot Seat as we navigate the web3 landscape with Clem and Daniel from SafeCore...",
    },
    {
      id: "jCD3cf3itz4",
      text: `${YOUTUBE_PREFIX_TEXT} 13 ft. Metagame`,
      description:
        "Unlocking the Power of SafeCore Tune in to this episode of dOrg Hot Seat as we navigate the we...",
    },
    {
      id: "6X7VwiFxNKc",
      text: `${YOUTUBE_PREFIX_TEXT} 14 ft. Snapshot`,
      description:
        "DAO Voting: An Exclusive Look into Snapshot with Nate and dOrg Members Discover the power and...",
    },
    {
      id: "4uWkG1ER8aU",
      text: `${YOUTUBE_PREFIX_TEXT} 15 ft. Job Protocol`,
      description:
        "Crypto Hiring, Decentralized: Job Protocol Cofounder Boris & dOrg Members Talk Talent in ...",
    },
    {
      id: "-0lDQx6JfQI",
      text: `${YOUTUBE_PREFIX_TEXT} 16 ft. Good Dollar`,
      description:
        "Free Crypto for Everyone? GoodDollar's Bold Universal Basic Income Vision with Anna Stone &...",
    },
  ];
  const [isMoving, setMoving] = useState<boolean>(false);

  const cardColors = [
    colors.magenta,
    colors.orange,
    colors.yellow,
    colors.green,
    colors.blue,
    colors.purple,
  ];

  return (
    <Box my={[16, 24, 32]} position='relative'>
      <Typography
        variant='h6'
        component='h2'
        textTransform='uppercase'
        textAlign='center'
        letterSpacing={5}>
        Episodes ▶️
      </Typography>
      <Box mt={12}>
        <Carousel
          swipeable
          draggable
          infinite
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          itemsPerRow={[1, 2.5, 3.5, 4]}
          beforeChange={() => setMoving(true)}
          afterChange={() => setMoving(false)}>
          {EPISODES.map(({ id, text, description }, i) => (
            <Box key={id} px={2}>
              <YoutubeCard
                videoId={id}
                text={text}
                description={description}
                clickable={!isMoving}
                color={cardColors[i % cardColors.length]}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Grid container justifyContent='center' mt={8}>
        <Grid item>
          <Button
            href='/#/join'
            variant='outlined'
            onClick={() =>
              window.open("https://airtable.com/shr4VGh3iZCIVhCg3", "_blank")
            }>
            Become a Sponsor
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
