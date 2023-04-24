import React from "react";
import ReactMarkdown, { MarkdownToJSX } from "markdown-to-jsx";
import { Typography, List, ListItem, Link } from "@mui/material";
import { colors } from "../../theme";

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,

        variant: "h1",
      },
    },
    h2: {
      component: Typography,
      props: {
        gutterBottom: true,

        variant: "h3",
        component: "h2",
      },
    },
    h3: {
      component: Typography,
      props: {
        gutterBottom: true,

        variant: "h4",
        component: "h3",
      },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,

        variant: "h5",
        component: "h4",
      },
    },
    h5: {
      component: Typography,
      props: { gutterBottom: true, variant: "h5" },
    },
    h6: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6" },
    },
    p: {
      component: Typography,
      props: { gutterBottom: true, paragraph: true },
    },
    a: {
      component: Link,
      props: {
        sx: {
          color: colors.green,
          cursor: "pointer",
          "&:hover": {
            opacity: 0.6,
          },
        },
      },
    },
    ul: {
      component: List,
      dense: true,
      props: {
        sx: {
          mb: 2,
          pt: 0,
          pl: 0,
        },
      },
    },
    li: {
      component: ListItem,
      props: {
        sx: {
          display: "list-item",
          listStylePosition: "inside",
          listStyleType: "circle",
          pl: 0,
          py: "0.25rem",
        },
      },
    },
    pre: {
      props: {
        style: {
          backgroundColor: colors.grays[800],
          borderRadius: 4,
          marginBottom: "1rem",
          overflow: "auto",
          padding: "0.25rem",
        },
      },
    },
    code: {
      props: {
        style: {
          padding: "0.25rem",
          backgroundColor: colors.grays[800],
          color: colors.orange,
          whiteSpace: "nowrap",
        },
      },
    },
  },
};

export const Markdown: React.FC<{
  [key: string]: unknown;
  children: string;
  options?: MarkdownToJSX.Options;
}> = (props) => {
  return <ReactMarkdown options={options} {...props} />;
};
