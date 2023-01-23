import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Contact from '../landing1/Contact'

import { Section, Title, Text, Span, ButtonIcon } from '../../components/Core'
import imgPhoto from '../../assets/image/jpg/portfolio-about.jpg'
import imgSignLight from '../../assets/image/png/signature.png'

import { useTranslation } from 'next-i18next'

const VideoShowCase = ({ hero = true, bg = 'light', ...rest }) => {
  const { t } = useTranslation('about')
  return (
    <>
      <Section bg={bg} {...rest}>
        <Container>
          <Row className='align-items-center'>
            <Col lg='12'>
              <div className='pl-lg-4 pt-0 pt-lg-0'>
                <Text
                  color='dark'
                  className='mt-3 mt-lg-0'
                  css={`
                    line-height: 1.5;
                  `}
                >
                  <div>
                    <h3 className='mb-4'>
                      Are you interested in breaking into the Chinese market but are
                      unsure how to get started?
                    </h3>

                    <h5>
                      Take advantage of our Free Consultation to find out more, regardless
                      of whether you have an online selling channel in China:{' '}
                    </h5>

                    <ul>
                      <li> - Does your product or service appeal to Chinese customers?</li>
                      <li>
                      - Are there any opportunities for promoting your Business to the
                        biggest Audience in the World?
                      </li>
                      <li>
                      - Discover who are your competitors. Both international and local
                        brands.
                      </li>
                      <li>
                      - What is the logical next step for you to win Chinese customers?
                      </li>
                    </ul>
                  </div>
                </Text>
                {/* <div className='mt-4'>
                  <Text color='dark'>{t('about_banner3')}</Text>
                </div> */}
                <div className='mt-5'></div>
              </div>
            </Col>
            <Col lg='4'>
              <div>{/* <img src={imgPhoto} alt="folio" className="img-fluid" /> */}</div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default VideoShowCase
