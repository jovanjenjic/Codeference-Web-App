import React from "react";
import {
  AskForm,
  SaidAboutUs,
  Content,
  LandingComponent,
  Description,
  Meta,
} from "../components";

export default function Home() {
  return (
    <div>
      <Meta
        description="Konferencija studenata elektrotehnike i računarstva."
        keywords="Codeference, Codefair, 2021, 2022, Codeference 2022, Codefair 2022, Konferencija, IT, Zlatibor, Novi Sad, Codeference 2021, Codefair 2021"
        title="Codeference"
      />
      <LandingComponent />
      <div className="container mx-auto lg:px-10 px-4 mb-8">
        <Description />
        <Content />
        <SaidAboutUs />
        <AskForm />
      </div>
    </div>
  );
}
