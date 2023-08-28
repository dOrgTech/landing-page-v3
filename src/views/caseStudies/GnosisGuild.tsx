import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { CaseStudyLayout } from "./CaseStudyLayout";
import { CaseStudyLinkProps } from "../../constants/caseStudies";
import CaseStudyHeading from "./components/CaseStudyHeading";

export const GnosisGuild = ({ ...props }: CaseStudyLinkProps) => {
  const { color } = props;
  return (
    <CaseStudyLayout {...props}>
      <Stack spacing={16}>
        <Stack spacing={2}>
          <CaseStudyHeading type="abstract" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg embraced the challenge of building the new and innovative{` `}
            <Link
              href="https://zodiac.wiki/index.php/Category:Documentation"
              sx={{ color: color, fontWeight: 600 }}
            >
              Zodiac dApp
            </Link>
            , an expansion pack for DAOs, as well as{` `}
            <Link
              href="https://tabula.gg/"
              sx={{ color: color, fontWeight: 600 }}
            >
              Tabula.gg
            </Link>
            , a decentralized publication tool.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="background" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            Gnosis Guild was looking for a team to build and maintain its Zodiac
            framework, a toolkit that extends Safe functionality for DAOs
            through modules within Safe’s dApp. In this project, dOrg to provide
            a full suite of development and maintenance for the{` `}
            <Link
              href="https://zodiac.wiki/index.php/Category:Documentation"
              sx={{ color: color, fontWeight: 600 }}
            >
              Zodiac Safe dApp
            </Link>
            : front-end development, web3 integrations, smart contract
            development, and UX/UI design for all functionalities provided by
            the Zodiac modules. In addition, through our continuous ecosystem
            development partnership with Gnosis Guild, dOrg built{` `}
            <Link
              href="https://tabula.gg/"
              sx={{ color: color, fontWeight: 600 }}
            >
              Tabula
            </Link>
            , a product built on the Zodiac ecosystem that enables decentralized
            publishing for writers, DAOs, and multisigs.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="team" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg provided specialists in front-end, web3 integrations, smart
            contract development, and UX/UI design to achieve our objectives of
            building Zodiac dApp and Tabula. With a proven track record in the
            web3 ecosystem, we were able to quickly match talent from our
            extremely talented pool of builders to the project. A dedicated Tech
            Lead was assigned to ensure quality code, documentation, and
            testing. Moreover, a Project Manager was assigned to ensure smooth
            coordination, including scheduling, feedback, personnel assignment,
            and work reporting. We worked closely with the Gnosis Guild team to
            ensure satisfaction as well throughout the entire project.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="focus" color={color} />
          <Stack spacing={0.5}>
            <Typography variant="h5" component="h4" sx={{ mt: 0 }}>
              Continuous Ecosystem Support
            </Typography>
            <Typography sx={{ fontSize: 20 }}>
              dOrg began by focusing on front-end development for Gnosis
              SafeSnap plugin for Snapshot, according to the{` `}
              <Link
                href="https://trello.com/b/SzzgX5Kl/gnosis-dao-tools"
                sx={{ color: color, fontWeight: 600 }}
              >
                Gnosis DAO Tools backlog.
              </Link>
              This backlog covers the initial batch of work in what is an
              on-going relationship. dOrg took on the development of other
              components in the Gnosis SafeSnap projects, such as product
              design, middleware, and backend development as well. In product
              design, we improved the UX of the Reality Module and related
              modules within the Safe Zodiac dApp. In middleware and backend
              work, we provided Solidity development, integrations with DAO
              frameworks, as well as a subgraph for data indexing.
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="alignment" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            We still work with Gnosis Guild to this day maintaining and
            building out cutting-edge web3 projects for the Safe ecosystem!
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type="conclusion" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            Tackling projects like Tabula.gg and Zodiac Protocol enable a new
            generation of DAOs to shape and publish the future. We’ve enjoyed
            partnering with the Gnosis Guild team on these projects and continue
            to deepen our relationships with them. We used our team of over 80+
            experts to source our talent for this project and look forward to
            developing more bleeding-edge projects in the future.
          </Typography>
        </Stack>
      </Stack>
    </CaseStudyLayout>
  );
};
