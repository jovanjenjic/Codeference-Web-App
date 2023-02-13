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

const viewCvInit = null;
const viewCvInitError = false;

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
  const [isLoading, setIsLoading] = React.useState(false);

  const [baseInfo, setBaseInfo] = React.useState(baseInfoInit);
  const [baseInfoError, setBaseInfoError] = React.useState(baseInfoInitError);

  const [viewCv, setViewCv] = React.useState(viewCvInit);
  const [viewCvError, setViewCvError] = React.useState(viewCvInitError);

  const [advancedInfo, setAdvancedInfo] = React.useState(advancedInfoInit);
  const [advancedInfoError, setAdvancedInfoError] = React.useState(
    advancedInfoInitError
  );

  const uploadCvOnServer = async (file, timeout = 15000) => {
    const formData = new FormData();
    formData.append("file", file);

    const controller = new AbortController();
    const abort = () => controller.abort();

    const id = setTimeout(() => abort(), [timeout]);

    return fetch("/api/cv", {
      method: "POST",
      body: formData,
      signal: controller?.signal,
    })
      .then((response) => {
        clearTimeout(id);
        if (response.ok) {
          return response.json();
        }
        return { webViewLink: false };
      })
      .catch(() => {
        clearTimeout(id);
        return { webViewLink: false };
      });
  };

  const isBaseInfoValid =
    baseInfo?.ime &&
    baseInfo?.broj_telefona &&
    baseInfo?.email &&
    validateEmail(baseInfo?.email);
  const isCvValid = !!viewCv;
  const isAdvancedInfoValid =
    advancedInfo?.smer_i_fakultet &&
    advancedInfo?.godina_studija &&
    advancedInfo?.lista_projekata_iskustvo &&
    advancedInfo?.jezik &&
    advancedInfo?.stipendije_i_nagrade &&
    advancedInfo?.kratak_opis;

  const isValid = isBaseInfoValid && (isCvValid || isAdvancedInfoValid);

  const onSubmitHandler = async () => {
    if (!isValid) {
      setBaseInfoError({
        ime: !baseInfo.ime,
        broj_telefona: !baseInfo.broj_telefona,
        email: !baseInfo.email || !validateEmail(baseInfo.email),
      });
      setViewCvError(!viewCv);
      if (!viewCv) {
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
      setIsLoading(true);
      const { webViewLink } = await uploadCvOnServer(viewCv);
      console.log("webViewLinkwebViewLink", webViewLink);
      if (webViewLink) {
        await axios
          .post("https://sheetdb.io/api/v1/q34tp75e5230l", {
            ...baseInfo,
            ...advancedInfo,
            cv_url: webViewLink,
          })
          .then(() => {
            showAlertHandler();
            setBaseInfo(baseInfoInit);
            setAdvancedInfo(advancedInfoInit);
            // restart input file field
            document.getElementById("formFileSm").value = "";
            setViewCv(viewCvInit);
            setIsLoading(false);
          });
      } else {
        showAlertHandler(false);
        document.getElementById("formFileSm").value = "";
        setViewCv(viewCvInit);
        setIsLoading(false);
      }
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
          setViewCv={setViewCv}
          viewCvError={viewCvError}
          onFileUploadHandler={() => {
            setViewCvError(viewCvInitError);
            setAdvancedInfoError(advancedInfoInitError);
          }}
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
                    className="w-[16px] h-[16px] absolute lg:right-[-10px] right-[-20px]"
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
          (!isValid || isLoading) && "opacity-50"
        } flex justify-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
      >
        Pošalji
        {isLoading && (
          <div className="inline-flex justify-center items-center ml-3">
            <div
              className="spinner-border animate-spin inline-block w-3 h-3 border-2 rounded-full"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}

UploadCvForm.propTypes = {
  showAlertHandler: PropTypes.bool.isRequired,
};

export default UploadCvForm;
