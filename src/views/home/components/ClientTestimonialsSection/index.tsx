/** @format */

import React from "react";
import { Box } from "@mui/material";
import { customerTestimonials } from "../TestimonialsSection/Testimonials";
import CustomerCard from "./CustomerCard";
import useIsDesktop from "../../../../hooks/useIsDesktop";

export const ClientTestimonialsSection: React.FC = () => {
  const isDesktop = useIsDesktop();
  return (
    <Box
      sx={{
        display: isDesktop ? "flex" : "initial",
        columnCount: [1, 2, null, 3],
        columnGap: 4,
        mt: 12,
      }}>
      {customerTestimonials.map((testimonial) => (
        <Box
          key={testimonial.customerName}
          sx={{
            mt: !isDesktop ? 8 : 0,
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
