import React from "react";
import { FormPage } from "../FormPage"
import { Divider, FormLabel, Stack, TextField, Typography } from "@mui/material";
import { colors } from "../../../theme";
import Select from "react-select";
import { CreatableSelect } from "../../../commons/creatableSelect/CreatableSelect";

const specializations = [
  { value: "frontend", label: "Frontend Development"},
  { value: "backend", label: "Backend Development"},
  { value: "fullstack", label: "Full-Stack Development"},
  { value: "smart contract", label: "Smart Contract Developer"},
  { value: "blockchain developer", label: "Blockchain Developer"},
  { value: "protocol", label: "Protocol Engineer"},
  { value: "engineer", label: "DevOps Engineer"},
  { value: "design", label: "Product Design"},
]

const experienceYears = [
  { value: "junior", label: "Junior (0-2 years)"},
  { value: "intermediate", label: "Intermediate (3-4 years"},
  { value: "senior", label: "Senior (5-8 yeras)"},
  { value: "veteran", label: "Veteran (8+ years)"},
]

const technologies = [
  { value: "fake", label: "Need to add technologies from airtable"},
]

const cryptoExperience = [
  { value: "none/limited", label: "No or limited experience"},
  { value: "personal projects/hackathons", label: "Personal projects or hackathons"},
  { value: "0-2 years", label: "0-2 years of professional experience"},
  { value: "2+ yeras", label: "2+ years of professional experience"},
]

const availability = [
  { value: "very part-time", label: "Very part-time (1-5)"},
  { value: "part time", label: "Part-time (6-15)"},
  { value: "half-time", label: "Half-time (16-25)"},
  { value: "almost full-time", label: "Almost full-time (26-35)"},
  { value: "full-time", label: "Full-time (35+)"},
]

export const JoinUsView: React.FC = () => {
  return (
    <FormPage title="Join Us" description="Fill out the form if you want to join us!">
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
                  What is your main specialization?
                </FormLabel>
                <CreatableSelect
                  id="main-specialization"
                  options={specializations}
                />
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Stack spacing={2}>
              <Typography variant="h5" component="h2">
                Experience
              </Typography>
              <Divider sx={{border: `2px solid ${colors.black}`}}/>
            </Stack>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                How many years have you been specializing in this professionally?
                </FormLabel>
                <Select
                  id="years-experience"
                  isClearable={false}
                  isSearchable={false}
                  options={experienceYears}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  Do you have any other specializations?
                </FormLabel>
                <Select
                  id="other-specializations"
                  isMulti
                  options={specializations}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  List the technologies you are proficient in:
                </FormLabel>
                <CreatableSelect
                  id="technologies"
                  options={technologies}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  Crypto Experience
                </FormLabel>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    How would you rate your experience in the web3 space?
                  </Typography>
                  <Select
                    id="crypto-exerpeince"
                    isClearable={false}
                    isSearchable={false}
                    options={cryptoExperience}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Stack spacing={2}>
              <Typography variant="h5" component="h2">
                Additional information
              </Typography>
              <Divider sx={{border: `2px solid ${colors.black}`}}/>
            </Stack>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                Availability (hours per week)
                </FormLabel>
                <Select
                  id="availability"
                  isClearable={false}
                  isSearchable={false}
                  options={availability}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  Please write a few sentences about what you&apos;d like to get out of joining dOrg
                </FormLabel>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    Include any relevant experiences or links to past work.
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
                <FormLabel sx={{color: "currentColor"}}>
                  Github
                </FormLabel>
                <TextField
                  id="github"
                  variant="filled"
                  sx={{width: "100%"}}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel sx={{color: "currentColor"}}>
                  LinkedIn
                </FormLabel>
                <TextField
                  id="linkedIn"
                  variant="filled"
                  sx={{width: "100%"}}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel sx={{color: "currentColor"}}>
                  Twitter
                </FormLabel>
                <TextField
                  id="twitter"
                  variant="filled"
                  sx={{width: "100%"}}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel sx={{color: "currentColor"}}>
                  Discord
                </FormLabel>
                <TextField
                  id="discord"
                  variant="filled"
                  sx={{width: "100%"}}
                />
              </Stack>
              <Stack spacing={2}>
                <FormLabel sx={{color: "currentColor"}}>
                  How did you hear about dOrg?
                </FormLabel>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    If someone in particular referred you, please let us know who!
                  </Typography>
                  <TextField
                    id="hear-about"
                    variant="filled"
                    sx={{width: "100%"}}
                  />
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <FormLabel required sx={{color: "currentColor"}}>
                  Do you have a US Tax Residency?
                </FormLabel>
                <Select
                  id="tax-registry"
                  isClearable={false}
                  isSearchable={false}
                  options={[{value: "yes", label: "Yes"},{value: "no", label: "No"}]}
                />
              </Stack>
            </Stack>
          </Stack>

        </Stack>
      </form>
    </FormPage>
  );
};
