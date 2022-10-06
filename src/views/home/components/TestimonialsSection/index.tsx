import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import {
  TwitterCard,
  TwitterCardProps,
} from "../../../../commons/twitter/TwitterCard";
import { testimonials } from "./Testimonials";

export const TestimonialsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box mt={[16, 24, 32]} position="relative">
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          textTransform="uppercase"
          textAlign="center"
          letterSpacing={5}
        >
          In dOrg They Trust{" "}
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </Typography>
        <Box
          sx={{
            columnCount: [1, 2, null, 3],
            columnGap: 4,
            mt: 12,
          }}
        >
          {testimonials.map((testimonial: TwitterCardProps) => {
            return (
              <Box
                key={testimonial.externalLink}
                sx={{
                  breakInside: "avoid",
                  pageBreakInside: "avoid",
                  mb: 4,
                }}
              >
                <TwitterCard {...testimonial} clickable={true} />
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
