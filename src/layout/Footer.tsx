import React from "react";
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Link,
  Stack,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Button } from "../commons/button/Button";
import Logo from "../assets/imgs/dOrg-logo.svg";
import { IconLink, socialIconLinks } from "../constants/routes";
import { MenuItem, MENU_ITEMS } from "../commons/header/Header";
import theme, { colors } from "../theme";

const StyledLogo = styled("img")({
  height: "auto",
  objectFit: "contain",
  transition: "opacity 0.25s ease-in-out",
  width: 200,
  "&:hover": {
    opacity: 0.8,
  },
});

const FooterTitle = styled(Typography)({
  color: colors.grays[400],
  fontSize: "1rem",
  letterSpacing: "3px",
  textTransform: "uppercase",
});

const FooterLink = styled(Stack)({
  cursor: "pointer",
  height: theme.spacing(3),
  opacity: 0.6,
  transition: "opacity 0.25s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
});

const NewsletterInput = styled(TextField)({
  backgroundColor: colors.black,
  border: `4px solid ${colors.grays[400]}`,
  borderRadius: 12,
  transition: "all 0.25s ease-in-out",
  "&:hover": {
    borderColor: colors.purple,
    " .MuiSvgIcon-root": {
      color: colors.purple,
    },
  },
  " .MuiOutlinedInput-input": {
    color: colors.white,
    paddingTop: 6,
    paddingBottom: 8,
  },
  " .MuiSvgIcon-root": {
    color: colors.grays[400],
  },
  " fieldset": {
    border: "none",
  },
});

export const Footer: React.FC = () => {
  const theme = useTheme();

  const socialLinks = Object.values(socialIconLinks);

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.grays[900],
        py: 6,
        px: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} lg={4}>
            <Link href="/">
              <StyledLogo src={Logo} alt="dOrg White Logo" />
            </Link>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container flexDirection="row-reverse" spacing={4}>
              <Grid item xs={6}>
                <FooterTitle variant="h6">DORG</FooterTitle>
                <Stack spacing={3} mt={4}>
                  {MENU_ITEMS.map((item: MenuItem, index) => {
                    return (
                      <Link
                        href={item.path}
                        target={item.external ? "_blank" : undefined}
                        key={index}
                      >
                        <FooterLink>
                          <Typography
                            variant="body1"
                            lineHeight={1}
                            color={colors.white}
                          >
                            {item.name}
                          </Typography>
                        </FooterLink>
                      </Link>
                    );
                  })}
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <FooterTitle variant="h6">SOCIAL</FooterTitle>
                <Stack spacing={3} mt={4}>
                  {socialLinks.map((social: IconLink, index) => {
                    return (
                      <Link
                        color={colors.white}
                        href={social.path}
                        target="_blank"
                        rel="noredirect"
                        underline="none"
                        key={social.name}
                      >
                        <FooterLink
                          direction="row"
                          alignItems="center"
                          spacing={2}
                        >
                          <Box width={theme.spacing(3)}>
                            <img
                              src={social.icon}
                              alt={social.name}
                              style={{ display: "block" }}
                            />
                          </Box>
                          <Typography variant="body1" lineHeight={1}>
                            {social.name}
                          </Typography>
                        </FooterLink>
                      </Link>
                    );
                  })}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "stretch",
              [theme.breakpoints.up("md")]: {
                justifyContent: "flex-end",
              },
            }}
          >
            <Stack
              spacing={3}
              sx={{
                display: "inline-flex",
                [theme.breakpoints.down("lg")]: { width: "100%" },
              }}
            >
              <FooterTitle variant="h6">OUR NEWSLETTER</FooterTitle>
              <Link
                href="https://blog.dorg.tech/"
                target="_blank"
                rel="noredirect"
                underline="none"
              >
                <Button variant="outlined" size="small">
                  Subscribe
                </Button>
              </Link>
              {/* <NewsletterInput
                id="email"
                placeholder="Enter email to subscribe"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowForwardIcon/>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              /> */}
            </Stack>
          </Grid>
        </Grid>
        <Stack direction="row" justifyContent="flex-end" mt={6} spacing={1}>
          <Link
            href="/#/privacy-policy"
            underline="always"
            sx={{
              color: colors.grays[500],
              "&:hover": {
                color: colors.white,
              },
            }}
          >
            Privacy Policy
          </Link>
          <Typography variant="body1" color={colors.grays[500]}>
            © 2022 dOrg
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
