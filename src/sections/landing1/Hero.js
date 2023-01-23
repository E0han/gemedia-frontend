import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import  { useContext } from 'react'
import GlobalContext from "../../context/GlobalContext";
import Link from 'next/link';


import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgL from "../../assets/image/png/portrait-1.png";
import homeLogoB from "../../assets/image/pageHeader/GEMedia_black.png"
import homeLogoW from "../../assets/image/pageHeader/GEMedia_white.png"

import { useTranslation } from "next-i18next";

const ImgRight = styled.img`
  max-width: 100%;
`;

const Hero = () => {
  const { t } = useTranslation("homepage");
  const gContext = useContext(GlobalContext)
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="7" className="mb-5 mb-lg-0">
              <Box>
                <Title>{t("index_banner1")}</Title>
                <Title variant="hero" className="ml-5">
                  <img className="mt-5" src={gContext.theme.bodyDark ? homeLogoW : homeLogoB} />
                </Title>

                <Box mt="52px">
                  <Link
                    href="../../contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <Button arrowRight>{t("index_btntext")} </Button>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col lg="5" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  {/* <ImgRight src={homeLogo} alt="" /> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
