/** @format */

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
import { colors } from "../../../../theme";

export const CommunitySection: React.FC = () => {
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
        Community{" "}
        <span role='img' aria-label='purple heart'>
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
          afterChange={() => setMoving(false)}>
          {communityTweets.map((tweet: TwitterCardProps, i) => (
            <Box
              key={tweet.externalLink}
              px={2}
              display='flex'
              sx={{ height: "100%" }}
              flexDirection='column'>
              <TwitterCard
                {...tweet}
                clickable={!isMoving}
                color={cardColors[i % cardColors.length]}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Grid container justifyContent='center' mt={8}>
        <Grid item>
          <Button href='/#/join' variant='outlined'>
            Apply to Join
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
