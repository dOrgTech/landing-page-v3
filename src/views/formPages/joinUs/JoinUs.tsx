import React from "react";
import { FormPage } from "../formPage"
import { TextField, Typography } from "@mui/material";


export const JoinUsView: React.FC = () => {
  return (
    <FormPage title="Join Us" description="Fill out the form if you want to join us!">
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
