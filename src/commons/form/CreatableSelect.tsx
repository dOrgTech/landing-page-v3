import Select from "react-select/creatable"
import { OnChangeValue } from "react-select"
import React, { useEffect, useState } from "react"
import { FormHelperText } from "@mui/material"
import { colors } from "../../theme"

export interface CreateSelectProps {
  id?: string;
  options?: CreateSelectOption[]
  onSelected?: (items: CreateSelectOption[]) => void
  value?: string[]
  placeholder?: string
  errorMsg?: string
  isAddress?: boolean
}

export const customStyles = {
  control: (base: any, state: { isFocused: any }) => ({
    ...base,
    background: colors.white,
    borderRadius: 8,
    border: state.isFocused ? `1px solid ${colors.green}` : `1px solid ${colors.white}`,
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      border: state.isFocused ? `1px solid ${colors.black}` : `1px solid ${colors.black}`,
    },
  }),
  valueContainer: (base: any) => ({
    ...base,
    minHeight: 47,
  }),
  menu: (base: any) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 8,
    // kill the gap
    marginTop: 8,
  }),
  menuList: (base: any) => ({
    ...base,
    // kill the white space on first and last option
    // padding: 0,
  }),
}

export interface DropdownOption {
  label: string
  value: string
  icon?: any
}

export type CreateSelectOption = Omit<DropdownOption, "icon">

export const CreatableSelect: React.FC<CreateSelectProps> = ({ id, options, onSelected, value, placeholder, errorMsg }) => {
  const [values, setValues] = useState<CreateSelectOption[]>([])

  useEffect(() => {
    if (value?.length) {
      const newValues = value.map((item) => {
        return { label: item, value: item }
      })
      setValues(newValues)
    }
  }, [value])

  const handleChange = (newValue: OnChangeValue<CreateSelectOption, any>) => {
    if (onSelected) {
      onSelected(newValue as CreateSelectOption[])
    }
    setValues(newValue as CreateSelectOption[])
  }

  return (
    <>
      <Select
        styles={customStyles}
        id={id}
        value={values}
        options={options}
        isMulti
        onChange={handleChange}
        placeholder={placeholder}
      />
      {errorMsg && (
        <FormHelperText sx={{ textTransform: "capitalize" }}>{errorMsg}</FormHelperText>
      )}
    </>
  )
}