import deployErc20UsingFoundryArticle from "../views/articles/deployErc20UsingFoundryArticle/index.md"
import smartContractDeveloper2023 from "../views/articles/smartContractDeveloper2023/index.md"
import daoToolingVsDaoCulture from "../views/articles/daoToolingVsDaoCulture/index.md"
import foundryVsHardhat from "../views/articles/foundryVsHardhat/index.md"
import comparingSmartContractLanguages from "../views/articles/comparingSmartContractLanguages/index.md"

interface Tag {
  name: string;
  slug: string;
}

interface Author {
  name: string;
  link?: string;
}

export interface ArticleProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  author?: Author;
  coding?: boolean;
  content: string;
  tags?: Tag[];
}

export const articles = [
  {
    slug: "deploy-erc20-using-foundry",
    title: "How to create and deploy an ERC20 token in simple steps using Foundry",
    description: "Are you a web3 developer interested in creating your own token on the Ethereum Blockchain? If you are, then this article’s what you’ve been looking for.",
    date: "May 25, 2023",
    author: {
      name: "Cesar Brazon",
      link: "https://github.com/cbrzn"
    },
    coding: true,
    content: deployErc20UsingFoundryArticle,
    tags: [
      {
        name: "Coding",
        slug: "coding",
      },
      {
        name: "Tutorial",
        slug: "tutorial",
      },
      {
        name: "Smart Contracts",
        slug: "smart-contracts",
      },
    ],
  },
  {
    slug: "smart-contract-developer-2023",
    title: "Do you want to become a Smart Contract Developer in 2023? Here's what you should do.",
    date: "May 25, 2023",
    author: {
      name: "Cesar Brazon",
      link: "https://github.com/cbrzn"
    },
    coding: false,
    content: smartContractDeveloper2023,
    tags: [
      {
        name: "Smart Contracts",
        slug: "smart-contracts",
      },
    ],
  },
  {
    slug: "dao-tooling-vs-dao-culture",
    title: "DAO Tooling vs DAO Culture",
    date: "May 25, 2023",
    author: {
      name: "Cesar Brazon",
      link: "https://github.com/cbrzn"
    },
    coding: false,
    content: daoToolingVsDaoCulture,
    tags: [
      {
        name: "DAOs",
        slug: "daos",
      },
    ],
  },
  {
    slug: "foundry-vs-hardhat",
    title: "Foundry vs HardHat",
    date: "May 25, 2023",
    author: {
      name: "Cesar Brazon",
      link: "https://github.com/cbrzn"
    },
    coding: false,
    content: foundryVsHardhat,
    tags: [
      {
        name: "Smart Contracts",
        slug: "smart-contracts",
      },
    ],
  },
  {
    slug: "comparing-smart-contract-languages",
    title: "Comparing Ethereum’s Smart Contract development languages",
    date: "May 25, 2023",
    author: {
      name: "Cesar Brazon",
      link: "https://github.com/cbrzn"
    },
    coding: false,
    content: comparingSmartContractLanguages,
    tags: [
      {
        name: "Smart Contracts",
        slug: "smart-contracts",
      },
    ],
  },
]