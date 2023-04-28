import deployErc20UsingFoundryArticle from "../views/articles/deployErc20UsingFoundryArticle.md"
import smartContractDeveloper2023 from "../views/articles/smartContractDeveloper2023.md"
import daoToolingVsDaoCulture from "../views/articles/daoToolingVsDaoCulture.md"
import foundryVsHardhat from "../views/articles/foundryVsHardhat.md"
import comparingSmartContractLanguages from "../views/articles/comparingSmartContractLanguages.md"

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
  description?: string;
  date: string;
  author?: Author;
  coding?: boolean;
  content: string;
  tags?: string[];
  resources?: Resource[];
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
        "coding",
        "tutorial",
        "smart-contracts",
    ],
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
    ]
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
        "smart-contracts",
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
        "daos",
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
        "smart-contracts",
    ],
    resources: [
      {
        title: "Smart contract Frameworks – Foundry vs Hardhat: Differences in performance and developer experience",
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
    ]
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
        "smart-contracts",
    ],
    resources: [
      {
        title: "Top 5 smart contract programming languages for blockchain",
        link: "https://blog.logrocket.com/smart-contract-programming-languages/",
        date: "Oct 21, 2021",
        author: "Eze Sunday",
      },
      {
        title: "Developing with Rust",
        link: "https://docs.solana.com/developing/on-chain-programs/developing-rust",
        publication: "Solana Documentation"
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
        title: "Build Secure Smart Contracts Using Vyper",
        link: "https://101blockchains.com/vyper-smart-contracts/",
        date: "September 14, 2022",
        author: "James Howell",
        publication: "Ethereum Foundation",
      },
      {
        title: "ChatGPT",
        link: "https://chat.openai.com/chat",
      },
    ]
  },
]