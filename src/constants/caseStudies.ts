import { colors } from "../theme";
import TezosThumbnail from "../assets/imgs/case-studies/tezos.webp"
import GnosisGuildThumbnail from "../assets/imgs/case-studies/gnosis_guild.webp"
import StarkwareThumbnail from "../assets/imgs/case-studies/starkware.webp"
import DoinGudThumbnail from "../assets/imgs/case-studies/doingud.webp"

export interface CaseStudyLinkProps {
  slug: string;
  title: string;
  summary: string;
  thumbnail: string;
  color: string;
}

export interface CaseStudyProps {
  "tezos": Readonly<CaseStudyLinkProps>;
  "gnosis-guild": Readonly<CaseStudyLinkProps>;
  "starkware": Readonly<CaseStudyLinkProps>;
  "doingud": Readonly<CaseStudyLinkProps>;
}

export const caseStudies: CaseStudyProps = {
  tezos: {
    slug: "tezos",
    title: "Tezos",
    summary: "A case study by dOrg to architect and lead Tezos Homebase’s engineering and design needs as the project’s core team.",
    thumbnail: TezosThumbnail,
    color: colors.blue,
  },
  "gnosis-guild": {
    slug: "gnosis-guild",
    title: "Gnosis Guild",
    summary: "A case study by dOrg around our architecture and leadership to meet Gnosis Guild’s engineering and design needs in coordination with the core Gnosis Guild team.",
    thumbnail: GnosisGuildThumbnail,
    color: colors.magenta,
  },
  starkware: {
    slug: "starkware",
    title: "Starkware",
    summary: "A case study by dOrg about our collaboration with Starkware across 3 projects.",
    thumbnail: StarkwareThumbnail,
    color: colors.green,
  },
  doingud: {
    slug: "doingud",
    title: "DoinGud",
    summary: "A case study by dOrg to lead the smart contract engineering and web3 integration engineering needs of DoinGud, an impact-focused NFT marketplace.",
    thumbnail: DoinGudThumbnail,
    color: colors.orange,
  },
}