/** @format */

import { CustomerCardProps } from "../../home/components/ClientTestimonialsSection/CustomerCard";
import { projectClientIconLinks } from "../../../constants/routes";
import GnosisGuildLogo from "../../../assets/imgs/clients/gg.svg";

export const caseStudiesDescriptions: CustomerCardProps[] = [
  {
    externalLink: projectClientIconLinks.daoDrops.path,
    image: projectClientIconLinks.daoDrops.icon,
    text: "Research, product design and building process a Retroactive Public Goods Funding (RetroPGF) mechanism supported by Ethereum Foundation.",
  },
  {
    externalLink: projectClientIconLinks.homebase.path,
    image: projectClientIconLinks.homebase.icon,
    text: "Product design and execution of Homebase, the DAO creation solution for the whole Tezos ecosystem.",
  },
  {
    externalLink: projectClientIconLinks.starkware.path,
    image: projectClientIconLinks.starkware.icon,
    text: "A case study on our long-term collaboration with StarkWare across 3 projects in the DeFi & Data verticals.",
  },
  {
    externalLink: projectClientIconLinks.zodiac.path,
    image: GnosisGuildLogo,
    text: "Building Zodiac dApp, an expansion pack for DAOs, and Tabula.gg, a decentralized publication tool in coordination as part of the Gnosis Guild team.",
  },
];
