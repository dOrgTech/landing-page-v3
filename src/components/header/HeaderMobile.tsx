import React, { Fragment } from "react";
import { Dialog, Grid, Typography } from "@mui/material";
import { styled } from "@material-ui/styles";
import { colors } from "../../theme";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LogoColor from "../../assets/imgs/dOrg-logo.svg";
import Logo from "../../assets/imgs/dOrg-logo.white.svg";
import discord from "../../assets/imgs/discord.svg";
import github from "../../assets/imgs/github.svg";
import twitter from "../../assets/imgs/twitter.svg";
import email from "../../assets/imgs/mail.svg";
import { useState } from "react";
import { MENU_ITEMS } from "./Header";

const HeaderMobileContainer = styled(Grid)({
  background: `linear-gradient(180deg, ${colors.purple} 0%, ${colors.magenta} 100%)`,
  padding: "50px 28px",
  boxSizing: "border-box",
  height: "100%",
  minHeight: "100%",
});

const StyledLogo = styled("img")({
  height: "auto",
  objectFit: "contain",
  cursor: "pointer",
  width: 100,
});

const CloseButton = styled(CloseIcon)({
  color: colors.white,
  width: 46,
  height: 46,
  cursor: "pointer",
});

const MenuButton = styled(MenuIcon)({
  color: colors.white,
  width: 46,
  height: 46,
  cursor: "pointer",
});

const MenuItemButton = styled(Typography)({
  cursor: "pointer",
});


const HeaderMobile: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Fragment>
      <Grid container justifyContent={"space-between"} alignItems={"center"} px={3.5} py={6.25}>
        <StyledLogo src={LogoColor} alt='dOrg Color Logo' />
        <MenuButton onClick={handleOpen} />
      </Grid>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <HeaderMobileContainer container flexDirection={"column"} justifyContent={"space-between"}>
          <Grid container justifyContent={"space-between"} alignItems={"center"}>
            <StyledLogo src={Logo} alt='dOrg Logo' />
            <CloseButton onClick={handleClose} />
          </Grid>
          <Grid container justifyContent={"center"} alignItems={"center"} gap={4} flexDirection={"column"}>
            {MENU_ITEMS.map((item, index) => (
              <MenuItemButton variant='h4' color={colors.white} fontWeight='bold' key={index}>
                {item.name}
              </MenuItemButton>
            ))}
          </Grid>
          <Grid container justifyContent={"center"} alignItems='center' gap={7}>
            <StyledLogo style={{ width: 24 }} src={discord} alt='discord Logo' />
            <StyledLogo style={{ width: 24 }} src={github} alt='github Logo' />
            <StyledLogo style={{ width: 24 }} src={twitter} alt='twitter Logo' />
            <StyledLogo style={{ width: 24 }} src={email} alt='email Logo' />
          </Grid>
        </HeaderMobileContainer>
      </Dialog>
    </Fragment>
  );
};

export default HeaderMobile;
