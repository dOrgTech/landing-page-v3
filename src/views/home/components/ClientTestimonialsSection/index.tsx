import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { customerTestimonials } from "../TestimonialsSection/Testimonials";
import CustomerCard from "./CustomerCard";

export const ClientTestimonialsSection: React.FC = () => {
  return (
    <Box mt={[16, 24, 32]} position='relative'>
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
          Collaborative Success Stories{" "}
          <span role='img' aria-label='sparkles'>
            💬
          </span>
        </Typography>
        <Box
          sx={{
            columnCount: [1, 2],
            columnGap: 4,
            mt: 12,
          }}>
          {customerTestimonials.map((testimonial) => (
            <Box
              key={testimonial.customerName}
              sx={{
                breakInside: "avoid",
                pageBreakInside: "avoid",
                mb: 4,
              }}>
              <CustomerCard {...testimonial} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
