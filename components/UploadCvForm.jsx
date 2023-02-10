import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Collapse from "react-css-collapse";
import BaseFormFieldCv from "./BaseFormFieldCv";
import AdvancedFormFieldCv from "./AdvancedFormFieldCv";
import CvUpload from "./CvUpload";
import collapseIcon from "../public/collapse-arrow.png";
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
  const [openItemIndex, setOpenItemIndex] = React.useState(undefined);

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
        });
    }
  };

  const elements = [
    {
      id: 1,
      label: "Osnovni podaci i korisniku",
      component: (
        <BaseFormFieldCv
          baseInfo={baseInfo}
          setBaseInfo={setBaseInfo}
          baseInfoError={baseInfoError}
          setBaseInfoError={setBaseInfoError}
        />
      ),
    },
    {
      id: 2,
      label: "Dodaj CV",
      component: (
        <CvUpload
          onInputChange={onCvInputChange}
          viewCvLinkError={viewCvLinkError}
          setViewCvLinkError={setViewCvLinkError}
        />
      ),
    },
    {
      id: 3,
      label: "Dodatni podaci o korisniku",
      component: (
        <AdvancedFormFieldCv
          advancedInfo={advancedInfo}
          setAdvancedInfo={setAdvancedInfo}
          advancedInfoError={advancedInfoError}
          setAdvancedInfoError={setAdvancedInfoError}
        />
      ),
    },
  ];

  const toggleCollapse = (id) => {
    setOpenItemIndex(openItemIndex === id ? undefined : id);
  };

  const showSuccessIcon = (id) => {
    switch (id) {
      case 1: {
        return isBaseInfoValid;
      }
      case 2: {
        return isCvValid;
      }
      case 3: {
        return isAdvancedInfoValid;
      }
      default:
        return false;
    }
  };

  return (
    <div className="lg:col-span-3 text-gray-600 justify-between flex flex-col relative lg:pr-4 pb-10 lg:pb-0">
      <ul>
        {elements.map((element) => (
          <li key={element.id} cl>
            <button
              type="button"
              onClick={() => toggleCollapse(element.id)}
              className={`inline-flex w-full justify-between py-6 px-4 border border-gray-300 ${
                openItemIndex === element.id || element.id === 3
                  ? "border-b-1"
                  : "border-b-0"
              }`}
            >
              {element.label}
              <div className="inline-flex items-center">
                <img
                  className={`w-[16px] h-[16px] transition-all ${
                    element.id === openItemIndex && "-rotate-180"
                  }`}
                  src={collapseIcon.src}
                  alt="arrow-icon"
                />
                {showSuccessIcon(element?.id) && (
                  <img
                    alt="success-icon"
                    className="w-[16px] h-[16px] absolute right-[-10px]"
                    src={checkmarkIcon.src}
                  />
                )}
              </div>
            </button>
            <Collapse isOpen={openItemIndex === element.id}>
              <div>{element.component}</div>
            </Collapse>
          </li>
        ))}
      </ul>
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
