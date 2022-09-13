import React, { ReactChildren } from "react";
import { Box, Container, Grid, Link, Stack,  Typography } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import { Button } from "../../../../commons/button/Button";
import { colors } from "../../../../theme"
import { testimonials, TestimonialsProps } from "./Testimonials";
import { Testimonial } from "./Testimonial";

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
          {testimonials.map((testimonial: TestimonialsProps) => {
            return (
              <Testimonial key={testimonial.externalLink} content={testimonial} />
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
