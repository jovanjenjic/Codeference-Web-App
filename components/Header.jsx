import React, { useState, useEffect } from "react";
import Link from "next/link";
import imgLogo from "../public/logo-crni.png";
import { getCategories } from "../services";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-blue-50 shadow-sm">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 md:text-3xl w-44 cursor-pointer">
            <Link href="/">
              <img src={imgLogo.src} alt="logo" />
            </Link>
          </div>
          <div className="md:hidden">
            <HamburgerMenu
              categories={categories}
              open={open}
              setOpen={setOpen}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row hidden md:block -mx-2 my-auto">
          {categories.map((cat) => (
            <div className="group inline-block relative" key={cat.slug}>
              <button
                type="button"
                className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <span className="mr-1">{cat?.name}</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              <ul className="absolute hidden text-gray-900 pt-1 group-hover:block">
                {cat?.subcategories.map((sub) => (
                  <li key={`${cat.slug}/${sub.slug}`} className="rounded-b bg-blue-100 hover:bg-blue-200 py-2 px-4 block whitespace-no-wrap">
                    <Link href={`/${cat?.slug}/${sub?.slug}`}>{sub?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link href="/post">
            <span className="md:float-right  py-2 px-4 rounded inline-flex items-center ml-4 font-semibold cursor-pointer ">
              Vesti
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
