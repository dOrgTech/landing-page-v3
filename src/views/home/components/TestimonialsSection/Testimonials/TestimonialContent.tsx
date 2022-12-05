import React from "react";
import { Typography } from "@mui/material";
import { PostLink } from "../../../../../commons/twitter/PostLink";

const ContentTypography = {
  lineHeight: 1.25,
  fontWeight: 500,
};

const DoinGudText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      We are glad to announce our partnership with{" "}
      <PostLink>@dorg_tech</PostLink> and its DAO strong of 60+ devs!
      <br />
      They will help us build our dream NFT Marketplace where every transaction
      does good{" "}
      <span role="img" aria-label="sparkles">
        ✨
      </span>
      <PostLink>$AMOR</PostLink> <PostLink>#Partnership</PostLink>{" "}
      <PostLink>#NFTmarketplace</PostLink> <PostLink>#DAOBuilders</PostLink>
    </Typography>
  );
};

const FhomoneyText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      Where would We be without <PostLink>@dorg_tech</PostLink>?t
    </Typography>
  );
};

const TabulaText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      The Tabula publication is live!
      <br />
      <br />
      Have really enjoyed helping to bring this project to life.
      <br />
      <br />
      Thanks to the <PostLink>@GnosisGuild</PostLink> and{" "}
      <PostLink>@dOrg_tech</PostLink> team for all of the work you&apos;ve put
      into it.
    </Typography>
  );
};

const StarkwareText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      StarkNet is being built not only by the StarkWare team, but also by a
      variety of leading teams from the blockchain sphere:
      <br />
      <PostLink>@nethermindeth</PostLink>
      <br />
      <PostLink>@OpenZeppelin</PostLink>
      <br />
      <PostLink>@dOrg_tech</PostLink>
      <br />
      <PostLink>@shard_labs</PostLink>
      <br />
      <PostLink>@EquilibriumDeFi</PostLink>
      <br />
      <PostLink>@ErigonEth</PostLink>
      <br />
      <br />
      The <PostLink>#StarkNet</PostLink> ecosystem - have we mentioned it&apos;s
      growing?
    </Typography>
  );
};

const TezosText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      In collaboration with <PostLink>@dOrg_tech</PostLink>, we are excited to
      announce that Homebase is live on Tezos mainnet!
      <br />
      <br />
      Read more about how to create and manage your own DAOs via Homebase&apos;s
      user-friendly interface:
      <br />
      <br />
      <PostLink>https://news.tezoscommons.org/home...</PostLink>
    </Typography>
  );
};

const AcreInvestText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      So proud of our work with <PostLink>@dOrg_tech</PostLink>
      to make Web3 governance beautiful{" "}
      <span role="img" aria-label="smiling face with heart-eyes">
        😍
      </span>
      . Check out our custom <PostLink>@discourse</PostLink> integration
      (complete with <PostLink>@sourcecred</PostLink>!). This is a public view
      but access to post and comment is
      <PostLink>$ACRE</PostLink> token gated via our Members Portal App.
      <br />
      <PostLink>https://forum.acredaos.com</PostLink>
    </Typography>
  );
};

// const ZodiacText = () => {
//   return (
//     <Typography  variant="subtitle2">
//       And I want to give a special thank you to <PostLink>@cesarbrazon</PostLink> and
//       <PostLink>@carlosfebres97</PostLink> from <PostLink>@dOrg_tech</PostLink>.
//       We couldn&apos;t have done this without your help.
//     </Typography>
//   )
// }

const CentText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      We’ve partnered with
      <PostLink>@dOrg_tech</PostLink>
      to launch Hive (<PostLink>http://hive.cent.co</PostLink>). Hive is a new
      way to explore relationships on the Ethereum blockchain. It shows you a
      ranked list of people that share the same NFT collections as you—your
      Hive.
    </Typography>
  );
};

export const testimonialContent = {
  doinGud: <DoinGudText />,
  fhomoney: <FhomoneyText />,
  tabula: <TabulaText />,
  starkware: <StarkwareText />,
  tezos: <TezosText />,
  acreInvest: <AcreInvestText />,
  cent: <CentText />,
};
