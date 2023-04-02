import React from "react";
import { Dialog, Grid, Link, Stack, Typography } from "@mui/material";
import { styled } from "@material-ui/styles";
import { colors } from "../../theme";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LogoColor from "../../assets/imgs/dOrg-logo.svg";
import Logo from "../../assets/imgs/dOrg-logo.white.svg";
import { useState } from "react";
import { MENU_ITEMS, MenuItem } from "./Header";
import { IconLink, socialIconLinks } from "../../constants/routes";

const StyledLogo = styled("img")({
  height: "auto",
  objectFit: "contain",
  cursor: "pointer",
  width: 100,
});

const CloseButton = styled(CloseIcon)({
  color: colors.white,
  width: 32,
  height: 32,
  cursor: "pointer",
});

const MenuButton = styled(MenuIcon)({
  color: colors.white,
  width: 32,
  height: 32,
  cursor: "pointer",
});

const MenuItemButton = styled(Typography)({
  cursor: "pointer",
});

const HeaderMobile: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const socialIcons = Object.values(socialIconLinks);

  return (
    <>
      <Link href="/" display="inline-flex">
        <StyledLogo src={LogoColor} alt="dOrg Color Logo" />
      </Link>
      <MenuButton onClick={handleOpen} />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        sx={{ "& .MuiPaper-root": { background: "transparent" } }}
      >
        <Grid
          container
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            background: `linear-gradient(180deg, ${colors.purple} 0%, ${colors.magenta} 100%)`,
            boxSizing: "border-box",
            height: "100%",
            minHeight: "100%",
            px: 2,
            pt: 2,
            pb: 5,
          }}
        >
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Link
              href="/"
              onClick={() => setOpen(false)}
              sx={{ display: "flex" }}
            >
              <StyledLogo src={Logo} alt="dOrg Logo" />
            </Link>
            <CloseButton onClick={handleClose} />
          </Grid>
          <Stack justifyContent={"center"} alignItems={"center"} spacing={3}>
            {MENU_ITEMS.map((item: MenuItem, index) => (
              <Link
                underline="none"
                href={item.path}
                target={item.external ? "_blank" : undefined}
                key={index}
                onClick={() => setOpen(false)}
              >
                <MenuItemButton
                  variant="h4"
                  color={colors.white}
                  fontWeight="bold"
                  sx={{ mt: 0 }}
                >
                  {item.name}
                </MenuItemButton>
              </Link>
            ))}
          </Stack>
          <Grid
            container
            justifyContent={"space-around"}
            alignItems="center"
            gap={2}
          >
            {socialIcons.map((iconLink: IconLink, index) => (
              <Grid item key={index}>
                <Link
                  href={iconLink.path}
                  target="_blank"
                  onClick={() => setOpen(false)}
                >
                  <StyledLogo style={{ width: 24 }} src={iconLink.icon} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default HeaderMobile;
