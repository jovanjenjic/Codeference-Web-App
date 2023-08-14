import React from "react";
import PropTypes from "prop-types";
import {
  AskForm,
  SaidAboutUss,
  SupportHomePage,
  LandingComponent,
  Description,
  Meta,
  Wave,
  WaveRevarse,
  Gallery,
  Testimonials
} from "../components";
import { getCitations, getLogos } from "../services";

function Home({ logos, citations }) {
  return (
    <div>
      <Meta
        description="Konferencija studenata elektrotehnike i računarstva."
        keywords="Codeference, Codefair, 2021, 2022, Codeference 2022, Codefair 2022, Konferencija, IT, Zlatibor, Novi Sad, Codeference 2021, Codefair 2021"
        title="Codeference"
      />
      <div className="">
        <LandingComponent />
        <div className="hidden lg:inline">
          <WaveRevarse />
        </div>
        <Description />
        <WaveRevarse bgColor="bg-blue-600" waveColor="white" />
        <SupportHomePage logos={logos} />
        <Wave bgColor="bg-blue-600" waveColor="white" />
        <Testimonials citations={citations} />
        <WaveRevarse bgColor="bg-blue-600" waveColor="white" />
        <AskForm />
        <Wave bgColor="bg-blue-600" />
        <Gallery />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const logos = await getLogos();
  const citations = await getCitations();

  return {
    props: { logos, citations },
  };
}

Home.propTypes = {
  logos: PropTypes.arrayOf.isRequired,
};

export default Home;
