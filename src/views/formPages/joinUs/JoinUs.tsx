import React, {useState} from "react";
import { Controller, useForm } from 'react-hook-form';
import { FormPage } from "../FormPage"
import { Divider, FormControl, Stack, Typography } from "@mui/material";
import { colors } from "../../../theme";
import { Button } from "../../../commons/button/Button"
import { Label } from "../../../commons/form/Label"
import { FormInput, FormErrorText } from "../../../commons/form/FormInput"
import { CreatableSelect as Select } from "../../../commons/form/CreatableSelect";
import { joinUsSelectOptions } from "../../../constants/joinUs";
import { sendJoinUsForm, JoinUsFormInputs } from "../../../utils/network";

export const JoinUsView: React.FC = () => {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [failOpen, setFailOpen] = React.useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<JoinUsFormInputs>({
    mode: 'onSubmit',
  })

  if(Object.keys(errors).length > 0) {
    console.log("errors", errors)
  }

  const onSubmit = (data: JoinUsFormInputs) => {
    const submittedData: JoinUsFormInputs = {...data}
    console.log(submittedData)
    // sendJoinUsForm(submittedData)
    //   .then(() => {
    //     setSuccessOpen(true);
    //     // resetInputs();
    //   })
    //   .catch(error => {
    //     setFailOpen(true);
    //   });
  };

  return (
    <FormPage title="Join Us" description="Fill out the form if you want to join us!">
      <form onSubmit={handleSubmit(onSubmit)} method='post'>
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
                <Controller 
                  control={control}
                  name="name"
                  rules={{
                    required: "Please enter your name."
                  }}
                  render={({
                    field: {
                      onChange, onBlur, name
                    }
                  }) => (
                    <FormInput
                      onChange={onChange}
                      onBlur={onBlur}
                      name={name}
                      error={!!errors.name}
                    />
                  )}
                />
                { errors.name && <FormErrorText>{errors.name.message}</FormErrorText> }
              </FormControl>
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                  What is your email?
                </Label>
                <Controller 
                    control={control}
                    name="email"
                    rules={{
                      required: "Please enter your email."
                    }}
                    render={({
                      field: {
                        onChange, onBlur, name
                      }
                    }) => (
                      <FormInput
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        error={!!errors.email}
                      />
                    )}
                  />
                  { errors.email && <FormErrorText>{errors.email.message}</FormErrorText> }
              </FormControl>
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                  What is your main specialization?
                </Label>
                <Controller 
                  control={control}
                  name="main_specialization"
                  rules={{
                    required: "Please include a main specialization"
                  }}
                  render={({ field: { onChange, name }}) => (
                    <Select
                      name={name}
                      isSearchable={false}
                      isClearable={false}
                      options={joinUsSelectOptions.specializations}
                      onChange={(val: any) => onChange(val.value)}
                      errorMsg={errors.main_specialization && (errors.main_specialization as any).message}
                    />
                  )}
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
                <Controller 
                  control={control}
                  name="years_experience"
                  rules={{
                    required: "Please provide your experience"
                  }}
                  render={({ field: { onChange, name }}) => (
                    <Select
                      name={name}
                      isSearchable={false}
                      isClearable={false}
                      options={joinUsSelectOptions.experienceYears}
                      onChange={(val: any) => onChange(val.value)}
                      errorMsg={errors.years_experience && (errors.years_experience as any).message}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Label sx={{color: "currentColor"}}>
                  Do you have any other specializations?
                </Label>
                <Controller 
                  control={control}
                  name="other_specializations"
                  render={({ field: { onChange }}) => (
                    <Select
                      isMulti
                      isSearchable={false}
                      isClearable={false}
                      options={joinUsSelectOptions.specializations}
                      onChange={(val: any) => onChange(val.map((c: any) => c.value))}
                      errorMsg={errors.other_specializations && (errors.other_specializations as any).message}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Label sx={{color: "currentColor"}}>
                  List the technologies you are proficient in:
                </Label>
                <Controller 
                  control={control}
                  name="technologies"
                  render={({ field: { onChange }}) => (
                    <Select
                      isMulti
                      isSearchable={false}
                      isClearable={false}
                      options={joinUsSelectOptions.technologies}
                      onChange={(val: any) => onChange(val.map((c: any) => c.value))}
                      errorMsg={errors.technologies && (errors.technologies as any).message}
                    />
                  )}
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
                  <Controller 
                    control={control}
                    name="crypto_experience"
                    rules={{
                      required: "Please provide your experience with crypto"
                    }}
                    render={({ field: { onChange, name }}) => (
                      <Select
                        name={name}
                        isSearchable={false}
                        isClearable={false}
                        options={joinUsSelectOptions.cryptoExperience}
                        onChange={(val: any) => onChange(val.value)}
                        errorMsg={errors.crypto_experience && (errors.crypto_experience as any).message}
                      />
                    )}
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
                <Controller
                  control={control}
                  name="availability"
                  rules={{
                    required: "Please provide your availability"
                  }}
                  render={({ field: { onChange, name }}) => (
                    <Select
                      name={name}
                      isSearchable={false}
                      isClearable={false}
                      options={joinUsSelectOptions.availability}
                      onChange={(val: any) => onChange(val.value)}
                      errorMsg={errors.availability && (errors.availability as any).message}
                    />
                  )}
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
                  <Controller 
                      control={control}
                      name="interest"
                      rules={{
                        required: "Please tell us why you're interested in joining dOrg."
                      }}
                      render={({
                        field: {
                          onChange, onBlur, name
                        }
                      }) => (
                        <FormInput
                          onChange={onChange}
                          onBlur={onBlur}
                          name={name}
                          multiline
                          rows={5}
                          inputProps={{ sx: {resize: "vertical"} }}
                          sx={{pb: 0}}
                          error={!!errors.interest}
                        />
                      )}
                    />
                    { errors.interest && <FormErrorText>{errors.interest.message}</FormErrorText> }
                </Stack>
              </FormControl>
              <FormControl>
                <Label sx={{color: "currentColor"}}>
                  Github
                </Label>
                <Controller 
                  control={control}
                  name="github"
                  render={({
                    field: {
                      onChange, onBlur, name
                    }
                  }) => (
                    <FormInput
                      onChange={onChange}
                      onBlur={onBlur}
                      name={name}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Label sx={{color: "currentColor"}}>
                  LinkedIn
                </Label>
                <Controller 
                  control={control}
                  name="linkedIn"
                  render={({
                    field: {
                      onChange, onBlur, name
                    }
                  }) => (
                    <FormInput
                      onChange={onChange}
                      onBlur={onBlur}
                      name={name}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Label sx={{color: "currentColor"}}>
                  Twitter
                </Label>
                <Controller 
                  control={control}
                  name="twitter"
                  render={({
                    field: {
                      onChange, onBlur, name
                    }
                  }) => (
                    <FormInput
                      onChange={onChange}
                      onBlur={onBlur}
                      name={name}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Label sx={{color: "currentColor"}}>
                  Discord
                </Label>
                <Controller 
                  control={control}
                  name="discord"
                  render={({
                    field: {
                      onChange, onBlur, name
                    }
                  }) => (
                    <FormInput
                      onChange={onChange}
                      onBlur={onBlur}
                      name={name}
                    />
                  )}
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
                  <Controller 
                    control={control}
                    name="hear_about"
                    render={({
                      field: {
                        onChange, onBlur, name
                      }
                    }) => (
                      <FormInput
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                      />
                    )}
                  />
                </Stack>
              </FormControl>
              <FormControl>
                <Label required sx={{color: "currentColor"}}>
                  Do you have a US Tax Residency?
                </Label>
                <Controller 
                  control={control}
                  name="tax_registry"
                  rules={{
                    required: "Please provide an answer"
                  }}
                  render={({ field: { onChange, name }}) => (
                    <Select
                      name={name}
                      isSearchable={false}
                      isClearable={false}
                      options={joinUsSelectOptions.taxResidency}
                      onChange={(val: any) => onChange(val.value)}
                      errorMsg={errors.tax_registry && (errors.tax_registry as any).message}
                    />
                  )}
                />
              </FormControl>
            </Stack>
          </Stack>
        </Stack>
        <Button
          variant="outlined"
          type="submit"
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
