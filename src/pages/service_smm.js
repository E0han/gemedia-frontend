import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box, List } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/common/CTA";
import imgWorkCover from "../assets/image/jpg/details/details-2.jpg";
import imgS1 from "../assets/image/jpg/details/details-12.jpg";
import imgS2 from "../assets/image/jpg/details/details-11.jpg";
import imgS3 from "../assets/image/jpg/details/details-10.jpg";
import imgS4 from "../assets/image/jpg/details/details-9.jpg";
import imgS5 from "../assets/image/jpg/details/details-14.jpg";
import imgS6 from "../assets/image/jpg/details/details-13.jpg";
import { device } from "../utils";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LinkStyled from "../components/Core/LinkContact";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "about",
        "contact",
        "footer",
        "homepage",
        "header",
      ])),
      // Will be passed to the page component as props
    },
  };
}

const WorkSingle = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Section hero>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box>
                  <Title className="my-4">
                    Social Media Consulting & Management
                  </Title>
                </Box>
              </Col>
            </Row>

            <Box pt={["4rem", null, null, "6.25rem"]}>
              <img src={imgWorkCover} alt="" className="img-fluid w-100" />
            </Box>
          </Container>
        </Section>

        <div className="mt-lg-3">
          <Section>
            <Container>
              <Row>
                <Text>
                  China has the largest digital buyer population in the world,
                  and social media marketing in China has also entered a
                  brand-new era due to the emergence of the Chinese e-commerce
                  market.
                </Text>
                <Text>
                  There is an increasing correlation between the presence of
                  brands on social media and sales performance and customer
                  loyalty. Whether or not an international brand has a sales
                  channel in China, if the brand is able to sustainably maintain
                  a positive brand image on Chinese social media, it will
                  continue to attract Chinese consumers, and potential customers
                  will always be happy to find their own purchase channel.
                </Text>
                <Text>
                  In spite of the fact that Chinese social media marketing is
                  promising, it is highly localized and unique, and western
                  rules cannot be applied to it. They can be very powerful if
                  you adapt them well, but many international brands usually
                  fail to make it due to cultural dynamics and language
                  barriers.
                </Text>
                <Text>
                  At “GEMedia” we will use our extensive experience and network
                  in Chinese social media to craft an innovative strategy
                  tailored to meet your KPIs and assist you in your breakthrough
                  in the China market through exceptional social media marketing
                  to gain visibility.
                </Text>
                <Text>
                  We help Australian brands and local physical stores market to
                  a Chinese-Australian demographic providing you with the
                  ability to engage your Chinese audience and increase sales and
                  engagement. With our specialist support, we can assist our
                  clients in navigating the complex media industry and
                  optimising their digital strategy in China.
                </Text>
                <Text>
                  From our experience and knowledge of the Chinese market in
                  Australia and China, we are happy to share insights and
                  information with you. A consultation is the first step to see
                  if you are ready for China and to start planning. Get started
                  on your Chinese marketing journey by{" "}
                  <Link href="/contact">contacting us</Link> today.
                </Text>
              </Row>
            </Container>
          </Section>
          <Container>
            <Title variant="secSm" className="mb-5 pb-lg-4">
              How GEMedia Can Support You?
            </Title>
            <Row>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  Step 1. Evaluating
                </Title>
                <Text variant="p">
                  We can help you evaluate your social media performance and
                  optimize your strategy if you already have a social media
                  plan. If you are a newcomer to Chinese social media, we will
                  assist you in identifying the right target customers. We will
                  also help you determine which social media platforms are most
                  effective, and what social media strategy is most effective
                  for your brand.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  Step 2. Budget Planning
                </Title>
                <Text variant="p">
                  A social media budget is prepared for the upcoming month
                  estimating the number of marketing hours needed by your
                  organization.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  Step 3. Execution
                </Title>
                <Text variant="p">
                  In accordance with the strategy, our team will assist you in
                  your Chinese social media marketing, as well as
                  problem-solving through comprehensive Chinese market research
                  to help you expand your target market and increase brand
                  awareness.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  Step 4. Report & Adjust
                </Title>
                <Text variant="p">
                  Through careful monitoring throughout the process, our team
                  will track the data, analyse the results, and optimise digital
                  marketing performance and expenditures.
                </Text>
              </Col>
            </Row>
          </Container>
        </div>
        <Section className="mt-lg-5 pb-0">
          <Container>
            <Row>
              <Title className="mb-5 pb-lg-4">
                Be our clients, What you can get?
              </Title>
              <Text>
                <List>
                  <li>
                    You can count on a professional team to provide you with
                    accurate and culturally sensitive social media marketing
                    consultation and services.
                  </li>
                  <li>
                    You will receive regular updates on China industry dynamics
                    to assist you in making better business decisions
                  </li>
                  <li>
                    Provide you with an understanding of Chinese customers'
                    preferences in practice and assist in the optimisation of
                    market strategies
                  </li>
                  <li>
                    Join our online or offline sharing session to learn the
                    latest social media trends and skills
                  </li>
                </List>
              </Text>
            </Row>
          </Container>
        </Section>

        <Box py={4}>
          <CTA />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
