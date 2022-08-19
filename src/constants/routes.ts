import DiscordLogo from "../assets/imgs/discord.svg";
import GithubLogo from "../assets/imgs/github.svg";
import TwitterLogo from "../assets/imgs/twitter.svg";
import EmailLogo from "../assets/imgs/mail.svg";

import GnosisLogo from "../assets/imgs/clients/gnosis.svg";
import OpolisLogo from "../assets/imgs/clients/opolis.svg";
import StarkwareLogo from "../assets/imgs/clients/starkware.svg";
import BalancerLogo from "../assets/imgs/clients/balancer.svg";
import ParaswapLogo from "../assets/imgs/clients/paraswap.svg";
import EtoroLogo from "../assets/imgs/clients/etoro.svg";
import DoingudLogo from "../assets/imgs/clients/doingud.svg";
import DiversifiLogo from "../assets/imgs/clients/diversifi.svg";
import CompoundLogo from "../assets/imgs/clients/compound.svg";
export interface IconLink {
  path: string;
  icon: string;
}

export interface SocialIconLinks {
  discord: Readonly<IconLink>;
  twitter: Readonly<IconLink>;
  github: Readonly<IconLink>;
  email: Readonly<IconLink>;
}

export interface ClientIconLinks {
  gnosis: Readonly<IconLink>;
  opolis: Readonly<IconLink>;
  starkware: Readonly<IconLink>;
  balancer: Readonly<IconLink>;
  paraswap: Readonly<IconLink>;
  etoro: Readonly<IconLink>;
  doingud: Readonly<IconLink>;
  diversifi: Readonly<IconLink>;
  compound: Readonly<IconLink>;
}

export const socialIconLinks: SocialIconLinks = {
  discord: {
    path: "https://discord.com/invite/bA9ZM7WXZU",
    icon: DiscordLogo,
  },
  twitter: {
    path: "https://twitter.com/dOrg_tech",
    icon: GithubLogo,
  },
  github: {
    path: "https://github.com/dOrgTech",
    icon: TwitterLogo,
  },
  email: {
    path: "mailto:contact@dorg.tech",
    icon: EmailLogo,
  },
};

export const clientIconLinks: ClientIconLinks = {
  gnosis: {
    path: "https://gnosis.io/",
    icon: GnosisLogo,
  },
  opolis: {
    path: "https://opolis.co/",
    icon: OpolisLogo,
  },
  starkware: {
    path: "https://starkware.co/",
    icon: StarkwareLogo,
  },
  balancer: {
    path: "https://balancer.fi/",
    icon: BalancerLogo,
  },
  paraswap: {
    path: "https://www.paraswap.io/",
    icon: ParaswapLogo,
  },
  etoro: {
    path: "https://www.etoro.com/",
    icon: EtoroLogo,
  },
  doingud: {
    path: "https://doingud.com/",
    icon: DoingudLogo,
  },
  diversifi: {
    path: "https://diversificrypto.com/",
    icon: DiversifiLogo,
  },
  compound: {
    path: "https://compound.finance/",
    icon: CompoundLogo,
  },
};
