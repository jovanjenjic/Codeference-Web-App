import Link from "next/link";
import React from "react";
import { Support21 } from ".";

function AfterMovie() {
  return (
    <div className="relative h-[calc(100vh-65px)] ">
      <div className="vimeo-wrapper">
        <iframe
          title="Video sa konferencije 2021."
          className="w-full blur-sm"
          src="https://player.vimeo.com/video/739682201?h=142fdace2d&player_id=0&playsinline=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0&background=1&title=0"
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
        />
        <div className="absolute flex flex-col justify-center items-center w-full h-full rounded-md bg-black bg-opacity-40 lg:p-10 px-4 py-6">
          <div className="flex flex-col items-center">
            <span className="-rotate-1 rounded-lg bg-sky-100 py-px px-2 text-sm text-sky-800">
              270 studenata je učestvovalo na konferenciji 2021. godine
            </span>
            <h3 className="mt-2 max-w-2xl text-white text-center font-bold leading-tight text:xl lg:text-2xl xl:text-3xl md:leading-tight">
              Ukoliko želis da pogledaš ceo video sa konferencije, klikni na
              dugme ispod
            </h3>
            <Link href="https://player.vimeo.com/video/739682201">
              <a
                href="https://player.vimeo.com/video/739682201"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="font-bold mt-8 transition duration-500 ease hover:bg-sky-700 inline-block bg-sky-500 lg:text-lg md:text-md text-sm font-medium rounded-full text-white px-8 py-3 cursor-pointer"
                >
                  Link do videa
                </button>
              </a>
            </Link>
          </div>
          <Support21 />
        </div>
      </div>
    </div>
  );
}

export default AfterMovie;
