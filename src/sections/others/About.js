import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "../landing1/Contact";

import { Section, Title, Text, Span, ButtonIcon } from "../../components/Core";
import imgPhoto from "../../assets/image/jpg/portfolio-about.jpg";
import imgSignLight from "../../assets/image/png/signature.png";

import { useTranslation } from "next-i18next";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const About = ({ hero = true, bg = "dark", ...rest }) => {
  const { t } = useTranslation("about");
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="8">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  {t("about_title")}
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  {t("about_banner1")}
                </Text>
                <Text color="light" className="mt-4">
                  {t("about_banner2")}
                </Text>
                <div className="mt-4">
                  <Text color="light">{t("about_banner3")}</Text>
                </div>
                <div className="mt-5"></div>

                {/* <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://www.dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Dribble
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
                  >
                    Twitter
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Facebook
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    Instagram
                  </LinkSocial>
                </div> */}
              </div>
            </Col>
            <Col lg="4">
              <div>
                {/* <img src={imgPhoto} alt="folio" className="img-fluid" /> */}
              </div>
            </Col>
          </Row>
          <Row></Row>
          <Contact />
        </Container>
      </Section>
    </>
  );
};

export default About;
