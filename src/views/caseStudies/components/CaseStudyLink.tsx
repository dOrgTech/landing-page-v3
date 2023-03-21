import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { colors } from "../../../theme";
import { CaseStudyLinkProps } from "./CaseStudiesListing";
import arrowRight from "../../../assets/imgs/arrow-right.svg";

export default function CaseStudiesLink({
  slug,
  title,
  color,
}: CaseStudyLinkProps) {
  return (
    <Link
      href={`/#/case-studies/${slug}`}
      underline="none"
      sx={{
        alignItems: "center",
        borderBottom: `2px solid ${colors.white}`,
        color: colors.grays[100],
        cursor: "pointer",
        display: "flex",
        py: 4,
        transition: "border-color 0.25 ease-in-out",
        "&:hover": {
          borderColor: color,
          ".linkColor": { color: color, opacity: 1 },
          ".arrowLink": { transform: "translate(0%,50%)" },
        },
      }}
    >
      <Box
        sx={{
          height: [32, 40, 48],
          width: [48, 56, 64],
          mr: [3, 4, 5],
          opacity: 0,
          transform: "translate(-50%,50%)",
          transition: "opacity 0.25s ease-in-out, transform 0.25s ease-in-out",
        }}
        className={`linkColor arrowLink`}
      >
        <svg
          width="76"
          height="47"
          viewBox="0 0 76 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M65.8592 23.122C66.445 23.7078 66.445 24.6575 65.8592 25.2433L56.3133 34.7892C55.7275 35.375 54.7777 35.375 54.192 34.7892C53.6062 34.2034 53.6062 33.2537 54.192 32.6679L62.6772 24.1826L54.192 15.6973C53.6062 15.1116 53.6062 14.1618 54.192 13.576C54.7777 12.9902 55.7275 12.9902 56.3133 13.576L65.8592 23.122ZM10.9189 22.6826L64.7986 22.6826L64.7986 25.6826L10.9189 25.6826L10.9189 22.6826Z"
            fill="currentColor"
          />
        </svg>
      </Box>
      <Typography
        component="h2"
        variant="h1"
        className="linkColor"
        sx={{ fontSize: ["4rem", "5rem", "6rem"] }}
      >
        {title}
      </Typography>
    </Link>
  );
}
