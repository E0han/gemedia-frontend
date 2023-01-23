import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Button, Title, Text, Box, ButtonIcon } from '../components/Core'
import PageWrapper from '../components/PageWrapper'
import CTA from '../sections/common/CTA'
import imgWorkCover from '../assets/image/pageHeader/visualDesign1.jpg'
import imgS1 from '../assets/image/jpg/details/details-12.jpg'
import imgS2 from '../assets/image/jpg/details/details-11.jpg'
import imgS3 from '../assets/image/jpg/details/details-10.jpg'
import imgS4 from '../assets/image/jpg/details/details-9.jpg'
import imgS5 from '../assets/image/jpg/details/details-14.jpg'
import imgS6 from '../assets/image/jpg/details/details-13.jpg'
import { device } from '../utils'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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
                  <Title className='my-4'>Visual Contents Designing</Title>
                  <Text
                    variant='p'
                    css={`
                      max-width: 750px;
                    `}
                  ></Text>
                </Box>
              </Col>
            </Row>

            <Box pt={['4rem', null, null, '6.25rem']}>
              <img src={imgWorkCover} alt='' className='img-fluid w-100' />
            </Box>
          </Container>
        </Section>

        <div className=''>
          <Container>
            <Section>
              <Title variant='secSm' className='mb-5 pb-lg-4'>
                Visual Contents Designing
              </Title>
              <Text>
                Are you looking to elevate your brand's visual presence? Look no further
                than our Visual Content Design service. GEMedia’s team of skilled
                designers will work with you to create stunning graphics, videos and
                visual assets that will grab the attention of your audience and
                effectively communicate your message.
                <br />
                <br />
              </Text>
              <Text>
                From social media posts and banners to infographics and presentations, we
                can handle it all. We understand the importance of crafting visually
                appealing content that resonates with your target audience and helps drive
                conversions.
                <br />
                <br />
              </Text>
              <Text>
                Whether you need one-off designs or a full suite of visual assets, we have
                the expertise and resources to bring your vision to life. Our design
                process is collaborative and consultative, ensuring that we deliver
                results that exceed your expectations.
                <br />
                <br />
              </Text>
              <Text>
                Don't let subpar visual content hold your brand back.{' '}
                <Link href='/contact'>Contact us</Link> today to learn more about how our
                Visual Content Design service can help take your brand to the next level.
                <br />
                <br />
              </Text>
            </Section>
          </Container>
        </div>
      </PageWrapper>
    </>
  )
}
export default WorkSingle
