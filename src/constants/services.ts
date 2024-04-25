/** @format */

import { CardProps } from "../commons/card/Card";
import { colors } from "../theme";
import SmartContractIcon from "../assets/imgs/services/smart-contract.svg";
import Web3Icon from "../assets/imgs/services/web3-integration.svg";
import FullStackIcon from "../assets/imgs/services/full-stack.svg";
import DevopsIcon from "../assets/imgs/services/devops.svg";
import DesignIcon from "../assets/imgs/services/design.svg";
import TokenomicsIcon from "../assets/imgs/services/tokenomics.svg";
import GovernanceIcon from "../assets/imgs/services/governance.svg";
import GameIcon from "../assets/imgs/services/game.svg";
import DaoIcon from "../assets/imgs/services/dao.svg";
import AIIcon from "../assets/imgs/services/ai.svg";

export const ENGINEERING_SERVICE: CardProps[] = [
  {
    color: colors.purple,
    icon: SmartContractIcon,
    title: "smart contracts",
    description:
      "We develop secure, robust and optimized smart contracts for different networks. Our devs are experts in Solidity, Rust and Golang.",
  },
  {
    color: colors.yellow,
    icon: Web3Icon,
    title: "Web3 Integrations",
    description:
      "We leverage our mastery on JavaScript skills to enable seamless integrations with blockchain networks to deliver great UX.",
  },
  {
    color: colors.violet,
    icon: AIIcon,
    title: "AI Development",
    description:
      "Merge AI with decentralized web tech. Leverage machine learning, smart contracts, and blockchain integrations for groundbreaking applications.",
  },
  {
    color: colors.green,
    icon: FullStackIcon,
    title: "Full Stack Engineering",
    description:
      "Our proficiency in HTML, Sass, JavaScript, Python, and beyond, will help you build complete web systems.",
  },
  {
    color: colors.orange,
    icon: DevopsIcon,
    title: "Devops",
    description:
      "We seamlessly orchestrate infrastructure and deployment pipelines for streamlined, efficient web2 operations",
  },
  {
    color: colors.magenta,
    icon: DesignIcon,
    title: "UX/UI Design",
    description:
      "We craft collaborative, user-centered interfaces ensuring intuitive digital experiences on web3.",
  },
];
export const MECHANISM_SERVICE: CardProps[] = [
  {
    color: colors.green,
    icon: TokenomicsIcon,
    title: "Tokenomics",
    description:
      "Unlock your project economic framework, from supply dynamics, incentives to distribution strategies.",
  },
  {
    color: colors.blue,
    icon: GovernanceIcon,
    title: "Governance Mechanisms",
    description:
      "Defining robust voting power strategies and decentralized decision-making processes to empower your project's future.",
  },
  {
    color: colors.yellow,
    icon: DaoIcon,
    title: "DAO set up & tooling",
    description:
      "Pioneering DAOs with end-to-end set-up and cutting-edge DAO tooling development to craft your DAO.",
  },
  {
    color: colors.magenta,
    icon: GameIcon,
    title: "Game Theory Design",
    description:
      "We design strategic interactions, incentives and rational behavior analysis for your project.",
  },
];
