import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import BaseFormFieldCv from "./BaseFormFieldCv";
import AdvancedFormFieldCv from "./AdvancedFormFieldCv";
import CvUpload from "./CvUpload";
import checkmarkIcon from "../public/ok-16.png";

const validateEmail = (emailAddress = "") => {
  return emailAddress?.match(
    // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const baseInfoInit = {
  ime: "",
  broj_telefona: "",
  email: "",
};
const baseInfoInitError = {
  ime: false,
  broj_telefona: false,
  email: false,
};

const viewCvLinkInit = { cv_url: "" };
const viewCvLinkInitError = { cv_url: false };

const advancedInfoInit = {
  smer_i_fakultet: "",
  godina_studija: "",
  lista_projekata_iskustvo: "",
  jezik: "",
  stipendije_i_nagrade: "",
  kratak_opis: "",
};
const advancedInfoInitError = {
  smer_i_fakultet: false,
  godina_studija: false,
  lista_projekata_iskustvo: false,
  jezik: false,
  stipendije_i_nagrade: false,
  kratak_opis: false,
};

function UploadCvForm({ showAlertHandler }) {
  const [baseInfo, setBaseInfo] = React.useState(baseInfoInit);
  const [baseInfoError, setBaseInfoError] = React.useState(baseInfoInitError);

  const [viewCvLink, setViewCvLink] = React.useState(viewCvLinkInit);
  const [viewCvLinkError, setViewCvLinkError] =
    React.useState(viewCvLinkInitError);

  const [advancedInfo, setAdvancedInfo] = React.useState(advancedInfoInit);
  const [advancedInfoError, setAdvancedInfoError] = React.useState(
    advancedInfoInitError
  );

  const onCvInputChange = async (_, file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/cv", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const { webViewLink } = await response.json();
      setViewCvLink({ cv_url: webViewLink });
      setViewCvLinkError(viewCvLinkInitError);
      setAdvancedInfoError(advancedInfoInitError);
    }
  };

  const isBaseInfoValid =
    baseInfo?.ime &&
    baseInfo?.broj_telefona &&
    baseInfo?.email &&
    validateEmail(baseInfo?.email);
  const isCvValid = viewCvLink?.cv_url;
  const isAdvancedInfoValid =
    advancedInfo?.smer_i_fakultet &&
    advancedInfo?.godina_studija &&
    advancedInfo?.lista_projekata_iskustvo &&
    advancedInfo?.jezik &&
    advancedInfo?.stipendije_i_nagrade &&
    advancedInfo?.kratak_opis;

  const isValid = isBaseInfoValid && (isCvValid || isAdvancedInfoValid);

  const onSubmitHandler = () => {
    if (!isValid) {
      setBaseInfoError({
        ime: !baseInfo.ime,
        broj_telefona: !baseInfo.broj_telefona,
        email: !baseInfo.email || !validateEmail(baseInfo.email),
      });
      setViewCvLinkError({
        cv_url: !viewCvLink.cv_url,
      });
      if (!viewCvLink?.cv_url) {
        setAdvancedInfoError({
          smer_i_fakultet: !advancedInfo.smer_i_fakultet,
          godina_studija: !advancedInfo.godina_studija,
          lista_projekata_iskustvo: !advancedInfo.lista_projekata_iskustvo,
          jezik: !advancedInfo.jezik,
          stipendije_i_nagrade: !advancedInfo.stipendije_i_nagrade,
          kratak_opis: !advancedInfo.kratak_opis,
        });
      }
    } else {
      axios
        .post("https://sheetdb.io/api/v1/q34tp75e5230l", {
          ...baseInfo,
          ...advancedInfo,
          ...viewCvLink,
        })
        .then(() => {
          showAlertHandler();
          setBaseInfo(baseInfoInit);
          setViewCvLink(viewCvLinkInit);
          setAdvancedInfo(advancedInfoInit);
          // restart input file field
          document.getElementById("formFileSm").value = "";
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="lg:col-span-3 text-gray-600 justify-between flex flex-col relative lg:pr-4 pb-10 lg:pb-0">
      <div
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-blue-100 text-blue-600"
      >
        <h2 id="accordion-color-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl hover:bg-blue-100"
            data-accordion-target="#accordion-color-body-1"
            aria-expanded="true"
            aria-controls="accordion-color-body-1"
          >
            <span>Osnovni podaci o korisniku</span>
            <div className="relative inline-flex">
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {isBaseInfoValid && (
                <img
                  alt="success-icon"
                  className="absolute right-[-44px] top-[4px] h-[16px] w-[16px]"
                  src={checkmarkIcon.src}
                />
              )}
            </div>
          </button>
        </h2>
        <div
          id="accordion-color-body-1"
          className="hidden"
          aria-labelledby="accordion-color-heading-1"
        >
          <BaseFormFieldCv
            baseInfo={baseInfo}
            setBaseInfo={setBaseInfo}
            baseInfoError={baseInfoError}
            setBaseInfoError={setBaseInfoError}
          />
        </div>
        <h2 id="accordion-color-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 hover:bg-blue-100"
            data-accordion-target="#accordion-color-body-2"
            aria-expanded="false"
            aria-controls="accordion-color-body-2"
          >
            <span>Dodaj CV</span>
            <div className="relative inline-flex">
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {isCvValid && (
                <img
                  alt="success-icon"
                  className="absolute right-[-44px] top-[4px] h-[16px] w-[16px]"
                  src={checkmarkIcon.src}
                />
              )}
            </div>
          </button>
        </h2>
        <div
          id="accordion-color-body-2"
          className="hidden"
          aria-labelledby="accordion-color-heading-2"
        >
          <CvUpload
            onInputChange={onCvInputChange}
            viewCvLinkError={viewCvLinkError}
            setViewCvLinkError={setViewCvLinkError}
          />
        </div>
        <h2 id="accordion-color-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 hover:bg-blue-100"
            data-accordion-target="#accordion-color-body-3"
            aria-expanded="false"
            aria-controls="accordion-color-body-3"
          >
            <span>Dodatni podaci o korisniku</span>
            <div className="relative inline-flex">
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {isAdvancedInfoValid && (
                <img
                  alt="success-icon"
                  className="absolute right-[-44px] top-[4px] h-[16px] w-[16px]"
                  src={checkmarkIcon.src}
                />
              )}
            </div>
          </button>
        </h2>
        <div
          id="accordion-color-body-3"
          className="hidden"
          aria-labelledby="accordion-color-heading-3"
        >
          <AdvancedFormFieldCv
            advancedInfo={advancedInfo}
            setAdvancedInfo={setAdvancedInfo}
            advancedInfoError={advancedInfoError}
            setAdvancedInfoError={setAdvancedInfoError}
          />
        </div>
      </div>
      <button
        onClick={onSubmitHandler}
        type="button"
        className={`${
          !isValid && "opacity-50"
        } inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
      >
        Pošalji
      </button>
    </div>
  );
}

UploadCvForm.propTypes = {
  showAlertHandler: PropTypes.bool.isRequired,
};

export default UploadCvForm;
