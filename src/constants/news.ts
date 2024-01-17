import TimeIcon from "../assets/imgs/news/time.svg";
import DelphiIcon from "../assets/imgs/news/delphi.svg";
import StanfordIcon from "../assets/imgs/news/stanford.svg";
import PrincetonIcon from "../assets/imgs/news/princeton.svg";
import MitIcon from "../assets/imgs/news/mit.svg";
import CointelegrpahIcon from "../assets/imgs/news/cointelegrpah.svg";
import CoindeskIcon from "../assets/imgs/news/coindesk.svg";
import HackernoonIcon from "../assets/imgs/news/hackernoon.svg";
import WEFIcon from "../assets/imgs/news/wef.png";
import UOBIcon from "../assets/imgs/news/uob.png";
import UDNIcon from "../assets/imgs/news/udn.png";

export interface NewsCardProps {
  path: string;
  slug: string;
  text: string;
  type?: string;
  image?: string;
  author: string;
}

export const newsCards = [
  {
    image: PrincetonIcon,
    slug: "princeton",
    path: "https://www.youtube.com/watch?v=yai6OVnytsw",
    text: "Ron and Ori’s 2022 lecture on the evolution of DAOs at Princeton’s official course on web3.",
    type: "lecture",
    author: "https://www.princeton.edu/",
  },
  {
    image: TimeIcon,
    slug: "time",
    path: "https://time.com/6146406/working-at-dao-dorg/",
    text: "Time Magazine published a full profile of dOrg, interviewing several members to help the world understand what it's like to work in a DAO.",
    type: "article",
    author: "https://time.com/",
  },
  {
    image: WEFIcon,
    slug: "wef",
    path: "https://www3.weforum.org/docs/WEF_Decentralized_Autonomous_Organization_Toolkit_2023.pdf",
    text: "Decentralized Autonomous Organization Toolkit by World Economic Forum mentioning dOrg as Impact DAO operating as service DAO published in 2023.",
    type: "article",
    author:
      "https://www3.weforum.org/docs/WEF_Decentralized_Autonomous_Organization_Toolkit_2023.pdf",
  },
  {
    image: StanfordIcon,
    slug: "stanford",
    path: "https://www.youtube.com/watch?v=SYPzqRaN4zA",
    text: "In this lecture presented at Stanford's BioE60 Beyond Bitcoin course, Ron Bogerand and Ori Shimony of dOrg present an overview on DAOs.",
    type: "lecture",
    author: "https://www.stanford.edu/",
  },

  {
    image: MitIcon,
    slug: "mit",
    path: "http://legal-engineering.mit.edu/bbllc",
    text: "An interview in MIT’s Computational Law Report on what the future holds for autonomous legal entities.",
    type: "article",
    author: "https://www.mit.edu/",
  },
  {
    image: UOBIcon,
    slug: "University of Bristol",
    path: "https://bristoluniversitypressdigital.com/display/book/9781529226430/ch005.xml?tab_body=abstract",
    text: "Chapter on dOrg as a blockchain-based collective on “Co-operation and Co-operatives in 21st-Century Europe” book published by Bristol University.",
    type: "article",
    author:
      "https://bristoluniversitypressdigital.com/display/book/9781529226430/ch005.xml?tab_body=abstract",
  },

  {
    image: CointelegrpahIcon,
    slug: "cointelegrpah",
    path: "https://cointelegraph.com/news/dorg-llc-purports-to-be-first-legally-valid-dao-under-us-law",
    text: "CoIntelegraph’s coverage of dOrg’s historic step in becoming the first limited liability DAO under US law.",
    type: "article",
    author: "https://cointelegraph.com",
  },
  {
    image: CoindeskIcon,
    slug: "coindesk",
    path: "https://www.coindesk.com/markets/2019/06/11/dorg-founders-have-created-the-first-limited-liability-dao/",
    text: "Coindesk interviews dOrg about becoming the first legally registered DAO in the United States.",
    type: "article",
    author: "https://www.coindesk.com",
  },
  {
    image: UDNIcon,
    slug: "University of Neuchâtel",
    path: "https://drive.google.com/file/d/1jM70Eb9dN0vWCX3vhIkB9OsWgTy4zpOT/view",
    text: "dOrg report on “Decentralized Autonomous Organizations: a legal and empirical review” written by Stefanie Boss.",
    type: "article",
    author: "https://www.linkedin.com/school/radboud-university-nijmegen/",
  },

  {
    image: DelphiIcon,
    slug: "delphi",
    path: "https://members.delphidigital.io/media/dorg-defining-daos-comparing-the-dao-model-to-traditional-llc-structures-and-the-future-of-dao-tooling",
    text: "A deep dive with dOrg’s Ori Shimony and Nestor Amesty, covering DAO ontology and taxonomy, the future of DAO tooling, and much more.",
    type: "podcast",
    author: "https://members.delphidigital.io/",
  },

  {
    image: HackernoonIcon,
    slug: "hackernoon",
    path: "https://hackernoon.com/the-evolution-of-dorg-the-builder-dao-jcz3xxg",
    text: "This article chronicles dOrg’s evolution from a few engineers to a network of builders developing industry-leading web3 software.",
    type: "article",
    author: "https://hackernoon.com/",
  },
];
