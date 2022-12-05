import React, { MouseEvent } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { colors } from "../../theme";
import TwitterIcon from "../../assets/imgs/twitter.svg";
import { TwitterAccountProps } from "../../constants/twitterAccounts";

export interface TwitterCardProps {
  account: TwitterAccountProps;
  externalLink: string;
  text: React.ReactNode;
  image?: string;
  color?: string;
  clickable?: boolean;
}

export const TwitterCard: React.FC<TwitterCardProps> = ({
  account,
  externalLink,
  text,
  image,
  color,
  clickable,
}) => {
  const { avatar, name, username } = account;

  const handleClick = (e: MouseEvent) => {
    if (!clickable) {
      e.preventDefault();
    }
  };

  return (
    <Link
      underline="none"
      href={externalLink}
      target="_blank"
      draggable={false}
      onClick={(e) => handleClick(e)}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          bgcolor: colors.black,
          border: `4px solid ${color || colors.grays[600]}`,
          borderRadius: "24px",
          color: colors.white,
          cursor: "pointer",
          p: 2,
          textAlign: "left",
          transition: "backgroundColor 0.25s ease-in-out",
          "&:hover": {
            bgcolor: colors.grays[800],
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <img src={avatar} alt={username} />
            </Box>
            <Box>
              <Typography variant="body2" lineHeight={1.25} fontWeight={800}>
                {name}
              </Typography>
              <Typography
                variant="body2"
                lineHeight={1.25}
                fontWeight={100}
                color={colors.grays[400]}
              >
                {username}
              </Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              opacity: 0.8,
              transition: "opacity 0.25s ease-in-out",
              width: 20,
              "&:hover": {
                opacity: 0.6,
              },
            }}
          >
            <img src={TwitterIcon} alt="Twitter" />
          </Box>
        </Stack>
        {text}
        {image && (
          <img
            src={image}
            alt=""
            style={{ borderRadius: 8, pointerEvents: "none" }}
          />
        )}
      </Stack>
    </Link>
  );
};
