import { Button as MuiButton, ButtonProps, styled } from "@mui/material";
import React from "react";

const OutlinedButton = styled(MuiButton)({
  width: "100%",
  "&:hover": {
    border: "4px solid #E5E5E5",
    backgroundColor: "#222222",
    boxShadow: "8px 7px 0 0 #73F260",
  },
});

const ContainedButton = styled(MuiButton)({
  width: "100%",
  background: "#E5E5E5",
  color: "#000",
  "&:hover": {
    backgroundColor: "#222222",
    color: "#E5E5E5",
    boxShadow: "8px 7px 0 0 #73F260",
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
