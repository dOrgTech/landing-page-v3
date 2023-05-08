import React from "react";
import ReactMarkdown, { MarkdownToJSX } from "markdown-to-jsx";
import { Typography, List, ListItem, Link, Box } from "@mui/material";
import { colors } from "../../theme";
import { Highlight, themes } from "prism-react-renderer";
import PrismTheme from "./PrismTheme";

interface CodeBlockProps {
  children: any;
  className?: string;
}

interface PrismProps {
  className?: string;
  style?: React.CSSProperties;
  tokens: Token[][];
  getLineProps: any;
  getTokenProps: any;
}

interface Token {
  types: string[];
  content: string;
  empty?: boolean;
}

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
      component: ({ children, ...props }: CodeBlockProps) => {
        const code = children.props.children.trim();

        const language =
          props.className?.replace(/language-/, "") || "javascript";

        return (
          <Highlight theme={PrismTheme} code={code} language={language}>
            {({
              className,
              style,
              tokens,
              getLineProps,
              getTokenProps,
            }: PrismProps) => (
              <Box
                component="pre"
                className={className}
                sx={{
                  ...style,
                  backgroundColor: colors.grays[800],
                  borderRadius: 1,
                  fontSize: "0.875rem",
                  marginBottom: "1rem",
                  overflowX: "auto",
                  padding: "0.25rem",
                  whiteSpace: "pre-wrap",
                }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </Box>
            )}
          </Highlight>
        );
      },
    },
    code: {
      props: {
        style: {
          padding: "0.25rem",
          backgroundColor: colors.grays[800],
          color: colors.orange,
          whiteSpace: "pre-wrap",
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
