import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { CaseStudyLayout } from "./CaseStudyLayout";
import { CaseStudyLinkProps } from "../../constants/caseStudies";
import CaseStudyHeading from "./components/CaseStudyHeading";

export const GnosisGuild = ({ ...props }: CaseStudyLinkProps) => {
  const { slug, title, color } = props;
  return (
    <CaseStudyLayout {...props}>
      <Stack spacing={16}>
        <Stack spacing={2}>
          <CaseStudyHeading type="abstract" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            dOrg embraced the challenge of building the new and innovative{` `}
            <Link href="#" sx={{ color: color, fontWeight: 600 }}>
              Zodiac dApp
            </Link>
            , an expansion pack for DAOs, as well as{` `}
            <Link href="#" sx={{ color: color, fontWeight: 600 }}>
              Tabula.gg
            </Link>
            , a decentralized publication tool. To hire us to build a
            bleeding-edge web3 project, feel free to fill out{` `}
            <Link href="#" sx={{ color: color, fontWeight: 600 }}>
              this form.
            </Link>
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <CaseStudyHeading type="background" color={color} />
          <Typography sx={{ fontSize: 20 }}>
            Gnosis Guild was looking for a team to build and maintain its Zodiac
            framework, a toolkit that extends Safe functionality for DAOs
            through modules within Safe’s dApp. In this project, dOrg to provide
            a full suite of development and maintenance for the{` `}
            <Link href="#" sx={{ color: color, fontWeight: 600 }}>
              Zodiac Safe dApp
            </Link>
            : front-end development, web3 integrations, smart contract
            development, and UX/UI design for all functionalities provided by
            the Zodiac modules. In addition, through our continuous ecosystem
            development partnership with Gnosis Guild, dOrg built{` `}
            <Link href="#" sx={{ color: color, fontWeight: 600 }}>
              Tabula
            </Link>
            , a product built on the Zodiac ecosystem that enables decentralized
            publishing for writers, DAOs, and multisigs.
          </Typography>
        </Stack>
      </Stack>
    </CaseStudyLayout>
  );
};
