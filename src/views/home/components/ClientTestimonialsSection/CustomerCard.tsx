/** @format */

import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../../theme";

export interface CustomerCardProps {
  customerName?: string;
  customerRole?: string;
  externalLink?: string;
  text: React.ReactNode;
  image?: string;
  clickable?: boolean;
}

const getImageStyle = () => {
  return { height: 70, width: 150 };
};

const CustomerCard: React.FC<CustomerCardProps> = ({
  customerName,
  customerRole,
  externalLink,
  text,
  image,
}) => {
  return (
    <Link
      underline='none'
      href={externalLink}
      target='_blank'
      draggable={false}>
      <Stack
        direction='column'
        spacing={3}
        sx={{
          bgcolor: colors.black,
          border: `4px solid ${colors.grays[600]}`,
          borderRadius: "24px",
          color: colors.white,
          cursor: "pointer",
          p: 2,
          textAlign: "left",
          transition: "backgroundColor 0.25s ease-in-out",
          "&:hover": {
            bgcolor: colors.grays[800],
          },
        }}>
        <Stack justifyItems='flex-start'>
          <img loading='lazy' src={image} alt='' style={getImageStyle()} />
        </Stack>
        <Stack>{text}</Stack>
        <Stack spacing={0}>
          <Typography variant='body1'>{customerName}</Typography>
          <Typography variant='body2' color={"#E5E5E5"}>
            {customerRole}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
};

export default CustomerCard;
