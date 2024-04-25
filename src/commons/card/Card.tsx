/** @format */

import { Stack, Typography, Collapse, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";

export type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  defaultOpen?: boolean;
  color: string;
};

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  defaultOpen,
  color,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen ?? false);

  return (
    <Stack
      direction='row'
      spacing={3}
      px={4.5}
      py={open ? 2 : 0}
      sx={{
        border: `5px solid ${color}`,
        borderRadius: 5,
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}>
      <Stack>{icon}</Stack>
      <Stack justifyContent='center' direction='column'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'>
          <Typography sx={{ fontWeight: "700", letterSpacing: "2px" }}>
            {title.toUpperCase()}
          </Typography>
          <IconButton sx={{ color: "white" }} onClick={() => setOpen(!open)}>
            {open ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        </Stack>
        <Collapse in={open}>
          <Typography>{description}</Typography>
        </Collapse>
      </Stack>
    </Stack>
  );
};

export default Card;
