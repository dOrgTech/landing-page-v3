import React from "react";
import { List, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@material-ui/core";
import { CaseStudyLayout } from "./CaseStudyLayout";
import { CaseStudyLinkProps } from "../../constants/caseStudies";
import CaseStudyHeading from "./components/CaseStudyHeading";
import Link from "@mui/material/Link";

export const DaoDrops = ({ ...props }: CaseStudyLinkProps) => {
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
            dOrg designed and developed{" "}
            <Link href={"https://daodrops.io/"} target='_blank' sx={{ color }}>
              DAO Drops
            </Link>{" "}
            (first round), a Retroactive Public Goods Funding (RPGF) mechanism
            that leveraged the wisdom of informed stakeholders to distribute
            $250,000 – coming from{" "}
            <Link
              href={
                "https://blog.ethereum.org/2022/09/07/esp-q1-q2-allocation-update"
              }
              target='_blank'
              sx={{ color }}>
              Ethereum Foundation
            </Link>{" "}
            — to a range of projects and individuals in the Ethereum ecosystem.
            <br />
            <br />
            The responsibility of impact evaluation was assigned to thousands of
            pseudonymous addresses based on past on-chain activity. We used data
            on governance participation from Deep DAO, smart contract
            deployments from Galxe, and ecosystem event attendance from POAP to
            assign voting power to over 30,000 addresses.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='background' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            <Link
              href={
                "https://blog.ethereum.org/2022/09/07/esp-q1-q2-allocation-update"
              }
              target='_blank'
              sx={{ color }}>
              Ethereum Foundation
            </Link>{" "}
            awarded dOrg with a grant to design and build a mechanism that could
            reward projects and individuals contributing to the Ethereum
            ecosystem, collect the right information about them and finally
            distribute the funds. A goal was to more diversely distribute
            decision making and discovery across pockets of the ecosystem.
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            DAO Drops round one was a pilot project to explore the possibility
            of distributing decision-making power over the funds allocation
            based on past on-chain activity (dApp usage, development, event
            attendance) that give users influence over fund allocation
            decisions.
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            We completed the 1st round of DAO Drops during Q1 of 2023
            distributing $250,000 DAI to eligible nominees.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='focus' color={color} />
          <Stack spacing={4}>
            <Typography sx={{ fontSize: 20 }}>
              The DAO Drops roadmap had three phases in order to be executed.
              First phase was research, followed by the design and development
              phase of the project, including its launch and funds allocations
              and finally feedback gathering and planning next steps for future
              rounds.
            </Typography>
            <Typography sx={{ fontSize: 20 }}>
              <Link
                href={"https://daodrops.gitbook.io/dao-drops-research/"}
                target='_blank'
                sx={{ color }}>
                Research
              </Link>{" "}
              is publicly available for anyone working on retroactive public
              goods funding innovations. We focused on making an accessible and
              fun game-like experience, drawing upon existing multi-stakeholder
              governance processes. We looked into and iterated mechanism
              designs that would identify and incentivize informed decision
              makers across diverse areas of the Ethereum ecosystem, to vote on
              how the funding pool was distributed. And lastly, how to mitigate
              &apos;popularity contest&apos; dynamics.
            </Typography>
            <Typography sx={{ fontSize: 20 }}>
              Build: We developed a scoring script based on the on-chain
              activity datasets we pulled for the initial pilot round, so that
              allocators would have a reasonable amount of points and no
              addresses would have hugely disproportionate power. We built the
              frontend and database to hold the nominees and voting data, and
              leveraged dOrg&apos;s collective brainpower to test and discover
              any adjustments needed.
            </Typography>
            <Stack spacing={0.5}>
              <Typography variant='h5' component='h4' sx={{ mt: 0 }}>
                DAO Drops launched its own{" "}
                <Link
                  href={"https://daodrops.io/"}
                  target='_blank'
                  sx={{ color }}>
                  website
                </Link>{" "}
                and{" "}
                <Link
                  href={"https://twitter.com/dao_drops"}
                  target='_blank'
                  sx={{ color }}>
                  twitter
                </Link>{" "}
                . We initiated a comms campaign that included shared the steps
                for the 1st round:
              </Typography>
              <List sx={{ pt: 0.5 }}>
                <StyledListItem>
                  Nomination phase: Individuals submitted projects/individuals.
                  Outreach for nominees included Meetup organizers in diverse
                  geographic regions.
                </StyledListItem>
                <StyledListItem>
                  Curation process: Duplicated and unrelated entries were
                  removed, and an initial curation scoring implemented to reduce
                  the list to 57 nominees.
                </StyledListItem>
                <StyledListItem>
                  Allocation: Eligible addresses distributed voting points.
                </StyledListItem>
                <StyledListItem>
                  Funds allocation: After voting closed, funds were distributed
                  accordingly.
                </StyledListItem>
              </List>
            </Stack>
            <Typography sx={{ fontSize: 20 }}>
              Overall, this program addresses the need to decentralize the
              funding of the larger Ethereum ecosystem, in order to
              intelligently allocate capital and resources for overlooked
              projects and individuals working to advance Ethereum ecosystem.
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='team' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            DAO Drops team was formed by specialists in mechanism design, web3
            software architecture, integrations, frontend and backend and
            ecosystem knowledge with a proven track record in the space. The
            project included research, brand and UX/UI design, plus strong comms
            & social media efforts to promote the project inside the ecosystem.
            At the same time, we assigned a dedicated Tech lead– ensure quality
            code, documentation, and testing– as well as a Project Manager to
            ensure smooth coordination, including scheduling, feedback,
            personnel assignment, and work reporting.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='objectives' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            Use individuals&apos; past on-chain activity to participatory
            distribute Ethereum Foundation funds to projects and individuals
            contributing to the ecosystem, so that funds could reach overlooked
            projects in the space for retroactively reward. This approach aims
            to address the weaknesses of traditional prospective funding
            approaches which implicitly need to predict the future impact of
            what to fund.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='conclusion' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            Once nomination, curation and allocation phase ended up, $250,000
            DAI were distributed between 57 nominees:
            <List sx={{ pt: 0.5 }}>
              <StyledListItem>
                277 addresses voted, out of the +30.000 addresses with voting
                power.
              </StyledListItem>
              <StyledListItem>$3,056 was the median grant.</StyledListItem>
              <StyledListItem>
                $18,185 was the largest grant distributed Check out the key
                learnings and the next steps in the{" "}
                <Link
                  href='https://substack.com/inbox/post/114871442'
                  sx={{ color }}
                  target='_blank'>
                  full project report.
                </Link>
              </StyledListItem>
            </List>
          </Typography>
        </Stack>
      </Stack>
    </CaseStudyLayout>
  );
};
