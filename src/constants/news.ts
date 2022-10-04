import TimeIcon from "../assets/imgs/news/time.svg";
import DelphiIcon from "../assets/imgs/news/delphi.svg";
import StanfordIcon from "../assets/imgs/news/stanford.svg";
import PrincetonIcon from "../assets/imgs/news/princeton.svg";
import MitIcon from "../assets/imgs/news/mit.svg";
import CointelegrpahIcon from "../assets/imgs/news/cointelegrpah.svg";
import CoindeskIcon from "../assets/imgs/news/coindesk.svg";
import HackernoonIcon from "../assets/imgs/news/hackernoon.svg";

export interface NewsCardProps {
  path: string;
  slug: string;
  text: string;
  type?: string;
  image?: string;
}

export const newsCards = [
  {
    image: TimeIcon,
    slug: "time",
    path: "https://time.com/6146406/working-at-dao-dorg/",
    text: "Time Magazine published a full profile of dOrg, interviewing several members to help the world understand what it's like to work in a DAO.",
    type: "article",
  },
  {
    image: DelphiIcon,
    slug: "delphi",
    path: "https://members.delphidigital.io/media/dorg-defining-daos-comparing-the-dao-model-to-traditional-llc-structures-and-the-future-of-dao-tooling",
    text: "A deep dive with dOrg’s Ori Shimony and Nestor Amesty, covering DAO ontology and taxonomy, the future of DAO tooling, and much more.",
    type: "podcast",
  },
  {
    image: StanfordIcon,
    slug: "stanford",
    path: "https://www.youtube.com/watch?v=SYPzqRaN4zA",
    text: "In this lecture presented at Stanford's BioE60 Beyond Bitcoin course, Ron Bogerand and Ori Shimony of dOrg present an overview on DAOs.",
    type: "lecture",
  },
  {
    image: PrincetonIcon,
    slug: "princeton",
    path: "https://www.youtube.com/watch?v=yai6OVnytsw",
    text: "Ron and Ori’s 2022 lecture on the evolution of DAOs at Princeton’s official course on web3.",
    type: "lecture",
  },
  {
    image: MitIcon,
    slug: "mit",
    path: "http://legal-engineering.mit.edu/bbllc",
    text: "An interview in MIT’s Computational Law Report on what the future holds for autonomous legal entities.",
    type: "article",
  },
  {
    image: CointelegrpahIcon,
    slug: "cointelegrpah",
    path: "https://cointelegraph.com/news/dorg-llc-purports-to-be-first-legally-valid-dao-under-us-law",
    text: "CoIntelegraph’s coverage of dOrg’s historic step in becoming the first limited liability DAO under US law.",
    type: "article",
  },
  {
    image: CoindeskIcon,
    slug: "coindesk",
    path: "https://www.coindesk.com/markets/2019/06/11/dorg-founders-have-created-the-first-limited-liability-dao/",
    text: "Coindesk interviews dOrg about becoming the first legally registered DAO in the United States.",
    type: "article",
  },
  {
    image: HackernoonIcon,
    slug: "hackernoon",
    path: "https://hackernoon.com/the-evolution-of-dorg-the-builder-dao-jcz3xxg",
    text: "This article chronicles dOrg’s evolution from a few engineers to a network of builders developing industry-leading web3 software.",
    type: "article",
  },
]