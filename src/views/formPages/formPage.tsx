import React from "react";
import GameOfLifeAnimation from "../../commons/gameOfLifeAnimation/GameOfLifeAnimation";
import { experimental_sx as sx } from "@mui/system";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import { colors } from "../../theme";

const AnimationContainer = styled(Box)(
  sx({
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingBottom: 8,
    paddingTop: "40vh",
    position: "relative",
    width: "100vw",
  })
);

interface FormPageProps {
  title: string;
  description: string;
}

export const FormPage: React.FC<FormPageProps> = ({ title, description, children }) => {
  return (
    <>
      <AnimationContainer>
          <GameOfLifeAnimation fadeToBlack={false} opacity={0.35} />
        <Container maxWidth="sm" sx={{position: "relative"}}>
          <Stack spacing={3} sx={{textShadow: "0 0.5rem 1rem rgba(0,0,0,1)"}}>
            <Typography variant="h2" component="h1">
              {title}
            </Typography>
            <Typography>
              {description}
            </Typography>
          </Stack>
        </Container>
      </AnimationContainer>
      <Box sx={{
        bgcolor: colors.grays[100],
        color: colors.black,
        py: 8,
      }}>
        <Container maxWidth="sm">
          {children}
        </Container>
      </Box>
    </>
  )
};