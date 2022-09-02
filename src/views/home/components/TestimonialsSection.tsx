import React, { ReactChildren } from "react";
import { Box, Container, Grid, Link, LinkProps, Stack,  Typography } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import { Button } from "../../../commons/button/Button";
import { colors } from "../../../theme"
import SwarmBenefit from "../../../assets/imgs/benefits/swarm.svg";
import TwitterIcon from "../../../assets/imgs/twitter.svg";

const PostLink: React.FC<LinkProps> = ({children, ...props}) => (
  <Link underline="none" sx={{color: colors.blue, "&:hover": {opacity: 0.8}}} {...props}>{children}</Link>
)

const DoingGudText = () => (
  <Typography component="p" variant="subtitle2" lineHeight={1.25} fontWeight={500}>
    We are glad to announce our partnership with <PostLink>@dorg_tech</PostLink> and its DAO strong of 60+ devs!
    <br/>
    They will help us build our dream NFT Marketplace where every transaction does good <span role="img" aria-label="sparkles">✨</span>
    <PostLink>$AMOR</PostLink> <PostLink>#Partnership</PostLink> <PostLink>#NFTmarketplace</PostLink> <PostLink>#DAOBuilders</PostLink>
  </Typography>
)

const AcreDaoText = () => (
  <Typography component="p" variant="subtitle2" lineHeight={1.25} fontWeight={500}>
    Where would We be without <PostLink>@dorg_tech</PostLink>?
  </Typography>
)

const testimonials = [
  {
    slug: "doingGud",
    avatar: SwarmBenefit,
    text: <DoingGudText/>,
  },
  {
    slug: "doingGud",
    avatar: SwarmBenefit,
    text: <AcreDaoText/>,
  },
  {
    slug: "doingGud",
    avatar: SwarmBenefit,
    text: <DoingGudText/>,
  },
  {
    slug: "doingGud",
    avatar: SwarmBenefit,
    text: <AcreDaoText/>,
  },
  {
    slug: "doingGud",
    avatar: SwarmBenefit,
    text: <AcreDaoText/>,
  },
  {
    slug: "doingGud",
    avatar: SwarmBenefit,
    text: <AcreDaoText/>,
  },
  {
    slug: "doingGud",
    avatar: SwarmBenefit,
    text: <DoingGudText/>,
  },
  {
    slug: "doingGud",
    avatar: SwarmBenefit,
    text: <DoingGudText/>,
  },
  {
    slug: "doingGud",
    avatar: SwarmBenefit,
    text: <DoingGudText/>,
  },
]

export const TestimonialsSection: React.FC = () => {
  return (
    <Box my={16} position="relative">
      <Container maxWidth="lg" sx={{position: "relative"}}>
        <Typography
          variant="h6"
          component="h2"
          textTransform="uppercase"
          textAlign="center"
          letterSpacing={6}
        >
          In dOrg We Trust <span role="img" aria-label="sparkles">✨</span>
        </Typography>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={5} sx={{mt: 8}}>
          {testimonials.map((testimonial) => {
            return (
              <Link
                key={testimonial.slug}
                underline="none"
              >
                <Stack
                  direction="column"
                  spacing={2}
                  sx={{
                    bgcolor: colors.black,
                    border: `6px solid ${colors.grays[600]}`,
                    borderRadius: "24px",
                    color: colors.white,
                    cursor: "pointer",
                    p: 2,
                    transition: "backgroundColor 0.25s ease-in-out",
                    "&:hover": {
                      bgcolor: colors.grays[800]
                    }
                  }}
                >
                  <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 999,
                        overflow: "hidden"
                      }}>
                        <img src={testimonial.avatar} alt={testimonial.slug}/>
                      </Box>
                      <Box>
                        <Typography variant="body2" fontWeight={800}>DoinGud (:D, :D)</Typography>
                        <Typography variant="body2" fontWeight={100} color={colors.grays[600]}>@DoinGudHQ</Typography>
                      </Box>
                    </Stack>
                    <Box sx={{
                      opacity: 0.8,
                      transition: "opacity 0.25s ease-in-out",
                      width: 20,
                      "&:hover": {
                        opacity: 0.6
                      }
                    }}>
                      <img src={TwitterIcon} alt="Twitter" />
                    </Box>
                  </Stack>
                  {testimonial.text}
                </Stack>
              </Link>
            )
          })}
        </Masonry>
        <Grid container justifyContent="center" mt={12}>
          <Grid item>
            <Button href="/#/hireUs" variant='outlined'>Let&apos;s Talk</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
