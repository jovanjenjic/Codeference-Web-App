import React from "react";
import PropTypes from "prop-types";

const defaultMessage = `Sva mesta u odmaralištu su popunjena. Uskoro više informacija o
        privatnom smeštaju. Pratite vesti i Instagram stranicu @codeference.`;
function AlertMessageInfo({ message = defaultMessage }) {
  return (
    <div
      className="flex p-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg"
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="flex-shrink-0 inline w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
      <span className="sr-only">Info</span>
      <div className="text-start">{message}</div>
    </div>
  );
}

AlertMessageInfo.propTypes = {
  message: PropTypes.string,
};

AlertMessageInfo.defaultProps = {
  message: undefined,
};

export default AlertMessageInfo;
