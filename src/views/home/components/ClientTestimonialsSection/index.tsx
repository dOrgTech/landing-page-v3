import React from "react";
import { Box } from "@mui/material";
import { customerTestimonials } from "../TestimonialsSection/Testimonials";
import CustomerCard from "./CustomerCard";

export const ClientTestimonialsSection: React.FC = () => {
  return (
    <Box
      sx={{
        columnCount: [1, 2, null, 3],
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
  );
};
