import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Meta,
  ApplicationTextVegaWorkshop,
  ApplicationFormWorkshop,
  UploadCvForm,
  CvText,
} from "../../components";

const initData = {
  ime: "",
  prezime: "",
  brTelefona: "",
  email: "",
};
const initDataError = {
  ime: false,
  prezime: false,
  brTelefona: false,
  email: false,
};

const validateEmail = (emailAddress = "") => {
  return emailAddress?.match(
    // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const UploadCvPage = () => {
  return (
    <div className="p-6 flex items-center justify-center">
      <Meta
        description="Konferencija studenata elektrotehnike i računarstva."
        keywords="Codeference, Codefair, 2021, 2022, Codeference 2022, Codefair 2022, Konferencija, IT, Zlatibor, Novi Sad, Codeference 2021, Codefair 2021"
        title="Radionica Vega IT - Codeference 2022"
      />
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <motion.div
            initial={{ x: -160, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
          >
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-6 h-[660px]">
              <CvText
                // showSuccessMessage={showSuccessMessage}
                // showErrorMessage={showErrorMessage}
              />
              <UploadCvForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default UploadCvPage;
