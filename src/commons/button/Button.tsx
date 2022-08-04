import { Button as MuiButton, ButtonProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  outlined: {
    "&:hover": {
      backgroundColor: "#222222",
      boxShadow: "8px 7px 0 0 #73F260",
    },
  },
  contained: {
    background: "#E5E5E5",
    color: "#000",
    "&:hover": {
      backgroundColor: "#222222",
      color: "#E5E5E5",
      boxShadow: "8px 7px 0 0 #73F260",
    },
  },
}));

export const Button: React.FC<ButtonProps> = (props) => {
  const classes = useStyles();

  const handleVariant = (): string => {
    switch (props.variant) {
    case "outlined":
      return classes.outlined;
    case "contained":
      return classes.contained;
      // case "outlined":
      //   return classes.outlined;
    }
    return "";
  };
  return (
    <MuiButton className={`${handleVariant()}`}>{props.children}</MuiButton>
  );
};
