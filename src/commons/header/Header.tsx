import React from "react";
import useIsDesktop from "../../hooks/useIsDesktop";
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
    path: "/#/hireUs"
  },
  {
    name: "Join us",
    path: "/#/joinUs"
  },
  {
    name: "Our Handbook",
    path: "https://docs.dorg.tech/",
    external: true
  },
  {
    name: "Blog",
    path: "https://blog.dorg.tech/",
    external: true
  },
];
export const Header: React.FC = () => {
  const desktop = useIsDesktop();
  if (desktop) {
    return <HeaderDesktop />;
  } else {
    return <HeaderMobile />;
  }
};
