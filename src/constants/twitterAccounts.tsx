import React from "react";
import DoinGudAvatar from "../assets/imgs/avatars/doinGud.png";
import FhomoneyAvatar from "../assets/imgs/avatars/fhomoney.png";
import AurynAvatar from "../assets/imgs/avatars/auryn.png";
import StarkWareAvatar from "../assets/imgs/avatars/starkware.png";
import AcreInvestAvatar from "../assets/imgs/avatars/acreInvest.png";
import TezosAvatar from "../assets/imgs/avatars/tezos.png";
import DorgAvatar from "../assets/imgs/avatars/dorg.png";
import PhilAvatar from "../assets/imgs/avatars/philh.png";
import LinusAvatar from "../assets/imgs/avatars/linus.png";
import MrsBadgerFaceAvatar from "../assets/imgs/avatars/mrsbadgerface.png";
import ManBoyAvatar from "../assets/imgs/avatars/asgeir.png";
import CentAvatar from "../assets/imgs/avatars/cent.png";
import AragonAvatar from "../assets/imgs/avatars/aragon.png";
import GGAvatar from "../assets/imgs/avatars/gg.png";
import RealStoneAvatar from "../assets/imgs/avatars/realstone.png";

export interface TwitterAccountProps {
  avatar: string;
  name: React.ReactNode;
  username: string;
}

export interface TwitterAccounts {
  doinGud: TwitterAccountProps;
  fhomoney: TwitterAccountProps;
  auryn: TwitterAccountProps;
  starkware: TwitterAccountProps;
  acreInvest: TwitterAccountProps;
  tezos: TwitterAccountProps;
  dorg: TwitterAccountProps;
  phil_h: TwitterAccountProps;
  linus: TwitterAccountProps;
  mrsBadgerFace: TwitterAccountProps;
  manboy: TwitterAccountProps;
  cent: TwitterAccountProps;
  aragon: TwitterAccountProps;
  gnosis_guild: TwitterAccountProps;
  the_real_stone: TwitterAccountProps;
}

export const twitterAccounts: TwitterAccounts = {
  doinGud: {
    name: "DoinGud (:D, :D)",
    username: "@doinGudHQ",
    avatar: DoinGudAvatar,
  },
  fhomoney: {
    name: (
      <>
        kianga.eth{" "}
        <span role='img' aria-label='earth'>
          🌍
        </span>{" "}
        1000 ACRE DAOs in 1000 Days
      </>
    ),
    username: "@fhomoney",
    avatar: FhomoneyAvatar,
  },
  auryn: {
    name: "Auryn.eth Ĝ⌣Ĝ",
    username: "@auryn_macmillan",
    avatar: AurynAvatar,
  },
  starkware: {
    name: "StarkWare",
    username: "@StarkWareLtd",
    avatar: StarkWareAvatar,
  },
  acreInvest: {
    name: "ACREinvest Web3 Governance & Social Incentives",
    username: "@ACREinvest",
    avatar: AcreInvestAvatar,
  },
  tezos: {
    name: "Tezos Commons",
    username: "@TezosCommons",
    avatar: TezosAvatar,
  },
  dorg: {
    name: "dOrg",
    username: "@dOrg_tech",
    avatar: DorgAvatar,
  },
  phil_h: {
    name: (
      <>
        philh{" "}
        <span role='img' aria-label='rainbow'>
          🌈
        </span>
      </>
    ),
    username: "@phil_h",
    avatar: PhilAvatar,
  },
  linus: {
    name: "Linus",
    username: "@Linus_Eth",
    avatar: LinusAvatar,
  },
  mrsBadgerFace: {
    name: "Anna-Marie Swan",
    username: "@MrsBadgerface",
    avatar: MrsBadgerFaceAvatar,
  },
  manboy: {
    name: (
      <>
        manboy.ethᵍᵐ
        <span role='img' aria-label='coffee'>
          ☕️
        </span>
      </>
    ),
    username: "@manboy_eth",
    avatar: ManBoyAvatar,
  },
  cent: {
    name: "Cent",
    username: "@cent",
    avatar: CentAvatar,
  },
  aragon: {
    name: "Aragon 🦅",
    username: "@AragonProject",
    avatar: AragonAvatar,
  },
  gnosis_guild: {
    name: "gnosis guild 𒆙",
    username: "@GnosisGuild",
    avatar: GGAvatar,
  },

  the_real_stone: {
    name: "Anna Stone ✨therealstone.eth",
    username: "@TheRealStone",
    avatar: RealStoneAvatar,
  },
};
