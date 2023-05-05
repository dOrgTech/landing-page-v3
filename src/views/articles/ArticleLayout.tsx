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
import ArticleResource from "./ArticleResource";
import { Helmet } from "react-helmet-async";

interface ArticleLayoutProps extends BoxProps {
  tags?: string[];
}

export function ArticleLayout({
  slug,
  title,
  deck,
  description,
  content,
  date,
  authors,
  coders,
  tags,
  resources,
}: // meta,
ArticleProps) {
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
    <>
      <Helmet>
        <title>{`dOrg | ${title}`}</title>
        <meta property="title" content={title} />
        {description && <meta name="description" content={description} />}
      </Helmet>
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
              display: "flex",
              mt: [16, 10, 0],
              minHeight: "90vh",
            }}
          >
            <Stack spacing={3}>
              <Link
                href="/#/articles"
                sx={{
                  color: "white",
                  transition: "color 0.25s ease-in-out",
                  "&:hover": { color: colors.green },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
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
              {deck && (
                <Typography sx={{ fontSize: 20, fontWeight: 700, mt: 2 }}>
                  {deck}
                </Typography>
              )}
              <Stack
                direction="row"
                spacing={3}
                sx={{ alignItems: "center", pb: 4 }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Typography
                    sx={{
                      color: colors.magenta,
                      textTransform: "uppercase",
                      letterSpacing: 5,
                      lineHeight: 1,
                    }}
                  >
                    {date}
                  </Typography>
                </Stack>
              </Stack>
              {authors && authors.length > 0 && (
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      letterSpacing: 5,
                      lineHeight: 1,
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                    }}
                  >
                    Authors:
                  </Typography>
                  {authors.map((author, i) => (
                    <>
                      <Link
                        key={i}
                        href={author.link ? author.link : undefined}
                        underline={author.link ? "always" : "none"}
                        sx={{
                          color: "white",
                          cursor: author.link ? "pointer" : "default",
                          letterSpacing: 5,
                          lineHeight: 1,
                          fontSize: 16,
                          textTransform: "uppercase",
                          textUnderlineOffset: 4,
                          textDecorationColor: colors.grays[400],
                          transition: "color 0.25s ease-in-out",
                          "&:hover": {
                            color: author.link ? colors.green : null,
                          },
                        }}
                      >
                        {author.name}
                      </Link>
                      {i < authors.length - 1 && (
                        <Typography
                          sx={{ color: colors.grays[500], fontSize: 16 }}
                        >{` / `}</Typography>
                      )}
                    </>
                  ))}
                </Stack>
              )}
              {coders && coders.length > 0 && (
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      letterSpacing: 5,
                      lineHeight: 1,
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                    }}
                  >
                    Coders:
                  </Typography>
                  {coders.map((coder, i) => (
                    <>
                      <Link
                        key={i}
                        href={coder.link ? coder.link : undefined}
                        underline={coder.link ? "always" : "none"}
                        sx={{
                          color: "white",
                          cursor: coder.link ? "pointer" : "default",
                          letterSpacing: 5,
                          lineHeight: 1,
                          fontSize: 16,
                          textTransform: "uppercase",
                          textUnderlineOffset: 4,
                          textDecorationColor: colors.grays[400],
                          transition: "color 0.25s ease-in-out",
                          "&:hover": {
                            color: coder.link ? colors.green : null,
                          },
                        }}
                      >
                        {coder.name}
                      </Link>
                      {i < coders.length - 1 && (
                        <Typography
                          sx={{ color: colors.grays[500], fontSize: 16 }}
                        >{` / `}</Typography>
                      )}
                    </>
                  ))}
                </Stack>
              )}
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
                {resources && resources.length > 0 && (
                  <>
                    <Typography
                      variant="h3"
                      component="h2"
                      sx={{
                        mt: 8,
                        pt: 8,
                        borderTop: `2px solid ${colors.grays[500]}`,
                      }}
                    >
                      Resources
                    </Typography>
                    <Stack spacing={2} sx={{ mt: 3 }}>
                      {resources.map((resource, i) => (
                        <ArticleResource {...resource} key={i} />
                      ))}
                    </Stack>
                  </>
                )}
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
                        {tags.map((tag, i) => (
                          <Box key={i}>
                            <Link
                              href={`/#/articles?tag=${tag}`}
                              sx={{
                                color: "white",
                                fontSize: 14,
                                "&:hover": {
                                  color: colors.green,
                                },
                              }}
                            >
                              {tag}
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
    </>
  );
}
