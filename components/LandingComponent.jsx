import React from "react";

import LandingImg from "../public/LandingImg.jpg";
import Timer from "./TImer";

function LandingComponent() {
  return (
    <div className="relative w-full min-h-[550px]">
      <div className="lg:my-5 3xl:my-10 mx-auto relative object-cover lg:w-3/5 min-h-[550px] max-h-[650px] flex justify-center">
        <span className="md:rounded-2xl absolute w-full h-full z-30 opacity-60 bg-black" />
        <img
          className="md:rounded-2xl mx-auto object-cover	w-full"
          src={LandingImg?.src}
          alt={LandingImg?.src}
        />
      </div>
      <div className="absolute flex justify-center w-full  mx-auto top-[100px] z-[40]">
        <div className="items-center flex flex-wrap mx-auto">
          <div className="w-full px-4 mx-auto text-center">
            <div className="text-white font-semibold text-xl sm:text-2x md:text-3xl xl:text-4xl 2xl:text-5xl">
              <div className="flex pb-4">
                <p className="text-blue-500">Codeference</p>
                <p className="pl-3 min-w-max">Zlatibor</p>
              </div>
              <div className="flex pb-4">
                <p className="text-blue-500">Codefair</p>
                <p className="pl-3 min-w-max">Hol FTNa</p>
              </div>
              <div className="flex pb-4">
                <p className="text-blue-500">Codeday</p>
                <p className="pl-3 min-w-max">Svečana sala FTNa</p>
              </div>
            </div>
            <div className="text-sm lg:text-base flex justify-start flex-col lg:flex-row w-2/3 lg:w-full">
              <a
                href="/cv"
                className="mb-4 font-semibold rounded-3xl transition-all duration-500 bg-transparent border border-blue-500 hover:bg-blue-500 text-white lg:px-16 lg:py-3 py-2"
              >
                Ostavi CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:w-2/3 mx-auto mt-[-120px] 2xl-[-100px] z-40">
        <Timer />
      </div>
    </div>
  );
}

export default LandingComponent;
