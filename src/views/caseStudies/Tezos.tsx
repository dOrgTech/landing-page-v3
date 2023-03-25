import React from "react";
import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@material-ui/core";
import { CaseStudyLayout } from "./CaseStudyLayout";
import { CaseStudyLinkProps } from "../../constants/caseStudies";
import CaseStudyHeading from "./components/CaseStudyHeading";
import tezosTweet from "../../assets/imgs/case-studies/tezos-tweet.png";

export const Tezos = ({ ...props }: CaseStudyLinkProps) => {
  const { slug, title, color } = props;

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
            dOrg identified the technical solution and provided end-to-end
            development of the 1st DAO framework on Tezos, Homebase. With over
            30 different active DAOs and 100+ active DAO members, Homebase
            continues to be the leading DAO creation tool in Tezos. We continue
            to work with Tezos to improve adoption of Homebase in our{` `}
            <Link
              href="https://tezos-homebase.io/"
              sx={{ color: color, fontWeight: 600 }}
            >
              v2
            </Link>
            .
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="background" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            When Tezos was searching for a team to build its first DAO creation
            tool, we were happy to take on the task. Since April 2021,{` `}
            <Link
              href="https://tezos.com/"
              sx={{ color: color, fontWeight: 600 }}
            >
              Tezos
            </Link>
            {` `}
            has engaged dOrg to make a DAO creation solution for the whole Tezos
            ecosystem. At its current stage, the{` `}
            <Link
              href="https://tezos-homebase.io/"
              sx={{ color: color, fontWeight: 600 }}
            >
              Homebase
            </Link>
            {` `}
            dApp has been launched as an MVP, as well as producing analytics
            related to the adoption of Homebase by individual members and groups
            within the Tezos ecosystem who have turned their groups into
            functioning DAOs such as{` `}
            <Link
              href="https://v2.tezos-homebase.io/explorer/dao/KT1HkRUSFvy9CX5NUdC7wPw4wfMHAM1Kroqf/overview"
              sx={{ color: color, fontWeight: 600 }}
            >
              Crunchy.Network
            </Link>
            {` `}
            and the{` `}
            <Link
              href="https://v2.tezos-homebase.io/explorer/dao/KT1KUF5PQYJhUXQoHfNaGYekBGabmLtjQ9ks/overview"
              sx={{ color: color, fontWeight: 600 }}
            >
              Sebuh.net XTZ Baker DAO
            </Link>
            .
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            The dOrg team formed a deep understanding of the Tezos Ecosystem
            needs, tech stack, and roadmap while actively contributing to the
            development of a DAO creation solution, which has been widely
            adopted by the individual members of the Tezos ecosystem.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="team" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            Our team has, over the past 1+ years, provided specialists in web3
            software architecture, integrations, smart contracts, and ecosystem
            knowledge with a proven track record in the space. At the same time,
            we assigned a dedicated Tech lead– ensure quality code,
            documentation, and testing– as well as a Project Manager to ensure
            smooth coordination, including scheduling, feedback, personnel
            assignment, and work reporting.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="focus" color={color} />
          <Stack spacing={4}>
            <Typography sx={{ fontSize: 20 }}>
              After forming this solid understanding of Tezos’s needs,{` `}
              <strong>
                dOrg identified the technical solution and provided end-to-end
                development of the 1st DAO framework on Tezos.
              </strong>
              {` `}
              We have also been responsible for community interfacing and
              feedback gathering in order to encourage adoption of Homebase.
              This adoption will help to proliferate more democratic ways of
              working.
            </Typography>
            <Stack spacing={0.5}>
              <Typography variant="h5" component="h4" sx={{ mt: 0 }}>
                From Proof to Concept to v2: <br />
                Tezos&#39;s Homebase & Homebase Lite
              </Typography>
              <List sx={{ pt: 0.5 }}>
                <StyledListItem>
                  understand the product vision and scope out the MVP features
                </StyledListItem>
                <StyledListItem>
                  create a roadmap for the identified features
                </StyledListItem>
                <StyledListItem>
                  architect a scalable solution focused on MVP features with
                  extendability for future roadmap items
                </StyledListItem>
                <StyledListItem>web3 integrations with Frontend</StyledListItem>
                <StyledListItem>development of the Frontend</StyledListItem>
                <StyledListItem>
                  full design of the frontend through high-fidelity Figma
                  mock-ups
                </StyledListItem>
                <StyledListItem>
                  development of identified backend services/integrations needed
                  to facilitate the MVP features
                </StyledListItem>
                <StyledListItem>releasing MVP on Tezos network</StyledListItem>
                <StyledListItem>
                  assess feedback from the Tezos community and make changes to
                  the MVP as required
                </StyledListItem>
              </List>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="objectives" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            As DAOs are becoming more and more popular, Tezos had no way of
            creating them in 2021. dOrg made the first DAO creation tool
            front-end in the Tezos ecosystem, which is used by more than 30 DAOs
            with over 100 active DAO members today. We also contributed
            developer advocacy, marketing, and signal boost to Tezos Homebase on
            Twitter and in our dOrg newsletter.
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            In order to further refine Homebase, dOrg collected feedback from
            one of the DAOs on Homebase which resulted in a recently released a
            custom contracts feature from our partner in this project, Serokell,
            incorporated into the front-end for advanced DAOs and a more
            user-friendly version called{` `}
            <Link
              href="https://github.com/tezos-commons/homebase-lite"
              sx={{ color: color, fontWeight: 600 }}
            >
              Homebase Lite
            </Link>
            , as well as{` `}
            <Link
              href="https://spotlight.tezos.com/tezos-dao-creation-and-management-tool-homebase-introduces-lambda-daos/"
              sx={{ color: color, fontWeight: 600 }}
            >
              Lambda DAOs
            </Link>
            {` `}on Homebase to enable further customization of DAOs. Homebase
            Lite works similarly to{` `}
            <Link
              href="https://snapshot.org/"
              sx={{ color: color, fontWeight: 600 }}
            >
              Snapshot
            </Link>
            {` `}on Ethereum.
          </Typography>
          <Link
            href="https://twitter.com/TezosCommons/status/1435241508832092165"
            sx={{
              transition: "opacity 0.25s ease-in-out",
              "&:hover": { opacity: 0.8 },
            }}
          >
            <img
              src={tezosTweet}
              alt="Tezos Commons tweet announcmenet for Homebase Lite"
              style={{ borderRadius: "1em" }}
            />
          </Link>
          <Typography sx={{ fontSize: 20 }}>
            dOrg is also currently working on the{` `}
            <Link
              href="http://tezos-homebase.netlify.app"
              sx={{ color: color, fontWeight: 600 }}
            >
              v3
            </Link>
            {` `}Homebase dApp and soliciting feedback from the community to
            remove barriers to its adoption.
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Overall, we are actively improving the user experience with feedback
            from the community and increasing adoption with support from{` `}
            <Link
              href="https://tezoscommons.org/"
              sx={{ color: color, fontWeight: 600 }}
            >
              Tezos Commons
            </Link>
            {` `}team members.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="conclusion" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            Overall, we were tasked with building a new solution for DAO
            creation in the Tezos ecosystem. Over the past 1+ years, we
            identified a technical solution and provided end-to-end development
            of the 1st DAO framework on Tezos,{` `}
            <Link
              href="https://tezos-homebase.io/"
              sx={{ color: color, fontWeight: 600 }}
            >
              Homebase
            </Link>
            . With over 30 different active DAOs and 100+ active DAO members,
            Homebase continues to be the leading DAO creation tool in Tezos. We
            continue to work with Tezos to improve adoption of{` `}
            <Link
              href="https://tezos-homebase.io/"
              sx={{ color: color, fontWeight: 600 }}
            >
              Homebase
            </Link>
            {` `}and{` `}
            <Link
              href="https://github.com/tezos-commons/homebase-lite"
              sx={{ color: color, fontWeight: 600 }}
            >
              Homebase Lite
            </Link>
            . dOrg is also actively searching for more projects pushing the
            boundaries of the future in the decentralized web.
          </Typography>
        </Stack>
      </Stack>
    </CaseStudyLayout>
  );
};
