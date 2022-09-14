import { communityContent } from "./CommunityContent";
import { twitterAccounts } from "../../../../../constants/twitterAccounts";
import { TwitterCardProps } from "../../../../../commons/twitter/TwitterCard";
import { colors } from "../../../../../theme";
import Magenta from "../../../../../assets/imgs/community/magenta.png";
import LinusShoes from "../../../../../assets/imgs/community/linusShoe.png";
import NousSommes from "../../../../../assets/imgs/community/nousSommes.png";
import Newsletter from "../../../../../assets/imgs/community/newsletter.png";
import Giveth from "../../../../../assets/imgs/community/givethio.png";

export const communityTweets: TwitterCardProps[] = [
  {
    account: twitterAccounts.dorg,
    externalLink: "https://twitter.com/dOrg_tech/status/1408085004299632642",
    text: communityContent.magenta,
    image: Magenta,
    color: colors.magenta,
  },
  {
    account: twitterAccounts.linus,
    externalLink: "https://twitter.com/Linus_Eth/status/1474658631035625473",
    text: communityContent.linus,
    image: LinusShoes,
    color: colors.green,
  },
  {
    account: twitterAccounts.dorg,
    externalLink: "https://twitter.com/dOrg_tech/status/1456023184034123785",
    text: communityContent.newsletter,
    image: Newsletter,
    color: colors.blue,
  },
  {
    account: twitterAccounts.phil_h,
    externalLink: "https://twitter.com/phil_h/status/1420875468329398274",
    text: communityContent.phil_h,
    image: NousSommes,
    color: colors.orange,
  },
  {
    account: twitterAccounts.mrsBadgerFace,
    externalLink: "https://twitter.com/MrsBadgerface/status/1443566731973185537",
    text: communityContent.giveth,
    image: Giveth,
    color: colors.purple,
  },
]