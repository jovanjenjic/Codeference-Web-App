import React from "react";
import PropTypes from "prop-types";
import { Timer } from ".";

function AfterMovieAndVideos({ videoUrl, subDetails, images }) {
  const [showVideo, setShowVideo] = React.useState(true);

  React.useEffect(() => {
    if (subDetails?.videoUrl) setShowVideo(true);
    else setShowVideo(false);
  }, []);

  React.useEffect(() => {
    setShowVideo(true);
  }, [videoUrl]);

  return (
    <div className="relative w-full min-h-[670px]">
      <div className="lg:my-5 3xl:my-10 mx-auto relative object-cover h-3/4 lg:w-3/5 max-h-[650px] flex justify-center">
        <div className="flex justify-center">
          <video
            className="video-js"
            controls
            autoPlay
            loop
            src={require("../public/video.mp4")}
            // poster={poster.src}
          >
            <source src={require("../public/video.mp4")} />
          </video>
        </div>
      </div>
      <div className="absolute flex justify-center w-full  mx-auto top-[100px] z-[40]">
        <div className="items-center flex flex-wrap mx-auto">
          <div className="w-full px-4 mx-auto text-center">
            <div className="text-white font-semibold text-xl sm:text-2x md:text-3xl xl:text-4xl 2xl:text-5xl">
              <div className="flex pb-4">
                <p className="text-blue-500">Codeday</p>
                <p className="pl-3 min-w-max">Svečana sala FTN-a</p>
              </div>
              <div className="flex pb-4">
                <p className="text-blue-500">400+</p>
                <p className="pl-3 min-w-max">Studenata</p>
              </div>
              <div className="flex pb-4">
                <p className="text-blue-500">15+</p>
                <p className="pl-3 min-w-max">Kompanija</p>
              </div>
            </div>
            <div className="text-white text-sm flex justify-start ">
              [17. Maj, Fakultet tehnickih nauka]
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

AfterMovieAndVideos.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  subDetails: PropTypes.arrayOf.isRequired,
  images: PropTypes.arrayOf.isRequired,
};

export default AfterMovieAndVideos;
