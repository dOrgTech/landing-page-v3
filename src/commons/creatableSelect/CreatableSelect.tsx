import Select from "react-select/creatable"
import { OnChangeValue } from "react-select"
import React, { useEffect, useState } from "react"
import { FormHelperText } from "@mui/material"

export interface CreateSelectProps {
  id?: string;
  options?: CreateSelectOption[]
  onSelected?: (items: CreateSelectOption[]) => void
  value?: string[]
  placeholder?: string
  errorMsg?: string
  isAddress?: boolean
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