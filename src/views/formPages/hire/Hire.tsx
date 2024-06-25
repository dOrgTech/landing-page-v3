/** @format */

import ReactGA from "react-ga";
import React, { useState } from "react";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import { FormPage } from "../FormPage";
import { Alert, Box, FormControl, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CreatableSelect as Select } from "../../../commons/form/CreatableSelect";
import { Label } from "../../../commons/form/Label";
import { FormInput, FormErrorText } from "../../../commons/form/FormInput";
import { Button } from "../../../commons/button/Button";
import { colors } from "../../../theme";
import { hireSelectOptions } from "../../../constants/hire";
import { HireFormInputs } from "../../../utils/network";
import useCreateHireRecord from "../../../api/airTable/hooks/useCreateHireRecord";
import TagManager from "react-gtm-module";
import Snackbar from "@mui/material/Snackbar";
import ReCAPTCHA from "react-google-recaptcha";

export const HireView: React.FC = () => {
  const { loading, createRecord } = useCreateHireRecord();
  const [showOptional, setShowOptional] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = React.createRef<any>();
  const [toast, setToast] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<HireFormInputs>({
    mode: "onSubmit",
  });

  if (Object.keys(errors).length > 0) {
    console.error("errors", errors);
  }

  const handleClose = () => {
    setToast({ ...toast, open: false });
  };

  const onSubmit = async (data: HireFormInputs) => {
    if (!recaptchaToken) {
      setToast({ ...toast, open: true });
      return;
    }
    const submittedData: HireFormInputs = { ...data };
    await createRecord(submittedData);
    setSubmitted(true);

    const args = {
      dataLayer: {
        event: "submitted_hire_form",
        /* can pass more variables here if needed */
      },
      dataLayerName: "HirePageLayer",
    };
    TagManager.dataLayer(args);

    ReactGA.pageview("/hire");
    ReactGA.event({
      category: "hire_form_submit",
      action: "submitted_hire_form",
      label: "submitted_hire_form",
    });
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <FormPage
      title='Hire Us'
      description='Tell us about your project and how we can help.'>
      <Snackbar
        anchorOrigin={{
          vertical: toast.vertical as "top",
          horizontal: toast.horizontal as "right",
        }}
        open={toast.open}
        onClose={handleClose}
        message=''
        key={toast.vertical + toast.horizontal}>
        <Alert
          onClose={handleClose}
          severity='error'
          variant='filled'
          sx={{ width: "100%" }}>
          Please verify you are not a robot.
        </Alert>
      </Snackbar>
      {submitted ? (
        <>
          <Stack
            spacing={2}
            id='hire_us_thank_you'
            className='hire_us_thank_you'>
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
        <form onSubmit={handleSubmit(onSubmit)} method='post' id='hire_us_form'>
          <section id='core-information'>
            <Stack spacing={4}>
              <FormControl variant='standard'>
                <Label
                  required
                  component='label'
                  htmlFor='name'
                  sx={{ color: "currentColor" }}>
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
              <FormControl variant='standard'>
                <Label
                  required
                  component='label'
                  htmlFor='email'
                  sx={{ color: "currentColor" }}>
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
              <FormControl variant='standard'>
                <Label
                  required
                  component='label'
                  htmlFor='approach'
                  sx={{ color: "currentColor" }}>
                  Project Description
                </Label>
                <Stack spacing={1}>
                  <Typography variant='body2'>
                    Tell us about your project and the desired scope of work.
                  </Typography>
                  <Controller
                    control={control}
                    name='project_description'
                    rules={{
                      required: "Please enter a project description.",
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
                        error={!!errors.project_description}
                      />
                    )}
                  />
                  {errors.project_description && (
                    <FormErrorText>
                      {errors.project_description.message}
                    </FormErrorText>
                  )}
                </Stack>
              </FormControl>
            </Stack>
          </section>
          <Stack spacing={1}>
            <Typography variant='h6'>
              Want to increase your chances of hearing back from us?
            </Typography>
            <Typography variant='body2' color={colors.grays[600]}>
              Fill out these optional fields to provide more information.
            </Typography>
            <Stack
              direction='row'
              spacing={0.5}
              onClick={() => setShowOptional(!showOptional)}
              sx={{
                alignItems: "center",
                cursor: "pointer",
                transition: "opacity 0.25s ease-in-out",
                "&:hover": { opacity: 0.5 },
              }}>
              {showOptional ? (
                <RemoveIcon sx={{ width: 16 }} />
              ) : (
                <AddIcon sx={{ width: 16 }} />
              )}
              <Typography
                sx={{ textDecoration: "underline", textUnderlineOffset: 2 }}>
                {showOptional ? "Show less" : "Show more"}
              </Typography>
            </Stack>
          </Stack>
          {showOptional && (
            <Stack spacing={4} id='optional' mt={6}>
              <Stack spacing={4}>
                <FormControl variant='standard'>
                  <Label
                    component='label'
                    htmlFor='organization'
                    sx={{ color: "currentColor" }}>
                    Organization
                  </Label>
                  <Controller
                    control={control}
                    name='organization'
                    render={({ field: { onChange, onBlur, name } }) => (
                      <FormInput
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        error={!!errors.organization}
                      />
                    )}
                  />
                  {errors.organization && (
                    <FormErrorText>{errors.organization.message}</FormErrorText>
                  )}
                </FormControl>
                <FormControl variant='standard'>
                  <Label
                    component='label'
                    htmlFor='website'
                    sx={{ color: "currentColor" }}>
                    Website
                  </Label>
                  <Controller
                    control={control}
                    name='website'
                    render={({ field: { onChange, onBlur, name } }) => (
                      <FormInput
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        error={!!errors.website}
                      />
                    )}
                  />
                  {errors.website && (
                    <FormErrorText>{errors.website.message}</FormErrorText>
                  )}
                </FormControl>
                <FormControl variant='standard'>
                  <Label
                    component='label'
                    htmlFor='project_categories'
                    sx={{ color: "currentColor" }}>
                    Select the categories that best describe your project:
                  </Label>
                  <Controller
                    control={control}
                    name='project_categories'
                    render={({ field: { onChange } }) => (
                      <Select
                        isMulti
                        options={hireSelectOptions.categories}
                        onChange={(val) => {
                          if (Array.isArray(val)) {
                            onChange(val.map((c) => c.value));
                          }
                        }}
                        errorMsg={
                          errors.project_categories &&
                          (errors.project_categories as FieldErrors).message
                        }
                      />
                    )}
                  />
                </FormControl>
                <FormControl variant='standard'>
                  <Label
                    component='label'
                    htmlFor='approach'
                    sx={{ color: "currentColor" }}>
                    How would you like to work together?
                  </Label>
                  <Controller
                    control={control}
                    name='approach'
                    render={({ field: { onChange } }) => (
                      <Select
                        isMulti
                        options={hireSelectOptions.approaches}
                        onChange={(val) => {
                          if (Array.isArray(val)) {
                            onChange(val.map((c) => c.value));
                          }
                        }}
                        errorMsg={
                          errors.approach &&
                          (errors.approach as FieldErrors).message
                        }
                      />
                    )}
                  />
                </FormControl>
                <FormControl variant='standard'>
                  <Label
                    component='label'
                    htmlFor='budget'
                    sx={{ color: "currentColor" }}>
                    What is your budget?
                  </Label>
                  <Controller
                    control={control}
                    name='budget'
                    render={({ field: { onChange, name } }) => (
                      <Select
                        name={name}
                        options={hireSelectOptions.budgets}
                        onChange={(val) => {
                          if (!Array.isArray(val)) {
                            onChange(val.value);
                          }
                        }}
                        errorMsg={
                          errors.budget &&
                          (errors.budget as FieldErrors).message
                        }
                      />
                    )}
                  />
                </FormControl>

                <FormControl variant='standard'>
                  <Label
                    component='label'
                    htmlFor='budget'
                    sx={{ color: "currentColor" }}>
                    Do you need to raise funds?
                  </Label>
                  <Controller
                    control={control}
                    name='raise_funds'
                    render={({ field: { onChange, name } }) => (
                      <Select
                        name={name}
                        options={hireSelectOptions.raise_funds}
                        onChange={(val) => {
                          if (!Array.isArray(val)) {
                            onChange(val.value);
                          }
                        }}
                        errorMsg={
                          errors.raise_funds &&
                          (errors.raise_funds as FieldErrors).message
                        }
                      />
                    )}
                  />
                </FormControl>

                <FormControl variant='standard'>
                  <Label
                    component='label'
                    htmlFor='start_date'
                    sx={{ color: "currentColor" }}>
                    When would you like to get started?
                  </Label>
                  <Controller
                    control={control}
                    name='start_date'
                    render={({ field: { onChange, name } }) => (
                      <Select
                        name={name}
                        options={hireSelectOptions.start_dates}
                        onChange={(val) => {
                          if (!Array.isArray(val)) {
                            onChange(val.value);
                          }
                        }}
                        errorMsg={
                          errors.start_date &&
                          (errors.start_date as FieldErrors).message
                        }
                      />
                    )}
                  />
                </FormControl>
                <FormControl variant='standard'>
                  <Label
                    component='label'
                    htmlFor='source'
                    sx={{ color: "currentColor" }}>
                    How did you hear about dOrg?
                  </Label>
                  <Stack spacing={1}>
                    <Typography variant='body2'>
                      Twitter, youtube, article, etc.
                    </Typography>
                    <Controller
                      control={control}
                      name='source'
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
          )}
          <Box sx={{ my: 2 }}>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_CAPTCHA ?? ""}
              onChange={handleRecaptchaChange}
            />
          </Box>
          <Button
            id='hire_us'
            className='hire_us'
            name='hire_us_button'
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
