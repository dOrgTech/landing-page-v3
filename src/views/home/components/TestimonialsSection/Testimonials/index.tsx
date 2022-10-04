import { testimonialContent } from "./TestimonialContent";
import { twitterAccounts } from "../../../../../constants/twitterAccounts";
import { TwitterCardProps } from "../../../../../commons/twitter/TwitterCard";

export const testimonials: TwitterCardProps[] = [
  {
    account: twitterAccounts.doinGud,
    externalLink: "https://twitter.com/DoinGudHQ/status/1403380341239390212",
    text: testimonialContent.doinGud,
  },
  {
    account: twitterAccounts.tezos,
    externalLink: "https://twitter.com/TezosCommons/status/1435241508832092165",
    text: testimonialContent.tezos,
  },
  {
    account: twitterAccounts.starkware,
    externalLink:
      "https://mobile.twitter.com/StarkWareLtd/status/1445440226436993025",
    text: testimonialContent.starkware,
  },
  {
    account: twitterAccounts.fhomoney,
    externalLink: "https://twitter.com/fhomoney/status/1476228453980585984",
    text: testimonialContent.fhomoney,
  },
  // {
  //   account: twitterAccounts.auryn,
  //   externalLink:
  //     "https://mobile.twitter.com/auryn_macmillan/status/1437803822215274498",
  //   text: testimonialContent.zodiac,
  // },
  {
    account: twitterAccounts.cent,
    externalLink: "https://twitter.com/Cent/status/1530209860876394496",
    text: testimonialContent.cent,
  },
  {
    account: twitterAccounts.auryn,
    externalLink:
      "https://mobile.twitter.com/auryn_macmillan/status/1550298154515709953",
    text: testimonialContent.tabula,
  },
  {
    account: twitterAccounts.acreInvest,
    externalLink:
      "https://mobile.twitter.com/ACREinvest/status/1511125211889950722",
    text: testimonialContent.acreInvest,
  },
];
