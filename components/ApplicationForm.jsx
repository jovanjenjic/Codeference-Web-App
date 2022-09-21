/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

function ApplicationForm({
  formData,
  formDataError,
  onSubmitHandler,
  loading,
  onInputChange,
}) {
  return (
    <div className="lg:col-span-2">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3">
          <label htmlFor="full_name">Ime i prezime</label>
          <input
            type="text"
            className={`${
              formDataError?.imePrezime
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-10 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="Pera Perić"
            onChange={(e) => onInputChange("imePrezime", e.target.value)}
            value={formData.imePrezime}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="full_name">Broj indeksa</label>
          <input
            type="text"
            className={`${
              formDataError?.brIndeksa
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-10 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="E2 xxx/yyyy"
            onChange={(e) => onInputChange("brIndeksa", e.target.value)}
            value={formData.brIndeksa}
          />
        </div>

        <div className="md:col-span-3">
          <label htmlFor="email">Email adresa</label>
          <input
            type="email"
            className={`${
              formDataError?.email
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-10 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="email@domain.com"
            onChange={(e) => onInputChange("email", e.target.value)}
            value={formData.email}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="email">Broj telefona</label>
          <input
            type="number"
            className={`${
              formDataError?.brTelefona
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-10 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="06x xxx xxx"
            onChange={(e) => onInputChange("brTelefona", e.target.value)}
            value={formData.brTelefona}
          />
        </div>

        <div className="md:col-span-3">
          <label htmlFor="address">Sa kim želiš u sobu</label>
          <input
            type="text"
            className={`${
              formDataError?.uSobi
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-10 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="Pera Peric, Milan Milanovic, ..."
            onChange={(e) => onInputChange("uSobi", e.target.value)}
            value={formData.uSobi}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="city">Prosek</label>
          <input
            type="number"
            className={`${
              formDataError?.prosek
                ? "border-red-500 outline-red-400"
                : "outline-blue-400"
            } h-10 border mt-1 rounded px-4 w-full bg-blue-50 bg-opacity-40`}
            placeholder="7.72"
            onChange={(e) => onInputChange("prosek", e.target.value)}
            value={formData.prosek}
          />
        </div>

        <div className="md:col-span-5">
          <label htmlFor="city">Pol</label>
          <ul
            className={`${
              formDataError?.pol && "border-red-500"
            } bg-blue-50 bg-opacity-40 mt-1 items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex`}
          >
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={() => onInputChange("pol", "m")}
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Muški
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-id"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={() => onInputChange("pol", "z")}
                />
                <label
                  htmlFor="horizontal-list-radio-id"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Ženski
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:col-span-5">
          <label htmlFor="city">Finansiranje</label>
          <ul
            className={`${
              formDataError?.finansiranje && "border-red-500"
            } bg-blue-50 bg-opacity-40 mt-1 items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex`}
          >
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="budzet"
                  type="radio"
                  name="radio-budget"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={() => onInputChange("finansiranje", "budzet")}
                />
                <label
                  htmlFor="budzet"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Budžet
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="samofinansiranje"
                  type="radio"
                  name="radio-budget"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={() =>
                    onInputChange("finansiranje", "samofinansiranje")
                  }
                />
                <label
                  htmlFor="samofinansiranje"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Samofinansiranje
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:col-span-5">
          <label htmlFor="city">Veličina majice</label>
          <ul
            className={`${
              formDataError?.majica && "border-red-500"
            } bg-blue-50 bg-opacity-40 mt-1 items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex`}
          >
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="xs"
                  type="radio"
                  name="radio-size"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={() => onInputChange("majica", "xs")}
                />
                <label
                  htmlFor="xs"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  XS
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="s"
                  type="radio"
                  name="radio-size"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={() => onInputChange("majica", "s")}
                />
                <label
                  htmlFor="s"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  S
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="m"
                  type="radio"
                  name="radio-size"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={() => onInputChange("majica", "m")}
                />
                <label
                  htmlFor="m"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  M
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="l"
                  type="radio"
                  name="radio-size"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={() => onInputChange("majica", "l")}
                />
                <label
                  htmlFor="l"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  L
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="xl"
                  type="radio"
                  name="radio-size"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={() => onInputChange("majica", "xl")}
                />
                <label
                  htmlFor="xl"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  XL
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="xxl"
                  type="radio"
                  name="radio-size"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={() => onInputChange("majica", "xxl")}
                />
                <label
                  htmlFor="xxl"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  XXL
                </label>
              </div>
            </li>
          </ul>
        </div>

        <div className="md:col-span-5 text-right">
          <div className="inline-flex items-end">
            <button
              type="button"
              onClick={onSubmitHandler}
              className="flex mt-4 bg-blue-500 bg-opacity-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-25 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading && (
                <div role="status" className="flex justify-center">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-3 h-5 text-gray-200 animate-spin fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              )}
              Potvrdi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ApplicationForm.propTypes = {
  formData: PropTypes.objectOf(PropTypes.object).isRequired,
  formDataError: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ApplicationForm;
