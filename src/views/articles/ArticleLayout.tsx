import {
  Box,
  BoxProps,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { ReactChild } from "react";
import GameOfLifeAnimation from "../../commons/gameOfLifeAnimation/GameOfLifeAnimation";
import theme, { colors } from "../../theme";

interface ArticleLayoutProps extends BoxProps {
  tags?: string[];
}

export function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <Box sx={{ minHeight: "80vh", position: "relative", width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: "140vh",
          position: "absolute",
          top: 0,
          filter: "blur(8px)",
        }}
      >
        <GameOfLifeAnimation
          resolution={128}
          animate={false}
          opacity={0.08}
          className="case-study"
        />
      </Box>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            mt: [16, 10, 0],
            minHeight: "80vh",
          }}
        >
          <Stack spacing={3}>
            <Typography
              variant="h1"
              sx={{ fontSize: ["2.5rem", "3rem"], mt: 0 }}
            >
              How to create and deploy an ERC20 token in simple steps using
              Foundry
            </Typography>
            <Typography sx={{ fontSize: 20, fontWeight: 700, mt: 2 }}>
              Are you a web3 developer interested in creating your own token on
              the Ethereum Blockchain? If you are, then this article’s what
              you’ve been looking for.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Typography
                  textTransform="uppercase"
                  letterSpacing={5}
                  lineHeight={1}
                >
                  May 25
                </Typography>
                <Typography
                  textTransform="uppercase"
                  letterSpacing={5}
                  lineHeight={1}
                >
                  /
                </Typography>
                <Typography
                  textTransform="uppercase"
                  letterSpacing={5}
                  lineHeight={1}
                >
                  Cesar Brazon
                </Typography>
              </Stack>
              <Box
                sx={{
                  bgcolor: colors.purple,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: 2.5,
                  lineHeight: 1,
                  px: "12px",
                  py: "4px",
                }}
              >
                Coding
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box component="section" sx={{ pb: 12, pt: [20, 20, 20, 0] }}>
          <Grid container spacing={8}>
            <Grid item xs={12} lg={8}>
              {children}
            </Grid>
            <Grid item xs={12} lg={4}>
              <Stack spacing={8}>
                {1 && (
                  <Stack spacing={3}>
                    <Typography
                      fontWeight={800}
                      textTransform="uppercase"
                      letterSpacing={5}
                      lineHeight={1}
                    >
                      Posts
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 3 }}>
                      {["Post title"].map((role, i) => (
                        <Typography key={i} sx={{ fontSize: 14 }}>
                          {role}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                )}
                {1 && (
                  <Stack spacing={3}>
                    <Typography
                      fontWeight={800}
                      textTransform="uppercase"
                      letterSpacing={5}
                      lineHeight={1}
                    >
                      Tags
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 3 }}>
                      {["Coding (1)", "Tutorials (2)"].map((project, i) => (
                        <Box key={i}>
                          <Link
                            sx={{
                              color: "white",
                              fontSize: 14,
                            }}
                          >
                            {project}
                          </Link>
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
