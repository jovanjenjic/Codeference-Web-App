/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { submitComment } from "../services";

function CommentsForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
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
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
        }
        formData.comment = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <div className="container mx-auto mb-8">
      <div className="flex flex-wrap justify-center ">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-white">
            <div className="flex-auto p-5 lg:p-10">
              <h4 className="text-2xl font-semibold">Ostavi Komentar</h4>
              <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                Popuni podatke ispod, obavezno ostavi svoj email i neko će ti
                odgovoriti.
              </p>
              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Ime i prezime
                </label>
                <input
                  value={formData.name || ""}
                  onChange={onInputChange}
                  name="name"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Ime i prezime"
                  style={{ transition: "all .15s ease" }}
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
                  type="email"
                  value={formData.email || ""}
                  name="email"
                  onChange={onInputChange}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                  style={{ transition: "all .15s ease" }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Komentar
                </label>
                <textarea
                  value={formData.comment || ""}
                  onChange={onInputChange}
                  name="comment"
                  rows={4}
                  cols={80}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Komentar..."
                />
              </div>
              {error && (
                <p className="text-base text-red-500">
                  Sva polja moraju biti ispravno popunjena
                </p>
              )}
              {showSuccessMessage && (
                <span className="text-base text-blue-600">
                  Komentar je uspešno poslat
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
  );
}

CommentsForm.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default CommentsForm;
