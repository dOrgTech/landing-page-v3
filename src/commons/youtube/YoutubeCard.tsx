import React, { MouseEvent } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { colors } from "../../theme";
import YoutubeIcon from "../../assets/imgs/youtube.svg";

export interface YoutubeCardProps {
  videoId: string;
  text: string;
  description: string;
  color?: string;
  clickable?: boolean;
}

export const YoutubeCard: React.FC<YoutubeCardProps> = ({
  videoId,
  text,
  description,
  color,
  clickable,
}) => {
  const handleClick = (e: MouseEvent) => {
    if (!clickable) {
      e.preventDefault();
    }
  };

  const youtubeStructuredData = {
    "@context": "https://schema.org",
    headline: text,
    image: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    videoId,
  };

  return (
    <Link
      underline='none'
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target='_blank'
      draggable={false}
      onClick={(e) => handleClick(e)}>
      <script type='application/ld+json'>
        {JSON.stringify(youtubeStructuredData)}
      </script>

      <Stack
        direction='column'
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
        }}>
        <Stack direction='row' justifyContent='space-between'>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 999,
                overflow: "hidden",
              }}>
              <img
                loading='lazy'
                src={
                  "https://yt3.googleusercontent.com/__In3DfKPlHhQaHxrYRH15egj85TrwkH_aekDdArP3oyQ2T68saLLTKwhMGNFlLNHBXfCTmL=s176-c-k-c0x00ffffff-no-rj"
                }
                alt={videoId}
              />
            </Box>
            <Box>
              <Typography variant='body2' lineHeight={1.25} fontWeight={800}>
                dOrg
              </Typography>
              <Typography
                variant='body2'
                lineHeight={1.25}
                fontWeight={100}
                color={colors.grays[300]}>
                @dOrg_tech
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
            }}>
            <img loading='lazy' src={YoutubeIcon} alt='Youtube' />
          </Box>
        </Stack>

        <Typography variant='h6' lineHeight={1.25} fontWeight={800}>
          {text}
        </Typography>
        <Typography variant='body2' lineHeight={1.25} fontWeight={800}>
          {description}
        </Typography>

        <img
          loading='lazy'
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt={`episode-${videoId}`}
          style={{ borderRadius: 8, pointerEvents: "none" }}
        />
      </Stack>
    </Link>
  );
};
