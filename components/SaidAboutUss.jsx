/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import TitleComponent from "./TitleComponent";
import starovicImg from "../public/starovic.jpg";
import poparaImg from "../public/popara.png";
import vakanjacImg from "../public/vakanjac.jpg";
import kiljaImg from "../public/kilja.jpg";

const titleData = {
  titleText: "Šta su rekli o nama?",
  subtitleText:
    "Uz podršku i ovih ljudi realizacija svakog događaja je lakša. Ovo je deo ljudi koji su prepoznali naš rad.",
  colorText:
    "[Direktori, Studentski predstavnici, organizatori drugih događaja...]",
  backgroundText: "PREPORUKE",
  backgroundColor: "text-gray-100",
};

function SaidAboutUss() {
  return (
    <section className="bg-white m-auto pb-8 pt-16">
      <TitleComponent {...titleData} />
      <div className="sm:w-4/5 mx-auto">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md transition-all border border-blue-400">
              <img
                src={kiljaImg?.src}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500"
              />
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-cyan-900">
                      Aleksandar Okiljević
                    </h4>
                    <p className="text-gray-600 text-sm font-medium text-gray-500">
                      Veoma kompetentna i kompletna podrška od planiranja do
                      realizacije. Postupanje sa nama kao i ispunjavanje naših
                      visokih zahteva i očekivanja iznenadilo nas je veoma
                      pozitivno i odražava se u konačnom rezultatu saradnje.
                    </p>
                  </div>
                  <p className="text-blue-500">[CTO Positive Tech IT]</p>
                </div>
              </div>
            </div>
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md transition-all border border-blue-400">
              <img
                src={starovicImg.src}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500"
              />
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-cyan-900">
                      Marko Starovć
                    </h4>
                    <p className="text-gray-600 text-sm font-medium text-gray-500">
                      Profesionalni, tačni, originalni, precizni i odgovorni.
                      Imam jako lepu saradnju i iskustvo. Nadam se da će naša
                      saradnja odraziti na kvalitet predavanja i celokupno
                      iskustvo i utisak studenata. Radujem se sledećem susretu.
                    </p>
                  </div>
                  <p className="text-blue-500">[Student Vice-Dean]</p>
                </div>
              </div>
            </div>
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md transition-all border border-blue-400">
              <img
                src={poparaImg.src}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500"
              />
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-cyan-900">
                      Marko Popara
                    </h4>
                    <p className="text-gray-600 text-sm font-medium text-gray-500">
                      Kao jedan od osnivača konferencije CoNStruction smatram da
                      je našem fakultetu uvek dobrodošao jedan ovakav događaj
                      kako bi studenti mogli da steknu i neformalno obrazovanje
                      isto kao i formalno. U tom pogledu, ne sumnjam u ovaj tim
                      talentovane i uspešne ekipe.
                    </p>
                  </div>
                  <p className="text-blue-500">[Founder of CoNStruction]</p>
                </div>
              </div>
            </div>
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md transition-all border border-blue-400">
              <img
                src={vakanjacImg.src}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500"
              />
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-cyan-900">
                      Damjan Vakanjac
                    </h4>
                    <p className="text-gray-600 text-sm font-medium text-gray-500">
                      Kao Student prorektor i jedan od osnivača konferencije
                      IImprovement podržavam ovaj događaj. Smatram da velika
                      ekspanzija IT-a na našim prostorima zahteva konstantno
                      usavršavanje naših studenata, a ova konferencija je dobar
                      primer.
                    </p>
                  </div>
                  <p className="text-blue-500">[Student Vice-Chancellor]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SaidAboutUss;
