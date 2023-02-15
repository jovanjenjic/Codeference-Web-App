/* eslint-disable jsx-a11y/media-has-caption */

import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import EventInfoComponent from "./EventInfoComponent";
import poster from "../public/poster.jpg";

function LandingVideoComponent({ subDetails, numOfPosts }) {
  const resolveLocationText = (location) => {
    switch (location) {
      case "Hol Fakulteta tehničkih nauka - Novi Sad": {
        return "Hol FTN-a";
      }
      case 'Studentsko odmaralište "Ratko Mitrović" - Zlatibor': {
        return "Zlatibor";
      }
      case "Svečana sala Fakulteta tehničkih nauka - Novi Sad": {
        return "Svečana sala FTN-a";
      }
      default: {
        return location;
      }
    }
  };

  return (
    <div className="bg-white lg:bg-blue-50 relative w-full min-h-[550px] md:min-h-[670px] lg:min-h-[870px] ">
      <div className="lg:my-5 3xl:my-10 mx-auto relative object-cover h-3/4 max-h-[650px] flex justify-center ">
        <div className="flex justify-center w-full lg:w-3/4">
          <video
            className="video-js"
            controls
            loop
            src={subDetails?.video?.url}
            poster={poster.src}
          >
            <source src={subDetails?.video?.url} />
          </video>
        </div>
      </div>
      <div className="absolute flex justify-center w-full  mx-auto top-[100px] z-[40]">
        <div className="items-center flex flex-wrap mx-auto">
          <div className="w-full px-4 mx-auto text-center">
            <div className="text-white font-semibold text-xl sm:text-2x md:text-3xl xl:text-4xl 2xl:text-5xl">
              <div className="flex pb-4">
                <p className="text-blue-500">{subDetails?.name}</p>
                <p className="pl-3 min-w-max">
                  {resolveLocationText(subDetails?.location)}
                </p>
              </div>
              <div className="flex pb-4">
                <p className="text-blue-500">
                  {subDetails?.participantsNumber}+
                </p>
                <p className="pl-3 min-w-max">Učesnika</p>
              </div>
              <div className="flex pb-4">
                <p className="text-blue-500">{subDetails?.logos?.length}+</p>
                <p className="pl-3 min-w-max">Kompanija</p>
              </div>
            </div>
            <div className="text-white text-sm flex justify-start ">
              {`[${dayjs(subDetails?.startDate).format(
                "DD. MMM"
              )}, ${resolveLocationText(subDetails?.location)}]`}
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:w-3/4 xl:w-3/5 mx-auto z-40">
        <EventInfoComponent subDetails={subDetails} numOfPosts={numOfPosts} />
      </div>
    </div>
  );
}

LandingVideoComponent.propTypes = {
  subDetails: PropTypes.arrayOf.isRequired,
  numOfPosts: PropTypes.number.isRequired,
};

export default LandingVideoComponent;
