import React from "react";
import { FormPage } from "../FormPage"
import { Divider, FormLabel,  Stack, TextField, Typography } from "@mui/material";
import Select from "react-select";
import { Button } from "../../../commons/button/Button"
import { colors } from "../../../theme";

const categories = [
  { value: "dao/governance", label: "DAO/Governance"},
  { value: "deFi", label: "DeFi"},
  { value: "social", label: "Social"},
  { value: "infrastructure", label: "Infrastructure"},
  { value: "other", label: "Other"},
]

const approaches = [
  { value: "fixed scope", label: "Fixed Scope Project"},
  { value: "team extension", label: "Team Extension"},
  { value: "consulting", label: "Consulting &amp; Advisory"},
  { value: "ecosystem partnership", label: "Ecosystem Partnership"},
  { value: "not specified", label: "Not Specified"},
]

const budgets = [
  { value: "below 10k", label: "Below $10,000"},
  { value: "10-50k", label: "$10,000 - $50,000"},
  { value: "50-100k", label: "$50,000 - $100,000"},
  { value: "100k+", label: "Above $100,000"},
  { value: "not specified", label: "Not Specified"},
]

const startDates = [
  { value: "within 1 month", label: "Within 1 month"},
  { value: "1-3 months", label: "1 - 3 months from now"},
  { value: "not specified", label: "Not Specified"},
]

export const HireUsView: React.FC = () => {
  return (
    <FormPage title="Hire Us" description="Fill out the form below to get in touch!">
      <form>
        <Stack spacing={10}>
          <Stack spacing={4}>
            <Stack spacing={2}>
              <Typography variant="h5" component="h2">
                Basic information
              </Typography>
              <Divider sx={{border: `2px solid ${colors.black}`}}/>
            </Stack>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  What is your full name?
                </FormLabel>
                <TextField
                  id="name"
                  variant="filled"
                  required
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  What is your email?
                </FormLabel>
                <TextField
                  id="email"
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
                  id="organization"
                  variant="filled"
                  required
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  Your organization’s website:
                </FormLabel>
                <TextField
                  id="website"
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
                Project information
              </Typography>
              <Divider sx={{border: `2px solid ${colors.black}`}}/>
            </Stack>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  Select the categories that best describe your project:
                </FormLabel>
                <Select
                  id="project-categories"
                  isMulti
                  options={categories}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  How would you like to work together
                </FormLabel>
                <Select
                  id="approach"
                  options={approaches}
                />
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
                <Select
                  id="budget"
                  options={budgets}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  When would you like to get started?
                </FormLabel>
                <Select
                  id="startDate"
                  options={startDates}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel sx={{color: "currentColor"}}>
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