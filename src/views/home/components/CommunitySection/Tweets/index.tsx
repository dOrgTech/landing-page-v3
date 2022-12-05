import { communityContent } from "./CommunityContent";
import { twitterAccounts } from "../../../../../constants/twitterAccounts";
import { TwitterCardProps } from "../../../../../commons/twitter/TwitterCard";
import Magenta from "../../../../../assets/imgs/community/magenta.webp";
import LinusShoes from "../../../../../assets/imgs/community/linusShoe.webp";
import NousSommes from "../../../../../assets/imgs/community/nousSommes.webp";
import Newsletter from "../../../../../assets/imgs/community/newsletter.webp";
import Giveth from "../../../../../assets/imgs/community/givethio.webp";
import Unconference from "../../../../../assets/imgs/community/unconference.webp";
import GranCanaria from "../../../../../assets/imgs/community/grancanaria.webp";
import EthBerlin from "../../../../../assets/imgs/community/ethBerlin.webp";
import MetaFam from "../../../../../assets/imgs/community/metaFam.webp";
import Kleros from "../../../../../assets/imgs/community/kleros.webp";
import Near from "../../../../../assets/imgs/community/near.webp";
import Mackenzie from "../../../../../assets/imgs/community/mackenzie.webp";

export const communityTweets: TwitterCardProps[] = [
  {
    account: twitterAccounts.dorg,
    externalLink: "https://twitter.com/dOrg_tech/status/1408085004299632642",
    text: communityContent.magenta,
    image: Magenta,
    // color: colors.magenta,
  },
  {
    account: twitterAccounts.linus,
    externalLink: "https://twitter.com/Linus_Eth/status/1474658631035625473",
    text: communityContent.linus,
    image: LinusShoes,
    // color: colors.green,
  },
  {
    account: twitterAccounts.dorg,
    externalLink: "https://twitter.com/dOrg_tech/status/1456023184034123785",
    text: communityContent.newsletter,
    image: Newsletter,
    // color: colors.blue,
  },
  {
    account: twitterAccounts.dorg,
    externalLink: "https://twitter.com/dOrg_tech/status/1568615272004653056",
    text: communityContent.unconference,
    image: Unconference,
    // color: colors.yellow,
  },
  {
    account: twitterAccounts.dorg,
    externalLink: "https://twitter.com/dOrg_tech/status/1567431577797287937",
    text: communityContent.granCanaria,
    image: GranCanaria,
    // color: colors.green,
  },
  {
    account: twitterAccounts.phil_h,
    externalLink: "https://twitter.com/phil_h/status/1420875468329398274",
    text: communityContent.phil_h,
    image: NousSommes,
    // color: colors.orange,
  },
  {
    account: twitterAccounts.dorg,
    externalLink: "https://twitter.com/dOrg_tech/status/1571568388907884546",
    text: communityContent.ethBerlin,
    image: EthBerlin,
    // color: colors.magenta,
  },
  {
    account: twitterAccounts.dorg,
    externalLink: "https://twitter.com/dOrg_tech/status/1573317169856782337",
    text: communityContent.metaFam,
    image: MetaFam,
    // color: colors.orange,
  },
  {
    account: twitterAccounts.dorg,
    externalLink: "https://twitter.com/dOrg_tech/status/1573379206226251778",
    text: communityContent.kleros,
    image: Kleros,
    // color: colors.purple,
  },
  {
    account: twitterAccounts.mrsBadgerFace,
    externalLink:
      "https://twitter.com/MrsBadgerface/status/1443566731973185537",
    text: communityContent.giveth,
    image: Giveth,
    // color: colors.purple,
  },
  {
    account: twitterAccounts.dorg,
    externalLink: "https://twitter.com/dOrg_tech/status/1527478011863367689",
    text: communityContent.near,
    image: Near,
    // color: colors.yellow,
  },
  {
    account: twitterAccounts.dorg,
    externalLink: "https://twitter.com/dOrg_tech/status/1480549773539258379",
    text: communityContent.mackenzie,
    image: Mackenzie,
    // color: colors.green,
  },
];
