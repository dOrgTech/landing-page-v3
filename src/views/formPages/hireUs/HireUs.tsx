import React, { useEffect } from "react";
import { FormPage } from "../formPage"
import { Divider, FormLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { Button } from "../../../commons/button/Button"
import { colors } from "../../../theme";

export const HireUsView: React.FC = () => {
  return (
    <FormPage title="Hire Us" description="Fill out the form below to get in touch!">
      <form>
        <Stack spacing={10}>

          <Stack spacing={4}>
            <Stack spacing={2}>
              <Typography variant="h5" component="h2">
                Basic Information
              </Typography>
              <Divider sx={{border: `2px solid ${colors.black}`}}/>
            </Stack>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  What is your full name?
                </FormLabel>
                <TextField
                  variant="filled"
                  required
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  What is your email?
                </FormLabel>
                <TextField
                  variant="filled"
                  required
                  sx={{width: "100%"}}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  What is your organization?
                </FormLabel>
                <TextField
                  variant="filled"
                  required
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  Your organization’s website:
                </FormLabel>
                <TextField
                  variant="filled"
                  required
                  sx={{width: "100%"}}
                />
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Stack spacing={2}>
              <Typography variant="h5" component="h2">
                Project Information
              </Typography>
              <Divider sx={{border: `2px solid ${colors.black}`}}/>
            </Stack>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  Select the categories that best describe your project:
                </FormLabel>
                <Select defaultValue="default">
                  <MenuItem value="default" disabled>Please select one</MenuItem>
                  <MenuItem value="dao/governance">DAO/Governance</MenuItem>
                  <MenuItem value="deFi">DeFi</MenuItem>
                  <MenuItem value="social">Social</MenuItem>
                  <MenuItem value="infrastructure">Infrastructure</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  How would you like to work together
                </FormLabel>
                <Select defaultValue="default">
                  <MenuItem value="default" disabled>Please select one</MenuItem>
                  <MenuItem value="fixed scope">Fixed Scope Project</MenuItem>
                  <MenuItem value="team extension">Team Extension</MenuItem>
                  <MenuItem value="consulting">Consulting &amp; Advisory</MenuItem>
                  <MenuItem value="ecosystem partnership">Ecosystem Partnership</MenuItem>
                  <MenuItem value="not specified">Not Specified</MenuItem>
                </Select>
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                Project description:
                </FormLabel>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    Tell us about your project and the desired scope of work.
                  </Typography>
                  <TextField
                    required
                    multiline
                    rows={5}
                    inputProps={{ sx: {resize: "vertical"} }}
                  />
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  What is your budget?
                </FormLabel>
                <Select defaultValue="default">
                  <MenuItem value="default" disabled>Please select one</MenuItem>
                  <MenuItem value="below 10k">Below $10,000</MenuItem>
                  <MenuItem value="10-50k">$10,000 - $50,000</MenuItem>
                  <MenuItem value="50-100k">$50,000 - $100,000</MenuItem>
                  <MenuItem value="100k+">Above $100,000</MenuItem>
                  <MenuItem value="not specified">Not Specified</MenuItem>
                </Select>
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  When would you like to get started?
                </FormLabel>
                <Select defaultValue="default">
                  <MenuItem value="default" disabled>Please select one</MenuItem>
                  <MenuItem value="within 1 month">Within 1 month</MenuItem>
                  <MenuItem value="1-3 months">1 - 3 months from now</MenuItem>
                  <MenuItem value="not specified">Not Specified</MenuItem>
                </Select>
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  How did you hear about dOrg?
                </FormLabel>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    Tell us about your project and the desired scope of work.
                  </Typography>
                  <TextField
                    variant="filled"
                    sx={{width: "100%"}}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Button
            variant="outlined"
            sx={{
              borderColor: colors.black,
              color: colors.black,
              mt: 8,
              width: "auto",
              "&:hover": {
                color: colors.white,
              }
            }}
          >
            Submit
          </Button>
      </form>
    </FormPage>
  );
};