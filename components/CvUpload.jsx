import React from "react";
import PropTypes from "prop-types";
import ApplicationForm from "./ApplicationForm";
import BaseFormFieldCv from "./BaseFormFieldCv";
import AdvancedFormFieldCv from "./AdvancedFormFieldCv";

function CvUpload({}) {
  const ACCEPT_MIME_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  return (
    <div className="m-4">
      <label
        htmlFor="formFileSm"
        className="form-label inline-block mb-2 text-gray-700"
      >
        Dodaj CV
      </label>
      <input
        className="form-control
                    block
                    w-full
                    px-2
                    py-1
                    text-sm
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out 
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="formFileSm"
        type="file"
        accept={ACCEPT_MIME_TYPES.join(",")}
        onChange={() =>
          onInputChange("cv", document.getElementById("formFileSm")?.files?.[0])
        }
      />
    </div>
  );
}

CvUpload.propTypes = {
  images: PropTypes.arrayOf.isRequired,
  dark: PropTypes.bool,
  hideNavigation: PropTypes.bool.isRequired,
};

CvUpload.defaultProps = {
  dark: false,
};

export default CvUpload;
