import React from "react";
import { Typography } from "@mui/material";
import { PostLink } from "../../../../../commons/twitter/PostLink";

const ContentTypography = {
  lineHeight: 1.25,
  fontWeight: 500,
};

const MagentaText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      <span role="img" aria-label="speech balloon">
        💬
      </span>{" "}
      &ldquo;The most striking thing about dOrg is everyone here are incredible
      people. Brilliant and human-centered in why we are doing what we are
      doing.&rdquo; Learn more about dOrg&apos;s{" "}
      <PostLink>@magentaceiba</PostLink> and her thoughts on the DAO here:{" "}
      <PostLink>https://bit.ly/3j4NKhW</PostLink>
    </Typography>
  );
};

const LinusText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      Merry Christmas to me{" "}
      <span role="img" aria-label="smiley glasses">
        😎
      </span>{" "}
      <PostLink>@dOrg_tech</PostLink> <PostLink>@TheMetaFactory</PostLink>
    </Typography>
  );
};

const PhilText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      Nous sommes dOrg{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
      <br />
      <br />
      With <PostLink>@dOrgJelli</PostLink> <PostLink>@MrsBadgerface</PostLink>{" "}
      <PostLink>@DaoAdvocate</PostLink> <PostLink>@ronboger</PostLink>-{" "}
      <PostLink>@dOrg_tech</PostLink> at <PostLink>@EthCC</PostLink>{" "}
      <PostLink>@TheDAOist_</PostLink>
    </Typography>
  );
};

const NewsletterText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      Check out the latest installment of our{" "}
      <span role="img" aria-label="spark">
        ✨
      </span>
      occasional
      <span role="img" aria-label="spark">
        ✨
      </span>{" "}
      newsletter, where we discuss:
      <br />
      <span role="img" aria-label="bee">
        🐝
      </span>{" "}
      Swarm Intelligence
      <br />
      <span role="img" aria-label="running shoe">
        👟
      </span>{" "}
      Automata Sneakers
      <br />
      <span role="img" aria-label="see-no-evil monkey">
        🙈
      </span>{" "}
      The Opposite of FOMO
      <br />
      ...and a lot more ;)
      <br />
      <PostLink>https://bit.ly/3BUBK8F</PostLink>
    </Typography>
  );
};

const GivethText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      Awwww. Feeling the love remotely joining <PostLink>@dOrg_tech</PostLink>
      &apos;s unconference day in the <PostLink>@Givethio</PostLink> house in
      Spain where one of the lovely <PostLink>@commonsstack</PostLink> and{" "}
      <PostLink>@tecmns</PostLink> folk that I know is hosting and we had one of
      those &quot;hello!&quot; happy moments{" "}
      <span role="img" aria-label="smile with heart-eyes">
        😍
      </span>
    </Typography>
  );
};

const UnconferenceText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      Our unconference day was a success!{" "}
      <span role="img" aria-label="raised hands">
        🙌🏻
      </span>
      <br />
      <br />
      We shared new ideas, projects and achievements among dOrg members over
      drinks and snacks.
      <br />
      <br />
      It was an amazing session!{" "}
      <span role="img" aria-label="rocket">
        🚀
      </span>
    </Typography>
  );
};

const GranCanariaText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      We had a blast at our presentation in Gran Canaria!{` `}
      <span role="img" aria-label="desert-island">
        🏝
      </span>
      <br />
      <br />
      We were invited by Thriving Nomads and it was quite an experience, check
      out the attached photos to feel the vibe of the event!{` `}
      <span role="img" aria-label="lightning">
        ⚡️
      </span>
    </Typography>
  );
};

const EthBerlinText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      Thanks to <PostLink>@ETHBerlin</PostLink> for an amazing weekend!
      <br />
      <br />
      Inspiring talks, great projects and talented people{` `}
      <span role="img" aria-label="comet">
        ☄️
      </span>
      <br />
      <br />
      Check out some evidence of this wonderful experience{` `}
      <span role="img" aria-label="backhand index finger pointing down">
        👇
      </span>
    </Typography>
  );
};

const MetaFamText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      Check out our talk at Metafest2 where{` `}
      <PostLink>@namestyd</PostLink> walks through how dOrg works why builders
      join.
      <br />
      <br />
      Thanks for the invitation{` `}
      <PostLink>@MetaFam</PostLink>!{` `}
      <span role="img" aria-label="octopus">
        🐙
      </span>
    </Typography>
  );
};

const KlerosText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      Thanks to <PostLink>@federicoast</PostLink> and{" "}
      <PostLink>@JayBuidl</PostLink>
      {` `}
      for speaking at yesterday&apos;s All Hands Meeting about the latest doings
      of <PostLink>@Kleros_io</PostLink>
      <br />
      <br />
      We had a great time delving into the technical and game theoretic
      underpinnings of decentralized arbitration{` `}
      <span role="img" aria-label="scales">
        ⚖️
      </span>
    </Typography>
  );
};

const NearText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      Thanks{` `}
      <PostLink>@NEARProtocol</PostLink>
      {` `}
      for having us tonight and allowing us to share more about dOrg and our
      mission
      <br />
      <PostLink>@hgarciaalcala</PostLink>
      {` `}
      <PostLink>@nic_maq</PostLink>
    </Typography>
  );
};

const MackenzieText = () => {
  return (
    <Typography
      component="h3"
      variant="subtitle2"
      sx={{ ...ContentTypography }}
    >
      <span role="img" aria-label="speech balloon">
        💬
      </span>{" "}
      &ldquo;I think people are looking for more sustainable and fulfilling
      careers [...] DAOs, including dOrg, are attracting people of all ages,
      backgrounds and locations.&rdquo;
      <br />
      <br />
      Read on: <PostLink>https://bit.ly/3FcEKi3</PostLink>
    </Typography>
  );
};

export const communityContent = {
  magenta: <MagentaText />,
  linus: <LinusText />,
  newsletter: <NewsletterText />,
  phil_h: <PhilText />,
  unconference: <UnconferenceText />,
  granCanaria: <GranCanariaText />,
  giveth: <GivethText />,
  ethBerlin: <EthBerlinText />,
  metaFam: <MetaFamText />,
  kleros: <KlerosText />,
  near: <NearText />,
  mackenzie: <MackenzieText />,
};
