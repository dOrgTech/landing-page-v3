import Select from "react-select/creatable";
import { OnChangeValue } from "react-select";
import React, { useEffect, useState } from "react";
import { colors } from "../../theme";
import { FormErrorText } from "./FormInput";

export interface CreateSelectProps {
  id?: string;
  options?: CreateSelectOption[];
  onSelected?: (items: CreateSelectOption[]) => void;
  name?: string;
  value?: string[];
  placeholder?: string;
  onChange?: any;
  inputRef?: any;
  errorMsg?: string;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isAddress?: boolean;
}

export const customStyles = (error: boolean) => ({
  control: (base: any, state: { isFocused: boolean }) => ({
    ...base,
    background: colors.white,
    borderRadius: 8,
    boxShadow: state.isFocused ? null : null,
    border: `1px solid ${
      error ? colors.magenta : state.isFocused ? colors.green : colors.white
    }`,
    "&:hover": {
      border: `1px solid ${state.isFocused ? colors.black : colors.black}`,
    },
  }),
  indicatorSeparator: (base: any) => ({
    ...base,
    backgroundColor: colors.grays[100],
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: colors.green,
    "& [role=button]:hover": {
      backgroundColor: colors.magenta,
      color: colors.white,
    },
  }),
  valueContainer: (base: any) => ({
    ...base,
    minHeight: 47,
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: 8,
    marginTop: 8,
  }),
});

export interface DropdownOption {
  label: string;
  value: string;
  icon?: any;
}

export type CreateSelectOption = Omit<DropdownOption, "icon">;

export const CreatableSelect: React.FC<CreateSelectProps> = ({
  id,
  options,
  onSelected,
  onChange,
  name,
  value,
  placeholder,
  errorMsg,
  ...props
}) => {
  const [values, setValues] = useState<CreateSelectOption[]>([]);

  useEffect(() => {
    if (value?.length) {
      const newValues = value.map((item) => {
        return { label: item, value: item };
      });
      setValues(newValues);
    }
  }, [value]);

  const handleChange = (newValue: OnChangeValue<CreateSelectOption, any>) => {
    if (onChange) {
      onChange(newValue);
    }
    if (onSelected) {
      onSelected(newValue as CreateSelectOption[]);
    }
    setValues(newValue as CreateSelectOption[]);
  };

  const error: boolean = !!errorMsg && errorMsg.length > 0;
  return (
    <>
      <Select
        styles={customStyles(error)}
        id={name || id}
        value={values}
        options={options}
        onChange={handleChange}
        {...props}
      />
      {errorMsg && <FormErrorText>{errorMsg}</FormErrorText>}
    </>
  );
};
