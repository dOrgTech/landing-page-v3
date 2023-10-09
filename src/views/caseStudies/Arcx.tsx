import React from "react";
import { List, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@material-ui/core";
import { CaseStudyLayout } from "./CaseStudyLayout";
import { CaseStudyLinkProps } from "../../constants/caseStudies";
import CaseStudyHeading from "./components/CaseStudyHeading";

export const Arcx = ({ ...props }: CaseStudyLinkProps) => {
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
            ArcX has partnered with dOrg to build their reviews site MVP called
            Frenreviews, a public service for reviewing web3 dApps, much like
            TrustPilot does for web2. This platform will help users confidently
            explore and trust dApps in a space where reliability is crucial and
            often uncertain due to scams and rugpulls.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='background' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            ArcX were seeking to develop an application with a primary focus on
            enhancing the functionality and appeal of their core product, ArcX
            Analytics. Frenreviews is a valuable tool for ArcX to onboard more
            companies into their analytics platform. In fact, to list a project
            on Frenreviews, projects must first register for ArcX analytics.
            They had a clear vision of the product and we helped them to
            identify, analyze and execute a development solution to bring their
            ideas to real life in a three month plan.
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            This application serves as a strategic tool to incentivize and
            promote the wider adoption of their primary product. By leveraging
            Frenreviews, other projects can achieve a coveted
            &apos;verified&apos; status within the application, signifying their
            commitment to utilizing ArcX Analytics.
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            We developed this project from scratch as a proof of concept to
            gauge interest. The dOrg team understood the ArcX needs, tech stack,
            and roadmap, while actively contributing in designing a suited
            development solution for ArcX.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='focus' color={color} />
          <Stack spacing={4}>
            <Typography sx={{ fontSize: 20 }}>
              In this collaboration, the focus areas were product development
              and app creation. While we provided suggestions on how to design
              the app, working with ArcX was straightforward and efficient
              because they already had a well-defined concept of what they
              wanted to create and a clear understanding of the desired product
              functionality.
            </Typography>

            <Typography sx={{ fontSize: 20 }}>Technical Details:</Typography>
            <Stack spacing={0.5}>
              <List sx={{ pt: 0.5 }}>
                <StyledListItem>
                  Frontend: Next.js, Conneckit, Wagmi, and Tailwind CSS
                </StyledListItem>
                <StyledListItem>
                  Backend: Node.js, Prisma, and PostgreSQL
                </StyledListItem>
                <StyledListItem>
                  Infrastructure: Terraform and Google Cloud Platform
                </StyledListItem>
              </List>
            </Stack>
            <Typography sx={{ fontSize: 20 }}>
              We&apos;ve developed a restful API service deployed using Google
              Cloud Run on the Google Cloud Platform. This API utilizes Prisma
              as the ORM (Object-Relational Mapping) layer and securely stores
              project and review data in a PostgreSQL database. Additionally, it
              seamlessly retrieves information from the ArcX Analytics BigQuery
              application, which resides in a separate Google Cloud Platform
              project.
            </Typography>
            <Typography sx={{ fontSize: 20 }}>
              On the frontend side, we&apos;ve built a Next.js 13 application
              that leverages Conneckit and Wagmi for efficient wallet
              connections.
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='team' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            To make it happen, our team combined strong expertise in back-end,
            front-end, architecture and web3 integrations. To ensure efficient
            project management, we also assigned a dedicated Project Manager who
            oversees scheduling, staffing, and administrative tasks to make sure
            the project stays on track.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CaseStudyHeading type='conclusion' color={color} />
          <Typography sx={{ fontSize: 20 }}>
            ArcX was able to accelerate ArcX roadmap a proof of concept solution
            to rate dApps and drive interest in their main product ArcX
            Analytics. dOrg contributed to the project by executing back-end,
            front-end, architecture and web3 integrations of the platform.
          </Typography>
        </Stack>
      </Stack>
    </CaseStudyLayout>
  );
};
