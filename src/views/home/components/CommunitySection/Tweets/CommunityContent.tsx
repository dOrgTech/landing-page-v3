import React from "react";
import { styled, Typography } from "@mui/material";
import { PostLink } from "../../../../../commons/twitter/PostLink"

const ContentTypography = styled(Typography)({
  lineHeight: 1.25,
  fontWeight: 500,
})

const MagentaText = () => {
  return (
    <ContentTypography variant="subtitle2">
      <span role="image" aria-label="speech balloon">💬</span> &quot;The
      most striking thing about dOrg is everyone here are incredible people. 
      Brilliant and human-centered in why we are doing what we are doing.&quot;
      Learn more about dOrg&apos;s <PostLink>@magentaceiba</PostLink> and her
      thoughts on the DAO here: <PostLink>https://bit.ly/3j4NKhW</PostLink>
    </ContentTypography>
  )
}

const LinusText = () => {
  return (
    <ContentTypography variant="subtitle2">
      Merry Christmas to me <span role="image" aria-label="smiley glasses">😎</span> <PostLink>@dOrg_tech</PostLink> <PostLink>@TheMetaFactory</PostLink>
    </ContentTypography>
  )
}

const PhilText = () => {
  return (
    <ContentTypography variant="subtitle2">
      Nous sommes dOrg <span role="image" aria-label="heart">❤️</span>
      <br/>
      <br/>
      With <PostLink>@dOrgJelli</PostLink> <PostLink>@MrsBadgerface</PostLink> <PostLink>@DaoAdvocate</PostLink> <PostLink>@ronboger</PostLink>
       - <PostLink>@dOrg_tech</PostLink> at <PostLink>@EthCC</PostLink> <PostLink>@TheDAOist_</PostLink>
    </ContentTypography>
  )
}

const NewsletterText = () => {
  return (
    <ContentTypography variant="subtitle2">
      Check out the latest installment of our <span role="image" aria-label="spark">✨</span>occasional<span role="image" aria-label="spark">✨</span> newsletter, where we discuss:
      <br/>
      <span role="image" aria-label="bee">🐝</span> Swarm Intelligence
      <br/>
      <span role="image" aria-label="running shoe">👟</span> Automata Sneakers
      <br/>
      <span role="image" aria-label="see-no-evil monkey">🙈</span> The Opposite of FOMO
      <br/>
      ...and a lot more ;)
      <br/>
      <PostLink>https://bit.ly/3BUBK8F</PostLink>
    </ContentTypography>
  )
}

const GivethText = () => {
  return (
    <ContentTypography variant="subtitle2">
      Awwww. Feeling the love remotely joining <PostLink>@dOrg_tech</PostLink>&apos;s unconference day in the 
      <PostLink>@Givethio</PostLink> house in Spain where one of the lovely <PostLink>@commonsstack</PostLink>
      and <PostLink>@tecmns</PostLink> folk that I know is hosting and we had one of those &quot;hello!&quot;
      happy moments <span role="image" aria-label="smile with heart-eyes">😍</span>
    </ContentTypography>
  )
}

export const communityContent = {
  magenta: <MagentaText/>,
  linus: <LinusText/>,
  phil_h: <PhilText/>,
  newsletter: <NewsletterText/>,
  giveth: <GivethText/>,
}