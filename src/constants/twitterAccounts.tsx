import React from "react";
import DoinGudAvatar from "../assets/imgs/testimonials/doinGud.png";
import FhomoneyAvatar from "../assets/imgs/testimonials/fhomoney.png";
import AurynAvatar from "../assets/imgs/testimonials/auryn.png";
import StarkwareAvatar from "../assets/imgs/testimonials/starkware.png";
import AcreInvestAvatar from "../assets/imgs/testimonials/acreInvest.png";
import tezosAvatar from "../assets/imgs/testimonials/tezos.png";

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
}

export const testimonialAccounts: TwitterAccounts = {
  doinGud: {
    name: "DoinGud (:D, :D)",
    username: "@doinGudHQ",
    avatar: DoinGudAvatar,
  },
  fhomoney: {
    name: <>kianga.eth <span role="img" aria-label="eart">🌍</span> 1000 ACRE DAOs in 1000 Days</>,
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
    avatar: StarkwareAvatar,
  },
  acreInvest: {
    name: "ACREinvest Web3 Governance & Social Incentives",
    username: "@ACREinvest",
    avatar: AcreInvestAvatar,
  },
  tezos: {
    name: "Tezos Commons",
    username: "@TezosCommons",
    avatar: tezosAvatar,
  }
}