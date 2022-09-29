import React from "react";
import {
  FormHelperText,
  FormHelperTextProps,
  InputBase,
  InputBaseProps,
  styled,
} from "@mui/material";
import { colors } from "../../theme";

const StyledFormInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    backgroundColor: colors.white,
    border: `1px solid ${colors.white}`,
    borderRadius: 8,
    color: colors.black,
    fontWeight: 200,
    padding: "12px 16px",
    position: "relative",
    width: "100%",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
  "&:hover .MuiInputBase-input": {
    borderColor: colors.black,
  },
  "&.Mui-focused .MuiInputBase-input": {
    borderColor: colors.green,
  },
  "&.Mui-error .MuiInputBase-input": {
    borderColor: colors.magenta,
  },
}));

export const FormInput = (props: InputBaseProps) => {
  const [value, setValue] = React.useState(props.value || "");

  // useEffect(() => {
  //   setValue(props.value);
  // }, [props.value])

  return (
    <StyledFormInput
      id={props.name}
      name={props.name}
      error={props.error}
      multiline={props.multiline}
      inputProps={props.inputProps}
      rows={props.rows}
      sx={props.sx}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
      }}
    />
  );
};

export const FormErrorText = ({ children }: FormHelperTextProps) => (
  <FormHelperText sx={{ color: colors.magenta }}>{children}</FormHelperText>
);
