import { CSSProperties } from "react";
import { colors } from "../../theme";
import { PrismTheme as PrismThemeProps } from "./PrismTypes";

// Based on prism-react-rendered/themes/nightOwl

const PrismTheme: PrismThemeProps = {
  plain: {
    color: colors.orange,
    backgroundColor: "#011627",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: colors.purple,
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: colors.green,
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: colors.purple,
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: colors.orange,
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(255, 120, 88)",
      },
    },
    {
      types: ["char", "constant", "function"],
      style: {
        color: "rgb(255, 120, 88)",
      },
    },
    {
      types: ["builtin"],
      style: {
        color: colors.yellow,
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: colors.yellow,
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: colors.yellow,
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: colors.yellow,
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: colors.blue,
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["property"],
      style: {
        color: colors.blue,
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
  ],
};

export default PrismTheme;
