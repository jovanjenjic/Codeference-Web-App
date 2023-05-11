import React from "react";
import PropTypes from "prop-types";
import AlertMessageError from "./AlertMessageError";
import AlertMessageSuccess from "./AlertMessageSuccess";

function ApplicationTextEndavaWorkshop({
  showSuccessMessage,
  showErrorMessage,
}) {
  return (
    <div className="lg:col-span-3 text-red justify-between flex flex-col relative lg:pr-4 pb-10 lg:pb-0">
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
            Radionica Endava
          </p>
        </div>
        {showSuccessMessage && <AlertMessageSuccess />}
        {showErrorMessage && <AlertMessageError />}
        <br />
      </div>
      <div>
        <br />
        <b>
          Prijavi se za radionicu koja te očekuje u utorak 15.05. u 17h ispred
          kompanije Endava - Mikroservisna arhitektura
        </b>
        <br />
        <br />
        Mikroservisna arhitektura je popularan pristup u razvoju softvera koji
        se sastoji od rastavljanja aplikacije na manje samostalne komponente
        nazvane mikroservisi. Svaki mikroservis je nezavisan i obavlja samo
        jednu funkciju, a komunicira sa drugim mikroservisima preko mreže.
        Ovakav pristup omogućava fleksibilnost i skalabilnost aplikacije, što je
        važno za moderne aplikacije koje se koriste u velikim mrežama i u kojima
        je brzina odgovora jako bitna. Predavanje će se fokusirati na prednosti
        i izazove u korišćenju mikroservisne arhitekture, kao i na najbolje
        prakse u njenom dizajnu i implementaciji. Takođe, biće predstavljeni i
        konkretni primeri primene mikroservisne arhitekture u različitim
        domenima, kako bi se ilustrovala njena primenljivost i vrednost.
        <br />
        <br />
        Trajanje radionice: 2h
        <br />
        <br />
        Poželjno: Poznavanje osnova programiranja, rad na nekom projektu za
        razvoj softvera.
        <br />
        <br />
        Predavač: Haris Bronja, Senior Developer
        <br />
        <br />
        <br />
        P.S. Nije potreban laptop ili dodatna oprema za učestvovanje.
        <br />
        Broj mesta je ograničen zato se požuri i prijavi se što pre.
      </div>
      <br />
      <br />
      <p className="mt-6">
        Za sve probleme pri prijavi kontaktirajte nas na email:{" "}
        <b>codeference@gmail.com</b>.
      </p>
      <div className="-ml-0.5 lg:w-0.5 h-full right-0 bg-gray-300 absolute" />
    </div>
  );
}

ApplicationTextEndavaWorkshop.propTypes = {
  showSuccessMessage: PropTypes.bool.isRequired,
  showErrorMessage: PropTypes.bool.isRequired,
};

export default ApplicationTextEndavaWorkshop;
