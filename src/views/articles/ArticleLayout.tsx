import React, { useEffect, useState } from "react";
import {
  Box,
  BoxProps,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import GameOfLifeAnimation from "../../commons/gameOfLifeAnimation/GameOfLifeAnimation";
import { colors } from "../../theme";
import { ArticleProps } from "../../constants/articles";
import { Markdown } from "../../commons/markdown/Markdown";

interface ArticleLayoutProps extends BoxProps {
  tags?: string[];
}

export function ArticleLayout({
  title,
  description,
  content,
  date,
  author,
  coding,
  tags,
}: ArticleProps) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(content)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, []);

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
              {title}
            </Typography>
            <Typography sx={{ fontSize: 20, fontWeight: 700, mt: 2 }}>
              {description}
            </Typography>
            <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Typography
                  textTransform="uppercase"
                  letterSpacing={5}
                  lineHeight={1}
                >
                  {date}
                </Typography>
                {author && (
                  <>
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
                      {author}
                    </Typography>
                  </>
                )}
              </Stack>
              {coding && (
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
              )}
            </Stack>
          </Stack>
        </Box>
        <Box component="section" sx={{ pb: 12, pt: [20, 20, 20, 0] }}>
          <Grid container spacing={8}>
            <Grid item xs={12} lg={8} sx={{ "& *:first-child": { mt: 0 } }}>
              <Markdown>{markdown}</Markdown>
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
                {tags && tags.length > 0 && (
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
                      {tags.map(({ name, slug }, i) => (
                        <Box key={i}>
                          <Link
                            href={`/articles/tags/${slug}`}
                            sx={{
                              color: "white",
                              fontSize: 14,
                            }}
                          >
                            {name}
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
