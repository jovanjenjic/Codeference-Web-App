import React from "react";
import PropTypes from "prop-types";
import AlertMessageError from "./AlertMessageError";
import AlertMessageSuccess from "./AlertMessageSuccess";

function ApplicationTextOtherFaculties({
  showSuccessMessage,
  showErrorMessage,
}) {
  return (
    <div className="text-gray-600 justify-between flex flex-col relative lg:pr-4 pb-10 lg:pb-0">
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
            Informacije o prijavi
          </p>
        </div>
        {showSuccessMessage && <AlertMessageSuccess />}
        {showErrorMessage && <AlertMessageError />}
        <br />
      </div>
      <div>
        <br />
        <b>
          Prijava za Privatan Smeštaj{" "}
          <a
            target="_blank"
            href="http://usob.rs/odmaralista/ratko-mitrovic-zlatibor/?script=lat"
            rel="noreferrer"
          >
            <q>Apartmani Alibi, Mandić...</q>.
          </a>
        </b>
        <br />
        <br />
        Proverite da li ste ispravno uneli sve informacije. Sva polja u formi su
        obavezna.
        <div>
          <br />
          <br />
          Za cenu i prevoz kontaktiraj predstavnike sa svog <b>fakulteta.</b>
          <br />
          <br />
          <ul className="space-y-4 list-disc list-inside text-gray-500">
            <li>
              Cena uključuje:
              <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                <li>Smeštaj</li>
                <li>
                  Polupansion (<b>doručak i večera)</b>
                </li>
                <li>Kotizaciju (učešće na predavanjima i redionicama)</li>
                <li>Poklon materijale</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-6">
        Za sve probleme pri prijavi kontaktirajte nas na email ili se obratite
        nekome od organizatora. Email: <b>codeference@gmail.com</b>.
      </p>
      <div className="-ml-0.5 lg:w-0.5 h-full right-0 bg-gray-300 absolute" />
    </div>
  );
}

ApplicationTextOtherFaculties.propTypes = {
  showSuccessMessage: PropTypes.bool.isRequired,
  showErrorMessage: PropTypes.bool.isRequired,
};

export default ApplicationTextOtherFaculties;
