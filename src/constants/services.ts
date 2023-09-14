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

export const ENGINEERING_SERVICE: CardProps[] = [
  {
    color: colors.purple,
    icon: SmartContractIcon,
    title: "smart contracts",
    description:
      "Securing blockchain transactions with precision built on Solidity and Rust.",
  },
  {
    color: colors.yellow,
    icon: Web3Icon,
    title: "Web3 Integrations",
    description:
      "JavaScript leverages Web3, enabling seamless interaction with blockchain networks.",
  },
  {
    color: colors.green,
    icon: FullStackIcon,
    title: "Full Stack Engineering",
    description:
      "Using HTML, Sass, JavaScript, Python, and other languages to build complete web systems.",
  },
  {
    color: colors.orange,
    icon: DevopsIcon,
    title: "Devops",
    description:
      "Orchestrate seamless software delivery, uniting development and operations workflows.",
  },
  {
    color: colors.magenta,
    icon: DesignIcon,
    title: "UX/UI Design",
    description:
      "Designing intuitive digital experiences with collaborative, user-centered interfaces.",
  },
];
export const MECHANISM_SERVICE: CardProps[] = [
  {
    color: colors.green,
    icon: TokenomicsIcon,
    title: "Tokenomics",
    description:
      "Economic design shaping cryptocurrency: supply, demand, distribution, and utility incentives.",
  },
  {
    color: colors.blue,
    icon: GovernanceIcon,
    title: "Governance Mechanisms",
    description:
      "Establishing voting power strategies and decision making processes for decentralized governance.",
  },
  {
    color: colors.magenta,
    icon: GameIcon,
    title: "Game Theory Design",
    description:
      "Strategic interactions, incentives, and rational behavior analysis.",
  },
  {
    color: colors.yellow,
    icon: DaoIcon,
    title: "DAO set up & tooling",
    description:
      "Software aiding DAO setup, governance, decision-making, and collaboration.",
  },
];
