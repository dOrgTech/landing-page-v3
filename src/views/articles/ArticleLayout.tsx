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
import { ArticleProps, articles } from "../../constants/articles";
import { Markdown } from "../../commons/markdown/Markdown";
import { alpha } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

interface ArticleLayoutProps extends BoxProps {
  tags?: string[];
}

export function ArticleLayout({
  slug,
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

  const filteredArticles = articles.filter(
    (article, i) => i < 4 && article.slug !== slug
  );

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
            <Link
              href="/#/articles"
              sx={{
                color: "white",
                transition: "opacity 0.25s ease-in-out",
                "&:hover": { opacity: 0.7 },
              }}
            >
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <ArrowBack width={12} height={12} />
                <Typography>Back to Articles</Typography>
              </Stack>
            </Link>
            <Typography
              variant="h1"
              sx={{ fontSize: ["2.5rem", "3rem"], mt: 0 }}
            >
              {title}
            </Typography>
            {description && (
              <Typography sx={{ fontSize: 20, fontWeight: 700, mt: 2 }}>
                {description}
              </Typography>
            )}
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
                    <Link
                      href={author.link ? author.link : undefined}
                      sx={{
                        color: "white",
                        letterSpacing: 5,
                        lineHeight: 1,
                        textTransform: "uppercase",
                        textUnderlineOffset: 4,
                        transition: "color 0.25s ease-in-out",
                        "&:hover": {
                          color: alpha("rgba(255,255,255)", 0.7),
                        },
                      }}
                    >
                      {author.name}
                    </Link>
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
            <Grid
              item
              xs={12}
              lg={8}
              sx={{ fontSize: "1.125rem", "& *:first-child": { mt: 0 } }}
            >
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
                    <Stack spacing={3} sx={{ mt: 3 }}>
                      {filteredArticles.map((article, i) => (
                        <Link
                          key={i}
                          href={`/#/articles/${article.slug}`}
                          underline="none"
                          sx={{
                            color: "white",
                            "&:hover .post-title": { color: colors.green },
                          }}
                        >
                          <Typography
                            className="post-title"
                            sx={{
                              fontSize: 18,
                              fontWeight: 800,
                              lineHeight: 1.1,
                            }}
                          >
                            {article.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: colors.grays[300],
                              fontSize: 12,
                              lineHeight: 1.1,
                              mt: 0.5,
                            }}
                          >
                            {article.date}
                          </Typography>
                        </Link>
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
