import React from "react";
import { FormPage } from "../formPage"
import { TextField, Typography } from "@mui/material";

export const HireUsView: React.FC = () => {
  return (
    <FormPage title="Hire Us" description="Fill out the form below to get in touch!">
      <form>
        <Typography>
          Basic Information
        </Typography>
        <TextField
          label="What is your full name?"
          variant="filled"
          required
        />
        <TextField
          label="What is your email?"
          variant="filled"
          required
        />
      </form>
    </FormPage>
  );
};
