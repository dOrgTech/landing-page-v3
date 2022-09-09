import { Box, Container } from "@mui/material";
import React from "react";
import { Markdown } from "../../commons/markdown/Markdown";
import { PRIVACY_POLICY_MARKDOWN } from "../../constants/privacyPolicy";

export const PrivacyPolicy: React.FC = () => {
  return (
    <Box py={16}>
      <Container maxWidth='md' style={{ minHeight: "100%" }}>
        <Markdown>{PRIVACY_POLICY_MARKDOWN}</Markdown>
      </Container>
    </Box>
  );
};
