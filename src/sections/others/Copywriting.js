import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "../landing1/Contact";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Section, Title, Text, Span, ButtonIcon } from "../../components/Core";
import imgPhoto from "../../assets/image/jpg/portfolio-about.jpg";
import imgSignLight from "../../assets/image/png/signature.png";

import { useTranslation } from "next-i18next";

const Copywriting = ({ hero = true, bg = "light", ...rest }) => {
  const { t } = useTranslation("copywriting");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="dark" variant="secSm">
                  {t("copywriting_title")}
                </Title>
                <Text
                  variant=""
                  color="dark"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  {t("copywriting_text1")}
                </Text>
                <Text color="dark" className="mt-4">
                  <li>{t("copywriting_text1_listItem1")}</li>
                  <li>{t("copywriting_text1_listItem2")}</li>
                  <li>{t("copywriting_text1_listItem3")}</li>
                  <li>{t("copywriting_text1_listItem4")}</li>
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Copywriting;
