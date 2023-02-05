import React from "react";
import PropTypes from "prop-types";
import ApplicationForm from "./ApplicationForm";
import BaseFormFieldCv from "./BaseFormFieldCv";
import AdvancedFormFieldCv from "./AdvancedFormFieldCv";
import CvUpload from "./CvUpload";

function UploadCvForm({ }) {

  // TODO: This is used just for example of upload cv file to drive
  const onCvInputChange = async (_, file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/cv", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const { webViewLink, webContentLink: downloadLink } =
        await response.json();

      // download link can be used for direct download from table (when is clicked on link automatically is downloaded)
      // view link is can be used to view document from drive in preview mode
    }
  };

  return (
    <div className="lg:col-span-3 text-gray-600 justify-between flex flex-col relative lg:pr-4 pb-10 lg:pb-0">
      <div
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
      >
        <h2 id="accordion-color-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-color-body-1"
            aria-expanded="true"
            aria-controls="accordion-color-body-1"
          >
            <span>Osnovni podaci o korisniku</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 rotate-180 shrink-0"
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
          </button>
        </h2>
        <div
          id="accordion-color-body-1"
          className="hidden"
          aria-labelledby="accordion-color-heading-1"
        >
          <BaseFormFieldCv />
        </div>
        <h2 id="accordion-color-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-color-body-2"
            aria-expanded="false"
            aria-controls="accordion-color-body-2"
          >
            <span>Dodaj CV</span>
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
          </button>
        </h2>
        <div
          id="accordion-color-body-2"
          className="hidden"
          aria-labelledby="accordion-color-heading-2"
        >
          <CvUpload onInputChange={onCvInputChange} />
        </div>
        <h2 id="accordion-color-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-color-body-3"
            aria-expanded="false"
            aria-controls="accordion-color-body-3"
          >
            <span>Dodatni podaci o korisniku</span>
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
          </button>
        </h2>
        <div
          id="accordion-color-body-3"
          className="hidden"
          aria-labelledby="accordion-color-heading-3"
        >
          <AdvancedFormFieldCv />
        </div>
      </div>
    </div>
  );
}

UploadCvForm.propTypes = {
  images: PropTypes.arrayOf.isRequired,
  dark: PropTypes.bool,
  hideNavigation: PropTypes.bool.isRequired,
};

UploadCvForm.defaultProps = {
  dark: false,
};

export default UploadCvForm;
