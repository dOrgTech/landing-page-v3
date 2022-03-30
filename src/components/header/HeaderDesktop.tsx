import React from "react";
import { Grid, Typography } from "@mui/material";
import Logo from "../../assets/imgs/dOrg-logo.white.svg";
import { styled } from "@material-ui/core";
import { MENU_ITEMS } from "./Header";
import { colors } from "../../theme";

const StyledLogo = styled("img")({
  height: "auto",
  objectFit: "contain",
  cursor: "pointer",
  width: 100,
});

const MenuItemButton = styled(Typography)({
  cursor: "pointer",
});
const HeaderDesktop: React.FC = () => {
  return (
    <Grid container justifyContent={"space-between"} alignItems={"center"} px={10} py={6.25}>
      <Grid item>
        <StyledLogo src={Logo} alt='dOrg Logo' />
      </Grid>
      <Grid item>
        <Grid container justifyContent={"center"} alignItems={"center"} gap={4}>
          {MENU_ITEMS.map((item, index) => (
            <MenuItemButton variant='h6' color={colors.white} key={index}>
              {item.name}
            </MenuItemButton>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderDesktop;
