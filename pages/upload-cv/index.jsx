import React, { useState } from "react";
import { motion } from "framer-motion";
import { Meta, UploadCvForm, CvText, AlertsInfo } from "../../components";

function UploadCvPage() {
  const [showAlert, setShowAlert] = useState(false);

  const showAlertHandler = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, [5000]);
  };

  return (
    <div className="p-6 flex items-center justify-center">
      <Meta
        description="Konferencija studenata elektrotehnike i računarstva."
        keywords="Codeference, Codefair, 2021, 2022, Codeference 2022, Codefair 2022, Konferencija, IT, Zlatibor, Novi Sad, Codeference 2021, Codefair 2021, CV, Posao"
        title="Ostavi CV"
      />
      {showAlert && <AlertsInfo />}
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <motion.div
            initial={{ x: -160, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded shadow-lg p-8 mb-6"
          >
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-6 min-h-[640px]">
              <CvText />
              <UploadCvForm showAlertHandler={showAlertHandler} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default UploadCvPage;
