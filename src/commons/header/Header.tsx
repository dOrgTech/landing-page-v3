import React, { useEffect, useState } from "react";
import { Box, Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export type MenuItem = {
  name: string;
  path: string;
  external?: boolean;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Hire us",
    path: "/#/hire",
  },
  {
    name: "Join us",
    path: "/#/join",
  },
  {
    name: "Case Studies",
    path: "/#/case-studies",
  },
  {
    name: "Hot Seat",
    path: "/#/hot-seat",
  },
  {
    name: "Handbook",
    path: "https://docs.dorg.tech/",
    external: true,
  },
  {
    name: "Blog",
    path: "https://blog.dorg.tech/",
    external: true,
  },
];

export const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsFixed(position > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Box
      component='header'
      sx={{
        background: `rgba(0,0,0,${isFixed ? 0.95 : 0})`,
        backdropFilter: isFixed ? "blur(2px)" : undefined,
        paddingBottom: theme.spacing(isFixed ? 2 : 4),
        paddingTop: theme.spacing(isFixed ? 2 : 4),
        position: "fixed",
        top: 0,
        transition: "all 0.25s ease-in-out",
        width: "100vw",
        zIndex: 99,
      }}>
      <Container maxWidth='lg'>
        <Stack
          direction='row'
          spacing={2}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}>
          {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
        </Stack>
      </Container>
    </Box>
  );
};
