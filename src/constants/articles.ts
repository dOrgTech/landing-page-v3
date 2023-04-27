import deployErc20UsingFoundryArticle from "../views/articles/deployErc20UsingFoundryArticle/index.md"

interface Tag {
  name: string;
  slug: string;
}

interface Author {
  name: string;
  link: string;
}

export interface ArticleProps {
  slug: string;
  title: string;
  description: string;
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
]