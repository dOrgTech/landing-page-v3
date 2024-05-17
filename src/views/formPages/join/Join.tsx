/** @format */

import React, { useEffect, useState } from "react";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import { FormPage } from "../FormPage";
import { Divider, FormControl, Stack, Typography } from "@mui/material";
import { colors } from "../../../theme";
import { Button } from "../../../commons/button/Button";
import { Label } from "../../../commons/form/Label";
import { FormInput, FormErrorText } from "../../../commons/form/FormInput";
import { CreatableSelect as Select } from "../../../commons/form/CreatableSelect";
import { joinSelectOptions } from "../../../constants/join";
import { JoinFormInputs } from "../../../utils/network";
import useCreateJoinRecord from "../../../api/airTable/hooks/useCreateJoinRecord";
import useGetTechnologies from "../../../api/airTable/hooks/useGetTechnologies";
import useGetSkills from "../../../api/airTable/hooks/useGetSkills";
import { safeSanitize } from "../../../utils/method";

export const JoinView: React.FC = () => {
  const { createRecord, loading } = useCreateJoinRecord();
  const { fetchTechnologies, data: technologies } = useGetTechnologies();
  const { fetchSkills, data: skills } = useGetSkills();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<JoinFormInputs>({
    mode: "onSubmit",
  });

  if (Object.keys(errors).length > 0) {
    console.error(errors);
  }

  const onSubmit = async (data: JoinFormInputs) => {
    const submittedData: JoinFormInputs = { ...data };
    const sanitizedData = safeSanitize(submittedData);
    await createRecord(sanitizedData);
    setSubmitted(true);
  };

  useEffect(() => {
    if (!technologies.length) {
      fetchTechnologies();
    }
    if (!skills.length) {
      fetchSkills();
    }
  }, [fetchTechnologies, technologies, skills, fetchSkills]);

  return (
    <FormPage
      title='Join Us'
      description='Fill out the form if you want to join us!'>
      {submitted ? (
        <>
          <Stack spacing={2}>
            <Typography variant='h2'>Thanks for your interest!</Typography>
            <Typography variant='body1'>
              We&apos;ve just received your submission and we will get back to
              you as soon as possible.
            </Typography>
          </Stack>
          <Button
            variant='outlined'
            href='#/'
            sx={{
              borderColor: colors.black,
              color: colors.black,
              mb: 4,
              mt: 6,
              width: "auto",
              "&:hover": {
                color: colors.white,
              },
            }}>
            Go Back Home
          </Button>
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} method='post'>
          <Stack spacing={10}>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <Typography variant='h5' component='h2'>
                  Basic information
                </Typography>
                <Divider sx={{ border: `2px solid ${colors.black}` }} />
              </Stack>
              <Stack spacing={4}>
                <FormControl>
                  <Label required sx={{ color: "currentColor" }}>
                    Your Name
                  </Label>
                  <Controller
                    control={control}
                    name='name'
                    rules={{
                      required: "Please enter your name.",
                    }}
                    render={({ field: { onChange, onBlur, name } }) => (
                      <FormInput
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        error={!!errors.name}
                      />
                    )}
                  />
                  {errors.name && (
                    <FormErrorText>{errors.name.message}</FormErrorText>
                  )}
                </FormControl>
                <FormControl>
                  <Label required sx={{ color: "currentColor" }}>
                    Email
                  </Label>
                  <Controller
                    control={control}
                    name='email'
                    rules={{
                      required: "Please enter your email.",
                    }}
                    render={({ field: { onChange, onBlur, name } }) => (
                      <FormInput
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        error={!!errors.email}
                      />
                    )}
                  />
                  {errors.email && (
                    <FormErrorText>{errors.email.message}</FormErrorText>
                  )}
                </FormControl>
                <FormControl>
                  <Label required sx={{ color: "currentColor" }}>
                    Main Specialization
                  </Label>
                  <Controller
                    control={control}
                    name='main_specialization'
                    rules={{
                      required: "Please include a main specialization",
                    }}
                    render={({ field: { onChange, name } }) => (
                      <Select
                        name={name}
                        isSearchable={false}
                        isClearable={false}
                        options={skills}
                        onChange={(val) => {
                          if (!Array.isArray(val)) {
                            onChange(val.value);
                          }
                        }}
                        errorMsg={
                          errors.main_specialization &&
                          (errors.main_specialization as FieldErrors).message
                        }
                      />
                    )}
                  />
                </FormControl>
              </Stack>
            </Stack>

            <Stack spacing={4}>
              <Stack spacing={2}>
                <Typography variant='h5' component='h2'>
                  Experience
                </Typography>
                <Divider sx={{ border: `2px solid ${colors.black}` }} />
              </Stack>
              <Stack spacing={4}>
                <FormControl>
                  <Label required sx={{ color: "currentColor" }}>
                    How many years have you been specializing in this
                    professionally?
                  </Label>
                  <Controller
                    control={control}
                    name='years_experience'
                    rules={{
                      required: "Please provide your experience",
                    }}
                    render={({ field: { onChange, name } }) => (
                      <Select
                        name={name}
                        isSearchable={false}
                        isClearable={false}
                        options={joinSelectOptions.experienceYears}
                        onChange={(val) => {
                          if (!Array.isArray(val)) {
                            onChange(val.value);
                          }
                        }}
                        errorMsg={
                          errors.years_experience &&
                          (errors.years_experience as FieldErrors).message
                        }
                      />
                    )}
                  />
                </FormControl>
                <FormControl>
                  <Label sx={{ color: "currentColor" }}>
                    Do you have any other specializations?
                  </Label>
                  <Controller
                    control={control}
                    name='other_specializations'
                    render={({ field: { onChange } }) => (
                      <Select
                        isMulti
                        isSearchable={false}
                        isClearable={false}
                        options={skills}
                        onChange={(val) => {
                          if (Array.isArray(val)) {
                            onChange(val.map((c) => c.value));
                          }
                        }}
                        errorMsg={
                          errors.other_specializations &&
                          (errors.other_specializations as FieldErrors).message
                        }
                      />
                    )}
                  />
                </FormControl>
                <FormControl>
                  <Label sx={{ color: "currentColor" }}>
                    List the technologies you are proficient in:
                  </Label>
                  <Controller
                    control={control}
                    name='technologies'
                    render={({ field: { onChange } }) => (
                      <Select
                        isMulti
                        isSearchable={false}
                        isClearable={false}
                        options={technologies}
                        onChange={(val) => {
                          if (Array.isArray(val)) {
                            onChange(val.map((c) => c.value));
                          }
                        }}
                        errorMsg={
                          errors.technologies &&
                          (errors.technologies as FieldErrors).message
                        }
                      />
                    )}
                  />
                </FormControl>
                <FormControl>
                  <Label required sx={{ color: "currentColor" }}>
                    Crypto Experience
                  </Label>
                  <Stack spacing={1}>
                    <Typography variant='body2'>
                      How would you rate your experience in the web3 space?
                    </Typography>
                    <Controller
                      control={control}
                      name='crypto_experience'
                      rules={{
                        required: "Please provide your experience with crypto",
                      }}
                      render={({ field: { onChange, name } }) => (
                        <Select
                          name={name}
                          isSearchable={false}
                          isClearable={false}
                          options={joinSelectOptions.cryptoExperience}
                          onChange={(val) => {
                            if (!Array.isArray(val)) {
                              onChange(val.value);
                            }
                          }}
                          errorMsg={
                            errors.crypto_experience &&
                            (errors.crypto_experience as FieldErrors).message
                          }
                        />
                      )}
                    />
                  </Stack>
                </FormControl>
              </Stack>
            </Stack>

            <Stack spacing={4}>
              <Stack spacing={2}>
                <Typography variant='h5' component='h2'>
                  Additional information
                </Typography>
                <Divider sx={{ border: `2px solid ${colors.black}` }} />
              </Stack>
              <Stack spacing={4}>
                <FormControl>
                  <Label required sx={{ color: "currentColor" }}>
                    Availability (hours per week)
                  </Label>
                  <Controller
                    control={control}
                    name='availability'
                    rules={{
                      required: "Please provide your availability",
                    }}
                    render={({ field: { onChange, name } }) => (
                      <Select
                        name={name}
                        isSearchable={false}
                        isClearable={false}
                        options={joinSelectOptions.availability}
                        onChange={(val) => {
                          if (!Array.isArray(val)) {
                            onChange(val.value);
                          }
                        }}
                        errorMsg={
                          errors.availability &&
                          (errors.availability as FieldErrors).message
                        }
                      />
                    )}
                  />
                </FormControl>
                <FormControl>
                  <Label required sx={{ color: "currentColor" }}>
                    Please write a few sentences about what you&apos;d like to
                    get out of joining dOrg
                  </Label>
                  <Stack spacing={1}>
                    <Typography variant='body2'>
                      Include any relevant experiences or links to past work.
                    </Typography>
                    <Controller
                      control={control}
                      name='interest'
                      rules={{
                        required:
                          "Please tell us why you're interested in joining dOrg.",
                      }}
                      render={({ field: { onChange, onBlur, name } }) => (
                        <FormInput
                          onChange={onChange}
                          onBlur={onBlur}
                          name={name}
                          multiline
                          rows={5}
                          inputProps={{ sx: { resize: "vertical" } }}
                          sx={{ pb: 0 }}
                          error={!!errors.interest}
                        />
                      )}
                    />
                    {errors.interest && (
                      <FormErrorText>{errors.interest.message}</FormErrorText>
                    )}
                  </Stack>
                </FormControl>
                <FormControl>
                  <Label sx={{ color: "currentColor" }}>Github</Label>
                  <Controller
                    control={control}
                    name='github'
                    render={({ field: { onChange, onBlur, name } }) => (
                      <FormInput
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                      />
                    )}
                  />
                </FormControl>
                <FormControl>
                  <Label sx={{ color: "currentColor" }}>LinkedIn</Label>
                  <Controller
                    control={control}
                    name='linkedIn'
                    render={({ field: { onChange, onBlur, name } }) => (
                      <FormInput
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                      />
                    )}
                  />
                </FormControl>
                <FormControl>
                  <Label sx={{ color: "currentColor" }}>Twitter</Label>
                  <Controller
                    control={control}
                    name='twitter'
                    render={({ field: { onChange, onBlur, name } }) => (
                      <FormInput
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                      />
                    )}
                  />
                </FormControl>
                <FormControl>
                  <Label sx={{ color: "currentColor" }}>Discord</Label>
                  <Controller
                    control={control}
                    name='discord'
                    render={({ field: { onChange, onBlur, name } }) => (
                      <FormInput
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                      />
                    )}
                  />
                </FormControl>
                <FormControl>
                  <Label sx={{ color: "currentColor" }}>
                    How did you hear about dOrg?
                  </Label>
                  <Stack spacing={1}>
                    <Typography variant='body2'>
                      If someone in particular referred you, please let us know
                      who!
                    </Typography>
                    <Controller
                      control={control}
                      name='hear_about'
                      render={({ field: { onChange, onBlur, name } }) => (
                        <FormInput
                          onChange={onChange}
                          onBlur={onBlur}
                          name={name}
                        />
                      )}
                    />
                  </Stack>
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <Button
            variant='outlined'
            type='submit'
            disabled={loading}
            sx={{
              borderColor: colors.black,
              color: colors.black,
              mt: 8,
              width: "auto",
              "&:hover": {
                color: colors.white,
              },
            }}>
            {loading ? "Submitting" : "Submit"}
          </Button>
        </form>
      )}
    </FormPage>
  );
};
