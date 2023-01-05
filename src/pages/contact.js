import React from "react";

import PageWrapper from "../components/PageWrapper";
import { Box } from "../components/Core";
import Contact from "../sections/others/Contact";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "about",
        "contact",
        "footer",
        "homepage",
        "header",
        "service_video",
        "service_smm",
        "copywriting",
        "whygemedia",
        "service_kol",
      ])),
      // Will be passed to the page component as props
    },
  };
}

const ContactPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Box pt={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};

export default ContactPage;
