import React from "react";
import useIsDesktop from "../../hooks/useIsDesktop";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

type MenuItem = {
  name: string;
};

export const MENU_ITEMS: MenuItem[] = [
  { name: "Hire us" },
  { name: "Join us" },
  { name: "Our Handbook" },
  { name: "Blog" },
];
export const Header: React.FC = () => {
  const desktop = useIsDesktop();
  if (desktop) {
    return <HeaderDesktop />;
  } else {
    return <HeaderMobile />;
  }
};
