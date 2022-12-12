import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Section, Title, ButtonIcon } from "../../components/Core";
import Availability from "../../components/Availability";

import { useTranslation } from "next-i18next";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  const { t } = useTranslation("homepage");
  return (
    <>
      <Section>
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <div className="text-center my-5">
                <Title>{t("index_contact_banner2")}</Title>
              </div>
              <div className="text-center">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  {t("index_contact_btntext")}
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
