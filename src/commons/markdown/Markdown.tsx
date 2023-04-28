import React from "react";
import ReactMarkdown, { MarkdownToJSX } from "markdown-to-jsx";
import { Typography, List, ListItem, Link, Box } from "@mui/material";
import { colors } from "../../theme";

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h1",
        sx: {
          marginBlockStart: "4rem",
        },
      },
    },
    h2: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h3",
        component: "h2",
        sx: {
          marginBlockStart: "4rem",
        },
      },
    },
    h3: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
        component: "h3",
        sx: {
          marginBlockStart: "4rem",
        },
      },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h5",
        component: "h4",
        sx: {
          marginBlockStart: "4rem",
        },
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
    ol: {
      component: List,
      dense: true,
      props: {
        sx: {
          mb: 2,
          pt: 0,
          pl: 2.5,
          "& li": {
            display: "list-item",
            listStyleType: "decimal",
            pl: 2,
            py: "0.25rem",
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
          "& li": {
            display: "list-item",
            listStylePosition: "inside",
            listStyleType: "circle",
            pl: 0,
            py: "0.25rem",
          },
        },
      },
    },
    li: {
      component: ListItem,
    },
    blockquote: {
      component: Box,
      props: {
        component: "blockquote",
        style: {
          color: colors.grays[100],
          fontWeight: 800,
          marginLeft: 0,
          paddingLeft: "1em",
          borderLeft: `4px solid ${colors.purple}`,
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
          // whiteSpace: "nowrap",
          fontSize: "0.875rem",
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
