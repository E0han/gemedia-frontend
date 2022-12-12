import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import {
  Section,
  Button,
  Title,
  Text,
  Box,
  ButtonIcon,
} from "../components/Core";
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
                  <Title className="my-4">KOCs & KOLs Marketing</Title>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  ></Text>
                </Box>
              </Col>
            </Row>

            <Box pt={["4rem", null, null, "6.25rem"]}>
              <img src={imgWorkCover} alt="" className="img-fluid w-100" />
            </Box>
          </Container>
        </Section>

        <div className="">
          <Container>
            <Section>
              <Title variant="secSm" className="mb-5 pb-lg-4">
                KOL and KOC Marketing in China
              </Title>
              <Text>
                KOL marketing is able to effectively increase brand awareness,
                and establish a positive relationship with the customer by
                building a connection. Their huge fan base and fiercely loyal
                followers also have the ability to make things viral for a
                promoting product to become a trending product. KOC marketing is
                becoming more crucial as Chinese consumers are increasingly
                sensitive to authenticity, and sometimes get more value for
                money than KOL marketing. KOC creates authenticity and
                opportunity for engagement with customers directly to convert
                passive followers into active consumers, when they provide their
                heartfelt reviews and opinions.
              </Text>
              <br />
              <br />
              <Row>
                <Col lg="12" className="mb-5 pr-lg-5">
                  <Title variant="cardSm" className="mb-4">
                    KOL (Key Opinion Leader)
                  </Title>
                  <Text variant="p">
                    KOL (Key Opinion Leader) is a spokesperson, a brand
                    ambassador, or more commonly known as an “Influencer”. They
                    have a significant presence with established credibility in
                    the social media industry due to their large amount of
                    followers.
                  </Text>
                </Col>
                <Col lg="12" className="mb-5 pr-lg-5">
                  <Title variant="cardSm" className="mb-4">
                    KOC (Key Opinion consumers)
                  </Title>
                  <Text variant="p">
                    KOC (Key Opinion consumers) are the micro-influencers of
                    China. The benefits of collaborating with KOCs on Chinese
                    social media, especially Little Red Book, is that they are
                    more authentic, they are more loyal to a brand, and much
                    less expensive.
                  </Text>
                </Col>
              </Row>
            </Section>

            <Section>
              <Title variant="secSm" className="mb-5 pb-lg-4">
                How GEMedia Can Support You?
              </Title>
              <Text>
                GEMedia will develop a comprehensive KOLs & KOCs seeding
                strategy catered to your brand’s objective, needs, target
                audience, and budget to maximise brand recognition and
                credibility. We identify the right KOLs and KOCs for your brand
                and create a talent matrix to build your brand awareness,
                promote your products or services, and stimulate your month of
                advertisement on Chinese social media. Different social media
                platforms usually have different focuses, we will customise the
                seeding strategy based on our client’s position.
              </Text>
            </Section>
            <br />
            <Row>
              <Section id="redbooksection">
                <Col lg="12" className="mb-5 pr-lg-5">
                  <Title variant="cardBig" className="mb-4">
                    Little Red Book
                  </Title>
                  <Text variant="p">
                    Little Red Book (LRB) is one of China's top social media
                    platforms with 200 million monthly active users. Regardless
                    of whether your brand has an official account or a shop on
                    this platform, it is still wise to work with KOLs and KOCs
                    to generate word-of-mouth branding here.
                  </Text>
                  <img href={"#"} alt={""} />
                  <Text variant="p">
                    For brands, one of the biggest challenges is getting their
                    potential audience to know about, try, and then recommend
                    their products. The GEMedia team is highly experienced in
                    KOC and KOL marketing on the Little Red Book. Our team is
                    always capable of identifying appropriate LRB users based on
                    their content and audience for our clients.
                  </Text>
                  <Text variant="p">
                    Most importantly, we align with the platform's values:
                    whenever we work with influencers, we always aim to engage
                    them to share real product reviews instead of creating fake
                    advertisements. Chinese customers are sensitive to
                    authenticity, so if someone claims to be able to help you
                    target a pool of users and you do not need to provide any
                    products, please turn them down. Massive fake posts may
                    increase the number of brand posts in a short time, but will
                    damage your brand's image, and you will lose potential
                    customers in a long run. By working effectively with LRB
                    influencers, GEMedia has been helping our clients
                    successfully create brand awareness, establish positive
                    brand presences and enhance reliable word-of-mouth
                    promotions.
                  </Text>
                  <div className="text-center">
                    <Button
                      arrowRight
                      className="border-0 bg-transparent shadow-none text-capitalize py-3"
                      css={`
                    font-weight: 700
                    font-size: 1rem;
                    letter-spacing: -1.2px;
                    line-height: 1.375;
                    @media ${device.md} {
                      font-size: 1rem;
                    }
                `}
                      onClick={(e) => {
                        e.preventDefault();
                        gContext.toggleContact();
                      }}
                    >
                      Contact us
                    </Button>
                  </div>
                </Col>
              </Section>
              <Section id="wechatsection">
                <Col lg="12" className="mb-5 pr-lg-5">
                  <Title variant="cardBig" className="mb-4">
                    WeChat
                  </Title>
                  <Text variant="p">
                    Western social media platforms like Instagram tend to focus
                    on visual content. Influencers on WeChat, however, are
                    usually expected to write long, informative articles with
                    images, videos, GIFs, or audio clips to keep their readers
                    engaged.
                  </Text>
                  <Text variant="p">
                    Your brand's KOL marketing on WeChat will help you to
                    increase audience engagement and maximize WeChat SEO to
                    enhance your brand and product visibility.
                  </Text>
                  <Text variant="p">
                    GEMedia is able to assist our clients in filtering KOLs and
                    selecting appropriate influencers from a variety of
                    categories. Furthermore, we will work with KOLs to create
                    content. As well as enabling influencers to have maximum
                    flexibility, we also assist with the optimization of
                    articles.
                  </Text>
                  <div className="text-center">
                    <Button
                      arrowRight
                      className="border-0 bg-transparent shadow-none text-capitalize py-3"
                      css={`
                    font-weight: 700
                    font-size: 1rem;
                    letter-spacing: -1.2px;
                    line-height: 1.375;
                    @media ${device.md} {
                      font-size: 1rem;
                    }
                `}
                      onClick={(e) => {
                        e.preventDefault();
                        gContext.toggleContact();
                      }}
                    >
                      Contact us
                    </Button>
                  </div>
                </Col>
              </Section>
              <Section id="douyinsection">
                <Col lg="12" className="mb-5 pr-lg-5">
                  <Title variant="cardBig" className="mb-4">
                    Douyin
                  </Title>
                  <Text variant="p">
                    Douyin is the Chinese alternative version of TikTok, a
                    worldwide popular social media platform. With over 700
                    million daily active users, Douyin social media marketing
                    can help brands to increase their web traffic and customer
                    engagement.
                  </Text>
                  <Text variant="p">
                    The Douyin traffic flow is algorithm-driven that ensures the
                    ideal viewers are its audience according to their interests,
                    demand, and purchase.GEMedia will identify and source your
                    ideal KOL to formulate a talent matrix that aligns with your
                    brand positioning to assist your brand in attracting more
                    potential customers and stimulating more sales.
                  </Text>
                  <img href="" alt="" />
                  <div className="text-center">
                    <Button
                      arrowRight
                      className="border-0 bg-transparent shadow-none text-capitalize py-3"
                      css={`
                    font-weight: 700
                    font-size: 1rem;
                    letter-spacing: -1.2px;
                    line-height: 1.375;
                    @media ${device.md} {
                      font-size: 1rem;
                    }
                `}
                      onClick={(e) => {
                        e.preventDefault();
                        gContext.toggleContact();
                      }}
                    >
                      Contact us
                    </Button>
                  </div>
                </Col>
              </Section>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
