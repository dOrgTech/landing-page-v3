import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import Logo from "../../assets/imgs/dOrg-logo.svg";
import { styled } from "@material-ui/core";
import { MENU_ITEMS, MenuItem } from "./Header";
import { colors } from "../../theme";

const StyledLogo = styled("img")({
  cursor: "pointer",
  filter: "brightness(10) saturate(0%)",
  height: "auto",
  objectFit: "contain",
  transform: "translateY(5px)",
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
    <>
      <Link href="/">
        <StyledLogo src={Logo} alt='dOrg White Logo' />
      </Link>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {MENU_ITEMS.map((item: MenuItem, index) => (
          <Link
            display="inherit"
            href={item.path}
            underline="none"
            target={item.external ? "_blank" : undefined}
            key={index}
          >
            <MenuItemButton
              color={colors.white}
              key={index}
              sx={{
                fontWeight: 800,
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
      </Stack>
    </>
  );
};

export default HeaderDesktop;
