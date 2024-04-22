/** @format */

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  TwitterCard,
  TwitterCardProps,
} from "../../../../commons/twitter/TwitterCard";
import { testimonials } from "./Testimonials";
import { ClientTestimonialsSection } from "../ClientTestimonialsSection";

export const TestimonialsSection: React.FC = () => {
  return (
    <Box mt={[8, 16, 24]} position='relative'>
      <Container
        maxWidth='lg'
        sx={{
          position: "relative",
        }}>
        <Typography
          variant='h6'
          component='h2'
          textTransform='uppercase'
          textAlign='center'
          letterSpacing={5}>
          In dOrg They Trust{" "}
          <span role='img' aria-label='sparkles'>
            ✨
          </span>
        </Typography>
        <ClientTestimonialsSection />
        <Box
          sx={{
            columnCount: [1, 2, null, 3],
            columnGap: 4,
            mt: 4,
          }}>
          {testimonials.map((testimonial: TwitterCardProps) => {
            return (
              <Box
                key={testimonial.externalLink}
                sx={{
                  breakInside: "avoid",
                  pageBreakInside: "avoid",
                  mb: 4,
                }}>
                <TwitterCard {...testimonial} clickable={true} />
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
