import React from "react";
import { Box } from "@mui/material";
import { CaseStudyLayout } from "./CaseStudyLayout";
import { CaseStudyLinkProps } from "../../constants/caseStudies";

export const Tezos = ({ ...props }: CaseStudyLinkProps) => {
  const { slug, title, color } = props;
  return (
    <CaseStudyLayout {...props}>
      <Box>{title}</Box>
    </CaseStudyLayout>
  );
};
