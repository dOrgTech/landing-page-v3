import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Logo from "../../assets/imgs/dOrg-logo.svg";
import { styled } from "@material-ui/core";
import { MENU_ITEMS, MenuItem } from "./Header";
import theme, { colors } from "../../theme";

const Navbar = styled(Box)({
  background: "linear-gradient(rgba(0,0,0,.8) 50%, rgba(0,0,0,0))",
  backdropFilter: "blur(2px)",
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(4),
  position: "fixed",
  top: 0,
  width: "100vw",
  zIndex: 99,
});

const StyledLogo = styled("img")({
  cursor: "pointer",
  filter: "brightness(10) saturate(0%)",
  height: "auto",
  objectFit: "contain",
  width: 100,
  "&:hover": {
    filter: "brightness(1) saturate(100%)",
  }
});

const MenuItemButton = styled(Typography)({
  cursor: "pointer",
  fontSize: 17,
});

const HeaderDesktop: React.FC = () => {

  return (
    <Navbar component="header">
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <Link href="/">
              <StyledLogo src={Logo} alt='dOrg White Logo' />
            </Link>
          </Grid>
          <Grid item>
            <Grid container justifyContent={"center"} alignItems={"center"} gap={4}>
              {MENU_ITEMS.map((item: MenuItem, index) => (
                <Link
                  href={item.path}
                  target={item.external ? "_blank" : undefined}
                  key={index}
                >
                  <MenuItemButton
                    variant='h6'
                    color={colors.white}
                    key={index}
                    sx={{
                      transition: "color 0.25s ease-in-out",
                      "&:hover": {
                        color: colors.green,
                      }
                    }}
                  >
                    {item.name}
                  </MenuItemButton>
                </Link>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Navbar>
  );
};

export default HeaderDesktop;
