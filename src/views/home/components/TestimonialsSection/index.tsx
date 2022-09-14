import React from "react";
import { Box, Container, Grid, Link, Stack,  Typography } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import { Button } from "../../../../commons/button/Button";
import { TwitterCard, TwitterCardProps } from "../../../../commons/twitter/TwitterCard";
import { testimonials } from "./Testimonials";

export const TestimonialsSection: React.FC = () => {
  return (
    <Box my={16} position="relative">
      <Container maxWidth="lg" sx={{position: "relative"}}>
        <Typography
          variant="h6"
          component="h2"
          textTransform="uppercase"
          textAlign="center"
          letterSpacing={6}
        >
          In dOrg We Trust <span role="img" aria-label="sparkles">✨</span>
        </Typography>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={5} sx={{mt: 8}}>
          {testimonials.map((testimonial) => {
            return (
              <TwitterCard key={testimonial.externalLink} {...testimonial} />
            )
          })}
        </Masonry>
        <Grid container justifyContent="center" mt={12}>
          <Grid item>
            <Button href="/#/hireUs" variant='outlined'>Let&apos;s Talk</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
