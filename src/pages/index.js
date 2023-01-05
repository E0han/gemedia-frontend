import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Works from "../sections/landing1/Works";
import Contact from "../sections/landing1/Contact";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import About from "../sections/others/About";
import WhyGEMedia from "../sections/others/WhyGEMedia";
import VideoShowCase from "../sections/others/VideoShowCase";
import Copywriting from "../sections/others/Copywriting";

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
if (typeof document === "undefined") {
  React.useLayoutEffect = React.useEffect;
}

export function IndexPage() {
  return (
    <>
      <PageWrapper>
        <Hero />
        <WhyGEMedia />
        <Copywriting />
        <Contact />
      </PageWrapper>
    </>
  );
}

// export default withProps(IndexPage);
export default IndexPage;
