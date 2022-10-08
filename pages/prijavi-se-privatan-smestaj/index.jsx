import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  ApplicationTextPrivate,
  ApplicationFormPrivate,
  Meta,
} from "../../components";

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
  hrana: "",
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
  hrana: false,
};

const validateEmail = (emailAddress = "") => {
  return emailAddress?.match(
    // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
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

  const resetRadioFields = () => {
    document.getElementById("saHranom").checked = false;
    document.getElementById("bezHrane").checked = false;
    document.getElementById("xxl").checked = false;
    document.getElementById("xl").checked = false;
    document.getElementById("l").checked = false;
    document.getElementById("m").checked = false;
    document.getElementById("s").checked = false;
    document.getElementById("xs").checked = false;
    document.getElementById("samofinansiranje").checked = false;
    document.getElementById("budzet").checked = false;
    document.getElementById("zenski").checked = false;
    document.getElementById("muski").checked = false;
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
    !formData.pol ||
    !formData.hrana;

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
        hrana: !formData.hrana,
      });
    } else {
      setLoading(true);
      axios
        .post("https://sheetdb.io/api/v1/7t4ytmr452qxs", formData)
        .then(() => {
          resetRadioFields();
          setFormData(initData);
          setLoading(false);
          setShowSuccessMessage(true);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        })
        .catch(() => {
          setLoading(false);
          setShowErrorMessage(false);
        });
    }
  };

  return (
    <div className="p-6 flex items-center justify-center">
      <Meta
        description="Konferencija studenata elektrotehnike i računarstva."
        keywords="Codeference, Codefair, 2021, 2022, Codeference 2022, Codefair 2022, Konferencija, IT, Zlatibor, Novi Sad, Codeference 2021, Codefair 2021"
        title="Prijava za privatan smestaj na zlatiboru - Codeference 2022"
      />
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <motion.div
            initial={{ x: -160, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
          >
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <ApplicationTextPrivate
                showSuccessMessage={showSuccessMessage}
                showErrorMessage={showErrorMessage}
              />
              <ApplicationFormPrivate
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
