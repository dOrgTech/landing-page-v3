import { Grid, Typography } from "@mui/material";
import React from "react";
import FaqAccordion from "../FaqAccordion/FaqAccordion";

type Faq = {
  question: string;
  answer: React.ReactNode;
};

export type FaqItemProps = {
  sectionTitle: string;
  titleColor: string;
  faqs: Faq[];
};

const FaqItem: React.FC<FaqItemProps> = ({
  sectionTitle,
  titleColor,
  faqs,
}) => {
  return (
    <Grid container>
      <Grid item>
        <Typography
          variant='h1'
          sx={{ fontSize: ["1.8rem", "2.5rem"], color: titleColor }}>
          {sectionTitle}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          {faqs.map((item, index) => (
            <Grid item key={index} sx={{ width: "100%" }}>
              <FaqAccordion title={item.question} content={item.answer} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default FaqItem;
