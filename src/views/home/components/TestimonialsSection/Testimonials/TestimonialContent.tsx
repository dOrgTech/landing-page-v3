import React from "react";
import { styled, Typography } from "@mui/material";
import { colors } from "../../../../../theme"

const PostLink = styled(Typography)({
  color: colors.blue,
  display: "inline",
  lineHeight: 1.25,
  overflowWrap: "break-word",
  "&:hover": {
    opacity: 0.8
  }
})

const ContentTypography = styled(Typography)({
  lineHeight: 1.25,
  fontWeight: 500,
})

const DoinGudText = () => {
  return (
    <ContentTypography variant="subtitle2">
      We are glad to announce our partnership with <PostLink>@dorg_tech</PostLink> and its DAO strong of 60+ devs!
      <br/>
      They will help us build our dream NFT Marketplace where every transaction does good <span role="img" aria-label="sparkles">✨</span>
      <PostLink>$AMOR</PostLink> <PostLink>#Partnership</PostLink> <PostLink>#NFTmarketplace</PostLink> <PostLink>#DAOBuilders</PostLink>
    </ContentTypography>
  )
}

const FhomoneyText = () => {
  return (
    <ContentTypography variant="subtitle2">
      Where would We be without <PostLink>@dorg_tech</PostLink>?
    </ContentTypography>
  )
}

const TabulaText = () => {
  return (
    <ContentTypography variant="subtitle2">
      The Tabula publication is live!
      <br/>
      <br/>
      Have really enjoyed helping to bring this project to life.
      <br/>
      <br/>
      Thanks to the <PostLink>@GnosisGuild</PostLink> and <PostLink>@dOrg_tech</PostLink> team for all of the work you&apos;ve put into it.
    </ContentTypography>
  )
}

const StarkwareText = () => {
  return (
    <ContentTypography variant="subtitle2">
      StarkNet is being built not only by the StarkWare team, but also by a variety of leading teams from the blockchain sphere:
      <br/>
      <PostLink>@nethermindeth</PostLink><br/>
      <PostLink>@OpenZeppelin</PostLink><br/>
      <PostLink>@dOrg_tech</PostLink><br/>
      <PostLink>@shard_labs</PostLink><br/>
      <PostLink>@EquilibriumDeFi</PostLink><br/>
      <PostLink>@ErigonEth</PostLink><br/>
      <br/>
      The <PostLink>#StarkNet</PostLink> ecosystem - have we mentioned it&apos;s growing?
    </ContentTypography>
  )
}

const TezosText = () => {
  return (
    <ContentTypography variant="subtitle2">
      In collaboration with <PostLink>@dOrg_tech</PostLink>, we are excited to announce that Homebase is live on Tezos mainnet! 
      <br/>
      <br/>
      Read more about how to create and manage your own DAOs via Homebase&apos;s user-friendly interface:
      <br/>
      <br/>
      <PostLink>https://news.tezoscommons.org/home...</PostLink>
    </ContentTypography>
  )
}

const AcreInvestText = () => {
  return (
    <ContentTypography variant="subtitle2">
      So proud of our work with <PostLink>@dOrg_tech</PostLink>
      to make Web3 governance beautiful <span role="img" aria-label="smiling face with heart-eyes">😍</span>.
      Check out our custom <PostLink>@discourse</PostLink> integration
      (complete with <PostLink>@sourcecred</PostLink>!).
      This is a public view but access to post and comment is
      <PostLink>$ACRE</PostLink> token gated via our Members Portal App.
      <br/>
      <PostLink>https://forum.acredaos.com</PostLink>
    </ContentTypography>
  )
}

const ZodiacText = () => {
  return (
    <ContentTypography variant="subtitle2">
      And I want to give a special thank you to <PostLink>@cesarbrazon</PostLink> and
      <PostLink>@carlosfebres97</PostLink> from <PostLink>@dOrg_tech</PostLink>.
      We couldn&apos;t have done this without your help.
    </ContentTypography>
  )
}

export const testimonialContent = {
  doinGud: <DoinGudText/>,
  fhomoney: <FhomoneyText/>,
  tabula: <TabulaText/>,
  starkware: <StarkwareText/>,
  tezos: <TezosText/>,
  acreInvest: <AcreInvestText/>,
  zodiac: <ZodiacText/>,
}