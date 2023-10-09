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

export const Fayre = ({ ...props }: CaseStudyLinkProps) => {
  const { color } = props;
  return (
    <CaseStudyLayout {...props}>
      <Stack spacing={16}>
        <Stack spacing={2}>
          <CaseStudyHeading type='abstract' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg established a continuous ecosystem support relationship with{" "}
            <Link
              href='https://www.fayre.com/'
              sx={{ color: color, fontWeight: 600 }}>
              Fayre
            </Link>{" "}
            a NFT marketplace targeting entertainment, sports and luxury brands
            in Latin America. The project is backed by{" "}
            <Link
              href='https://outlierventures.io/'
              sx={{ color: color, fontWeight: 600 }}>
              Outlier Ventures/Filecoin
            </Link>{" "}
            and it’s part of the{" "}
            <Link
              href='https://outlierventures.io/base-camp/filecoin-base-camp/'
              sx={{ color: color, fontWeight: 600 }}>
              Filecoin Basecamp.
            </Link>{" "}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Fayre needed help on developing and deploying Smart Contracts and
            Web3 Integrations for pre-existing code as well as designing and
            deploying the organization token during 2021.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='background' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            <Link
              href='https://www.fayre.com/'
              sx={{ color: color, fontWeight: 600 }}>
              Fayre
            </Link>{" "}
            hired dOrg to provide them continuous support on all web3
            development to launch the Fayre token ($FAYRE) including governance
            design, staking and liquidity pool development and all web3
            integrations needed to interact with their NFT marketplace and
            analytics dashboard.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='team' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg Fayre team was formed by specialists in web3 integrations,
            smart contracts, mechanism design and ecosystem knowledge with a
            proven track record in the space. The project included developing,
            analyzing and deploying pre-existing and new code efforts. At the
            same time, we assigned a dedicated Tech lead ensure quality code,
            documentation, and testing as well as a Project Manager to ensure
            smooth coordination, including scheduling, feedback, personnel
            assignment, and work reporting.
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
                  Development of required smart contracts for launching Fayre
                  token including staking, liquidity pool & governance, plus
                  integrating the token with the NFT marketplace
                </StyledListItem>
                <StyledListItem>
                  Integration with Moonpay & Immutable X for better user
                  experience and reducing transaction gas costs
                </StyledListItem>
                <StyledListItem>
                  Developing multi-chain functionalities in the marketplace
                </StyledListItem>
                <StyledListItem>Developing NFT swap feature</StyledListItem>
                <StyledListItem>
                  Extensive testing of all smart contracts functionality was
                  implemented
                </StyledListItem>
              </List>
            </Stack>
            <Stack spacing={0.5}>
              <Typography variant='h5' component='h4' sx={{ mt: 0 }}>
                Web3 Integrations
              </Typography>
              <List sx={{ pt: 0.5 }}>
                <StyledListItem>
                  Included supporting all different wallets
                </StyledListItem>
                <StyledListItem>
                  Notifications on transactions for different stakeholders as
                  well as making/receiving offers
                </StyledListItem>
                <StyledListItem>Deploying Fayre Token</StyledListItem>
              </List>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='conclusion' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            The smart contracts and web3 integrations we built helped Fayre lock
            $3,8M in funding and helped create NFTs with different brands such
            as RCD Español over 2022. By providing our web3 expertise, we helped
            them reach key business objectives, as well as technical milestones
            on their roadmap.
          </Typography>
        </Stack>
      </Stack>
    </CaseStudyLayout>
  );
};
