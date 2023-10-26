import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Meta, ApplicationFormWorkshop } from "../../components";
import ApplicationTextPositiveWorkshop from "../../components/ApplicationTextPositiveWorkshop";

const initData = {
  ime: "",
  prezime: "",
  brTelefona: "",
  email: "",
  godinaStudija: "",
  smer: "",
};
const initDataError = {
  ime: false,
  prezime: false,
  brTelefona: false,
  email: false,
  godinaStudija: false,
  smer: false,
};

const validateEmail = (emailAddress = "") => {
  return emailAddress?.match(
    // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function EndavaRadionicaPage() {
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
    !formData.ime ||
    !formData.prezime ||
    !formData.brTelefona ||
    !formData.email ||
    !formData.godinaStudija ||
    !formData.smer ||
    !validateEmail(formData.email);

  const onSubmitHandler = () => {
    if (isNotValid) {
      setFormDataError({
        ime: !formData.ime,
        prezime: !formData.prezime,
        brTelefona: !formData.brTelefona,
        godinaStudija: !formData.godinaStudija,
        smer: !formData.smer,
        email: !formData.email || !validateEmail(formData.email),
      });
    } else {
      setLoading(true);
      axios
        .post("https://sheetdb.io/api/v1/idzik55t0b8h0", {
          ...formData,
          tip: "positive-codeference-23",
        })
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
    }
  };

  return (
    <div className="p-6 flex items-center justify-center">
      <Meta
        description="Konferencija studenata elektrotehnike i računarstva."
        keywords="Codeference, Codefair, 2021, 2022, 2023, Codeference 2022, Codefair 2022, Konferencija, IT, Zlatibor, Novi Sad, Codeference 2021, Codefair 2021"
        title="Radionica Vega - Codeference 2023"
      />
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <motion.div
            initial={{ x: -160, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
          >
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-5">
              <ApplicationTextPositiveWorkshop
                showSuccessMessage={showSuccessMessage}
                showErrorMessage={showErrorMessage}
              />
              <ApplicationFormWorkshop
                onInputChange={onInputChange}
                loading={loading}
                formData={formData}
                formDataError={formDataError}
                onSubmitHandler={onSubmitHandler}
                showMemberField={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default EndavaRadionicaPage;
