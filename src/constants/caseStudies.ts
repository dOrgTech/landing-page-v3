import { colors } from "../theme";
import TezosThumbnail from "../assets/imgs/case-studies/tezos.webp";
import GnosisGuildThumbnail from "../assets/imgs/case-studies/gnosis_guild.webp";
import StarkWareThumbnail from "../assets/imgs/case-studies/starkware.webp";
import DoinGudThumbnail from "../assets/imgs/case-studies/doingud.webp";
import DaoDropsThumbnail from "../assets/imgs/case-studies/dao_drops.webp";
import ArcxThumbnail from "../assets/imgs/case-studies/arcx.png";
import RKLThumbnail from "../assets/imgs/case-studies/rkl.svg";
import FayreThumbnail from "../assets/imgs/case-studies/fayre.svg";

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
  category: Array<
    "DeFi & Data" | "DAO/Governance" | "Public Goods" | "Social & Entertainment"
  >;
}

export interface CaseStudyProps {
  [key: string]: Readonly<CaseStudyLinkProps>;
  starkware: Readonly<CaseStudyLinkProps>;
  "gnosis-guild": Readonly<CaseStudyLinkProps>;
  tezos: Readonly<CaseStudyLinkProps>;
  "dao-drops": Readonly<CaseStudyLinkProps>;
  arcx: Readonly<CaseStudyLinkProps>;
  rkl: Readonly<CaseStudyLinkProps>;
  fayre: Readonly<CaseStudyLinkProps>;
  doingud: Readonly<CaseStudyLinkProps>;
}

export const caseStudies: CaseStudyProps = {
  starkware: {
    slug: "starkware",
    title: "StarkWare",
    summary:
      "A case study by dOrg about our collaboration with StarkWare across 3 projects.",
    thumbnail: StarkWareThumbnail,
    color: colors.green,
    index: 0,
    roles: ["Engineering", "UI Design", "API Integrations", "DevOps"],
    category: ["DeFi & Data"],
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
        title:
          "Opera Integrates Ethereum Layer 2, bringing access to DeFi to Millions of Users",
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
    ],
  },
  "gnosis-guild": {
    slug: "gnosis-guild",
    title: "Gnosis Guild",
    summary:
      "A case study by dOrg around our architecture and leadership to meet Gnosis Guild’s engineering and design needs in coordination with the core Gnosis Guild team.",
    thumbnail: GnosisGuildThumbnail,
    color: colors.magenta,
    index: 1,
    roles: ["Engineering", "Smart Contracts", "Design"],
    category: ["DAO/Governance"],
    projects: [
      {
        name: "Zodiac",
        link: "https://zodiac.wiki/index.php/Category:Documentation",
      },
      {
        name: "Tabula",
        link: "https://tabula.gg/",
      },
      {
        name: "SafeSnap",
        link: "https://docs.snapshot.org/user-guides/plugins/safesnap-reality",
      },
    ],
    press: [
      {
        title:
          "DAOs: Aragon announces new smart contracts, GitcoinDAO diversifies its treasury, Gnosis Guild…",
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
    ],
  },
  tezos: {
    slug: "tezos",
    title: "Tezos",
    summary:
      "A case study by dOrg to architect and lead Tezos Homebase’s engineering and design needs as the project’s core team.",
    thumbnail: TezosThumbnail,
    color: colors.blue,
    index: 2,
    category: ["DAO/Governance"],
    roles: [
      "Frontend Engineering",
      "Backend Engineering",
      "Web3 Integrations",
      "UX/UI Design",
    ],
    projects: [
      {
        name: "Homebase dApp",
        link: "https://tezos-homebase.io/",
      },
      {
        name: "Homebase Lite",
        link: "https://github.com/tezos-commons/homebase-lite",
      },
    ],
    press: [
      {
        title: "Say Hello to Lambda DAOs for Homebase",
        date: "November 29, 2022",
        link: "https://blog.dorg.tech/p/say-hello-to-lambda-daos-for-homebase",
        author: "Anamaria Caldera",
        publication: "dOrg's Occasional Newsletter",
      },
      {
        title: "DAOs on Tezos: Announcing Homebase",
        date: "January 21, 2021",
        link: "https://tqtezos.medium.com/daos-on-tezos-announcing-homebase-80bbecbb9bfe",
        author: "TQ Tezos",
        publication: "TQ Tezos | Medium",
      },
      {
        title: "Homebase Launches On Tezos - DAOs",
        date: "September 7, 2021",
        link: "https://xtz.news/dao-news/homebase-launches-on-tezos/",
        author: "Evans, L. ",
        publication: "XTZ News",
      },
      {
        title:
          "Exploring Homebase, a DAO Framework for Tezos with Gregory Rocco",
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
        publication: "Tezos Commons",
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
        title:
          "Tezos Commons. The #BlockchainEvolved Show - Lambda DAOs and DAO Philosophy with @AndreiTaranu",
        date: "November 17, 2022",
        link: "https://odysee.com/@TezosCommons:8/2022-11-17-13-01-50:e",
        publication: "odysee",
      },
      {
        title:
          "TQ Tezos Announces Homebase, A Seamless Way to Launch DAOs on Tezos",
        date: "January 22, 2021",
        link: "https://crypto-economy.com/tq-tezos-announces-homebase-a-seamless-way-to-launch-daos-on-tezos/",
        publication: "Crypto Economy",
      },
    ],
  },
  "dao-drops": {
    slug: "dao-drops",
    title: "DAO Drops",
    summary:
      "A case study by dOrg about the research, design, building process and results of the 1st round of DAO Drops – a Retroactive Public Goods Funding (retroPGF) mechanism supported by Ethereum Foundation.",
    thumbnail: DaoDropsThumbnail,
    color: colors.purple,
    index: 3,
    category: ["Public Goods"],
    roles: [
      "Mechanism Design",
      "Web3 software architecture",
      "Web3 integrations",
      "Frontend",
      "Backend",
      "UX/UI design",
      "Comms & Social Media",
    ],

    projects: [
      {
        name: "DAO Drops Website",
        link: "https://daodrops.io/",
      },
      {
        name: "DAO Drops Twitter",
        link: "https://twitter.com/dao_drops",
      },
      {
        name: "DAO Drops FAQS",
        link: "https://hackmd.io/pXkFyZ8WQA-BGedKeHqHPg?view",
      },
      {
        name: "DAO Drops Report",
        link: "https://substack.com/inbox/post/114871442",
      },
    ],
    press: [
      {
        title:
          "Green Pill postcast: DAO Drops with Magenta Ceiba & Ori Shimony",
        date: "March 7, 2023",
        link: "https://www.youtube.com/watch?v=AplDLgAsqMA",
        publication: "Youtube & Spotify",
      },
      {
        title:
          "Citizen Cosmos podcast: A citizen odyssey, ep. XVII, special mission - DAO Drops",
        date: "February 28, 2023",
        link: "https://www.youtube.com/watch?v=NeVpAZOpbf4",
        publication: "Youtube",
      },
      {
        title: "Blockchain Explorer podcast: DAO Drops",
        date: "February 15, 2023",
        link: "https://open.spotify.com/episode/2ahbRa4RtfKc8gCLl2D9F1",
        publication: "Spotify",
      },
      {
        title: "Square 1 podcast: DAO Drops with dOrg!",
        date: "April 12, 2023",
        link: "https://open.spotify.com/episode/201BslxugraQBaW1rF0x4r",
        publication: "Spotify",
      },
      {
        title:
          "DAO Drops to distribute $250k to projects that have contributed to the Ethereum ecosystem",
        date: "January 15, 2023",
        link: "https://daotimes.com/dao-drops-to-distribute-250k-to-projects-that-have-contributed-to-the-ethereum-ecosystem/",
        publication: "DAO Times",
      },
      {
        title:
          "Week in Ethereum News, January 14, 2023 - thanks to SpeedRunEthereum.com for making this issue possible",
        date: "January 14, 2022",
        link: "https://weekinethereum.substack.com/p/week-in-ethereum-news-january-14?utm_source=substack&utm_campaign=post_embed&utm_medium=web",
        publication: "Week in Ethereum News",
      },
      {
        title: "This week in DAOs - Jan 19, 2023",
        date: "January 19, 2022",
        link: "https://logosdao.substack.com/p/this-week-in-daos-jan-19-2023?utm_source=substack&utm_campaign=post_embed&utm_medium=web",
        publication: "DAO or Never",
      },
      {
        title: "MetaNews #4 - January 2023",
        date: "February 7, 2023",
        link: "https://metagame.substack.com/p/metanews-4-january-2023?utm_source=substack&utm_campaign=post_embed&utm_medium=web",
        publication: "Metagame",
      },
    ],
  },
  arcx: {
    slug: "arcx",
    title: "ArcX",
    summary:
      "A case study by dOrg about the executing a back-end, front-end, architecture and web3 integrations of ArcX Reviews MVP called Frenreviews a public service for reviewing web3 dApps on ",
    thumbnail: ArcxThumbnail,
    color: colors.purple,
    index: 4,
    category: ["Public Goods"],
    roles: ["Web3 integrations", "Frontend", "Backend"],

    projects: [
      {
        name: "Frensreviews",
        link: "http://frenreviews.com/",
      },
    ],
  },
  rkl: {
    slug: "rkl",
    title: "RKL Studios",
    summary:
      "A case study on developing smart contracts and web3 integrations for RKL a  3v3 basketball NFT enabled game on the metaverse that generated $1,7M and made it to the top50 Opensea collections.",
    thumbnail: RKLThumbnail,
    color: colors.grays[100],
    index: 5,
    category: ["Social & Entertainment"],
    roles: ["Web3 integrations", "Frontend", "Smart Contracts"],
    projects: [
      {
        name: "Rumble Kong League",
        link: "https://www.rumblekongleague.com/",
      },
    ],
    press: [
      {
        title: "Rumble Kong League NFT and Round 21 and the physical prizes",
        date: "August 17, 2023",
        link: "https://en.cryptonomist.ch/2022/08/17/rumble-kong-league-nft-announces-partnership-with-round-21/",
        publication: "The Cryptoconomist",
      },
      {
        title:
          "Basketball Title Rumble Kong League and Stance Launch In-Game and IRL HyperSocks",
        date: "June 06, 2023",
        link: "https://decrypt.co/154226/basketball-title-rumble-kong-league-and-stance-launch-in-game-and-irl-hypersocks",
        publication: "Decrypt",
      },
      {
        title:
          "Rumble Kong League Slams Dunk with New Mini Game 'Rumble Legacy'",
        date: "June 05, 2023",
        link: "https://chainplay.gg/blog/rumble-kong-league-new-mini-game-rumble-legacy/",
        publication: "Chainplay",
      },
      {
        title:
          "How NFT Gaming Platform RKL Picked Up Backers Like Paul George and CAA",
        date: "January 09, 2022",
        link: "https://www.sportsbusinessjournal.com/Daily/Issues/2022/09/01/Technology/rumble-kong-league-startup-nft-play-to-earn-video-game.aspx",
        publication: "Sports Business Journal",
      },
      {
        title:
          "NBA Stars Steph Curry And Paul George Back The RKL In Latest NFT Venture",
        date: "February 09, 2022",
        link: "https://negosyante.org/nba-stars-steph-curry-and-paul-george-back-the-rumble-kong-league-in-latest-nft-venture/",
        publication: "Negociante News",
      },
    ],
  },
  fayre: {
    slug: "fayre",
    title: "Fayre",
    summary:
      "A case study on developing smart contracts and web3 integrations for Fayre a NFT marketplace targeting entertainment, sports and luxury brands in Latin America that generated $3,8M.",
    thumbnail: FayreThumbnail,
    color: colors.magenta,
    index: 6,
    category: ["Social & Entertainment"],
    roles: ["Web3 integrations", "Tokenomics", "Smart Contracts"],
    projects: [
      {
        name: "Website",
        link: "https://www.fayre.com/",
      },
      {
        name: "Company launch",
        link: "https://www.youtube.com/watch?v=tskZj20Oiw0",
      },
    ],
    press: [
      {
        title:
          "Fayre, the ground-breaking NFT marketplace that is already making waves",
        date: "February 16, 2022",
        link: "https://cointelegraph.com/press-releases/fayre-the-ground-breaking-nft-marketplace-that-is-already-making-waves",
        publication: "Coinbase",
      },
      {
        title:
          "Spanish La Liga football club RCD Espanyol teams up with Fayre for Web3 adoption",
        date: "February 10, 2022",
        link: "https://medium.com/fayrelabs/spanish-la-liga-football-club-rcd-espanyol-teams-up-with-nft-marketplace-fayre-for-web3-adoption-ea0faca75f7e",
        publication: "Medium",
      },
      {
        title: "Limited edition collection of blue and white NFTs",
        date: "April 22, 2022",
        link: "https://www.rcdespanyol.com/en/new/limited-edition-collection-of-blue-and-white-nfts/14043",
        publication: "RCD Español",
      },
      {
        title: "Fayre x Espanyol - Giveway Game During Half-Time",
        date: "March 09, 2022",
        link: "https://www.youtube.com/watch?v=tskZj20Oiw0",
        publication: "Youtube",
      },
    ],
  },
  doingud: {
    slug: "doingud",
    title: "DoinGud",
    summary:
      "A case study by dOrg to lead the smart contract engineering and web3 integration engineering needs of DoinGud, an impact-focused NFT marketplace.",
    thumbnail: DoinGudThumbnail,
    color: colors.orange,
    index: 7,
    category: ["Public Goods", "Social & Entertainment"],
    roles: [
      "Frontend Engineering",
      "Smart Contracts",
      "Web 3 Integrations",
      "Software Architecture",
    ],
    projects: [
      {
        name: "DoinGud NFT Marketplace",
        link: "https://doingud.com/",
      },
    ],
  },
};
