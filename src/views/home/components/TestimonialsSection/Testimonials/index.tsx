import { testimonialContent } from "./TestimonialContent";
import { twitterAccounts } from "../../../../../constants/twitterAccounts";
import { TwitterCardProps } from "../../../../../commons/twitter/TwitterCard";
import { CustomerCardProps } from "../../ClientTestimonialsSection/CustomerCard";
import TezosLogo from "../../../../../assets/imgs/clients/tezos.svg";
import StarkwareLogo from "../../../../../assets/imgs/clients/starkware.svg";
import GnosisGuildLogo from "../../../../../assets/imgs/clients/gnosisguild.svg";
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
  {
    account: twitterAccounts.aragon,
    externalLink:
      "https://twitter.com/AragonProject/status/1676291403494866944",
    text: testimonialContent.aragon,
  },
  {
    account: twitterAccounts.gnosis_guild,
    externalLink: "https://twitter.com/GnosisGuild/status/1661036169285582848",
    text: testimonialContent.gnosis_guild,
  },
  {
    account: twitterAccounts.the_real_stone,
    externalLink: "https://twitter.com/TheRealStone/status/1689013057861844992",
    text: testimonialContent.the_real_stone,
  },
];

export const customerTestimonials: CustomerCardProps[] = [
  {
    customerName: "Auryn Macmillan",
    customerRole: "Founder | Gnosis Guild",
    externalLink: "/#/case-studies/gnosis-guild",
    image: GnosisGuildLogo,
    text: `“Since about 2020, my experience with dOrg has been nothing short of positive. As the Founder of Gnosis Guild, I've seen them seamlessly integrate as an extension of our team, treating each member as if they were our own. Their ability to quickly fill gaps during periods of team turnover has been particularly impressive.

    The professionals at dOrg are top-notch, aligning perfectly with our culture at Gnosis. Initially, I had reservations about whether our cultural values would align and how we'd hedge against turnover. However, dOrg dispelled these concerns effectively.
    
    The only challenge we faced was that sometimes the knowledge transfer took a bit longer than expected, but overall, the process was very smooth. Working with dOrg has been an enjoyable and valuable experience and we look forward to continued collaboration.”`,
  },
  {
    customerName: "Corey Soreff",
    customerRole: "Executive Director, Tezos Commons Foundation",
    externalLink: "/#/case-studies/tezos",
    image: TezosLogo,
    text: `“Working with the dOrg team over the past few years has been a pleasure. They consistently deliver high-quality software on time and within budget, demonstrating exceptional technical expertise and a commitment to client success.”`,
  },
  {
    customerName: "Adi Shildan",
    customerRole: "Product Manager, Starkware Industries",
    externalLink: "/#/case-studies/starkware",
    image: StarkwareLogo,
    text: `“I asked a few people who had more interaction with dOrg than myself, and the general feedback is that our requests were answered in a professional manner, though sometimes there are delays in delivering and it's not always clear why there are delays.”`,
  },
];
