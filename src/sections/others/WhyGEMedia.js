import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Contact from '../landing1/Contact'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { Section, Title, Text, Span, ButtonIcon } from '../../components/Core'
import imgPhoto from '../../assets/image/jpg/portfolio-about.jpg'
import imgSignLight from '../../assets/image/png/signature.png'
import {
  clientLogo1,
  clientLogo10,
  clientLogo11,
  clientLogo12,
  clientLogo13,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
  clientLogo8,
  clientLogo9,
} from './clientLogo'

import { useTranslation } from 'next-i18next'

const WhyGEMedia = ({ hero = true, bg = 'light', ...rest }) => {
  const { t } = useTranslation('about')
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
  }

  return (
    <>
      <Section bg={bg} {...rest}>
        <Container>
          <Row className='align-items-center'>
            <Col lg='8'>
              <div className='pl-lg-4 pt-5 pt-lg-0'>
                <Title color='dark' variant='secSm'>
                  Why GEMedia
                </Title>
                <Text
                  color='dark'
                  className='mt-3 mt-lg-5'
                  css={`
                    line-height: 1.5;
                  `}
                >
                  {t('about_banner1')}
                </Text>
                <Text color='dark' className='mt-4'>
                  {t('about_banner2')}
                </Text>
                <div className='mt-4'>
                  <Text color='dark'>{t('about_banner3')}</Text>
                </div>
                <div className='mt-5'></div>
              </div>
            </Col>
            <Col lg='4'>
              <div>{/* <img src={imgPhoto} alt="folio" className="img-fluid" /> */}</div>
            </Col>

            <Col lg='12'>
              <Title color='dark' variant='secSm' className='mb-3'>
                Our Clients
              </Title>
              <Carousel
                responsive={responsive}
                autoPlay
                autoPlaySpeed={'1000'}
                infinite
                className=''
              >
                <div className='mx-3'>
                  <img className='w-100 mt-5' src={clientLogo1} />
                </div>
                <div className='mx-3'>
                  <img className='w-100 ' src={clientLogo2} />
                </div>
                <div className='mx-3'>
                  <img className='w-100 mt-5' src={clientLogo3} />
                </div>
                <div className='mx-3'>
                  <img className='w-100 mt-4' src={clientLogo4} />
                </div>
                <div className='mx-3'>
                  <img className='w-100 mt-4' src={clientLogo5} />
                </div>
                <div className='mx-3'>
                  <img className='w-100' src={clientLogo6} />
                </div>
                <div className='mx-3'>
                  <img className='w-100 mt-5' src={clientLogo7} />
                </div>
                <div className='mx-3'>
                  <img className='w-100 mt-3' src={clientLogo8} />
                </div>
                <div className='mx-3'>
                  <img className='w-100 mt-5' src={clientLogo9} />
                </div>
                <div className='mx-3'>
                  <img className='w-100' src={clientLogo10} />
                </div>
                <div className='mx-3'>
                  <img className='w-100' src={clientLogo11} />
                </div>
                <div className='mx-3'>
                  <img className='w-100  mt-5' src={clientLogo12} />
                </div>
                <div className='mx-3'>
                  <img className='w-100  mt-5' src={clientLogo13} />
                </div>

                
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default WhyGEMedia
