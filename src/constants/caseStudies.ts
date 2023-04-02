import { colors } from "../theme";
import TezosThumbnail from "../assets/imgs/case-studies/tezos.webp"
import GnosisGuildThumbnail from "../assets/imgs/case-studies/gnosis_guild.webp"
import StarkWareThumbnail from "../assets/imgs/case-studies/starkware.webp"
import DoinGudThumbnail from "../assets/imgs/case-studies/doingud.webp"

export interface PressProps {
  title: string;
  date: string;
  link: string;
  author?: string;
  publication?: string;
}

export interface ProjectProps {
  name: string;
  link: string;
}

export interface CaseStudyLinkProps {
  slug: string;
  title: string;
  summary: string;
  thumbnail: string;
  index: number;
  color: string;
  roles?: string[];
  projects?: ProjectProps[];
  press?: PressProps[];
}

export interface CaseStudyProps {
  [key: string]: Readonly<CaseStudyLinkProps>;
  "tezos": Readonly<CaseStudyLinkProps>;
  "gnosis-guild": Readonly<CaseStudyLinkProps>;
  "starkware": Readonly<CaseStudyLinkProps>;
  "doingud": Readonly<CaseStudyLinkProps>;
}

export const caseStudies: CaseStudyProps = {
  starkware: {
    slug: "starkware",
    title: "StarkWare",
    summary: "A case study by dOrg about our collaboration with StarkWare across 3 projects.",
    thumbnail: StarkWareThumbnail,
    color: colors.green,
    index: 0,
    roles: ["Engineering", "UI Design", "API Integrations", "DevOps"],
    projects: [
      { 
        name: "Automated Market Maker Demo Application",
        link: "https://amm-demo.starknet.starkware.co/",
      },
      { 
        name: "RhinoFi integration with Opera",
        link: "https://press.opera.com/2022/02/23/opera-ethereum-layer2-defi-starkware-diversify/",
      },
      { 
        name: "StarkEx Metrics Dashboard",
        link: "https://dashboard.starkware.co/starkex",
      },
    ],
    press: [
      {
        title: "Opera Integrates Ethereum Layer 2, bringing access to DeFi to Millions of Users",
        date: "February 23, 2022",
        link: "https://press.opera.com/2022/02/23/opera-ethereum-layer2-defi-starkware-diversify/",
        publication: "Opera",
      },
      {
        title: "StarkNet Planets Alpha on Testnet",
        date: "June 14, 2021",
        link: "https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95",
        author: "StarkWare",
        publication: "StarkWare | Medium",
      },
      
    ]
  },
  "gnosis-guild": {
    slug: "gnosis-guild",
    title: "Gnosis Guild",
    summary: "A case study by dOrg around our architecture and leadership to meet Gnosis Guild’s engineering and design needs in coordination with the core Gnosis Guild team.",
    thumbnail: GnosisGuildThumbnail,
    color: colors.magenta,
    index: 1,
    roles: ["Engineering", "Smart Contracts", "Design"],
    projects: [
      {
        name: "Zodiac",
        link: "https://zodiac.wiki/index.php/Category:Documentation"
      }, 
      {
        name: "Tabula",
        link: "https://tabula.gg/"
      }, 
      {
        name: "SafeSnap",
        link: "https://docs.snapshot.org/user-guides/plugins/safesnap-reality"
      }],
    press: [
      {
        title: "DAOs: Aragon announces new smart contracts, GitcoinDAO diversifies its treasury, Gnosis Guild…",
        date: "July 22, 2022",
        link: "https://medium.com/paradigm-research/daos-aragon-announces-new-smart-contracts-gitcoindao-diversifies-its-treasury-gnosis-guild-1dc5c6a3ba8f?source=rss------crypto-5",
        publication: "Medium",
      },
      {
        title: "DAOTOOL#101 #8 Tabula.gg a Web3 Publication for Anyone",
        date: "July 18, 2022",
        link: "https://mirror.xyz/0x155250d3465Fc910a910b7C67d20C4Dd25fcb728/89jcGmTZV0ATVwNZ7HCJGbW1_pX8UtnI3YrdlImxgrQ",
        publication: "Mirror.xyz",
      },
      {
        title: "Zodiac: The expansion pack for DAOs — gnosis guild",
        date: "September 14, 2021",
        link: "https://gnosisguild.mirror.xyz/OuhG5s2X5uSVBx1EK4tKPhnUc91Wh9YM0fwSnC8UNcg",
        publication: "gnosis guild",
      },
    ]
  },
  tezos: {
    slug: "tezos",
    title: "Tezos",
    summary: "A case study by dOrg to architect and lead Tezos Homebase’s engineering and design needs as the project’s core team.",
    thumbnail: TezosThumbnail,
    color: colors.blue,
    index: 2,
    roles: [
      "Frontend Engineering",
      "Backend Engineering",
      "Web3 Integrations",
      "UX/UI Design",
    ],
    projects: [
      {
        name: "Homebase dApp",
        link: "https://tezos-homebase.io/"
      },
      {
        name: "Homebase Lite",
        link: "https://github.com/tezos-commons/homebase-lite"
      },
    ],
    press: [
      {
        title: "Say Hello to Lambda DAOs for Homebase",
        date: "November 29, 2022",
        link: "https://blog.dorg.tech/p/say-hello-to-lambda-daos-for-homebase",
        author: "Anamaria Caldera",
        publication: "dOrg's Occasional Newsletter"
      },
      {
        title: "DAOs on Tezos: Announcing Homebase",
        date: "January 21, 2021",
        link: "https://tqtezos.medium.com/daos-on-tezos-announcing-homebase-80bbecbb9bfe",
        author: "TQ Tezos",
        publication: "TQ Tezos | Medium"
      },
      {
        title: "Homebase Launches On Tezos - DAOs",
        date: "September 7, 2021",
        link: "https://xtz.news/dao-news/homebase-launches-on-tezos/",
        author: "Evans, L. ",
        publication: "XTZ News",
      },
      {
        title: "Exploring Homebase, a DAO Framework for Tezos with Gregory Rocco",
        date: "January 26, 2021",
        link: "https://medium.com/tezos-weekly-spotlight/exploring-homebase-a-dao-framework-for-tezos-with-gregory-rocco-7b7c0ba2ca20",
        author: "Gregory Rocco",
        publication: "Medium",
      },
      {
        title: "Tezos NFTs are coming to OpenSea",
        date: "February 10, 2021",
        link: "https://opensea.io/blog/announcements/tezos-nfts-are-coming-to-opensea/",
        author: "Finzer, D.",
        publication: "OpenSea",
      },
      {
        title: "HomeBase V2 is now live on the Tezos blockchain",
        date: "February 8, 2022",
        link: "https://www.binance.com/en/news/top/6937766",
        publication: "Binance",
      },
      {
        title: "Homebase is live on Tezos mainnet!",
        date: "December 15, 2022",
        link: "https://news.tezoscommons.org/homebase-is-live-on-tezos-mainnet-9c11d0294970",
        author: "William McKenzie",
        publication: "Tezos Commons"
      },
      {
        title: "Announcing Homebase Lite: Snapshot on Tezos! ",
        date: "November 25, 2022",
        link: "https://news.tezoscommons.org/announcing-homebase-lite-snapshot-on-tezos-b371d1fbbdf6",
        author: "McKenzie, W. ",
        publication: "Medium",
      },
      {
        title: "Tezos Homebase Introduces 'Lambda DAOs'",
        date: "November 17, 2022",
        link: "https://spotlight.tezos.com/tezos-dao-creation-and-management-tool-homebase-introduces-lambda-daos/",
        publication: "Spotlight",
      },
      {
        title: "Tezos Commons. The #BlockchainEvolved Show - Lambda DAOs and DAO Philosophy with @AndreiTaranu",
        date: "November 17, 2022",
        link: "https://odysee.com/@TezosCommons:8/2022-11-17-13-01-50:e",
        publication: "odysee",
      },
      {
        title: "TQ Tezos Announces Homebase, A Seamless Way to Launch DAOs on Tezos",
        date: "January 22, 2021",
        link: "https://crypto-economy.com/tq-tezos-announces-homebase-a-seamless-way-to-launch-daos-on-tezos/",
        publication: "Crypto Economy",
      },
    ]
  },
  doingud: {
    slug: "doingud",
    title: "DoinGud",
    summary: "A case study by dOrg to lead the smart contract engineering and web3 integration engineering needs of DoinGud, an impact-focused NFT marketplace.",
    thumbnail: DoinGudThumbnail,
    color: colors.orange,
    index: 3,
    roles: ["Frontend Engineering","Smart Contracts","Web 3 Integrations","Software Architecture"],
    projects: [
      {
        name: "DoinGud NFT Marketplace",
        link: "https://doingud.com/"
      }
    ]
  },
}