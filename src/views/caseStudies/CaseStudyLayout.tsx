import React, { ReactNode } from "react";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import { caseStudies, CaseStudyLinkProps } from "../../constants/caseStudies";
import GameOfLifeAnimation from "../../commons/gameOfLifeAnimation/GameOfLifeAnimation";
import { Button } from "../../commons/button/Button";
import CaseStudyListing from "./components/CaseStudyPressListing";
import CaseStudyHeading from "./components/CaseStudyHeading";
import { Arrow } from "./components/Arrow";

interface CaseStudyLayoutProps extends CaseStudyLinkProps {
  children: ReactNode;
}

export const CaseStudyLayout = ({
  children,
  color,
  index,
  press,
  projects,
  roles,
  summary,
  thumbnail,
  title,
  category,
}: CaseStudyLayoutProps) => {
  if (press) {
    press.sort(function (a, b) {
      const aDate: string = b.date;
      const bDate: string = a.date;
      return new Date(aDate).getTime() - new Date(bDate).getTime();
    });
  }

  const prevIndex =
    index - 1 < 0 ? Object.keys(caseStudies).length - 1 : index - 1;
  const nextIndex =
    index + 1 === Object.keys(caseStudies).length ? 0 : index + 1;

  const prevSlug = Object.keys(caseStudies)[prevIndex];
  const nextSlug = Object.keys(caseStudies)[nextIndex];
  const prevProject = caseStudies[prevSlug];
  const nextProject = caseStudies[nextSlug];

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
        }}>
        <GameOfLifeAnimation
          resolution={128}
          animate={false}
          opacity={0.08}
          className='case-study'
        />
      </Box>
      <Container maxWidth='lg' sx={{ position: "relative" }}>
        <Grid
          container
          rowSpacing={8}
          columnSpacing={20}
          sx={{
            alignItems: "center",
            flexDirection: "row-reverse",
            mt: [16, 10, 0],
            minHeight: "100vh",
          }}>
          <Grid item xs={12} lg={6}>
            <Box sx={{ width: "100%" }}>
              <img src={thumbnail} alt={title} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography
              textTransform='uppercase'
              letterSpacing={5}
              lineHeight={1}>
              Case Study
            </Typography>
            <Typography
              variant='h1'
              sx={{ color: color, fontSize: ["3rem", "4rem"], mt: 0 }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: 20, mt: 2 }}>{summary}</Typography>
          </Grid>
        </Grid>
        <Box component='section' sx={{ pb: 12, pt: [20, 20, 20, 0] }}>
          <Grid container spacing={8} sx={{ flexDirection: "row-reverse" }}>
            <Grid item xs={12} lg={8}>
              {children}
            </Grid>
            <Grid item xs={12} lg={4}>
              <Stack spacing={8}>
                {category && (
                  <Stack spacing={3}>
                    <Typography
                      fontWeight={800}
                      textTransform='uppercase'
                      letterSpacing={5}
                      lineHeight={1}>
                      Category
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 3 }}>
                      {category.map((category, i) => (
                        <Typography key={i} sx={{ fontSize: 14 }}>
                          {category}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                )}
                {roles && (
                  <Stack spacing={3}>
                    <Typography
                      fontWeight={800}
                      textTransform='uppercase'
                      letterSpacing={5}
                      lineHeight={1}>
                      Role
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 3 }}>
                      {roles.map((role, i) => (
                        <Typography key={i} sx={{ fontSize: 14 }}>
                          {role}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                )}
                {projects && (
                  <Stack spacing={3}>
                    <Typography
                      fontWeight={800}
                      textTransform='uppercase'
                      letterSpacing={5}
                      lineHeight={1}>
                      Projects
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 3 }}>
                      {projects.map((project, i) => (
                        <Box key={i}>
                          <Link
                            sx={{
                              color: "white",
                              fontSize: 14,
                              "&:hover": {
                                color: color,
                              },
                            }}
                            href={project.link}
                            target='_blank'
                            rel='noredirect'>
                            {project.name}
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
        <Box
          component='section'
          sx={{
            borderTop: `2px solid ${color}`,
            borderBottom: press ? `2px solid ${color}` : null,
            py: 12,
          }}>
          <Grid container spacing={4}>
            <Grid item xs={0} lg={4}></Grid>
            <Grid item xs={12} lg={8}>
              <Stack spacing={4}>
                <Stack spacing={2}>
                  <Typography
                    variant='h2'
                    sx={{ fontSize: ["3rem", "4rem", "5rem"], mt: 0 }}>
                    Do you need something built?
                  </Typography>
                  <Typography sx={{ fontSize: 20 }}>
                    dOrg has a longstanding history of complex web3 development
                    and integration partnerships. We&apos;ve worked with +85
                    web3 projects since 2019, generating +$2B of total lifetime
                    value in shipped products as well +$8M on-chain revenue.
                  </Typography>
                </Stack>
                <Button
                  variant='contained'
                  sx={{ width: "fit-content" }}
                  href='/#/hire'>
                  Let&apos;s team up
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        {press && (
          <Stack
            component='section'
            spacing={2}
            sx={{
              borderBottom: `2px solid ${color}`,
              py: 12,
            }}>
            <CaseStudyHeading type='press' color={color} title={title} />
            {press?.map((item, i) => {
              return <CaseStudyListing key={i} color={color} {...item} />;
            })}
          </Stack>
        )}
        <Box component='section' sx={{ py: 12 }}>
          <Stack
            direction='row'
            sx={{ alignItems: "center", justifyContent: "space-between" }}>
            {prevProject && (
              <Link
                href={`#/case-studies/${prevProject.slug}`}
                underline='none'
                sx={{ color: "white" }}>
                <Stack
                  direction='row'
                  spacing={2}
                  sx={{
                    alignItems: "center",
                    "&:hover": {
                      ".linkColor": { color: prevProject.color, opacity: 1 },
                      ".arrowLink": { transform: "translateX(-50%)" },
                    },
                  }}>
                  <Arrow
                    direction='left'
                    sx={{
                      display: "flex",
                      height: "100%",
                      width: [24, 32],
                      transform: "translateX(0%)",
                      transition:
                        "opacity 0.25s ease-in-out, transform 0.25s ease-in-out",
                    }}
                    className={`linkColor arrowLink`}
                  />
                  <Typography
                    sx={{
                      fontSize: [16, 20, 24],
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                    className='linkColor'>
                    {prevProject.title}
                  </Typography>
                </Stack>
              </Link>
            )}

            {nextProject && (
              <Link
                href={`#/case-studies/${nextProject.slug}`}
                underline='none'
                sx={{ color: "white" }}>
                <Stack
                  direction='row'
                  spacing={2}
                  sx={{
                    alignItems: "center",
                    "&:hover": {
                      ".linkColor": { color: nextProject.color, opacity: 1 },
                      ".arrowLink": { transform: "translateX(50%)" },
                    },
                  }}>
                  <Typography
                    sx={{
                      fontSize: [16, 20, 24],
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                    className='linkColor'>
                    {nextProject.title}
                  </Typography>
                  <Arrow
                    sx={{
                      display: "flex",
                      height: "100%",
                      width: [24, 32],
                      transform: "translateX(0%)",
                      transition:
                        "opacity 0.25s ease-in-out, transform 0.25s ease-in-out",
                    }}
                    className={`linkColor arrowLink`}
                  />
                </Stack>
              </Link>
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
