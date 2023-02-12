/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";

const ACCEPT_MIME_TYPES = [
  '.pdf',
  '.doc',
  '.docx',
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

function CvUpload({ setViewCv, viewCvError, onFileUploadHandler }) {
  return (
    <div className="m-4">
      <label
        htmlFor="formFileSm"
        className="form-label inline-block mb-2 text-gray-700"
      >
        Dodaj CV
      </label>
      <input
        className={`${viewCvError ? "focus:ring-0 border-red-400" : "border-stone-300"} 
                    focus:ring-0
                    focus:border-blue-300
                    form-control
                    block
                    w-full
                    px-2
                    py-1
                    text-sm
                    font-normal
                    text-gray-700
                    bg-white
                    bg-clip-padding
                    border
                    border-solid
                    rounded
                    transition
                    ease-in-out 
                    m-0
                    file:bg-blue-50
                    hover:file:bg-amber-50
                    focus:text-gray-700 
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none`}
        id="formFileSm"
        type="file"
        accept={ACCEPT_MIME_TYPES.join(",")}
        onChange={() => {
          setViewCv(document.getElementById("formFileSm")?.files?.[0]);
          onFileUploadHandler();
        }
        }
      />
    </div>
  );
}

CvUpload.propTypes = {
  viewCvError: PropTypes.arrayOf.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CvUpload;
