/* eslint no-unsafe-optional-chaining: "error" */

import React from "react";
import PropTypes from "prop-types";

function Support({ subDetails }) {
  const onLogoClick = ({ url }) => {
    if (url) window.location.href = url;
  };

  return (
    <section className="bg-blue-600">
      <div className="md:w-2/3 mx-auto">
        <div
          id="services"
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ${subDetails?.logos?.length % 4 !== 0 && "xl:grid-cols-5"
            }`}
        >
          {subDetails?.logos.map((logo, idx) => (
            <div
              key={logo.name}
              role="button"
              onClick={() => onLogoClick(logo)}
              tabIndex={idx}
              onKeyDown={() => { }}
            >
              <img
                className="mx-auto h-[70px] lg:h-[90px] cursor-pointer"
                src={logo.image?.url}
                alt={logo.image?.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Support.propTypes = {
  subDetails: PropTypes.arrayOf.isRequired,
};

export default Support;
