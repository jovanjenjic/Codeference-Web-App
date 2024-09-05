/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */
import React, { useState, useEffect } from "react";
import validator from "validator";
import emailjs from "emailjs-com";

(() => {
  emailjs.init("user_1SqBNhYaPHbhrnf53LizK");
})();

function AskForm() {
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

    const isValid =
      isEmail(email || "") && !isEmpty(name) && !isEmpty(question || "");

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
          }, 5000);
        },
        () => {}
      );
  };

  return (
    <section id="AskForm" className="relative block bg-blue-600">
      <div className="container mx-auto lg:px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blue-50">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">Da li imaš pitanja?</h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Popuni formu ispod, obavezno ostavi svoj email i neko će te
                  kontaktirati u narednih 24h!
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="full-name"
                  >
                    Ime i prezime
                  </label>
                  <input
                    onChange={onInputChange}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Ime i prezime"
                    style={{ transition: "all .15s ease" }}
                    value={formData.name || ""}
                    name="name"
                    id="full-name"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    onChange={onInputChange}
                    type="email"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                    value={formData.email || ""}
                    name="email"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Poruka
                  </label>
                  <textarea
                    onChange={onInputChange}
                    rows={4}
                    cols={80}
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Tekst poruke..."
                    value={formData.question || ""}
                    name="question"
                  />
                </div>
                {error && (
                  <p className="text-base text-red-500">
                    Sva polja moraju biti ispravno popunjena
                  </p>
                )}
                {showSuccessMessage && (
                  <span className="text-base text-blue-600">
                    Pitanje je uspešno poslato
                  </span>
                )}
                <div className="text-center mt-6">
                  <button
                    onClick={handlePostSubmission}
                    className="transition-all duration-500 bg-blue-600 border hover:border-blue-600 hover:bg-white hover:text-blue-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    POŠALJI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AskForm;
