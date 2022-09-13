import React from "react";
import { testimonialContent } from "./TestimonialContent";
import { testimonialAccounts, TestimonialAccountProps } from "./TestimonialAccounts";

export interface TestimonialsProps {
  account: TestimonialAccountProps;
  externalLink: string;
  testimonialText: React.ReactNode;
}

export const testimonials = [
  {
    account: testimonialAccounts.doinGud,
    externalLink: "https://twitter.com/DoinGudHQ/status/1403380341239390212",
    testimonialText: testimonialContent.doinGud,
  },
  {
    account: testimonialAccounts.fhomoney,
    externalLink: "https://twitter.com/fhomoney/status/1476228453980585984",
    testimonialText: testimonialContent.fhomoney,
  },
  {
    account: testimonialAccounts.auryn,
    externalLink: "https://mobile.twitter.com/auryn_macmillan/status/1550298154515709953",
    testimonialText: testimonialContent.tabula,
  },
  {
    account: testimonialAccounts.starkware,
    externalLink: "https://mobile.twitter.com/StarkWareLtd/status/1445440226436993025",
    testimonialText: testimonialContent.starkware,
  },
  {
    account: testimonialAccounts.tezos,
    externalLink: "https://twitter.com/fhomoney/status/1476228453980585984",
    testimonialText: testimonialContent.tezos,
  },
  {
    account: testimonialAccounts.acreInvest,
    externalLink: "https://mobile.twitter.com/ACREinvest/status/1511125211889950722",
    testimonialText: testimonialContent.acreInvest,
  },
  {
    account: testimonialAccounts.auryn,
    externalLink: "https://mobile.twitter.com/auryn_macmillan/status/1437803822215274498",
    testimonialText: testimonialContent.zodiac,
  },
]