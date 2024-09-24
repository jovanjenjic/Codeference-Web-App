import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
// import { useRouter } from "next/router";
import {
  ApplicationText,
  ApplicationForm,
  Meta,
  ApplicationTextOtherFaculties,
} from "../../components";

const initData = {
  fakultet: "",
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
  fakultet: false,
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

// koristimo za Novi Sad da li je privatan smestaj
const isPrivateAccomodation = false;

function PrijaviSePage() {
  // const router = useRouter();

  const [formData, setFormData] = useState(initData);
  const [formDataError, setFormDataError] = useState(initDataError);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  // privremeno do sledecih prijava
  // React.useEffect(() => {
  //   router.push("/");
  // }, []);

  const onInputChange = (key, value) => {
    // prosek se ne validira
    if (key !== "prosek") setFormDataError({ ...formDataError, [key]: !value });
    setFormData({ ...formData, [key]: value });
  };

  const resolveParam = () => {
    switch (formData.fakultet) {
      case "FTN Novi Sad":
        return isPrivateAccomodation
          ? "?sheet=FTN NS PRIVATNI"
          : "?sheet=FTN NS";
      case "ETF Beograd":
        return "?sheet=ETF BG";
      case "RAF Beograd":
        return "?sheet=RAF BG";
      case "ETF Banjaluka":
        return "?sheet=ETF BL";
      case "ETF Skoplje":
        return "?sheet=ETF Skoplje";
      case "ELFAK Nis":
        return "?sheet=ELFAK Nis";
      case "FIN Kragujevac":
        return "?sheet=FIN Kragujevac";
      case "ETF IS":
        return "?sheet=Istocno Sarajevo";
      default:
        return "?sheet=sheet1";
    }
  };

  const isNotValid =
    !formData.fakultet ||
    !formData.imePrezime ||
    !formData.brTelefona ||
    !formData.email ||
    !validateEmail(formData.email) ||
    !formData.brIndeksa ||
    !formData.uSobi ||
    // !formData.prosek ||
    !formData.majica ||
    !formData.finansiranje ||
    !formData.pol;

  const onSubmitHandler = () => {
    if (isNotValid) {
      setFormDataError({
        fakultet: !formData.fakultet,
        imePrezime: !formData.imePrezime,
        brTelefona: !formData.brTelefona,
        email: !formData.email || !validateEmail(formData.email),
        brIndeksa: !formData.brIndeksa,
        uSobi: !formData.uSobi,
        // prosek: !formData.prosek,
        majica: !formData.majica,
        finansiranje: !formData.finansiranje,
        pol: !formData.pol,
      });
    } else {
      setLoading(true);
      axios
        .post(`https://sheetdb.io/api/v1/3ak8dd8b9lxha${resolveParam()}`, {
          ...formData,
          prosek: formData.prosek || "0",
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

  const FormText =
    formData.fakultet === "FTN Novi Sad" || !formData.fakultet
      ? ApplicationText
      : ApplicationTextOtherFaculties;

  return (
    <div className="p-6 flex items-center justify-center">
      <Meta
        description="Konferencija studenata elektrotehnike i računarstva."
        keywords="Codeference, Codefair, 2021, 2022, 2023, Codeference 2022, Codefair 2022, Codeference 2023, Konferencija, IT, Zlatibor, Novi Sad, Codeference 2021, Codefair 2021"
        title="Prijava za - Codeference 2023"
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
              <FormText
                showSuccessMessage={showSuccessMessage}
                showErrorMessage={showErrorMessage}
                showInformation={!!formData.fakultet}
                isPrivateAccomodation={isPrivateAccomodation}
              />
              <ApplicationForm
                onInputChange={onInputChange}
                loading={loading}
                formData={formData}
                formDataError={formDataError}
                onSubmitHandler={onSubmitHandler}
                isDisabled={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PrijaviSePage;
