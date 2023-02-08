/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
function AdvancedFormFieldCv({
  advancedInfo,
  setAdvancedInfo,
  advancedInfoError,
  setAdvancedInfoError,
}) {

  const onInputChange = (key, value) => {
    setAdvancedInfoError(prevState => ({...prevState, [key]: !value}));
    setAdvancedInfo(prevState => ({...prevState, [key]: value}));
  }

  return (
    <div className="lg:col-span-2 mx-4 my-4">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">

        <div className="md:col-span-3">
          <label htmlFor="smer_i_fakultet">Fakultet i smer</label>
          <input
            id="smer_i_fakultet"
            type="text"
            className={`${
              advancedInfoError?.smer_i_fakultet
                ? "focus:ring-0 border-red-400"
                : "focus:ring-0 focus:border-blue-300"
            } h-8 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="FTN, E2"
            onChange={(e) => onInputChange("smer_i_fakultet", e.target.value)}
            value={advancedInfo?.smer_i_fakultet}
          />
        </div>
        <div className="md:col-span-3">
          <label htmlFor="godina_studija">Godina studija</label>
          <input
            id="godina_studija"
            type="number"
            className={`${
              advancedInfoError?.godina_studija
                ? "focus:ring-0 border-red-400"
                : "focus:ring-0 focus:border-blue-300"
            } h-8 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="4."
            onChange={(e) => onInputChange("godina_studija", e.target.value)}
            value={advancedInfo?.godina_studija}
          />
        </div>
        <div className="md:col-span-6">
          <label htmlFor="lista_projekata_iskustvo">Lista završenih projekata / iskustvo</label>
          <input
            id="lista_projekata_iskustvo"
            type="text"
            className={`${
              advancedInfoError?.lista_projekata_iskustvo
                ? "focus:ring-0 border-red-400"
                : "focus:ring-0 focus:border-blue-300"
            } h-8 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="Završio sam letnju praksu..."
            onChange={(e) => onInputChange("lista_projekata_iskustvo", e.target.value)}
            value={advancedInfo?.lista_projekata_iskustvo}
          />
        </div>
        <div className="md:col-span-6">
          <label htmlFor="jezik">Lista stranih jezika</label>
          <input
            id="jezik"
            type="text"
            className={`${
              advancedInfoError?.jezik
                ? "focus:ring-0 border-red-400"
                : "focus:ring-0 focus:border-blue-300"
            } h-8 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="Napredni engleski, osnovni nemački..."
            onChange={(e) => onInputChange("jezik", e.target.value)}
            value={advancedInfo?.jezik}
          />
        </div>
        <div className="md:col-span-6">
          <label htmlFor="stipendije_i_nagrade">Lista ostvarenih stipendija i nagrada</label>
          <input
            id="stipendije_i_nagrade"
            type="text"
            className={`${
              advancedInfoError?.stipendije_i_nagrade
                ? "focus:ring-0 border-red-400"
                : "focus:ring-0 focus:border-blue-300"
            } h-8 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="Dositejeva stipendija..."
            onChange={(e) => onInputChange("stipendije_i_nagrade", e.target.value)}
            value={advancedInfo?.stipendije_i_nagrade}
          />
        </div>

        <div className="md:col-span-6">
          <label htmlFor="kratak_opis">Kratak opis</label>
          <textarea
            id="kratak_opis"
            rows="4"
            className={`${
              advancedInfoError?.kratak_opis
                ? "focus:ring-0 border-red-400"
                : "focus:ring-0 focus:border-blue-300"
            } max-h-20 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="Motivaciono pismo, hobi, zanimljivosti..."
            onChange={(e) => onInputChange("kratak_opis", e.target.value)}
            value={advancedInfo?.kratak_opis}
          />
        </div>
      </div>
    </div>
  );
}

AdvancedFormFieldCv.propTypes = {
  advancedInfo: PropTypes.objectOf(PropTypes.object).isRequired,
  advancedInfoError: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default AdvancedFormFieldCv;