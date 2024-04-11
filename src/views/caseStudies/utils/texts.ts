/** @format */

import { CustomerCardProps } from "../../home/components/ClientTestimonialsSection/CustomerCard";
import { projectClientIconLinks } from "../../../constants/routes";
import GnosisGuildLogo from "../../../assets/imgs/clients/gg.svg";

export const caseStudiesDescriptions: CustomerCardProps[] = [
  {
    externalLink: projectClientIconLinks.daoDrops.path,
    image: projectClientIconLinks.daoDrops.icon,
    text: "A case study by dOrg about the research, design, building process and results of the 1st round of DAO Drops – a Retroactive Public Goods Funding (retroPGF) mechanism supported by Ethereum Foundation.",
  },
  {
    externalLink: projectClientIconLinks.homebase.path,
    image: projectClientIconLinks.homebase.icon,
    text: "A case study by dOrg to architect and lead Tezos Homebase's engineering and design needs as the project's core team.",
  },
  {
    externalLink: projectClientIconLinks.starkware.path,
    image: projectClientIconLinks.starkware.icon,
    text: "A case study by dOrg about our collaboration with StarkWare across 3 projects.",
  },
  {
    externalLink: projectClientIconLinks.zodiac.path,
    image: GnosisGuildLogo,
    text: "A case study by dOrg around our architecture and leadership to meet Gnosis Guild's engineering and design needs in coordination with the core Gnosis Guild team.",
  },
];
