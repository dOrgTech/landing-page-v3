import React from "react";
import { Box, Container } from "@mui/material";
import { colors } from "../../../theme";
import CaseStudyLink from "./CaseStudyLink";
import {
  caseStudies,
  CaseStudyLinkProps,
} from "../../../constants/caseStudies";

export default function CaseStudiesListing() {
  return (
    <Container maxWidth="lg" sx={{ position: "relative", pb: [12, 16, 20] }}>
      {Object.values(caseStudies).map((caseStudy: CaseStudyLinkProps) => {
        return <CaseStudyLink key={caseStudy.slug} {...caseStudy} />;
      })}
    </Container>
  );
}
