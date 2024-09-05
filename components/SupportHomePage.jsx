import React from "react";
import PropTypes from "prop-types";

function SupportHomePage({ logos }) {
  const onLogoClick = ({ url }) => {
    if (url) window.open(url, "_newtab");
  };

  return (
    <section className="bg-blue-600">
      <div className="md:w-2/3 mx-auto">
        <div
          id="services"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {logos.map((logo, idx) => (
            <div
              key={logo.name}
              role="button"
              onClick={() => onLogoClick(logo)}
              tabIndex={idx}
              onKeyDown={() => {}}
            >
              <img
                alt={logo?.image?.url}
                className="mx-auto h-[70px] lg:h-[90px] cursor-pointer"
                src={logo.image?.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

SupportHomePage.propTypes = {
  logos: PropTypes.arrayOf.isRequired,
};

export default SupportHomePage;
