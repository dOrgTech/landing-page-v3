import React from 'react';
import { Box, Container, ContainerProps, styled } from '@mui/material';
import { ButtonGroupProps } from 'react-multi-carousel';
import arrowLeft from '../../assets/imgs/arrow-left.svg';
import arrowRight from '../../assets/imgs/arrow-right.svg';

interface CarouselButtonGroupProps extends ButtonGroupProps, ContainerProps {
   offset?: number | string;
}

const ArrowButton = styled(Box)({
  zIndex: 2,
  width: 60,
  height: 37,
  cursor: 'pointer',
  transition: 'opacity 0.25s ease-in-out',
  '&:hover': {
    opacity: 0.6,
  },
});

export const ButtonGroup: React.FC<CarouselButtonGroupProps> = ({
  next,
  previous,
  offset,
}) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: `translate(-50%,${offset || 0}${
          typeof offset !== 'string' ? 'px' : ''
        })`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <ArrowButton onClick={() => previous && previous()}>
          <img loading="lazy" src={arrowLeft} alt="Left Arrow" />
        </ArrowButton>
        <ArrowButton onClick={() => next && next()}>
          <img loading="lazy" src={arrowRight} alt="Right Arrow" />
        </ArrowButton>
      </Box>
    </Container>
  );
};
