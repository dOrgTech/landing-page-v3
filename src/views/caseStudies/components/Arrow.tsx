import React from "react";
import { Box, BoxProps } from "@mui/material";

interface ArrowProps extends BoxProps {
  direction?: "right" | "left";
}

export const Arrow = ({ direction = "right", ...props }: ArrowProps) => {
  return (
    <Box {...props}>
      <svg
        width="76"
        height="47"
        viewBox="0 0 76 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: direction === "left" ? `scaleX(-1)` : "unset" }}
      >
        <path
          d="M65.8592 23.122C66.445 23.7078 66.445 24.6575 65.8592 25.2433L56.3133 34.7892C55.7275 35.375 54.7777 35.375 54.192 34.7892C53.6062 34.2034 53.6062 33.2537 54.192 32.6679L62.6772 24.1826L54.192 15.6973C53.6062 15.1116 53.6062 14.1618 54.192 13.576C54.7777 12.9902 55.7275 12.9902 56.3133 13.576L65.8592 23.122ZM10.9189 22.6826L64.7986 22.6826L64.7986 25.6826L10.9189 25.6826L10.9189 22.6826Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  );
};
