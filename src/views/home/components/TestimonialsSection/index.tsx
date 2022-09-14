import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import { TwitterCard, TwitterCardProps } from "../../../../commons/twitter/TwitterCard";
import { testimonials } from "./Testimonials";

export const TestimonialsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box my={16} position="relative">
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          [theme.breakpoints.down('md')]: {
            px: 0,
          }
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          textTransform="uppercase"
          textAlign="center"
          letterSpacing={6}
        >
          In dOrg We Trust <span role="img" aria-label="sparkles">✨</span>
        </Typography>
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3 }}
          spacing={5}
          sx={{
            mt: 8,
            mx: 0,
          }}
        >
          {testimonials.map((testimonial: TwitterCardProps) => {
            return (
              <TwitterCard key={testimonial.externalLink} {...testimonial} />
            )
          })}
        </Masonry>
      </Container>
    </Box>
  );
};
