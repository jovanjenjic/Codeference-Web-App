import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import img from "../public/land.png";
import imgDate from "../public/date.png";
import imgLocation from "../public/location.png";
import imgMembers from "../public/members.png";
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
    <div className="w-full">
      <div
        className="flex bg-blue-50"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${img.src})`,
          height: "80vh",
          clipPath: "polygon(0 0, 100% 0%, 100% 93%, 0 100%)",
        }}
      >
        <div className="flex items-start text-center lg:text-left px-6 md:px-12 lg:w-1/2">
          <div className="flex flex-col justify-evenly h-5/6">
            <Timer />
            <div className="w-full max-w-4xl rounded-md border-2 border-gray-100 bg-white bg-opacity-40 lg:p-10 px-4 py-6">
              <div className="flex flex-col items-center">
                <span className="-rotate-1 rounded-lg bg-yellow-100 py-px px-2 text-sm text-yellow-800">
                  prijavi se i rezerviši svoje mesto na konferenciji
                </span>
                <h3 className="mt-2 max-w-2xl text-center font-bold leading-tight text:xl lg:text-2xl xl:text-3xl md:leading-tight">
                  Da li želiš da učestvuješ na konferenciji na Zlatiboru? Popuni
                  formu i prijavi se
                </h3>
                <button
                  type="button"
                  disabled
                  className="font-bold mt-8 transition duration-500 ease hover:bg-sky-700 inline-block bg-sky-500 lg:text-lg md:text-md text-sm font-medium rounded-full text-white px-8 py-3 cursor-pointer"
                >
                  <Link href="/prijavi-se">Prijavi se za učešće</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: "polygon(12% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <motion.img
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-full"
            src="https://setplan2021.eu/wp-content/uploads/2021/09/SET-PLAN_750-x-500_web-foto_20212-800x600.jpg"
          />
          <div className="h-full bg-black opacity-25" />
        </div>
      </div>
      <section className="pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transform transition duration-300 ease-in-out hover:-translate-y-2">
              <motion.div variants={fadeInUp}>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-inner rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center">
                      <img alt="landing" src={imgDate.src} />
                    </div>
                    <h6 className="text-xl font-semibold">Datum</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      24.10.2022 - 27.10.2022.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center transform transition duration-300 ease-in-out hover:-translate-y-2">
              <motion.div variants={fadeInUp}>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-inner rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center">
                      <img alt="landing" src={imgLocation.src} />
                    </div>
                    <h6 className="text-xl font-semibold">Lokacija</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Zlatibor - Studentsko odmaralište <q>Ratko Mitrović</q>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="md:pt-6 w-full md:w-4/12 px-4 text-center transform transition duration-300 ease-in-out hover:-translate-y-2">
              <motion.div variants={fadeInUp}>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-inner rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center">
                      <img alt="landing" src={imgMembers.src} />
                    </div>
                    <h6 className="text-xl font-semibold">Učesnici</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">400+</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingComponent;
