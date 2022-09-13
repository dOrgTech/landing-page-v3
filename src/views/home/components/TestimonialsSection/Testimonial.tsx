import React from "react";
import { Box, Link, Stack,  Typography } from "@mui/material";
import { TestimonialsProps } from "./Testimonials"
import { colors } from "../../../../theme"
import TwitterIcon from "../../../../assets/imgs/twitter.svg";

export interface TestimonialContentProps {
  content: TestimonialsProps;
}

export const Testimonial: React.FC<TestimonialContentProps> = ({content}) => {
  const {account, externalLink, testimonialText } = content;
  const { avatar, name, username } = account;

  return (
    <Link underline="none" href={externalLink} target="_blank">
      <Stack
        direction="column"
        spacing={2}
        sx={{
          bgcolor: colors.black,
          border: `6px solid ${colors.grays[600]}`,
          borderRadius: "24px",
          color: colors.white,
          cursor: "pointer",
          p: 2,
          transition: "backgroundColor 0.25s ease-in-out",
          "&:hover": {
            bgcolor: colors.grays[800]
          }
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Box sx={{
              width: 32,
              height: 32,
              borderRadius: 999,
              overflow: "hidden"
            }}>
              <img src={avatar} alt={username}/>
            </Box>
            <Box>
              <Typography variant="body2" lineHeight={1.25} fontWeight={800}>{name}</Typography>
              <Typography variant="body2" lineHeight={1.25} fontWeight={100} color={colors.grays[500]}>{username}</Typography>
            </Box>
          </Stack>
          <Box sx={{
            opacity: 0.8,
            transition: "opacity 0.25s ease-in-out",
            width: 20,
            "&:hover": {
              opacity: 0.6
            }
          }}>
            <img src={TwitterIcon} alt="Twitter" />
          </Box>
        </Stack>
        {testimonialText}
      </Stack>
    </Link>
  );
};