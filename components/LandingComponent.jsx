import React from "react";
import LandingImg from "../public/LandingImg.jpg";
import Timer from "./TImer";

// Our custom easing
const easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

function LandingComponent() {
  return (
    <div className="relative w-full min-h-[550px]">
      <div className="lg:my-5 3xl:my-10 mx-auto relative object-cover lg:w-3/5 min-h-[550px] max-h-[650px] flex justify-center">
        <span className="rounded-2xl absolute w-full h-full z-30 opacity-60 bg-black" />
        <img
          className="rounded-2xl mx-auto object-cover	w-full"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          src={LandingImg?.src}
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
                <p className="pl-3 min-w-max">Hol FTN-a</p>
              </div>
              <div className="flex pb-4">
                <p className="text-blue-500">Codeday</p>
                <p className="pl-3 min-w-max">Svečana sala FTN-a</p>
              </div>
            </div>
            <div className="text-sm lg:text-base flex justify-start flex-col lg:flex-row w-2/3 lg:w-full">
              <p
                onClick={() => {
                  const elmntToView = document.getElementById("AskForm");
                  elmntToView.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                  });
                }}
                className="cursor-pointer mb-4 font-semibold lg:mr-4 rounded-3xl transition-all duration-500 bg-blue-500 border border-transparent hover:border-white hover:bg-transparent text-white lg:px-16 lg:py-3 py-2"
              >
                Postavi pitanje
              </p>
              <a
                href="/upload-cv"
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
