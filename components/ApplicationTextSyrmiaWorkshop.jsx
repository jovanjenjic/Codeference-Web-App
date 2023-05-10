import React from "react";
import PropTypes from "prop-types";
import AlertMessageError from "./AlertMessageError";
import AlertMessageSuccess from "./AlertMessageSuccess";

function ApplicationTextSyrmiaWorkshop({
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
            Izazovi mašinskog učenja - Syrmia
          </p>
        </div>
        {showSuccessMessage && <AlertMessageSuccess />}
        {showErrorMessage && <AlertMessageError />}
        <br />
      </div>
      <div>
        <br />
        <b>
          Prijavi se za radionicu koja te očekuje 16.05. u Svečanoj sali
          Fakulteta tehničkih nauka na trećem spratu ispred kompanije SYRMIA.
        </b>
        <br />
        <br />
        Cilj ovog predavanja (radionice) je upoznavanje studenata sa teorijskim
        i praktičnim aspektima konvolucionih neuronskih mreža koje predstavljaju
        fundamentalne modele iz oblasti dubokog mašinskog učenja. Konvolucione
        neuronske mreže su postale standard u savremenoj kompjuterskoj viziji.
        Klasifikacija, detekcija i segmentacija objekata od interesa u realnom
        vremenu, čine neizostavni deo današnjih inteligentnih video sistema.
        Ideja radionice je da se studentima na primeru YOLO (You Only Look Once)
        neuronske mreže, pokaže kako izbor platforme (procesor ili grafička
        kartica) kao i izbor verzije ove mreže utiče na performanse i na tačnost
        samog algoritma. Radionica je namenjena starijim studentima koji su već
        stekli određena znanja iz oblasti digitalne obrade slike i videa. Od
        studenata se neće zahtevati da bilo šta koduju jer bi samo podešavanje
        razvojnog okruženja oduzelo dosta vremena.
        <br />
        <br />
        Broj mesta je ograničen zato se požuri i prijavi se što pre.
        <br />
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

ApplicationTextSyrmiaWorkshop.propTypes = {
  showSuccessMessage: PropTypes.bool.isRequired,
  showErrorMessage: PropTypes.bool.isRequired,
};

export default ApplicationTextSyrmiaWorkshop;
