import React from "react";
import PropTypes from "prop-types";

function Support({ subDetails }) {
  const fourOrFiveColumns = subDetails?.logos?.length % 4 === 0;
  return (
    <section className="bg-blue-600">
      <div className="md:w-2/3 mx-auto">
        <div
          id="services"
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ${
            !fourOrFiveColumns && "xl:grid-cols-5"
          }`}
        >
          {subDetails?.logos.map((logo) => (
            <img
              className="mx-auto h-[70px] lg:h-[90px]"
              src={logo.image?.url}
            />
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
