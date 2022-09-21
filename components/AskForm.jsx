import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import validator from "validator";

import emailjs from "emailjs-com";

(() => {
  emailjs.init("user_1SqBNhYaPHbhrnf53LizK");
})();

function AskForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    question: null,
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    const { isEmpty, isEmail } = validator;
    const { name, email, question, storeData } = formData;

    const isValid = isEmail(email) && !isEmpty(name) && !isEmpty(question);

    setError(!isValid);
    if (!isValid) {
      return;
    }

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    emailjs
      .send("service_qf082ms", "template_y84xuns", {
        from_name: name,
        reply_to: email,
        message: question,
      })
      .then(
        () => {
          const fData = {};
          if (!storeData) {
            fData.email = "";
            fData.name = "";
          }
          fData.question = "";
          setFormData((prevState) => ({
            ...prevState,
            ...fData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        },
        () => {}
      );
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Postavi pitanje
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          value={formData.question || ""}
          onChange={onInputChange}
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-blue-50 text-gray-700"
          name="question"
          placeholder="Pitanje"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={formData.name || ""}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-blue-50 text-gray-700"
          placeholder="Ime"
          name="name"
        />
        <input
          type="email"
          value={formData.email || ""}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-blue-50 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            checked={formData.storeData}
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData">
            {" "}
            Zapamti moje podatke za sledeći put kada budem pitao.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">Sva polja moraju biti popunjena</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="transition duration-500 ease hover:bg-sky-700 inline-block bg-sky-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Pošalji
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Pitanje je uspešno poslato
          </span>
        )}
      </div>
    </div>
  );
}

AskForm.propTypes = {
  slug: PropTypes.string,
};

AskForm.defaultProps = {
  slug: "",
};

export default AskForm;
