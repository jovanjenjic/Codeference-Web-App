import React from "react";
import PropTypes from "prop-types";
import AlertMessageError from "./AlertMessageError";
import AlertMessageSuccess from "./AlertMessageSuccess";

function ApplicationTextVegaWorkshop({ showSuccessMessage, showErrorMessage }) {
  return (
    <div className="lg:col-span-3 text-gray-600 justify-between flex flex-col relative lg:pr-2 pb-10 lg:pb-0">
      <div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="30px"
            height="30px"
          >
            <path
              fill="#8bb7f0"
              d="M40,77.5C19.322,77.5,2.5,60.678,2.5,40S19.322,2.5,40,2.5S77.5,19.322,77.5,40S60.678,77.5,40,77.5 z"
            />
            <path
              fill="#4e7ab5"
              d="M40,3c20.402,0,37,16.598,37,37S60.402,77,40,77S3,60.402,3,40S19.598,3,40,3 M40,2 C19.013,2,2,19.013,2,40s17.013,38,38,38s38-17.013,38-38S60.987,2,40,2L40,2z"
            />
            <path fill="#fff" d="M40 21A3 3 0 1 0 40 27A3 3 0 1 0 40 21Z" />
            <g>
              <path
                fill="#fff"
                d="M43 56L43 31 35 31 35 33 37 33 37 56 35 56 35 58 45 58 45 56z"
              />
            </g>
          </svg>
          <p className="font-medium text-lg ml-4 mb-6 lg:mg-0">
            Radionica Vega IT
          </p>
        </div>
        {showSuccessMessage && <AlertMessageSuccess />}
        {showErrorMessage && <AlertMessageError />}
        <br />
      </div>
      <div>
        <br />
        <b>
          Pridružite nam se na radionici "Unveiling the Power of Web Browsers in Modern Development" i otkrijte kako da iskoristite puni potencijal web pretraživača!
        </b>
        <br />
        <br />
        <b>Teme koje ćemo pokriti:</b>
        <br />
        <br />
        <div>
          🔹 Šta su web pretraživači?
        </div>
        <div>
          🔹 Kako pretraživači renderuju web stranicu?
        </div>
        <div>
          🔹 Browser API-ji.
        </div>
        <div>
          🔹 Alati za razvoj u pretraživačima - debugging, profilisanje, optimizacija performansi.
        </div> 
        <br />
        <br />
        Ova radionica je savršena prilika da naučite kako da efikasnije koristite web pretraživače za razvoj, debagovanje i optimizaciju vaših projekata. Kroz praktične primere i interaktivnu sesiju, naučićete kako da rešavate uobičajene probleme u kodu, poboljšate performanse svojih aplikacija i iskoristite sve prednosti koje moderne tehnologije nude, a takođe, dobijate i dragocene uvide i veštine koje će vam pomoći u daljem razvoju karijere.
        <br />
        <br />
        Radionica je dizajnirana tako da bude pristupačna i korisna studentima svih nivoa, od početnika do onih koji već imaju iskustva u web razvoju.
        <br />
        <br />
        Broj mesta je ograničen zato požuri i prijavi se!
      </div>
      <br />
      <br />
      <p className="mt-6">
        Za sve probleme pri prijavi kontaktirajte nas na email:{" "}
        <b>codeference@gmail.com</b>
      </p>
      <div className="-ml-0.5 lg:w-0.5 h-full right-0 bg-gray-300 absolute" />
    </div>
  );
}

ApplicationTextVegaWorkshop.propTypes = {
  showSuccessMessage: PropTypes.bool.isRequired,
  showErrorMessage: PropTypes.bool.isRequired,
};

export default ApplicationTextVegaWorkshop;
