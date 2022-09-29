import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Button } from "../../../../commons/button/Button";
import {
  TwitterCard,
  TwitterCardProps,
} from "../../../../commons/twitter/TwitterCard";
import { communityTweets } from "./Tweets";
import Carousel from "../../../../commons/carousel/Carousel";
import { ButtonGroup } from "../../../../commons/carousel/ButtonGroup";

export const CommunitySection: React.FC = () => {
  const [isMoving, setMoving] = useState<boolean>(false);

  return (
    <Box my={[16, 24, 32]} position="relative">
      <Typography
        variant="h6"
        component="h2"
        textTransform="uppercase"
        textAlign="center"
        letterSpacing={5}
      >
        Community{" "}
        <span role="img" aria-label="purple heart">
          💜
        </span>
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
          afterChange={() => setMoving(false)}
        >
          {communityTweets.map((tweet: TwitterCardProps) => (
            <Box key={tweet.externalLink} px={2}>
              <TwitterCard {...tweet} clickable={!isMoving} />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Grid container justifyContent="center" mt={8}>
        <Grid item>
          <Button href="/#/joinUs" variant="outlined">
            Apply to Join
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
