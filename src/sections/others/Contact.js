import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span, Box } from "../../components/Core";
import ContactForm from "../../components/ContactForm";
import { device } from "../../utils";

import { useTranslation } from "next-i18next";

const ContactCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  margin-top: 3rem;
  @media ${device.lg} {
    margin-top: 250px;
  }
`;

const Contact = ({ hero = true, bg = "dark", ...rest }) => {
  const { t } = useTranslation("contact");
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <Box className="pr-lg-5">
                <Title color="light" variant="secSm" mb="2rem">
                  {t("contact_title")}
                </Title>
                <Text color="light" mb="2.75rem">
                  {t("contact_banner1")}
                </Text>
                <ContactForm theme="dark" />
              </Box>
            </Col>
            <Col lg="6">
              <ContactCard className="p-5 ml-lg-5">
                <div>
                  <Text color="light">{t("contact_email_banner")}</Text>

                  <a
                    href="mailto:marketing@gemsolution.com.au"
                    className="font-weight-bold"
                  >
                    <Span color="primary">marketing@gemsolution.com.au</Span>
                  </a>
                </div>
                <div className="mt-5">
                  <Text color="light">{t("contact_phone_banner")}</Text>

                  <div>
                    <a href="tel:+610000000" className="font-weight-bold">
                      <Span color="primary">000000000</Span>
                    </a>
                  </div>
                </div>
                <div className="mt-5">
                  <Text color="light">{t("contact_address_banner")}</Text>

                  <div>
                    <a href="tel:+610000000" className="font-weight-bold">
                      <Span color="primary">
                        80 Grote Street, Office 6S, Level 1, 5000，SA
                      </Span>
                    </a>
                  </div>
                </div>
              </ContactCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
