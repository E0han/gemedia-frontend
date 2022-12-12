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
        <VideoShowCase />
        <Contact />
      </PageWrapper>
    </>
  );
}

// export default withProps(IndexPage);
export default IndexPage;
