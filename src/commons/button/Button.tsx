import { Button as MuiButton, ButtonProps, styled } from "@mui/material";
import React from "react";
import { colors } from "../../theme";

const OutlinedButton = styled(MuiButton)({
  width: "100%",
  "&:hover": {
    border: `4px solid ${colors.grays[100]}`,
    backgroundColor: colors.grays[800],
    boxShadow: `8px 7px 0 0 ${colors.green}`,
  },
});

const ContainedButton = styled(MuiButton)({
  width: "100%",
  background: colors.grays[100],
  color: colors.black,
  "&:hover": {
    backgroundColor: colors.grays[800],
    color: colors.grays[100],
    boxShadow: `8px 7px 0 0 ${colors.green}`,
  },
});

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      {props.variant === "outlined" && (
        <OutlinedButton {...props}>{props.children}</OutlinedButton>
      )}
      {props.variant === "contained" && (
        <ContainedButton {...props}>{props.children}</ContainedButton>
      )}
      {props.variant === "text" && (
        <OutlinedButton {...props}>{props.children}</OutlinedButton>
      )}
      {!props.variant && (
        <OutlinedButton {...props}>{props.children}</OutlinedButton>
      )}
    </>
  );
};
