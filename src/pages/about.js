import React from "react";

import PageWrapper from "../components/PageWrapper";
import { Box } from "../components/Core";
import About from "../sections/others/About";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","about","contact","footer","homepage","header"])),
      // Will be passed to the page component as props
    },
  };
}


const AboutPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Box pt={4}>
          <About />
        </Box>
      </PageWrapper>
    </>
  );
};

export default AboutPage;
