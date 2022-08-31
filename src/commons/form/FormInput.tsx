import { InputBase, styled } from "@mui/material";
import { colors } from "../../theme";

export const FormInput = styled(InputBase)(({ theme }: any) => ({
  '& .MuiInputBase-input': {
    backgroundColor: colors.white,
    border: `1px solid ${colors.white}`,
    borderRadius: 8,
    color: colors.black,
    fontWeight: 200,
    padding: '12px 16px',
    position: 'relative',
    width: '100%',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
  },
  "&:hover .MuiInputBase-input": {
    borderColor: colors.black,
  },
  '&.Mui-focused .MuiInputBase-input': {
    borderColor: colors.green,
  }
}));