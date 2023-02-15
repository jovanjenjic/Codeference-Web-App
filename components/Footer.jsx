import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative bg-blue-600 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-white text-3xl font-semibold">CODEFERENCE</h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Klikni na ikonicu ispod i pronađi nas na nekoj od društvenih
              mreža!
            </h5>
            <div className="mt-6">
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <Link href="https://www.linkedin.com/company/studentska-unija-fakulteta-tehni%C4%8Dkih-nauka/">
                  <a
                    href="https://www.linkedin.com/company/studentska-unija-fakulteta-tehni%C4%8Dkih-nauka/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </Link>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <Link href="https://www.facebook.com/codeferenceftn">
                  <a
                    href="https://www.facebook.com/codeferenceftn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flex fab fa-facebook-square" />
                  </a>
                </Link>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <Link href="https://www.instagram.com/codeference">
                  <a
                    href="https://www.instagram.com/codeference"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                </Link>
              </button>
              <button
                className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <Link href="https://www.youtube.com/@codeference3265">
                  <a
                    href="https://www.youtube.com/@codeference3265"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-youtube" />
                  </a>
                </Link>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto pt-10 ">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Ostale stranice
                </span>
                <ul className="list-unstyled">
                  <li>
                    <button
                      type="button"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="cursor-pointer text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                    >
                      Početna
                    </button>
                  </li>
                  <li>
                    <Link href="/post">
                      <a
                        href="/post"
                        className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                      >
                        Vesti
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/upload-cv">
                      <a
                        href="/upload-cv"
                        className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                      >
                        Otpremi CV
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © {new Date().getFullYear()} CODEFERENCE Novi Sad{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-white hover:text-gray-200"
              >
                Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
