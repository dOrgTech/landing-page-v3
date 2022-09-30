import DiscordLogo from "../assets/imgs/discord.svg";
import GithubLogo from "../assets/imgs/github.svg";
import TwitterLogo from "../assets/imgs/twitter.svg";
import EmailLogo from "../assets/imgs/mail.svg";

import GnosisLogo from "../assets/imgs/clients/gnosis.svg";
import MessariLogo from "../assets/imgs/clients/messari.svg";
import AcredaosLogo from "../assets/imgs/clients/acredaos.svg";
import EthereumFoundationLogo from "../assets/imgs/clients/ethereumfoundation.svg";
import CoordinapeLogo from "../assets/imgs/clients/coordinape.svg";
import EcoLogo from "../assets/imgs/clients/eco.svg";
import AmnestyLogo from "../assets/imgs/clients/amnesty.svg";
import SafeLogo from "../assets/imgs/clients/safe.svg";
// import GnosisguildLogo from "../assets/imgs/clients/gnosisguild.svg";
import OpolisLogo from "../assets/imgs/clients/opolis.svg";
import StarkwareLogo from "../assets/imgs/clients/starkware.svg";
import BalancerLogo from "../assets/imgs/clients/balancer.svg";
import ParaswapLogo from "../assets/imgs/clients/paraswap.svg";
import EtoroLogo from "../assets/imgs/clients/etoro.svg";
import DoingudLogo from "../assets/imgs/clients/doingud.svg";
// import DiversifiLogo from "../assets/imgs/clients/diversifi.svg";
import CompoundLogo from "../assets/imgs/clients/compound.svg";
import BoardroomLogo from "../assets/imgs/clients/boardroom.svg";
import CentLogo from "../assets/imgs/clients/cent.png";
import TheGraphLogo from "../assets/imgs/clients/thegraph.svg";
import SovrynLogo from "../assets/imgs/clients/sovryn.svg";
import StakedusLogo from "../assets/imgs/clients/stakedus.svg";
import AragonLogo from "../assets/imgs/clients/aragon.svg";
import BadgerLogo from "../assets/imgs/clients/badger.svg";
import DaostackLogo from "../assets/imgs/clients/daostack.svg";
import DxdaoLogo from "../assets/imgs/clients/dxdao.svg";
import MindsLogo from "../assets/imgs/clients/minds.svg";
import NearLogo from "../assets/imgs/clients/near.svg";
import RaribleLogo from "../assets/imgs/clients/rarible.svg";
import TezosLogo from "../assets/imgs/clients/tezos.svg";
import PolywrapLogo from "../assets/imgs/clients/polywrap.svg";
import OperaLogo from "../assets/imgs/clients/opera.svg";

export interface IconLink {
  path: string;
  icon: string;
  name: string;
}

export interface SocialIconLinks {
  discord: Readonly<IconLink>;
  twitter: Readonly<IconLink>;
  github: Readonly<IconLink>;
  email: Readonly<IconLink>;
}

export interface ClientIconLinks {
  gnosis: Readonly<IconLink>;
  messari: Readonly<IconLink>;
  acredaos: Readonly<IconLink>;
  ethereumfoundation: Readonly<IconLink>;
  coordinape: Readonly<IconLink>;
  eco: Readonly<IconLink>;
  amnesty: Readonly<IconLink>;
  safe: Readonly<IconLink>;
  // gnosisguild: Readonly<IconLink>;
  opolis: Readonly<IconLink>;
  starkware: Readonly<IconLink>;
  balancer: Readonly<IconLink>;
  paraswap: Readonly<IconLink>;
  etoro: Readonly<IconLink>;
  doingud: Readonly<IconLink>;
  // diversifi: Readonly<IconLink>;
  compound: Readonly<IconLink>;
  boardroom: Readonly<IconLink>;
  cent: Readonly<IconLink>;
  theGraph: Readonly<IconLink>;
  sovryn: Readonly<IconLink>;
  stakedus: Readonly<IconLink>;
  aragon: Readonly<IconLink>;
  badger: Readonly<IconLink>;
  daostack: Readonly<IconLink>;
  dxdao: Readonly<IconLink>;
  minds: Readonly<IconLink>;
  near: Readonly<IconLink>;
  rarible: Readonly<IconLink>;
  tezos: Readonly<IconLink>;
  polywrap: Readonly<IconLink>;
  opera: Readonly<IconLink>;
}

export const socialIconLinks: SocialIconLinks = {
  discord: {
    path: "https://discord.com/invite/bA9ZM7WXZU",
    icon: DiscordLogo,
    name: "Discord",
  },
  twitter: {
    path: "https://twitter.com/dOrg_tech",
    icon: TwitterLogo,
    name: "Twitter",
  },
  github: {
    path: "https://github.com/dOrgTech",
    icon: GithubLogo,
    name: "Github",
  },
  email: {
    path: "mailto:contact@dorg.tech",
    icon: EmailLogo,
    name: "Email",
  },
};

export const clientIconLinks: ClientIconLinks = {
  ethereumfoundation: {
    path: "https://ethereum.org/en/foundation/",
    icon: EthereumFoundationLogo,
    name: "Ethereum Foundation",
  },
  gnosis: {
    path: "https://gnosis.io/",
    icon: GnosisLogo,
    name: "Gnosis",
  },
  messari: {
    path: "https://messari.io/",
    icon: MessariLogo,
    name: "Messari",
  },
  acredaos: {
    path: "https://acredaos.com/",
    icon: AcredaosLogo,
    name: "Acre Daos",
  },
  coordinape: {
    path: "https://coordinape.com/",
    icon: CoordinapeLogo,
    name: "Coordinape",
  },
  eco: {
    path: "https://eco.com/",
    icon: EcoLogo,
    name: "Eco",
  },
  starkware: {
    path: "https://starkware.co/",
    icon: StarkwareLogo,
    name: "Starkware",
  },
  amnesty: {
    path: "https://amnesty.org/en/",
    icon: AmnestyLogo,
    name: "Amnesty",
  },
  safe: {
    path: "https://safe.global/",
    icon: SafeLogo,
    name: "Safe",
  },
  // gnosisguild: {
  //   path: "https://gnosisguild.org/",
  //   icon: GnosisguildLogo,
  //   name: "Gnosis Guild",
  // },
  opolis: {
    path: "https://opolis.co/",
    icon: OpolisLogo,
    name: "Opolis",
  },
  balancer: {
    path: "https://balancer.fi/",
    icon: BalancerLogo,
    name: "Balancer",
  },
  paraswap: {
    path: "https://www.paraswap.io/",
    icon: ParaswapLogo,
    name: "Paraswap",
  },
  etoro: {
    path: "https://www.etoro.com/",
    icon: EtoroLogo,
    name: "Etoro",
  },
  doingud: {
    path: "https://doingud.com/",
    icon: DoingudLogo,
    name: "Doingud",
  },
  // diversifi: {
  //   path: "https://diversificrypto.com/",
  //   icon: DiversifiLogo,
  //   name: "Diversifi",
  // },
  compound: {
    path: "https://compound.finance/",
    icon: CompoundLogo,
    name: "Compound",
  },
  boardroom: {
    path: "https://boardroom.io/",
    icon: BoardroomLogo,
    name: "Boardroom",
  },
  cent: {
    path: "https://cent.co",
    icon: CentLogo,
    name: "Cent",
  },
  theGraph: {
    path: "https://thegraph.com/",
    icon: TheGraphLogo,
    name: "The Graph",
  },
  sovryn: {
    path: "https://sovryn.app/",
    icon: SovrynLogo,
    name: "Sovryn",
  },
  stakedus: {
    path: "https://staked.us/",
    icon: StakedusLogo,
    name: "Stakedus",
  },
  aragon: {
    path: "https://aragon.org//",
    icon: AragonLogo,
    name: "Aragon",
  },
  badger: {
    path: "https://badger.com/",
    icon: BadgerLogo,
    name: "Badger",
  },
  daostack: {
    path: "https://daostack.io/",
    icon: DaostackLogo,
    name: "Daostack",
  },
  dxdao: {
    path: "https://dxdao.eth.link/",
    icon: DxdaoLogo,
    name: "Dxdao",
  },
  minds: {
    path: "https://minds.com/",
    icon: MindsLogo,
    name: "Minds",
  },
  near: {
    path: "https://near.org/",
    icon: NearLogo,
    name: "Near",
  },
  rarible: {
    path: "https://rarible.com/",
    icon: RaribleLogo,
    name: "Rarible",
  },
  tezos: {
    path: "https://tezos.com/",
    icon: TezosLogo,
    name: "Tezos",
  },
  polywrap: {
    path: "https://polywrap.io/",
    icon: PolywrapLogo,
    name: "Polywrap",
  },
  opera: {
    path: "https://opera.com/",
    icon: OperaLogo,
    name: "Opera",
  },
};
