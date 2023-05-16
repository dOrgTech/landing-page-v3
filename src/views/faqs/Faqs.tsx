import React, { Fragment } from "react";
import { Container, Grid, Link, Typography } from "@mui/material";
import { colors } from "../../theme";
import FaqItem, { FaqItemProps } from "./components/FaqItem/FaqItem";

export const FaqsView: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={9} mb={24}>
        <Grid item>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              marginTop: "10vh",
              transform: "translateY(5vh)",
            }}>
            <Grid item>
              <Typography variant='h1' sx={{ fontSize: ["3rem", "4rem"] }}>
                Frequently Asked Questions
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 20, maxWidth: 550 }}>
                Have a question that isn&apos;t here?{" "}
                <Link href={"mailto:contact@dorg.tech"} target='_blank'>
                  <span style={{ color: colors.blue }}>Drop us a line.</span>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={7} flexDirection='column'>
            {FAQS.map((item, index) => (
              <Grid item key={index}>
                <FaqItem
                  titleColor={item.titleColor}
                  sectionTitle={item.sectionTitle}
                  faqs={item.faqs}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const FAQS: FaqItemProps[] = [
  {
    sectionTitle: "On dOrg",
    titleColor: colors.purple,
    faqs: [
      {
        question: "What is dOrg?",
        answer: (
          <Fragment>
            dOrg is a web3 development services provider operating as a DAO
            since 2019.
            <br />
            <br />
            We are an autonomous collective of 100-ish web3 developers and
            specialists from 20 nationalities. So far we&apos;ve worked with +85
            web3 projects generating +$2B of total LTV in shipped products as
            well as +8$M on-chain revenue.
            <br />
            <br />
            Some of our clients are: Gnosis, Starkware, EthFoundation, Tezos,
            Balancer, The Graph, etc.
          </Fragment>
        ),
      },
      {
        question: "How does dOrg work as an organization?",
        answer: (
          <Fragment>
            Our structure and processes are open to the community to fork from
            our best practices. Check out our{" "}
            <Link
              href='https://docs.dorg.tech/'
              target='_blank'
              sx={{ color: colors.purple }}>
              Handbook!
            </Link>
          </Fragment>
        ),
      },
    ],
  },
  {
    sectionTitle: "On working with dOrg",
    titleColor: colors.green,
    faqs: [
      {
        question: "What services does dOrg offer?",
        answer: (
          <Fragment>
            We offer web3 development services scoped as:
            <br />
            <br />
            <li>
              <strong style={{ fontWeight: "bold" }}>Milestone Based:</strong>{" "}
              Whether your organization is crypto-native or just exploring the
              space, our experts can help flesh out your project requirements
              and deliver a production-ready solution. You own the code and we
              train your team to maintain it.
            </li>
            <br />
            <li>
              <strong style={{ fontWeight: "bold" }}>Team Extension:</strong> We
              embed engineers with your core team to augment and accelerate
              their web3 development capabilities. We&apos;ll help transition
              the project to your team when the time is right.
            </li>
            <br />
            <li>
              <strong style={{ fontWeight: "bold" }}>
                Protocol Partnership:
              </strong>{" "}
              Ready to start scaling your developer ecosystem? We&apos;ll
              assemble a specialized team that works autonomously to advance
              roadmap items, battle-test your developer tools, and support 3rd
              parties looking to integrate your tech.
            </li>
            <br />
            <br />
            We also offer packages such as Scoping Sprint, token economics and
            Marketing Audit.
          </Fragment>
        ),
      },
      {
        question: "Can I check work done by dOrg?",
        answer: (
          <Fragment>
            Absolutely! We&apos;ve created{" "}
            <Link
              href='https://www.dorg.tech/#/case-studies'
              target='_blank'
              sx={{ color: colors.green }}>
              detailed case studies
            </Link>{" "}
            of the work we did for StarkWare, Gnosis Guild, Tezos and DoinGud.
            If you have any questions feel free to message us on Discord or shot
            us an email at{" "}
            <Link href={"mailto:contact@dorg.tech"} target='_blank'>
              <span style={{ color: colors.green }}>
                {" "}
                contact@dorg.tech {";)"}
              </span>
            </Link>
          </Fragment>
        ),
      },
      {
        question: "What does working with dOrg look like?",
        answer: (
          <Fragment>
            Working with dOrg is a unique, collaborative, and efficient
            experience tailored to meet our clients development needs. You can
            expect:
            <br />
            <br />
            <li>
              <strong style={{ fontWeight: "bold" }}>
                Personalized onboarding.
              </strong>{" "}
              We begin by understanding your project requirements, goals, and
              timeline to ensure we&apos;re aligned with your vision. This
              process helps us select the best-suited developers and team
              members from our diverse pool of talent.
            </li>
            <br />
            <li>
              <strong style={{ fontWeight: "bold" }}>
                Transparent communication.
              </strong>{" "}
              We prioritize open and clear communication throughout the project,
              keeping you informed of progress, milestones, and any potential
              roadblocks. We are always available to address your questions,
              concerns, and feedback.
            </li>
            <br />
            <li>
              <strong style={{ fontWeight: "bold" }}>
                Adaptive collaboration.
              </strong>{" "}
              Our team is agile and adjusts quickly to project changes or new
              requirements, ensuring your project stays on track. Our DAO
              structure allows us to rapidly scale resources as needed, offering
              a flexible approach that adapts to your evolving needs.
            </li>
            <br />
            <li>
              <strong style={{ fontWeight: "bold" }}>
                Cutting-edge expertise.
              </strong>{" "}
              dOrg developers are highly skilled in the latest web3 and
              blockchain technologies, enabling us to provide top-quality
              solutions for your project. We stay ahead of industry trends to
              ensure we&apos;re always ready to tackle new challenges and
              opportunities.
            </li>
            <br />
            <li>
              <strong style={{ fontWeight: "bold" }}>
                Decentralized project management.
              </strong>{" "}
              Our decentralized approach to project management encourages
              ownership, creativity, and innovation within our teams. This model
              fosters a collaborative environment, ensuring the best possible
              solutions are proposed and implemented for your project.
            </li>
            <br />
            <li>
              <strong style={{ fontWeight: "bold" }}>Quality assurance.</strong>{" "}
              We pride ourselves on delivering high-quality work, and our
              developers adhere to strict coding standards and best practices.
              Our rigorous quality assurance process ensures that the final
              product meets your expectations and performs optimally.
            </li>
            <br />
            <li>
              <strong style={{ fontWeight: "bold" }}>
                Post-project support.
              </strong>{" "}
              After the project is completed, we offer ongoing support and
              maintenance to ensure your product remains up-to-date and
              functional. We&apos;re committed to building long-term
              relationships with our clients and are always available to help
              with future projects or updates.
            </li>
          </Fragment>
        ),
      },
      {
        question: "What's the process of hiring dOrg?",
        answer: (
          <Fragment>
            When you choose to work with our DAO work collective:
            <br />
            <br />
            <li>
              First, make sure we know more about your specific needs by filling
              out this{" "}
              <Link
                href='https://www.dorg.tech/#/hire'
                target='_blank'
                sx={{ color: colors.green }}>
                form.
              </Link>{" "}
            </li>
            <br />
            <li>
              If we have a dedicated team available for you, we&apos;ll reach
              you out to schedule a discovery call to define how we can best
              help you and ensure we&apos;re aligned with your vision. This
              process helps us define the project scope and select the
              best-suited team members.
              <br />
              Hint: If you do not have technical specifications decided, be
              prepared for a small project scope with us first, and afterwards a
              bigger estimate on your project build.
            </li>
            <br />
            <li>
              We&apos;ll come up with a tailored collaboration statement of work
              after our initial meeting based on your specific needs. Bear in
              mind that you can utilize your project&apos;s tokens to align
              incentives with our builders in addition to regular stablecoins.
            </li>
            <br />
            <li>
              Once we sign the statement of work we&apos;ll set up a kickoff
              call and officially introduce you (if we haven&apos;t already) to
              the team: Devs, Tech Lead and PM.
            </li>
            <br />
            <li>
              Right after we receive the upfront payment from the invoice and
              have attended our kickoff call, the team will get right to work!
            </li>
            <br />
            <li>
              Expect transparent communication, adaptive collaboration,
              cutting-edge expertise, decentralized project management, quality
              assurance and post-project support while working with dOrg. Read
              more about our best practices on “What does working with dOrg look
              like?”.
            </li>
            <br />
            By working with dOrg, you can be confident that your project will be
            executed with the utmost professionalism, efficiency, and expertise.
            Our dedicated teams are ready to help you bring your vision to life!
          </Fragment>
        ),
      },
      {
        question: "We want to work with dOrg, what's the first step?",
        answer: (
          <Fragment>
            Let us know about your needs by filling up this{" "}
            <Link
              href='https://www.dorg.tech/#/hire'
              target='_blank'
              sx={{ color: colors.green }}>
              form
            </Link>{" "}
            If we have a dedicated team available for you, we&apos;ll reach you
            out to schedule a call to define how we can help you. Be prepared
            for a small project to scope first and then a bigger estimate on
            your project build.
          </Fragment>
        ),
      },
    ],
  },
  {
    sectionTitle: "On joining dOrg",
    titleColor: colors.magenta,
    faqs: [
      {
        question: "How many members does dOrg have?",
        answer: (
          <Fragment>
            dOrg started with 4 members on 2019. Currently it&apos;s a community
            of 100-ish members distributed around the world from +20
            nationalities. Around 65-ish members are active contributors to the
            organization either working on client-facing projects or internal
            Ops.
          </Fragment>
        ),
      },
      {
        question: "How do I apply to join dOrg?",
        answer: (
          <Fragment>
            Fill up this{" "}
            <Link
              href='https://www.dorg.tech/#/join'
              target='_blank'
              sx={{ color: colors.magenta }}>
              form
            </Link>{" "}
            if you want to join us! Please notice that we&apos;ll reach you out
            to start the interview process if we have matching positions
            available inside the organization.
          </Fragment>
        ),
      },
      {
        question: "Can I join dOrg if I'm not a web3 developer? ",
        answer: (
          <Fragment>
            Sure, as long as we have an opportunity for you! dOrg is 90% formed
            by web3 developers but we also have a team of web3 specialists with
            backgrounds like economics, finances, business development,
            journalism, psychology, politics, anthropology, architecture, game
            theory, etc.
          </Fragment>
        ),
      },
    ],
  },
  {
    sectionTitle: "On dOrg Hot Seat",
    titleColor: colors.orange,
    faqs: [
      {
        question: "What's dOrg Hot Seat? ",
        answer: (
          <Fragment>
            This is our podcast! We collectively interview web3 tech leads and
            founders to discuss high technical aspects of blockchain projects.
            This is a podcast build by and for web3 developers and tech
            enthusiasts like us! Check out the episodes on{" "}
            <Link
              href='https://www.youtube.com/playlist?list=PL6f1W8NPPUfhpZFyqa8PEKAKAuJqCuZco'
              target='_blank'
              sx={{ color: colors.orange }}>
              Youtube
            </Link>{" "}
            or{" "}
            <Link
              href='https://open.spotify.com/show/0hoGNLY8fsvTivEBnSW0JK'
              target='_blank'
              sx={{ color: colors.orange }}>
              Spotify
            </Link>
            !<br />
            So far we&apos;ve had awesome guests like {""}
            <Link
              href='https://www.youtube.com/watch?v=JA7ZdYOQI-4'
              target='_blank'
              sx={{ color: colors.orange }}>
              Lens
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=itIaPLOn6Ew&t=1s'
              target='_blank'
              sx={{ color: colors.orange }}>
              Sismo
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=_bajTdUIf-A'
              target='_blank'
              sx={{ color: colors.orange }}>
              Vocdoni
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=y5JlYSlAgOg'
              target='_blank'
              sx={{ color: colors.orange }}>
              Utopia
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=rPgq7pxw6aU'
              target='_blank'
              sx={{ color: colors.orange }}>
              Kleros
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=RV9ZwvuASYQ'
              target='_blank'
              sx={{ color: colors.orange }}>
              BNB chain
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=RV9ZwvuASYQ'
              target='_blank'
              sx={{ color: colors.orange }}>
              ConsenSys
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=RV9ZwvuASYQ'
              target='_blank'
              sx={{ color: colors.orange }}>
              1Inch
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=XMHacGigGkw&list=PL6f1W8NPPUfhpZFyqa8PEKAKAuJqCuZco&index=12&pp=iAQB'
              target='_blank'
              sx={{ color: colors.orange }}>
              Safe
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=6X7VwiFxNKc&list=PL6f1W8NPPUfhpZFyqa8PEKAKAuJqCuZco&index=14&pp=iAQB'
              target='_blank'
              sx={{ color: colors.orange }}>
              Snapshot
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=19OVFg4GGHs&t=1s'
              target='_blank'
              sx={{ color: colors.orange }}>
              Superfluid
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=9_lDSJXRyHI&t=2s'
              target='_blank'
              sx={{ color: colors.orange }}>
              Polywrap
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=qpPbLZrjhfc&t=1s'
              target='_blank'
              sx={{ color: colors.orange }}>
              Bloom Network
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=q1voqfj1GUo'
              target='_blank'
              sx={{ color: colors.orange }}>
              Auth
            </Link>{" "}
            <Link
              href='https://www.youtube.com/watch?v=Wr6JX3lEL-Y'
              target='_blank'
              sx={{ color: colors.orange }}>
              Ownco
            </Link>,
            etc.
          </Fragment>
        ),
      },
      {
        question: "How is dOrg Hot Seat funded? ",
        answer: (
          <Fragment>
            dOrg funded first season of Hot Seat. Currently we are looking for
            sponsors. If that could be you, fill out this{" "}
            <Link
              href='https://airtable.com/shr4VGh3iZCIVhCg3'
              target='_blank'
              sx={{ color: colors.orange }}>
              short form
            </Link>{" "}
            and we&apos;ll reach out to you!
          </Fragment>
        ),
      },
    ],
  },
  {
    sectionTitle: "Other",
    titleColor: colors.blue,
    faqs: [
      {
        question:
          "I would like to interview a dOrg member for a press/research purposes!",
        answer: (
          <Fragment>
            Thanks for your interest in dOrg! Please it would be awesome if you
            could share a bit about your research/press interest, yourself and
            the institution you are representing. You could either send us an
            email at{" "}
            <Link href={"mailto:contact@dorg.tech"} target='_blank'>
              <span style={{ color: colors.blue }}>contact@dorg.tech</span>
            </Link>{" "}
            or text us on our{" "}
            <Link
              href='https://discord.com/invite/bA9ZM7WXZU'
              target='_blank'
              sx={{ color: colors.purple }}>
              Discord
            </Link>{" "}
            public channels.
            <br />
            Also, it might be useful to check out our{" "}
            <Link
              href='https://docs.dorg.tech/'
              target='_blank'
              sx={{ color: colors.purple }}>
              Handbook
            </Link>{" "}
            to familiarize yourself with dOrg processes and structures!
          </Fragment>
        ),
      },
      {
        question: "I would like to discuss a potential partnership with dOrg!",
        answer: (
          <Fragment>
            Awesome, we&apos;re always up to win-win collabs! Send us an email
            at{" "}
            <Link href={"mailto:contact@dorg.tech"} target='_blank'>
              <span style={{ color: colors.blue }}>contact@dorg.tech</span>
            </Link>{" "}
            or text us on our{" "}
            <Link
              href='https://discord.com/invite/bA9ZM7WXZU'
              target='_blank'
              sx={{ color: colors.blue }}>
              Discord
            </Link>{" "}
            what you have in mind.
          </Fragment>
        ),
      },
      {
        question: "How can I meet dOrg builders IRL?",
        answer: (
          <Fragment>
            When we are not programming or learning about the newest code
            trends, you can find us attending at IRL hackatons or web3 events
            around the world. Look for the{" "}
            <Link
              href='https://twitter.com/dOrg_tech/status/1629956395192799235'
              target='_blank'
              sx={{ color: colors.blue }}>
              dOrg t-shirt
            </Link>{" "}
            and say hi! —You can also shoot us a message on{" "}
            <Link
              href='https://discord.com/invite/bA9ZM7WXZU'
              target='_blank'
              sx={{ color: colors.blue }}>
              Discord
            </Link>{" "}
            or
            <Link
              href='https://twitter.com/dOrg_tech'
              target='_blank'
              sx={{ color: colors.blue }}>
              Twitter
            </Link>
            ! {";)"}
          </Fragment>
        ),
      },
    ],
  },
];
