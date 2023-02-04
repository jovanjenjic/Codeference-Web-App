/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { getSubcategoryDetails } from "../services";
import AlertMessageInfo from "./AlertMessageInfo";

function AdvancedFormFieldCv({
  formData,
  formDataError,
  onSubmitHandler,
  loading,
  onInputChange,
}) {
  const [disabledForm, setDisabledForm] = React.useState(false);

  React.useEffect(() => {
    const fetchSubDetails = async () => {
      const res = await getSubcategoryDetails('codeference02');
      setDisabledForm(res?.subcategory?.lockComponent?.disabled)
    }
    fetchSubDetails();
  }, [loading]);

  return (
    <div className="lg:col-span-2 mx-4 my-4">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">

        <div className="md:col-span-6">
          <label htmlFor="full_name">Fakultet, Smer i Godina</label>
          <input
            type="text"
            className={`${
              formDataError?.imePrezime
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-8 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="FTN, E2, 4."
            onChange={(e) => onInputChange("imePrezime", e.target.value)}
            value={formData?.imePrezime}
          />
        </div>
        <div className="md:col-span-3">
          <label htmlFor="full_name">Broj telefona</label>
          <input
            type="text"
            className={`${
              formDataError?.brIndeksa
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-8 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="E2 xxx/yyyy"
            onChange={(e) => onInputChange("brIndeksa", e.target.value)}
            value={formData?.brIndeksa}
          />
        </div>

        <div className="md:col-span-6">
          <label htmlFor="email">Email adresa</label>
          <input
            type="email"
            className={`${
              formDataError?.email
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-8 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="email@domain.com"
            onChange={(e) => onInputChange("email", e.target.value)}
            value={formData?.email}
          />
        </div>
        <div className="md:col-span-3">
          <label htmlFor="full_name">Ime i prezime</label>
          <input
            type="text"
            className={`${
              formDataError?.imePrezime
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-8 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="Pera Perić"
            onChange={(e) => onInputChange("imePrezime", e.target.value)}
            value={formData?.imePrezime}
          />
        </div>
        <div className="md:col-span-3">
          <label htmlFor="full_name">Broj telefona</label>
          <input
            type="text"
            className={`${
              formDataError?.brIndeksa
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-8 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="E2 xxx/yyyy"
            onChange={(e) => onInputChange("brIndeksa", e.target.value)}
            value={formData?.brIndeksa}
          />
        </div>

        <div className="md:col-span-6">
          <label htmlFor="email">Email adresa</label>
          <input
            type="email"
            className={`${
              formDataError?.email
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-8 text-sm border-stone-300 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="email@domain.com"
            onChange={(e) => onInputChange("email", e.target.value)}
            value={formData?.email}
          />
        </div>
      </div>
    </div>
  );
}

AdvancedFormFieldCv.propTypes = {
  formData: PropTypes.objectOf(PropTypes.object).isRequired,
  formDataError: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AdvancedFormFieldCv;