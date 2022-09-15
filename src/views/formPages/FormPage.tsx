import React from "react";
import GameOfLifeAnimation from "../../commons/gameOfLifeAnimation/GameOfLifeAnimation";
import { Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../../theme";

interface FormPageProps {
  title: string;
  description: string;
}

export const FormPage: React.FC<FormPageProps> = ({ title, description, children }) => {
  return (
    <>
      <Box sx={{
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingBottom: 8,
        paddingTop: "40vh",
        position: "relative",
        width: "100vw",
      }}>
        <GameOfLifeAnimation fadeToBlack={false} opacity={0.25} />
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
      </Box>
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