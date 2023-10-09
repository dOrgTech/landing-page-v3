import React from "react";
import { Link, List, ListItem, Stack, Typography, styled } from "@mui/material";
import { CaseStudyLayout } from "./CaseStudyLayout";
import { CaseStudyLinkProps } from "../../constants/caseStudies";
import CaseStudyHeading from "./components/CaseStudyHeading";

const StyledListItem = styled(ListItem)({
  display: "list-item",
  listStyle: "inside",
  paddingLeft: "1.5em",
  paddingTop: 0,
  paddingBottom: 0,
  textIndent: "-1.5em",
  fontSize: 20,
});

export const RKL = ({ ...props }: CaseStudyLinkProps) => {
  const { color } = props;
  return (
    <CaseStudyLayout {...props}>
      <Stack spacing={16}>
        <Stack spacing={2}>
          <CaseStudyHeading type='abstract' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg established a milestone based project relationship with{" "}
            <Link
              href='https://www.rumblekongleague.com/'
              sx={{ color: color, fontWeight: 600 }}>
              RKL
            </Link>{" "}
            a 3v3 basketball NFT enabled game on the metaverse, combining
            play-to-earn functionality with NFT Collection mechanics, enabling
            users to compete in engaging ways through NFTs, say participate in
            leagues, tournaments, own and manage their teams, etc.
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            RKL needed help on developing and deploying Smart Contracts and Web3
            Integrations, as well as Front-End Engineering to accelerate their
            roadmap and launch the game. Their investors include JDS Sports, CAA
            Sports, IDEO CoLab, Framework Ventures, Animoca Brands, SkyVision
            Capital and Victory Creative Group as well as Angel Investors like
            NBA star players Steph Curry And Paul George.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='background' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            <Link
              href='https://www.rumblekongleague.com/'
              sx={{ color: color, fontWeight: 600 }}>
              RKL
            </Link>{" "}
            hired dOrg to provide web3 development including smart contracts,
            web3 integrations and front-end engineering, using Solidity,
            Rust/Golang and ReactJS, NextJS, TypeScript, etc.
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Goal was to support RKL on mainnet as well as minting NFTs
            collections of the marketplace on L2 networks. RKL asked to create
            the game state contract, so that every so often game could update
            the on-chain data with what&apos;s happening inside the game.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='team' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg RKL team was formed by specialists in web3 integrations, smart
            contracts and front-end with a proven track record in the space. The
            project included developing, analyzing and deploying smart contracts
            efforts and coding web3 integrations. At the same time, we assigned
            a dedicated Tech lead ensure quality code, documentation, and
            testing as well as a Project Manager to ensure smooth coordination,
            including scheduling, feedback, personnel assignment, and work
            reporting.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='focus' color={color} />
          <Stack spacing={4}>
            <Stack spacing={0.5}>
              <Typography variant='h5' component='h4' sx={{ mt: 0 }}>
                Smart Contracts
              </Typography>
              <List sx={{ pt: 0.5 }}>
                <StyledListItem>
                  Development of required smart contracts for bridging the
                  existing collections to L2 as well as developing NFT
                  collection composable standard minted on L2.
                </StyledListItem>
                <StyledListItem>
                  Development of game state contract, so that game info can be
                  updated on-chain
                </StyledListItem>
                <StyledListItem>
                  Write, deploy and analyze new and pre existing smart contracts
                </StyledListItem>
              </List>
            </Stack>
            <Stack spacing={0.5}>
              <Typography variant='h5' component='h4' sx={{ mt: 0 }}>
                Web3 Integrations
              </Typography>
              <List sx={{ pt: 0.5 }}>
                <StyledListItem>
                  Integrate club auction contracts
                </StyledListItem>
                <StyledListItem>
                  Extending RKL marketplace to new collections
                </StyledListItem>
                <StyledListItem>Supporting other chains</StyledListItem>
                <StyledListItem>
                  General maintenance and support on the front-end/web3 code or
                  development associated to new components or mockups scoped by
                  client
                </StyledListItem>
              </List>
            </Stack>
            <Stack spacing={0.5}>
              <Typography variant='h5' component='h4' sx={{ mt: 0 }}>
                Front End Engineering
              </Typography>
              <List sx={{ pt: 0.5 }}>
                <StyledListItem>
                  Converting Figma high-fidelity mockups to front-end code.
                </StyledListItem>
              </List>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='conclusion' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            The smart contracts, web3 integrations and front-end we built helped
            RKL lock $1,7M on NFTs as well as reaching out to the World Top 50
            NFT collection of Opensea. By providing our web3 expertise, we
            helped them reach key business objectives, as well as technical
            milestones on their roadmap.
          </Typography>
        </Stack>
      </Stack>
    </CaseStudyLayout>
  );
};
