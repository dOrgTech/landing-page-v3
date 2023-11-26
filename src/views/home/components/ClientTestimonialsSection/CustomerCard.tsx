import { Stack, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../../theme";

export interface CustomerCardProps {
  customerName: string;
  customerRole: string;
  externalLink?: string;
  text: React.ReactNode;
  image?: string;
  clickable?: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customerName,
  customerRole,
  text,
  image,
}) => {
  return (
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
        <img
          loading='lazy'
          src={image}
          alt=''
          style={{ height: 50, width: 150 }}
        />
      </Stack>
      <Stack>{text}</Stack>
      <Stack spacing={0}>
        <Typography variant='body1'>{customerName}</Typography>
        <Typography variant='body2' color={"#E5E5E5"}>
          {customerRole}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CustomerCard;
