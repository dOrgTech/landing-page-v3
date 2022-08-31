import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import { colors } from "../../theme";

interface LabelProps extends BoxProps {
  htmlFor?: string;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = (props) => {
  return (
    <Box component="label" htmlFor={props.htmlFor} {...props} sx={{
      alignItems: "center",
      color: "currentColor",
      display: "inline-flex",
      fontWeight: 500,
      mb: 1,
    }}>
      {props.children}
      {props.required && (
        <Typography color={colors.magenta} sx={{ml: "2px"}}>
          *
        </Typography>
      )}
    </Box>
  )
}