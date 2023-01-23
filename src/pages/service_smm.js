import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Button, Title, Text, Box, List } from '../components/Core'
import PageWrapper from '../components/PageWrapper'
import CTA from '../sections/common/CTA'
import imgWorkCover from '../assets/image/pageHeader/LiveStreaming1.jpg'
import imgS1 from '../assets/image/jpg/details/details-12.jpg'
import imgS2 from '../assets/image/jpg/details/details-11.jpg'
import imgS3 from '../assets/image/jpg/details/details-10.jpg'
import imgS4 from '../assets/image/jpg/details/details-9.jpg'
import imgS5 from '../assets/image/jpg/details/details-14.jpg'
import imgS6 from '../assets/image/jpg/details/details-13.jpg'
import { device } from '../utils'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LinkStyled from '../components/Core/LinkContact'

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'about',
        'contact',
        'footer',
        'homepage',
        'header',
      ])),
      // Will be passed to the page component as props
    },
  }
}

const WorkSingle = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Section hero>
          <Container>
            <Row className='justify-content-center text-center'>
              <Col lg='8'>
                <Box>
                  <Title className='my-4'>Live Streaming</Title>
                </Box>
              </Col>
            </Row>

            <Box pt={['4rem', null, null, '6.25rem']}>
              <img src={imgWorkCover} alt='' className='img-fluid w-100' />
            </Box>
          </Container>
        </Section>

        <div className='mt-lg-3'>
          <Section>
            <Container>
              <Row>
                <Title>
                  Live Streaming Marketing in China
                  <br />
                  <br />
                </Title>
                <Text>
                  Chinese live streaming marketing has become increasingly popular in
                  China in recent years. It allows businesses to showcase their products
                  and services in real-time, interact with their audience, and build trust
                  and credibility through authentic and engaging content. It is an
                  effective way for businesses to reach out to their target market and
                  promote their brand, particularly in the e-commerce industry where
                  consumers often rely on live streaming to make purchasing decisions.
                  <br />
                  <br />
                </Text>
                <Text>
                  Chinese live streaming marketing is not only limited to e-commerce,
                  however. Other businesses, such as beauty and fashion brands, food and
                  beverage companies, and even service providers, have also embraced live
                  streaming as a way to reach and engage with their audience in China.{' '}
                  <br />
                  <br />
                </Text>
                <Text>
                  Overall, Chinese live streaming marketing is a powerful tool for
                  businesses looking to tap into the vast and growing market of Chinese
                  consumers.
                  <br />
                  <br />
                </Text>
              </Row>
            </Container>
          </Section>
          <Container>
            <Title variant='secSm' className='mb-5 pb-lg-4'>
              How GEMedia Can Support You?
            </Title>
            <Row>
              <Text>
                Are you looking for a way to boost sales and engage with your audience in
                real-time? Our live streaming service is here to help!
                <br />
                <br />
              </Text>
              <Text>
                Are you tired of struggling to sell your products online? Look no further!
                Our live streaming platform and talented spokesman make it easy for you to
                reach a wide audience and showcase your products in a dynamic and engaging
                way. All you have to do is provide your products and we'll take care of
                the rest. With our expert presentation skills and advanced technology,
                you'll be able to reach more potential customers and boost your sales in
                no time.
                <br />
                <br />
              </Text>
              <Text>
                Whether you're a small business owner, a marketer, or a content creator,
                our live streaming service is designed to help you reach and convert your
                audience, no matter where they are located. Our team of experts will work
                with you to create a customized live streaming experience that engages
                your audience and drives conversions. With features such as interactive
                Q&A sessions, product demonstrations, and special promotions, we'll help
                you make the most of your live stream and take your sales to the next
                level.
                <br />
                <br />
              </Text>
              <Text>
                So why wait? Get ready to start selling your products with confidence and
                ease using our live streaming platform and top-notch spokesman.
                <br />
                <br />
                <Link href='/contact'>Contact us</Link> today.
              </Text>
            </Row>
          </Container>
        </div>

        <Box py={4}>
          <CTA />
        </Box>
      </PageWrapper>
    </>
  )
}
export default WorkSingle
