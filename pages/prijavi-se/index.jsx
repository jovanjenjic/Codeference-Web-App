import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ApplicationText, ApplicationForm } from "../../components";

const FORM_SUBMIT_URL =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfNAAjqerS4SdhMM2q7ocO89beWCbnvlmxpIK6xABltSxV1Qg/formResponse";

/** `used` to map correct google fields sent with post method */
const googleFormFieldsDict = {
  imePrezime: "entry.1922333295",
  brIndeksa: "entry.867849038",
  email: "entry.462794157",
  brTelefona: "entry.1019504152",
  uSobi: "entry.96343575",
  prosek: "entry.141427180",
  pol: "entry.2035568917",
  finansiranje: "entry.1679438134",
  majica: "entry.1379059867",
};

const initData = {
  imePrezime: "",
  brTelefona: "",
  email: "",
  brIndeksa: "",
  uSobi: "",
  prosek: "",
  pol: "",
  majica: "",
  finansiranje: "",
  komentar: "",
};
const initDataError = {
  imePrezime: false,
  brTelefona: false,
  email: false,
  brIndeksa: false,
  uSobi: false,
  prosek: false,
  pol: false,
  majica: false,
  finansiranje: false,
  komentar: false,
};

const validateEmail = (emailAddress = "") => {
  return emailAddress?.match(
    // eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const parseData = (formData = {}) => {
  const retObj = {};
  Object.keys(formData).forEach((key) => {
    // eslint-disable-next-line no-unused-expressions
    googleFormFieldsDict[key] &&
      (retObj[googleFormFieldsDict[key]] = formData[key]);
  });
  return retObj;
};

function PrijaviSePage() {
  const [formData, setFormData] = useState(initData);
  const [formDataError, setFormDataError] = useState(initDataError);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const onInputChange = (key, value) => {
    setFormDataError({ ...formDataError, [key]: !value });
    setFormData({ ...formData, [key]: value });
  };

  const isNotValid =
    !formData.imePrezime ||
    !formData.brTelefona ||
    !formData.email ||
    !validateEmail(formData.email) ||
    !formData.brIndeksa ||
    !formData.uSobi ||
    !formData.prosek ||
    !formData.majica ||
    !formData.finansiranje ||
    !formData.pol;

  const onSubmitHandler = () => {
    if (isNotValid) {
      setFormDataError({
        imePrezime: !formData.imePrezime,
        brTelefona: !formData.brTelefona,
        email: !formData.email || !validateEmail(formData.email),
        brIndeksa: !formData.brIndeksa,
        uSobi: !formData.uSobi,
        prosek: !formData.prosek,
        majica: !formData.majica,
        finansiranje: !formData.finansiranje,
        pol: !formData.pol,
      });
      return;
    }
    setLoading(true);
    axios
      .post(FORM_SUBMIT_URL, parseData(formData))
      .then(() => {
        setLoading(false);
        setShowSuccessMessage(true);
        setFormData(initData);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      })
      .catch(() => {
        setLoading(false);
        setShowErrorMessage(false);
      });
  };

  return (
    <div className="p-6 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <motion.div
            initial={{ x: -160, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
          >
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <ApplicationText
                showSuccessMessage={showSuccessMessage}
                showErrorMessage={showErrorMessage}
              />
              <ApplicationForm
                onInputChange={onInputChange}
                loading={loading}
                formData={formData}
                formDataError={formDataError}
                onSubmitHandler={onSubmitHandler}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PrijaviSePage;
