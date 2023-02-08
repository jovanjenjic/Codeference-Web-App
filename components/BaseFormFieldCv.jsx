/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

function BaseFormFieldCv({
  baseInfo,
  setBaseInfo,
  baseInfoError,
  setBaseInfoError,
}) {

  const onInputChange = (key, value) => {
    setBaseInfoError(prevState => ({...prevState, [key]: !value}));
    setBaseInfo(prevState => ({...prevState, [key]: value}));
  }

  return (
    <div className="lg:col-span-2 mx-4 my-4">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-3">
          <label htmlFor="name">Ime i prezime</label>
          <input
            id="name"
            type="text"
            className={`${
              baseInfoError?.ime
                ? "focus:ring-0 border border-red-400"
                : "focus:ring-0 focus:border-blue-300 border-stone-300"
            } h-8 text-sm border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="Pera Perić"
            onChange={(e) => onInputChange("ime", e.target.value)}
            value={baseInfo?.ime}
          />
        </div>
        <div className="md:col-span-3">
          <label htmlFor="broj_telefona">Broj telefona</label>
          <input
            id="broj_telefona"
            type="number"
            className={`${
              baseInfoError?.broj_telefona
                ? "focus:ring-0 border-red-400"
                : "focus:ring-0 focus:border-blue-300 border-stone-300"
            } h-8 text-sm border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40	`}
            placeholder="06xxxxxxx"
            onChange={(e) => onInputChange("broj_telefona", e.target.value)}
            value={baseInfo?.broj_telefona}
          />
        </div>

        <div className="md:col-span-6">
          <label htmlFor="email">Email adresa</label>
          <input
            type="email"
            className={`${
              baseInfoError?.email
                ? "focus:ring-0 border-red-400"
                : "focus:ring-0 focus:border-blue-300 border-stone-300"
            } h-8 text-sm border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40	`}
            placeholder="email@domain.com"
            onChange={(e) => onInputChange("email", e.target.value)}
            value={baseInfo?.email}
          />
        </div>
      </div>
    </div>
  );
}

BaseFormFieldCv.propTypes = {
  baseInfo: PropTypes.objectOf(PropTypes.object).isRequired,
  baseInfoError: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default BaseFormFieldCv;