import React from "react";
import { List, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@material-ui/core";
import { CaseStudyLayout } from "./CaseStudyLayout";
import { CaseStudyLinkProps } from "../../constants/caseStudies";
import CaseStudyHeading from "./components/CaseStudyHeading";

export const DoinGud = ({ ...props }: CaseStudyLinkProps) => {
  const { color } = props;

  const StyledListItem = styled(ListItem)({
    display: "list-item",
    listStyle: "inside",
    paddingLeft: "1.5em",
    paddingTop: 0,
    paddingBottom: 0,
    textIndent: "-1.5em",
    fontSize: 20,
  });

  return (
    <CaseStudyLayout {...props}>
      <Stack spacing={16}>
        <Stack spacing={2}>
          <CaseStudyHeading type='abstract' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg built smart contracts together with the impact-focused NFT
            marketplace, DoinGud, from scratch to support english auctions,
            dutch auctions, secondary market trading, open editions, and minting
            of NFTs. We worked with DoinGud’s team to ensure a thorough
            understanding of their roadmap and render end-to-end smart contract
            engineering and web3 integration services as an extension of their
            team.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='background' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            Community-owned and curated, DoinGud is a NFT marketplace
            incorporating social impact through royalties to public goods
            projects with resale activity of their platform’s NFTs (Non-Fungible
            Tokens). It empowers creators to build sustainable income and
            connect directly with their respective audiences, while making a
            difference by donating shares of their royalties to impact
            organizations.
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            The dOrg team formed a deep understanding of the DoinGud needs, tech
            stack, and roadmap, while actively contributing to its smart
            contract and web3 integrations development for the launch of their
            beta NFT marketplace.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='focus' color={color} />
          <Stack spacing={4}>
            <Typography sx={{ fontSize: 20 }}>
              We provided a dOrg team extension for Smart Contract Engineering,
              Web3 Integrations, and Software Architecture.
            </Typography>
            <Stack spacing={0.5}>
              <Typography variant='h5' component='h4' sx={{ mt: 0 }}>
                Team Extension Support
              </Typography>
              <List sx={{ pt: 0.5 }}>
                <StyledListItem>
                  understand the product vision and scope out the DoinGud’s beta
                  marketplace features
                </StyledListItem>
                <StyledListItem>
                  development of required contracts including functionality for
                  english auctions, dutch auctions, open editions, and secondary
                  market trading of NFTs on the DoinGud’s beta NFT marketplace
                </StyledListItem>
                <StyledListItem>
                  web3 integrations with Frontend.
                </StyledListItem>
                <StyledListItem>
                  assess feedback and make changes to the smart contracts and
                  web3 integrations as required
                </StyledListItem>
                <StyledListItem>
                  extensive testing of all smart contracts functionality was
                  implemented
                </StyledListItem>
              </List>
            </Stack>
            <Typography sx={{ fontSize: 20 }}>
              In addition, a dedicated Tech Lead was assigned to ensure quality
              code, documentation, and testing.
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='conclusion' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg developed the smart contracts and web3 integrations with
            DoinGud’s team for the DoinGud beta. The impact-focused NFT
            marketplace, DoinGud, extended their team with dOrg’s specialists,
            which led to a successful development of their beta on mainnet.
          </Typography>
        </Stack>
      </Stack>
    </CaseStudyLayout>
  );
};
