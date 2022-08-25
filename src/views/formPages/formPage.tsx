import React from "react";
import PixelAnimation from "../../assets/imgs/pixel-animation.gif";
import { experimental_sx as sx } from "@mui/system";
import { Box, Container, Stack, styled, TextField, Typography } from "@mui/material";
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

const Animation = styled(Box)(
  sx({
    backgroundRepeat: "no-repeat",
    backgroundSize: "130%",
    backgroundImage: `url(${PixelAnimation})`,
    inset: 0,
    position: "absolute",
    zIndex: -1,
  })
)

interface FormPageProps {
  title: string;
  description: string;
}

export const FormPage: React.FC<FormPageProps> = ({ title, description, children }) => {
  return (
    <>
      <AnimationContainer>
        <Animation />
        <Container maxWidth="sm">
          <Stack spacing={3}>
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