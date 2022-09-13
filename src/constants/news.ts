import TimeIcon from "../assets/imgs/news/time.svg";
import DelphiIcon from "../assets/imgs/news/delphi.svg";
import StanfordIcon from "../assets/imgs/news/stanford.svg";

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
    text: "In march this year Time Magazine published an article titled No Bosses: What It’s Like Working at a DAO, in which dOrg was featured throughout its entirety.",
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
    text: "In this lecture presented at Stanford's BioE60 Beyond Bitcoin course, Ron Bogerand Ori Shimony of dOrg present an overview on DAOs.",
    type: "lecture",
  },
]