import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "../landing1/Contact";

import { Section, Title, Text, Span, ButtonIcon } from "../../components/Core";
import imgPhoto from "../../assets/image/jpg/portfolio-about.jpg";
import imgSignLight from "../../assets/image/png/signature.png";

import { useTranslation } from "next-i18next";

const VideoShowCase = ({ hero = true, bg = "light", ...rest }) => {
  const { t } = useTranslation("about");
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="dark" variant="secSm">
                  Video Showcase
                </Title>
                <Text
                  color="dark"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  《New Start 新企点》 is a quick question-and-answer
                  interactive interview column.《New start 新企点》will focus on
                  the industries and jobs which are currently popular to the
                  general public, conduct extensive and in-depth discussions on
                  various aspects involved in the professional field to expose
                  the true face of the industry. The episodes present the
                  thoughts and spirit of industry leaders and new talents from
                  the industries, and share the mental journey and successful
                  experience of the dream chasers. It aims to point out the
                  direction for those who are lost in their career struggle;
                  provide strategies and references for those who are preparing
                  to start a new career; offer advice for those who are building
                  a career; provide pathways and confidence for those who have
                  encountered setbacks; let more people be able to achieve the
                  possibility of a more successful life.
                </Text>
                <div className="mt-4">
                  <Text color="dark">{t("about_banner3")}</Text>
                </div>
                <div className="mt-5"></div>
              </div>
            </Col>
            <Col lg="4">
              <div>
                {/* <img src={imgPhoto} alt="folio" className="img-fluid" /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default VideoShowCase;
