import React from "react";
import { FormPage } from "../FormPage"
import { Divider, FormControl, Stack, Typography } from "@mui/material";
import { colors } from "../../../theme";
import { Label } from "../../../commons/form/Label"
import { FormInput } from "../../../commons/form/FormInput"
import { CreatableSelect as Select } from "../../../commons/form/CreatableSelect";
import { joinUsSelectOptions } from "../../../constants/joinUs";

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
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                  What is your full name?
                </Label>
                <FormInput
                  id="name"
                  required
                />
              </FormControl>
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                  What is your email?
                </Label>
                <FormInput
                  id="email"
                  required
                  sx={{width: "100%"}}
                />
              </FormControl>
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                  What is your main specialization?
                </Label>
                <Select
                  id="main_specialization"
                  options={joinUsSelectOptions.specializations}
                  isMulti
                />
              </FormControl>
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
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                How many years have you been specializing in this professionally?
                </Label>
                <Select
                  id="years_experience"
                  isClearable={false}
                  isSearchable={false}
                  options={joinUsSelectOptions.experienceYears}
                />
              </FormControl>
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                  Do you have any other specializations?
                </Label>
                <Select
                  id="other_specializations"
                  isMulti
                  options={joinUsSelectOptions.specializations}
                />
              </FormControl>
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                  List the technologies you are proficient in:
                </Label>
                <Select
                  id="technologies"
                  isMulti
                  options={joinUsSelectOptions.technologies}
                />
              </FormControl>
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                  Crypto Experience
                </Label>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    How would you rate your experience in the web3 space?
                  </Typography>
                  <Select
                    id="crypto_exerpeince"
                    isClearable={false}
                    isSearchable={false}
                    options={joinUsSelectOptions.cryptoExperience}
                  />
                </Stack>
              </FormControl>
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
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                Availability (hours per week)
                </Label>
                <Select
                  id="availability"
                  isClearable={false}
                  isSearchable={false}
                  options={joinUsSelectOptions.availability}
                />
              </FormControl>
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                  Please write a few sentences about what you&apos;d like to get out of joining dOrg
                </Label>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    Include any relevant experiences or links to past work.
                  </Typography>
                  <FormInput
                    id=""
                    required
                    rows={5}
                    inputProps={{ sx: {resize: "vertical"} }}
                  />
                </Stack>
              </FormControl>
              <FormControl>
                <Label sx={{color: "currentColor"}}>
                  Github
                </Label>
                <FormInput
                  id="github"
                  sx={{width: "100%"}}
                />
              </FormControl>
              <FormControl>
                <Label sx={{color: "currentColor"}}>
                  LinkedIn
                </Label>
                <FormInput
                  id="linkedIn"
                  sx={{width: "100%"}}
                />
              </FormControl>
              <FormControl>
                <Label sx={{color: "currentColor"}}>
                  Twitter
                </Label>
                <FormInput
                  id="twitter"
                  sx={{width: "100%"}}
                />
              </FormControl>
              <FormControl>
                <Label sx={{color: "currentColor"}}>
                  Discord
                </Label>
                <FormInput
                  id="discord"
                  sx={{width: "100%"}}
                />
              </FormControl>
              <FormControl>
                <Label sx={{color: "currentColor"}}>
                  How did you hear about dOrg?
                </Label>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    If someone in particular referred you, please let us know who!
                  </Typography>
                  <FormInput
                    id="hear_about"
                    sx={{width: "100%"}}
                  />
                </Stack>
              </FormControl>
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                  Do you have a US Tax Residency?
                </Label>
                <Select
                  id="tax_registry"
                  isClearable={false}
                  isSearchable={false}
                  options={joinUsSelectOptions.taxResidency}
                />
              </FormControl>
            </Stack>
          </Stack>

        </Stack>
      </form>
    </FormPage>
  );
};
