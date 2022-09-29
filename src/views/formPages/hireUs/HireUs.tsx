import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormPage } from "../FormPage";
import { Divider, FormControl, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CreatableSelect as Select } from "../../../commons/form/CreatableSelect";
import { Label } from "../../../commons/form/Label";
import { FormInput, FormErrorText } from "../../../commons/form/FormInput";
import { Button } from "../../../commons/button/Button";
import { colors } from "../../../theme";
import { hireUsSelectOptions } from "../../../constants/hireUs";
import { HireUsFormInputs } from "../../../utils/network";
import useCreateHireRecord from "../../../api/airTable/hooks/useCreateHireRecord";
export const HireUsView: React.FC = () => {
  const { loading, createRecord } = useCreateHireRecord();
  const [showOptional, setShowOptional] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<HireUsFormInputs>({
    mode: "onSubmit",
  });

  if (Object.keys(errors).length > 0) {
    console.log("errors", errors);
  }

  const onSubmit = async (data: HireUsFormInputs) => {
    const submittedData: HireUsFormInputs = { ...data };
    await createRecord(submittedData);
    setSubmitted(true);
  };

  return (
    <FormPage
      title="Hire Us"
      description="Fill out the form below to get in touch!"
    >
      {submitted ? (
        <>
          <Stack spacing={2}>
            <Typography variant="h2">Thanks for your interest!</Typography>
            <Typography variant="body1">
              We&apos;ve just received your submission and we will get back to
              you as soon as possible.
            </Typography>
          </Stack>
          <Button
            variant="outlined"
            href="#/"
            sx={{
              borderColor: colors.black,
              color: colors.black,
              mb: 4,
              mt: 6,
              width: "auto",
              "&:hover": {
                color: colors.white,
              },
            }}
          >
            Go Back Home
          </Button>
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <section id="core-information">
            <Stack spacing={4}>
              <FormControl variant="standard">
                <Label
                  required
                  component="label"
                  htmlFor="name"
                  sx={{ color: "currentColor" }}
                >
                  What is your full name?
                </Label>
                <Controller
                  control={control}
                  name="name"
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
              <FormControl variant="standard">
                <Label
                  required
                  component="label"
                  htmlFor="email"
                  sx={{ color: "currentColor" }}
                >
                  What is your email?
                </Label>
                <Controller
                  control={control}
                  name="email"
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
              <FormControl variant="standard">
                <Label
                  required
                  component="label"
                  htmlFor="approach"
                  sx={{ color: "currentColor" }}
                >
                  Project description:
                </Label>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    Tell us about your project and the desired scope of work.
                  </Typography>
                  <Controller
                    control={control}
                    name="project_description"
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
          <Stack mt={4} spacing={2}>
            <Stack spacing={1}>
              <Typography variant="h6">
                Want to increase your chances of hearing back from us?
              </Typography>
              <Typography variant="body2" color={colors.grays[600]}>
                Fill out these optional fields to provide more information.
              </Typography>
              <Stack
                direction="row"
                spacing={0.5}
                onClick={() => setShowOptional(!showOptional)}
                sx={{
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "opacity 0.25s ease-in-out",
                  "&:hover": { opacity: 0.5 },
                }}
              >
                {showOptional ? (
                  <RemoveIcon sx={{ width: 16 }} />
                ) : (
                  <AddIcon sx={{ width: 16 }} />
                )}
                <Typography
                  sx={{ textDecoration: "underline", textUnderlineOffset: 2 }}
                >
                  {showOptional ? "Show less" : "Show more"}
                </Typography>
              </Stack>
            </Stack>
            {showOptional && (
              <Stack spacing={10}>
                <section id="basic-information">
                  <Stack spacing={4}>
                    <Stack spacing={2}>
                      <Typography variant="h5" component="h2">
                        Basic information
                      </Typography>
                      <Divider sx={{ border: `2px solid ${colors.black}` }} />
                    </Stack>
                    <Stack spacing={4}>
                      <FormControl variant="standard">
                        <Label
                          component="label"
                          htmlFor="organization"
                          sx={{ color: "currentColor" }}
                        >
                          What is your organization?
                        </Label>
                        <Controller
                          control={control}
                          name="organization"
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
                          <FormErrorText>
                            {errors.organization.message}
                          </FormErrorText>
                        )}
                      </FormControl>
                      <FormControl variant="standard">
                        <Label
                          component="label"
                          htmlFor="website"
                          sx={{ color: "currentColor" }}
                        >
                          Your organization’s website:
                        </Label>
                        <Controller
                          control={control}
                          name="website"
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
                          <FormErrorText>
                            {errors.website.message}
                          </FormErrorText>
                        )}
                      </FormControl>
                    </Stack>
                  </Stack>
                </section>
                <section id="project-information">
                  <Stack spacing={4}>
                    <Stack spacing={2}>
                      <Typography variant="h5" component="h2">
                        Project information
                      </Typography>
                      <Divider sx={{ border: `2px solid ${colors.black}` }} />
                    </Stack>
                    <Stack spacing={4}>
                      <FormControl variant="standard">
                        <Label
                          component="label"
                          htmlFor="project_categories"
                          sx={{ color: "currentColor" }}
                        >
                          Select the categories that best describe your project:
                        </Label>
                        <Controller
                          control={control}
                          name="project_categories"
                          render={({ field: { onChange } }) => (
                            <Select
                              isMulti
                              options={hireUsSelectOptions.categories}
                              onChange={(val: any) =>
                                onChange(val.map((c: any) => c.value))
                              }
                              errorMsg={
                                errors.project_categories &&
                                (errors.project_categories as any).message
                              }
                            />
                          )}
                        />
                      </FormControl>
                      <FormControl variant="standard">
                        <Label
                          component="label"
                          htmlFor="approach"
                          sx={{ color: "currentColor" }}
                        >
                          How would you like to work together
                        </Label>
                        <Controller
                          control={control}
                          name="approach"
                          render={({ field: { onChange } }) => (
                            <Select
                              isMulti
                              options={hireUsSelectOptions.approaches}
                              onChange={(val: any) =>
                                onChange(val.map((c: any) => c.value))
                              }
                              errorMsg={
                                errors.approach &&
                                (errors.approach as any).message
                              }
                            />
                          )}
                        />
                      </FormControl>
                      <FormControl variant="standard">
                        <Label
                          component="label"
                          htmlFor="budget"
                          sx={{ color: "currentColor" }}
                        >
                          What is your budget?
                        </Label>
                        <Controller
                          control={control}
                          name="budget"
                          render={({ field: { onChange, name } }) => (
                            <Select
                              name={name}
                              options={hireUsSelectOptions.budgets}
                              onChange={(val: any) => onChange(val.value)}
                              errorMsg={
                                errors.budget && (errors.budget as any).message
                              }
                            />
                          )}
                        />
                      </FormControl>
                      <FormControl variant="standard">
                        <Label
                          component="label"
                          htmlFor="start_date"
                          sx={{ color: "currentColor" }}
                        >
                          When would you like to get started?
                        </Label>
                        <Controller
                          control={control}
                          name="start_date"
                          render={({ field: { onChange, name } }) => (
                            <Select
                              name={name}
                              options={hireUsSelectOptions.start_dates}
                              onChange={(val: any) => onChange(val.value)}
                              errorMsg={
                                errors.start_date &&
                                (errors.start_date as any).message
                              }
                            />
                          )}
                        />
                      </FormControl>
                      <FormControl variant="standard">
                        <Label
                          component="label"
                          htmlFor="source"
                          sx={{ color: "currentColor" }}
                        >
                          How did you hear about dOrg?
                        </Label>
                        <Stack spacing={1}>
                          <Typography variant="body2">
                            Twitter, youtube, article, etc.
                          </Typography>
                          <Controller
                            control={control}
                            name="source"
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
                </section>
              </Stack>
            )}
          </Stack>
          <Button
            variant="outlined"
            type="submit"
            disabled={loading}
            sx={{
              borderColor: colors.black,
              color: colors.black,
              mt: 8,
              width: "auto",
              "&:hover": {
                color: colors.white,
              },
            }}
          >
            {loading ? "Submitting" : "Submit"}
          </Button>
        </form>
      )}
    </FormPage>
  );
};
