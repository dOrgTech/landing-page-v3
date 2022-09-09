import React from "react";
import { FormPage } from "../FormPage"
import { Divider, FormControl, Stack, Typography } from "@mui/material";
import { CreatableSelect as Select } from "../../../commons/form/CreatableSelect";
import { Label } from "../../../commons/form/Label"
import { FormInput } from "../../../commons/form/FormInput"
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
              <FormControl variant="standard">
                <Label required component="label" htmlFor="name" sx={{color: "currentColor"}}>
                  What is your full name?
                </Label>
                <FormInput
                  id="name"
                  required
                />
              </FormControl>
              <FormControl variant="standard">
                <Label required component="label" htmlFor="email" sx={{color: "currentColor"}}>
                  What is your email?
                </Label>
                <FormInput
                  id="email"
                  required
                  sx={{width: "100%"}}
                />
              </FormControl>
              <FormControl variant="standard">
                <Label required component="label" htmlFor="organization" sx={{color: "currentColor"}}>
                  What is your organization?
                </Label>
                <FormInput
                  id="organization"
                  required
                />
              </FormControl>
              <FormControl variant="standard">
                <Label required component="label" htmlFor="website" sx={{color: "currentColor"}}>
                  Your organization’s website:
                </Label>
                <FormInput
                  id="website"
                  required
                  sx={{width: "100%"}}
                />
              </FormControl>
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
              <FormControl variant="standard">
                <Label required component="label" htmlFor="project" sx={{color: "currentColor"}}>
                  Select the categories that best describe your project:
                </Label>
                <Select
                  id="project-categories"
                  isMulti
                  options={categories}
                />
              </FormControl>
              <FormControl variant="standard">
                <Label required component="label" htmlFor="approach" sx={{color: "currentColor"}}>
                  How would you like to work together
                </Label>
                <Select
                  id="approach"
                  options={approaches}
                />
              </FormControl>
              <FormControl variant="standard">
                <Label required component="label" htmlFor="project" sx={{color: "currentColor"}}>
                Project description:
                </Label>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    Tell us about your project and the desired scope of work.
                  </Typography>
                  <FormInput
                    id="project-description"
                    required
                    multiline
                    rows={5}
                    inputProps={{ sx: {resize: "vertical"} }}
                  />
                </Stack>
              </FormControl>
              <FormControl variant="standard">
                <Label required component="label" htmlFor="budget" sx={{color: "currentColor"}}>
                  What is your budget?
                </Label>
                <Select
                  id="budget"
                  options={budgets}
                />
              </FormControl>
              <FormControl variant="standard">
                <Label required component="label" htmlFor="startDate" sx={{color: "currentColor"}}>
                  When would you like to get started?
                </Label>
                <Select
                  id="startDate"
                  options={startDates}
                />
              </FormControl>
              <FormControl variant="standard">
                <Label component="label" htmlFor="source" sx={{color: "currentColor"}}>
                  How did you hear about dOrg?
                </Label>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    Twitter, youtube, article, etc.
                  </Typography>
                  <FormInput
                    id="source"
                    sx={{width: "100%"}}
                  />
                </Stack>
              </FormControl>
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