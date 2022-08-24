import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Logo from "../../assets/imgs/dOrg-logo.svg";
import { styled } from "@material-ui/core";
import { MENU_ITEMS } from "./Header";
import theme, { colors } from "../../theme";

const Navbar = styled(Box)({
  backgroundColor: colors.black,
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(4),
  position: "sticky",
  top: 0,
  zIndex: 99
})

const StyledLogo = styled("img")({
  cursor: "pointer",
  filter: "brightness(5)",
  height: "auto",
  objectFit: "contain",
  width: 100,
  "&:hover": {
    filter: "brightness(1)",
  }
});

const MenuItemButton = styled(Typography)({
  cursor: "pointer",
  fontSize: 17,
});

const HeaderDesktop: React.FC = () => {
  return (
    <Navbar>
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
              {MENU_ITEMS.map((item, index) => (
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
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Navbar>
  );
};

export default HeaderDesktop;
