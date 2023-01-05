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
  const { t } = useTranslation("service_smm");
  return (
    <>
      <PageWrapper darkTheme>
        <Section hero>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box>
                  <Title className="my-4">{t("smm_title")}</Title>
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
              <Title variant="secSm" className="mb-5 pb-lg-4">
                {t("smm_subTitle1")}
              </Title>
              <Row>
                <Text></Text>
                <Text>{t("smm_subTitle1_text2")}</Text>
                <Text>{t("smm_subTitle1_text3")}</Text>
              </Row>
            </Container>
          </Section>
          <Container>
            <Title variant="secSm" className="mb-5 pb-lg-4">
              {t("smm_subTitle2")}
            </Title>
            <Row>
              <Text>{t("smm_subTitle2_text1")}</Text>
              <Text>{t("smm_subTitle2_text2")}</Text>
              <Text>{t("smm_subTitle2_text3")}</Text>
              <Text>{t("smm_subTitle2_text4")}</Text>
            </Row>
          </Container>
        </div>

        <Box py={4}>
          <CTA />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
