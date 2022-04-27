import DiscordLogo from "../assets/imgs/discord.svg";
import GithubLogo from "../assets/imgs/github.svg";
import TwitterLogo from "../assets/imgs/twitter.svg";
import EmailLogo from "../assets/imgs/mail.svg";
import TimeLogo from "../assets/imgs/time.svg";
import MITLogo from "../assets/imgs/mit.svg";
import HackernoonLogo from "../assets/imgs/hackernoon.svg";
import CoinDeskLogo from "../assets/imgs/coinDesk.svg";
import CoinTelegraphLogo from "../assets/imgs/cointelegraph.svg";

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

export interface IconLinks {
  time: Readonly<IconLink>;
  coinDesk: Readonly<IconLink>;
  hackernoon: Readonly<IconLink>;
  mit: Readonly<IconLink>;
  coinTelegraph: Readonly<IconLink>;
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

export const iconLinks: IconLinks = {
  time: {
    path: "",
    icon: TimeLogo,
  },
  coinDesk: {
    path: "",
    icon: CoinDeskLogo,
  },
  hackernoon: {
    path: "",
    icon: HackernoonLogo,
  },
  mit: {
    path: "",
    icon: MITLogo,
  },
  coinTelegraph: {
    path: "",
    icon: CoinTelegraphLogo,
  },
};
