import React from "react";
import { Box, Container } from "@mui/material";
import { colors } from "../../../theme";
import CaseStudyLink from "./CaseStudyLink";

export interface CaseStudyLinkProps {
  slug: string;
  title: string;
  color: string;
}

export default function CaseStudiesListing() {
  const caseStudies: CaseStudyLinkProps[] = [
    {
      slug: "tezos",
      title: "Tezos",
      color: colors.blue,
    },
    {
      slug: "gnosis-guild",
      title: "Gnosis Guild",
      color: colors.magenta,
    },
    {
      slug: "starkware",
      title: "Starkware",
      color: colors.green,
    },
    {
      slug: "doingud",
      title: "DoinGud",
      color: colors.orange,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ position: "relative", pb: [12, 16, 20] }}>
      {caseStudies.map((caseStudy) => {
        return <CaseStudyLink key={caseStudy.slug} {...caseStudy} />;
      })}
    </Container>
  );
}
