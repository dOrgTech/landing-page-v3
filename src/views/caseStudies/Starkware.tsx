import React from "react";
import { Link, List, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@material-ui/core";
import { CaseStudyLayout } from "./CaseStudyLayout";
import { CaseStudyLinkProps } from "../../constants/caseStudies";
import CaseStudyHeading from "./components/CaseStudyHeading";

export const Starkware = ({ ...props }: CaseStudyLinkProps) => {
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
          <CaseStudyHeading type="abstract" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg has worked on three different projects with StarkWare since
            2021: the StarkNet AMM Demo App, the RhinoFi integrations with Opera
            Browser, and the StarkEx Metrics Dashboard. The RhinoFi integration
            into a native wallet in Opera Browser is available to over 380
            million users, saving users gas on trading fees in an easy-to-use
            interface. The StarkEx Metrics Dashboard tracks total value locked,
            number of transactions executed, type of transactions processed, and
            cumulative trading volume across all major StarkEx instances. As of
            Q3 2022, there is over $508m total value locked (TVL) in StarkEx,
            over 304m transactions executed on StarkEx, and over $789m
            cumulative trading volume over Q3 2022. The StarkWare x dOrg
            collaboration continues to this day.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="background" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            StarkWare develops STARK-based solutions that provide secure,
            trustless, and massive scaling services to blockchain applications.
            dOrg has contributed to both of their core solutions, StarkNet and
            StarkEx. StarkNet is a permissionless decentralized Validity-Rollup
            (often referred to as a zk-Rollup). It operates as a Layer 2 over
            Ethereum, enabling a dApp to achieve unlimited scale for its
            computation - without compromising Ethereum’s composability or
            security . StarkEx is a scaling SaaS solution that optimizes around
            the scaling needs of particular blockchain applications, such as
            derivatives and spot trading. Since April 2021, StarkWare has
            engaged dOrg to build a variety of highly technical products
            including an{` `}
            <Link
              href="https://amm-demo.starknet.starkware.co/"
              sx={{ color: color, fontWeight: 600 }}
            >
              Automated Market Maker Demo Application
            </Link>
            , a {` `}
            <Link
              href="https://press.opera.com/2022/02/23/opera-ethereum-layer2-defi-starkware-diversify/"
              sx={{ color: color, fontWeight: 600 }}
            >
              RhinoFi integration with Opera
            </Link>
            , and{` `}
            <Link
              href="https://dashboard.starkware.co/starkex"
              sx={{ color: color, fontWeight: 600 }}
            >
              StarkEx Metrics Dashboard.
            </Link>
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            In order to deliver on these products, the dOrg team formed a deep
            understanding of the StarkWare’s needs, tech stack, and roadmap. The
            Automated Market Maker Demo Application required functionality to
            mint, swap, and trade sample tokens. The RhinoFi integration with
            Opera Browser facilitates users making cheaper trades using RhinoFi
            protocol connection to the markets via their APIs with underlying
            scalability provided by StarkEx. RhinoFi provides the best price for
            crypto trades to Opera browser crypto wallet users via their
            protocol.tStarkEx Metrics Dashboard provides users with an overview
            of the performance of StarkEx at large.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="team" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg provided a variety of web3 specialties towards the StarkWare
            engagements including end-to-end development and design for the
            flagship demo of AMM application before StarkWare Alpha’s first
            public release in November 2021.
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            At the same time, for each project, we assigned a dedicated Tech
            lead– to ensure quality code, documentation, and testing– as well as
            a Project Manager to ensure smooth coordination, including
            scheduling, feedback, personnel assignment, and work reporting.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="projects" color={color} />
          <Stack spacing={4}>
            <Stack spacing={0.5}>
              <Typography variant="h5" component="h4" sx={{ mt: 0 }}>
                Automated Market Maker Demo Application
              </Typography>
              <Typography sx={{ fontSize: 20 }}>
                End-to-end design and development of the flagship demo app for
                StarkNet ahead of its first public release,
              </Typography>
              <List sx={{ pt: 0.5 }}>
                <StyledListItem>
                  high-fidelity, fully styled mock-ups
                </StyledListItem>
                <StyledListItem>
                  front-end implementation and API integration
                </StyledListItem>
                <StyledListItem>production devops setup</StyledListItem>
              </List>
            </Stack>

            <Stack spacing={0.5}>
              <Typography variant="h5" component="h4" sx={{ mt: 0 }}>
                RhinoFi integration with Opera
              </Typography>
              <Typography sx={{ fontSize: 20 }}>
                Built support for StarkEx RhinoFi (prev “DeversiFi”) into native
                wallet of Opera Browser (80 million users).
              </Typography>
              <List sx={{ pt: 0.5 }}>
                <StyledListItem>built UI and API integration</StyledListItem>
                <StyledListItem>
                  coordinated between multiple teams at StarkWare, RhinoFi, and
                  Opera
                </StyledListItem>
                <StyledListItem>
                  ported StarkWare’s cryptographic libraries and key derivation
                  algorithms to Java
                </StyledListItem>
              </List>
            </Stack>

            <Stack spacing={0.5}>
              <Typography variant="h5" component="h4" sx={{ mt: 0 }}>
                StarkEx Metrics Dashboard
              </Typography>
              <Typography sx={{ fontSize: 20 }}>
                Enabled parallel monitoring and analysis of performance and
                transaction metrics across all StarkEx instances.
              </Typography>
              <List sx={{ pt: 0.5 }}>
                <StyledListItem>implementation of the UI</StyledListItem>
                <StyledListItem>
                  devops setup and cost optimization
                </StyledListItem>
                <StyledListItem>
                  a data aggregation API that dOrg identified the need for,
                  architected, and implemented
                </StyledListItem>
              </List>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="objectives" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            For each project with StarkWare, we have provided web3 expertise
            that helped them reach key business objectives: providing proof of
            concept for an AMM, aiming for mass crypto adoption with RhinoFi,
            and providing statistics on the current usage of StarkEx. Our
            Automated Market Maker (AMM) Demo Application provided proof of
            concept for an AMM built on StarkWare testnet in June 2021 before
            their StarkWare Alpha launch in November 2021. We’ve built RhinoFi
            into a native wallet in Opera Browser which is available to over 380
            million Opera Browser users with over 170,000 active crypto wallet
            users. This enables cheaper trades over the Ethereum network on
            StarkWare. Finally, the StarkEx Metrics Dashboard we built tracks
            total value locked in StarkEx, number of transactions executed on
            StarkEx, and cumulative trading volume of StarkEx transactions. As
            of Q3 2022, there is over $508m total value locked in StarkEx, over
            304m transactions executed on StarkEx, and over $789m cumulative
            trading volume over Q3 2022.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="conclusion" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg delivered bleeding-edge solutions for all three StarkWare
            engagements: an AMM Demo Application, the RhinoFi integrations with
            Opera, and the StarkEx Metrics Dashboard. By providing our web3
            expertise, we helped them reach key business objectives, as well as
            technical milestones on their roadmap. StarkWare continues to engage
            dOrg on an on-demand basis, helping them reach their roadmap
            milestones and business objectives.
          </Typography>
        </Stack>
      </Stack>
    </CaseStudyLayout>
  );
};
