import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

type FaqAccordionProps = {
  title: string;
  content: React.ReactNode;
};

const FaqAccordion: React.FC<FaqAccordionProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <Accordion
      expanded={expanded}
      sx={{ borderRadius: 0 }}
      onChange={() => setExpanded(!expanded)}>
      <AccordionSummary
        expandIcon={
          expanded ? (
            <RemoveIcon sx={{ color: "white" }} />
          ) : (
            <AddIcon sx={{ color: "white" }} />
          )
        }
        aria-controls={`${title}-content`}
        id={`${title}-header`}>
        {title}
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordion;
