import React from "react";

function SupportHomePage({ logos }) {
  return (
    <section className="bg-blue-600">
      <div className="md:w-2/3 mx-auto">
        <div
          id="services"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {logos.map((logo) => (
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

export default SupportHomePage;
