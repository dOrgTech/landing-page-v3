/** @format */

import DiscordLogo from "../assets/imgs/discord.svg";
import GithubLogo from "../assets/imgs/github.svg";
import YoutubeLogo from "../assets/imgs/youtube.svg";
import TwitterLogo from "../assets/imgs/twitter.svg";
import EmailLogo from "../assets/imgs/mail.svg";
import LinkedIn from "../assets/imgs/linkedIn.svg";
import Tape from "../assets/imgs/tape.svg";

import AcredaosLogo from "../assets/imgs/clients/acredaos.svg";
import AmnestyLogo from "../assets/imgs/clients/amnesty.svg";
import AragonLogo from "../assets/imgs/clients/aragon.svg";
import BadgerLogo from "../assets/imgs/clients/badger.svg";
import BalancerLogo from "../assets/imgs/clients/balancer.svg";
import BoardroomLogo from "../assets/imgs/clients/boardroom.svg";
import CentLogo from "../assets/imgs/clients/cent.png";
import CompoundLogo from "../assets/imgs/clients/compound.svg";
import CoordinapeLogo from "../assets/imgs/clients/coordinape.svg";
import DaostackLogo from "../assets/imgs/clients/daostack.svg";
import RhinofiLogo from "../assets/imgs/clients/rhinofi.svg";
// import DoingudLogo from "../assets/imgs/clients/doingud.svg";
import DxdaoLogo from "../assets/imgs/clients/dxdao.svg";
import EcoLogo from "../assets/imgs/clients/eco.svg";
import EthereumFoundationLogo from "../assets/imgs/clients/ethereumfoundation.svg";
import EtoroLogo from "../assets/imgs/clients/etoro.svg";
import GnosisLogo from "../assets/imgs/clients/gnosis.svg";
import GnosisguildLogo from "../assets/imgs/clients/gg.svg";
import MessariLogo from "../assets/imgs/clients/messari.svg";
import MindsLogo from "../assets/imgs/clients/minds.svg";
import NearLogo from "../assets/imgs/clients/near.svg";
import OperaLogo from "../assets/imgs/clients/opera.svg";
import OpolisLogo from "../assets/imgs/clients/opolis.svg";
import ParaswapLogo from "../assets/imgs/clients/paraswap.svg";
import AgentCoinLogo from "../assets/imgs/clients/agent-coin.png";
import RaribleLogo from "../assets/imgs/clients/rarible.svg";
import SafeLogo from "../assets/imgs/clients/safe.svg";
import SovrynLogo from "../assets/imgs/clients/sovryn.svg";
import StakedusLogo from "../assets/imgs/clients/stakedus.svg";
import StarkWareLogo from "../assets/imgs/clients/starkware.svg";
import TezosLogo from "../assets/imgs/clients/tezos.svg";
import GoodDollarLogo from "../assets/imgs/clients/goodDollar.svg";
import SaturnSeriesLogo from "../assets/imgs/clients/saturnSeries.svg";
import PerplexityLogo from "../assets/imgs/clients/perplexity.svg";
// import ZodiacLogo from "../assets/imgs/projects/zodiac.svg";
import DaoDropsLogo from "../assets/imgs/projects/daoDrops.svg";
import TheGraphLogo from "../assets/imgs/clients/thegraph.svg";

import InchLogo from "../assets/imgs/clients/1inch.svg";
import AuthLogo from "../assets/imgs/clients/auth.svg";
import BinanceLogo from "../assets/imgs/clients/binance.svg";
// import BloomLogo from "../assets/imgs/clients/bloom.svg";
import ConsesysLogo from "../assets/imgs/clients/consensys.svg";
import KlerosLogo from "../assets/imgs/clients/kleros.svg";
import LensLogo from "../assets/imgs/clients/lens.svg";
import MetagameLogo from "../assets/imgs/clients/metagame.svg";
import OwncoLogo from "../assets/imgs/clients/ownco.svg";
import SismoLogo from "../assets/imgs/clients/sismo.svg";
import SuperfluidLogo from "../assets/imgs/clients/superfluid.svg";
import SnapshotLogo from "../assets/imgs/clients/snapshot.svg";
import UtopiaLogo from "../assets/imgs/clients/utopia.svg";
import VocdoniLogo from "../assets/imgs/clients/vocdoni.svg";
import BrianLogo from "../assets/imgs/projects/briania.svg";

import FigmentLogo from "../assets/imgs/companies/figment.svg";
import OracleLogo from "../assets/imgs/companies/oracle.svg";
import MicrosoftLogo from "../assets/imgs/companies/microsoft.svg";
import KleinerLogo from "../assets/imgs/companies/kleiner.svg";
import AWSLogo from "../assets/imgs/companies/aws.svg";
import BarclaysLogo from "../assets/imgs/companies/barclays.svg";
import IBMLogo from "../assets/imgs/companies/ibm.svg";
import KiaLogo from "../assets/imgs/companies/kia.svg";
import MetaLogo from "../assets/imgs/companies/meta.svg";
import MorganLogo from "../assets/imgs/companies/morgan.svg";
// import OscarLogo from "../assets/imgs/companies/oscar.svg";
import PlumroseLogo from "../assets/imgs/companies/plumrose.svg";
import PNCLogo from "../assets/imgs/companies/pnc.svg";
import RappiLogo from "../assets/imgs/companies/rappi.svg";
import WhatsappLogo from "../assets/imgs/companies/whatsapp.svg";
import FayreLogo from "../assets/imgs/case-studies/fayre.svg";

export interface IconLink {
  path: string;
  icon: string;
  name: string;
}

export interface BuildersCompaniesIconLinks {
  messari: Readonly<IconLink>;
  figment: Readonly<IconLink>;
  opolis: Readonly<IconLink>;
  oracle: Readonly<IconLink>;
  microsoft: Readonly<IconLink>;
  kleiner: Readonly<IconLink>;
  whatsapp: Readonly<IconLink>;
  meta: Readonly<IconLink>;
  morgan: Readonly<IconLink>;
  kia: Readonly<IconLink>;
  aws: Readonly<IconLink>;
  barclays: Readonly<IconLink>;
  rappi: Readonly<IconLink>;
  pnc: Readonly<IconLink>;
  plumrose: Readonly<IconLink>;
  ibm: Readonly<IconLink>;
}

export interface SocialIconLinks {
  discord: Readonly<IconLink>;
  twitter: Readonly<IconLink>;
  youtube: Readonly<IconLink>;
  github: Readonly<IconLink>;
  email: Readonly<IconLink>;
  linkedIn: Readonly<IconLink>;
  tape: Readonly<IconLink>;
}

export interface ClientIconLinks {
  acredaos: Readonly<IconLink>;
  amnesty: Readonly<IconLink>;
  daoDrops: Readonly<IconLink>;
  aragon: Readonly<IconLink>;
  badger: Readonly<IconLink>;
  balancer: Readonly<IconLink>;
  boardroom: Readonly<IconLink>;
  cent: Readonly<IconLink>;
  compound: Readonly<IconLink>;
  coordinape: Readonly<IconLink>;
  daostack: Readonly<IconLink>;
  gnosisGuild: Readonly<IconLink>;
  dxdao: Readonly<IconLink>;
  eco: Readonly<IconLink>;
  ethereumfoundation: Readonly<IconLink>;
  etoro: Readonly<IconLink>;
  gnosis: Readonly<IconLink>;
  fayre: Readonly<IconLink>;
  messari: Readonly<IconLink>;
  minds: Readonly<IconLink>;
  near: Readonly<IconLink>;
  opera: Readonly<IconLink>;
  opolis: Readonly<IconLink>;
  paraswap: Readonly<IconLink>;
  agentcoin: Readonly<IconLink>;
  rarible: Readonly<IconLink>;
  rhinofi: Readonly<IconLink>;
  safe: Readonly<IconLink>;
  sovryn: Readonly<IconLink>;
  stakedus: Readonly<IconLink>;
  starkware: Readonly<IconLink>;
  tezos: Readonly<IconLink>;
  theGraph: Readonly<IconLink>;
  goodDollar: Readonly<IconLink>;
  saturnSeries: Readonly<IconLink>;
}
export interface ProjectClientIconLinks {
  zodiac: Readonly<IconLink>;
  starkware: Readonly<IconLink>;
  homebase: Readonly<IconLink>;
  daoDrops: Readonly<IconLink>;
}
export interface ProjectAiIconLinks {
  agentcoin: Readonly<IconLink>;
  perplexity: Readonly<IconLink>;
  brian: Readonly<IconLink>;
  saturnSeries: Readonly<IconLink>;
}
export interface HotSeatGuestIconLinks {
  agentcoin: Readonly<IconLink>;
  utopia: Readonly<IconLink>;
  superfluid: Readonly<IconLink>;
  kleros: Readonly<IconLink>;
  // bloomNetwork: Readonly<IconLink>;
  auth: Readonly<IconLink>;
  vocdoni: Readonly<IconLink>;
  sismo: Readonly<IconLink>;
  ownco: Readonly<IconLink>;
  lens: Readonly<IconLink>;
  metagame: Readonly<IconLink>;
  inch: Readonly<IconLink>;
  etoro: Readonly<IconLink>;
  binance: Readonly<IconLink>;
  consensys: Readonly<IconLink>;
  snapshot: Readonly<IconLink>;
  safe: Readonly<IconLink>;
  // starkware: Readonly<IconLink>;
}

export const socialIconLinks: SocialIconLinks = {
  discord: {
    path: "https://discord.com/invite/TEMzbPNkqf",
    icon: DiscordLogo,
    name: "Discord",
  },
  twitter: {
    path: "https://twitter.com/dOrg_tech",
    icon: TwitterLogo,
    name: "Twitter",
  },
  youtube: {
    path: "https://www.youtube.com/c/dOrg_tech/videos",
    icon: YoutubeLogo,
    name: "Youtube",
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
  linkedIn: {
    path: "https://www.linkedin.com/company/dorg-tech/",
    icon: LinkedIn,
    name: "LinkedIn",
  },
  tape: {
    path: "https://tape.xyz/u/dorg_tech",
    icon: Tape,
    name: "Tape",
  },
};

export const clientIconLinks: ClientIconLinks = {
  ethereumfoundation: {
    path: "https://ethereum.foundation/",
    icon: EthereumFoundationLogo,
    name: "Ethereum Foundation",
  },
  fayre: {
    path: "https://fayre.com/",
    icon: FayreLogo,
    name: "Fayre",
  },
  daoDrops: {
    path: "https://daodrops.io/",
    icon: DaoDropsLogo,
    name: "Dao Drops",
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
    icon: StarkWareLogo,
    name: "StarkWare",
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
  gnosisGuild: {
    path: "https://gnosisguild.org/",
    icon: GnosisguildLogo,
    name: "Gnosis Guild",
  },
  goodDollar: {
    path: "https://www.gooddollar.org/",
    icon: GoodDollarLogo,
    name: "Good Dollar",
  },
  saturnSeries: {
    path: "https://www.saturnseries.com/",
    icon: SaturnSeriesLogo,
    name: "Saturn Series",
  },
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
  // doingud: {
  //   path: "https://doingud.com/",
  //   icon: DoingudLogo,
  //   name: "Doingud",
  // },
  rhinofi: {
    path: "https://rhino.fi/",
    icon: RhinofiLogo,
    name: "Rhino.fi",
  },
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
  agentcoin: {
    path: "https://www.agentcoin.org/",
    icon: AgentCoinLogo,
    name: "Agentcoin",
  },
  opera: {
    path: "https://opera.com/",
    icon: OperaLogo,
    name: "Opera",
  },
};

export const projectClientIconLinks: ProjectClientIconLinks = {
  daoDrops: {
    path: "/#/case-studies/dao-drops",
    icon: DaoDropsLogo,
    name: "Dao Drops",
  },
  homebase: {
    path: "/#/case-studies/tezos",
    icon: TezosLogo,
    name: "Tezos",
  },
  starkware: {
    path: "/#/case-studies/starkware",
    icon: StarkWareLogo,
    name: "StarkWare",
  },
  zodiac: {
    path: "/#/case-studies/gnosis-guild",
    icon: GnosisLogo,
    name: "Zodiac",
  },
};
export const projectAiIconLinks: ProjectAiIconLinks = {
  agentcoin: {
    path: "https://www.agentcoin.org/",
    icon: AgentCoinLogo,
    name: "Agentcoin",
  },
  perplexity: {
    path: "https://www.perplexity.ai/",
    icon: PerplexityLogo,
    name: "Perplexity",
  },
  brian: {
    path: "https://www.brianknows.org/",
    icon: BrianLogo,
    name: "Brian",
  },
  saturnSeries: {
    path: "https://www.saturnseries.com/",
    icon: SaturnSeriesLogo,
    name: "Saturn Series",
  },
};

export const hotSeatIconLinks: HotSeatGuestIconLinks = {
  agentcoin: {
    path: "https://www.agentcoin.org/",
    icon: AgentCoinLogo,
    name: "Agentcoin",
  },
  utopia: {
    path: "https://www.utopialabs.com/",
    icon: UtopiaLogo,
    name: "Utopia",
  },
  superfluid: {
    path: "https://www.superfluid.finance/",
    icon: SuperfluidLogo,
    name: "Superfluid",
  },
  kleros: {
    path: "https://kleros.io/",
    icon: KlerosLogo,
    name: "Kleros",
  },
  // bloomNetwork: {
  //   path: "https://bloomnetwork.org/",
  //   icon: BloomLogo,
  //   name: "Bloom",
  // },
  auth: {
    path: "",
    icon: AuthLogo,
    name: "Auth",
  },
  vocdoni: {
    path: "https://vocdoni.io/",
    icon: VocdoniLogo,
    name: "Vocdoni",
  },
  sismo: {
    path: "https://www.sismo.io/",
    icon: SismoLogo,
    name: "Sismo",
  },
  ownco: {
    path: "https://www.ownco.org/",
    icon: OwncoLogo,
    name: "Ownco",
  },
  lens: {
    path: "https://www.lens.xyz/",
    icon: LensLogo,
    name: "Lens",
  },
  metagame: {
    path: "",
    icon: MetagameLogo,
    name: "Metagame",
  },
  inch: {
    path: "https://app.1inch.io/",
    icon: InchLogo,
    name: "1Inch",
  },
  binance: {
    path: "https://www.binance.com/",
    icon: BinanceLogo,
    name: "Binance",
  },
  consensys: {
    path: "https://consensys.net/",
    icon: ConsesysLogo,
    name: "Consesys",
  },
  snapshot: {
    path: "https://snapshot.org/",
    icon: SnapshotLogo,
    name: "Snapshot",
  },

  // starkware: {
  //   path: "https://starkware.co/",
  //   icon: StarkWareLogo,
  //   name: "StarkWare",
  // },

  safe: {
    path: "https://safe.global/",
    icon: SafeLogo,
    name: "Safe",
  },

  etoro: {
    path: "https://www.etoro.com/",
    icon: EtoroLogo,
    name: "Etoro",
  },
};

export const previousBuildersCompanies: BuildersCompaniesIconLinks = {
  whatsapp: {
    path: "https://whatsapp.com/",
    icon: WhatsappLogo,
    name: "Whatsapp",
  },
  rappi: {
    path: "https://rappi.com/",
    icon: RappiLogo,
    name: "rappi",
  },
  pnc: {
    path: "https://pnc.com",
    icon: PNCLogo,
    name: "PNC",
  },
  plumrose: {
    path: "https://plumrose.com/",
    icon: PlumroseLogo,
    name: "Plumrose",
  },
  morgan: {
    path: "https://morganstanley.com/",
    icon: MorganLogo,
    name: "Morgan Stanley",
  },
  meta: {
    path: "https://meta.com/",
    icon: MetaLogo,
    name: "meta",
  },
  kia: {
    path: "https://kia.com/",
    icon: KiaLogo,
    name: "Kia",
  },
  ibm: {
    path: "https://ibm.com/",
    icon: IBMLogo,
    name: "IBM",
  },
  barclays: {
    path: "https://www.barclays.co.uk",
    icon: BarclaysLogo,
    name: "Barclays",
  },
  aws: {
    path: "https://aws.com/",
    icon: AWSLogo,
    name: "Amazon Web Services",
  },
  messari: {
    path: "https://messari.io/",
    icon: MessariLogo,
    name: "Messari",
  },
  figment: {
    path: "",
    icon: FigmentLogo,
    name: "Figment",
  },
  opolis: {
    path: "https://opolis.co/",
    icon: OpolisLogo,
    name: "Opolis",
  },
  oracle: {
    path: "https://oracle.com/",
    icon: OracleLogo,
    name: "oracle",
  },
  microsoft: {
    path: "https://microsoft.com/",
    icon: MicrosoftLogo,
    name: "Microsoft",
  },
  kleiner: {
    path: "https://www.kleinerperkins.com/",
    icon: KleinerLogo,
    name: "Kleiner Perkins",
  },
};
