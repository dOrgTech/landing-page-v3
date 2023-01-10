import { styled, Typography } from '@mui/material';
import { colors } from '../../theme';

export const PostLink = styled(Typography)({
  color: colors.blue,
  height: 'auto',
  width: 'auto',
  display: 'inline',
  lineHeight: 1.25,
  overflowWrap: 'break-word',
  '&:hover': {
    opacity: 0.8,
  },
});
