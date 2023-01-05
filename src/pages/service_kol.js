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
import { useTranslation } from "next-i18next";

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
        "service_video",
        "service_smm",
        "copywriting",
        "whygemedia",
        "service_kol",
      ])),
      // Will be passed to the page component as props
    },
  };
}

const WorkSingle = () => {
  const { t } = useTranslation("service_kol");
  return (
    <>
      <PageWrapper darkTheme>
        <Section hero>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box>
                  <Title className="my-4">{t("kol_title")}</Title>
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
                {t("kol_subTitle1")}
              </Title>
              <Text>{t("kol_subTitle1_text1")}</Text>
              <br />
              <br />
              <Row>
                <Col lg="12" className="mb-5 pr-lg-5">
                  <Title variant="cardSm" className="mb-4">
                    {t("kol_subTitle1_text1_subtopic1")}
                  </Title>
                  <Text variant="p">
                    {t("kol_subTitle1_text1_subtopic1_content")}
                  </Text>
                </Col>
                <Col lg="12" className="mb-5 pr-lg-5">
                  <Title variant="cardSm" className="mb-4">
                    {t("kol_subTitle1_text1_subtopic2")}
                  </Title>
                  <Text variant="p">
                    {t("kol_subTitle1_text1_subtopic2_content")}
                  </Text>
                </Col>
              </Row>
            </Section>

            <Section>
              <Title variant="secSm" className="mb-5 pb-lg-4">
                {t("kol_subTitle2")}
              </Title>
              <Text>{t("kol_text2")}</Text>
            </Section>
            <br />
            <Row>
              <Section id="redbooksection">
                <Col lg="12" className="mb-5 pr-lg-5">
                  <Title variant="cardBig" className="mb-4">
                    {t("kol_text2_subTopic1")}
                  </Title>
                  <Text variant="p">{t("kol_text2_subTopic1_content1")}</Text>
                  <img href={"#"} alt={""} />
                  <Text variant="p">{t("kol_text2_subTopic1_content2")}</Text>
                  <Text variant="p">{t("kol_text2_subTopic1_content3")}</Text>
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
                      {t("kol_contactUs")}
                    </Button>
                  </div>
                </Col>
              </Section>
              <Section id="wechatsection">
                <Col lg="12" className="mb-5 pr-lg-5">
                  <Title variant="cardBig" className="mb-4">
                    {t("kol_text2_subTopic2")}
                  </Title>
                  <Text variant="p">{t("kol_text2_subTopic2_content1")}</Text>
                  <Text variant="p">{t("kol_text2_subTopic2_content2")}</Text>
                  <Text variant="p">{t("kol_text2_subTopic2_content3")}</Text>
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
                      {t("kol_contactUs")}
                    </Button>
                  </div>
                </Col>
              </Section>
              <Section id="douyinsection">
                <Col lg="12" className="mb-5 pr-lg-5">
                  <Title variant="cardBig" className="mb-4">
                    {t("kol_text2_subTopic3")}
                  </Title>
                  <Text variant="p">{t("kol_text2_subTopic3_content1")}</Text>
                  <Text variant="p">{t("kol_text2_subTopic3_content2")}</Text>
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
                      {t("kol_contactUs")}
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
