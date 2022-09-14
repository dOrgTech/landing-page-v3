import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { Button } from "../../../../commons/button/Button";
import { TwitterCard, TwitterCardProps } from "../../../../commons/twitter/TwitterCard";
import { communityTweets } from "./Tweets";
import Carousel from "../../../../commons/carousel/Carousel";

export const CommunitySection: React.FC = () => {

  return (
    <Box my={16} position="relative">
      <Container maxWidth="xl" disableGutters>
        <Typography
          variant="h6"
          component="h2"
          textTransform="uppercase"
          textAlign="center"
          letterSpacing={6}
        >
          Community <span role="img" aria-label="purple heart">💜</span>
        </Typography>
        <Box mt={8}>
          <Carousel
            swipeable
            draggable
            infinite
            arrows={communityTweets.length > 3}
            itemsPerRow={[1.5,2.5,3.5,4]}
          >
            {communityTweets.map((tweet: TwitterCardProps) => (
              <Box key={tweet.externalLink} px={2}>
                <TwitterCard {...tweet}/>
              </Box>
            ))}
          </Carousel>
        </Box>
        <Grid container justifyContent="center" mt={12}>
          <Grid item>
            <Button href="/#/hireUs" variant='outlined'>Apply to Join</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
