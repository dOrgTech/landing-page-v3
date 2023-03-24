import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { colors } from "../../../theme";
import { CaseStudyLinkProps } from "../../../constants/caseStudies";
import { Arrow } from "./Arrow";

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
        borderWidth: "2px",
        borderBottom: [`solid ${color}`, `solid ${colors.white}`],
        color: [color, colors.grays[100]],
        cursor: "pointer",
        display: "flex",
        mt: 4,
        py: [2, 4],
        transition: "border-color 0.25 ease-in-out",
        "&:hover": {
          borderColor: color,
          ".linkColor": { color: color, opacity: 1 },
          ".arrowLink": { transform: "translateX(0%)" },
        },
      }}
    >
      <Arrow
        sx={{
          display: ["none", "flex"],
          height: "100%",
          width: [48, 56, 64],
          mr: [3, 4, 5],
          opacity: 0,
          transform: "translateX(-50%)",
          transition: "opacity 0.25s ease-in-out, transform 0.25s ease-in-out",
        }}
        className={`linkColor arrowLink`}
      />
      <Typography
        component="h2"
        variant="h1"
        className="linkColor"
        sx={{ fontSize: ["3rem", "4rem", "5rem", "6rem"], mt: 0 }}
      >
        {title}
      </Typography>
    </Link>
  );
}
