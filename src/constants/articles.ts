/** @format */

import deployErc20UsingFoundryArticle from "../views/articles/deployErc20UsingFoundryArticle.md";
import smartContractDeveloper2023 from "../views/articles/smartContractDeveloper2023.md";
import daoToolingVsDaoCulture from "../views/articles/daoToolingVsDaoCulture.md";
import foundryVsHardhat from "../views/articles/foundryVsHardhat.md";
import comparingSmartContractLanguages from "../views/articles/comparingSmartContractLanguages.md";
import howToGetStuffDoneInADao from "../views/articles/howToGetStuffDoneInADao.md";
import dorgPassport from "../views/articles/dorgPassport.md";
import AiProjectArticle from "../views/articles/aiProjectArticle.md";

interface Author {
  name: string;
  link?: string;
}

export interface Resource {
  title: string;
  link: string;
  date?: string;
  author?: string;
  publication?: string;
}

export interface ArticleProps {
  slug: string;
  title: string;
  deck?: string;
  description?: string;
  date: string;
  authors?: Author[];
  coders?: Author[];
  content: string;
  tags?: string[];
  resources?: Resource[];
}

export const articles = [
  {
    slug: "ai-innovation",
    title: "AI Innovations: Exploring dOrg's Members AI Projects",
    date: "May 13, 2024",
    authors: [
      {
        name: "Anita Caldera",
      },
    ],
    content: AiProjectArticle,
    tags: ["AI", "Web3", "Protocol", "AI-agents", "NFTs"],
    resources: [
      {
        title: "Brain AI",
        link: "https://www.brianknows.org/",
      },
      {
        title: "Evo Ninja",
        link: "https://evo.ninja/",
      },
      {
        title: "Evo Ninja",
        link: "https://evo.ninja/",
      },
      {
        title: "Perplexity",
        link: "https://www.perplexity.ai/",
      },
      {
        title: "Saturn Series",
        link: "https://www.saturnseries.com/",
      },
    ],
  },

  {
    slug: "deploy-erc20-using-foundry",
    title:
      "How to create and deploy an ERC20 token in simple steps using Foundry",
    deck: "Are you a web3 developer interested in creating your own token on the Ethereum Blockchain? If you are, then this article’s what you’ve been looking for.",
    description:
      "Learn how to create your own ERC20 token on the Ethereum Blockchain with Foundry. Our step-by-step guide simplifies the process for Smart Contract development. Find the best DAO app development services in the USA with our expert DAO development company. Contact us today for Smart Contracts development services.",
    date: "Jun 13, 2022",
    authors: [
      {
        name: "Anita Caldera",
      },
    ],
    coders: [
      {
        name: "Cesar Brazon",
        link: "https://github.com/cbrzn",
      },
      {
        name: "Leonhard Horstmeyer",
        link: "https://github.com/leomarlo",
      },
      {
        name: "Fernando Torres",
        link: "https://github.com/thenerdcat",
      },
    ],
    coding: true,
    content: deployErc20UsingFoundryArticle,
    tags: ["coding", "tutorial", "smart-contracts"],
    resources: [
      {
        title: "Creating an NFT with Solmate",
        link: "https://book.getfoundry.sh/tutorials/solmate-nft",
      },
      {
        title: "Overview of Forge",
        link: "https://book.getfoundry.sh/forge/",
      },
      {
        title: "How to use Foundry to test an ERC20 Contract with Fuzzing",
        link: "https://medium.com/buildbear/web3-beginner-how-to-use-foundry-to-test-an-erc20-contract-with-fuzzing-3f456e8a10f5",
        date: "Jun 21, 2022",
        author: "Pari Tomar",
        publication: "Medium",
      },
    ],
  },
  {
    slug: "smart-contract-developer-2023",
    title:
      "Do you want to become a Smart Contract Developer in 2023? Here's what you should do.",
    description:
      "Learn how to become a Smart Contract developer in 2023! Discover the technical steps, including Ethereum, Solidity, and Blockchain technology, and improve your skills with resources from dOrg.",
    date: "January 3, 2023",
    authors: [
      {
        name: "Anita Caldera",
      },
    ],
    coding: false,
    content: smartContractDeveloper2023,
    tags: ["smart-contracts"],
  },
  {
    slug: "dao-tooling-vs-dao-culture",
    title: "DAO Tooling vs DAO Culture",
    description:
      "DAO tooling and culture are crucial for a successful DAO. Prioritize both to foster collaboration and efficiency. Contact us to learn more.",
    date: "Apr 11, 2023",
    authors: [
      {
        name: "Anita Caldera",
      },
      {
        name: "Pol Lanski",
      },
    ],
    coding: false,
    content: daoToolingVsDaoCulture,
    tags: ["daos"],
  },
  {
    slug: "foundry-vs-hardhat",
    title: "Foundry vs HardHat",
    description:
      "Hardhat or Foundry? Which one is the better development toolkit for Ethereum Smart Contracts? In this article, we compare their features, pros, and cons to help you decide.",
    date: "Mar 23, 2023",
    authors: [
      {
        name: "Anita Caldera",
      },
    ],
    coding: false,
    content: foundryVsHardhat,
    tags: ["smart-contracts"],
    resources: [
      {
        title:
          "Smart contract Frameworks – Foundry vs Hardhat: Differences in performance and developer experience",
        link: "https://chainstack.com/foundry-hardhat-differences-performance/",
        date: "Mar 19, 2021",
        author: "Antonio Ufano",
        publication: "Chainstack",
      },
      {
        title: "Introducing the Foundry Ethereum development toolbox",
        link: "https://www.paradigm.xyz/2021/12/introducing-the-foundry-ethereum-development-toolbox",
        date: "Dec 07, 2021",
        author: "Georgios Konstantopoulos",
        publication: "Paradigm",
      },
      {
        title: "HardHat Website",
        link: "https://hardhat.org/",
        date: "2023",
        publication: "Nomic Foundation",
      },
      {
        title: "Buidler has evolved: Introducing Hardhat",
        link: "https://medium.com/nomic-foundation-blog/buidler-has-evolved-introducing-hardhat-4bccd13bc931",
        date: "Oct 22, 2020",
        author: "Franco Zeoli",
        publication: "Medium",
      },
    ],
  },
  {
    slug: "comparing-smart-contract-languages",
    title: "Comparing Ethereum’s Smart Contract development languages",
    description:
      "Learn about popular languages for Smart Contract development, including Solidity for Ethereum and other EVM-compatible chains, with code examples.",
    date: "May 25, 2023",
    authors: [
      {
        name: "Elio Briceño",
        link: "https://github.com/eliobricenov",
      },
      {
        name: "Asgeir Sognefest",
        link: "https://github.com/manboy-eth",
      },
    ],
    content: comparingSmartContractLanguages,
    tags: ["smart-contracts"],
    resources: [
      {
        title: "Developing with Rust",
        link: "https://docs.solana.com/developing/on-chain-programs/developing-rust",
        publication: "Solana Documentation",
      },
      {
        title: "Vyperlang",
        link: "https://docs.vyperlang.org/en/v0.1.0-beta.12/index.html",
        author: "Vyperlang Documentation",
      },
      {
        title: "The Rust Programming Language",
        link: "https://doc.rust-lang.org/book/foreword.html",
        author: "Rust Documentation",
      },
      {
        title: "Smart Contract Languages",
        link: "https://ethereum.org/en/developers/docs/smart-contracts/languages/",
        date: "September 2, 2022",
        author: "Paul Wackerow",
        publication: "Ethereum Foundation",
      },
      {
        title: "ChatGPT",
        link: "https://chat.openai.com/chat",
      },
    ],
  },
  {
    slug: "how-to-get-stuff-done-in-a-dao",
    title: "How to Get Stuff Done in a DAO",
    description:
      "Learn how to get things done in a Decentralized Autonomous Organization (DAO) without managerial roles. Follow these 4 steps to initiate, design, implement and embed solutions.",
    date: "Jul 27, 2022",
    authors: [
      {
        name: "Daniel Cooper",
      },
      {
        name: "Anita Caldera",
      },
      {
        name: "Ori Shim",
      },
    ],
    content: howToGetStuffDoneInADao,
    tags: ["daos", "governance", "operations"],
  },
  {
    slug: "dorg-passport",
    title: "dOrg Passport",
    description: "",
    date: "Jul 11, 2023",
    authors: [
      {
        name: "Anita Caldera",
      },
      {
        name: "Asgeir Sognefest",
        link: "https://github.com/manboy-eth",
      },
    ],
    content: dorgPassport,
    tags: ["daos", "ERC-721", "nft", "ID"],
  },
];
