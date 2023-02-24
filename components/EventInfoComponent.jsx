import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

function MyTimer({ subDetails, numOfPosts }) {
  const dateFormatter = (date, withoutDot) => {
    return dayjs(date).format(`DD. MM. YYYY${!withoutDot ? "." : ""}`);
  };
  return (
    <div className="flex flex-col">
      <div className="lg:rounded-xl bg-white grid lg:shadow-lg grid-cols-2 xl:grid-cols-4">
        <div className="flex items-start  px-2 sm:px-3 md:px-4 py-4">
          <div className="flex h-6 md:h-12 w-8 md:w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 md:h-6 w-4 md:w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>

          <div className="ml-4">
            <h2 className="font-semibold text-sm md:text-base">Lokacija</h2>
            <p className="mt-2 text-[12px] md:text-sm text-gray-500">
              {subDetails?.location}
            </p>
          </div>
        </div>

        <div className="flex items-start  px-2 sm:px-3 md:px-4 py-4">
          <div className="flex h-6 md:h-12 w-8 md:w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 md:h-6 w-4 md:w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>

          <div className="ml-4">
            <h2 className="font-semibold text-sm md:text-base">Učesnici</h2>
            <p className="mt-2 text-[12px] md:text-sm text-gray-500">
              {`Na ovom događaju je učestvovalo više od ${subDetails?.participantsNumber} učesnika`}
            </p>
          </div>
        </div>
        <div className="flex items-start  px-2 sm:px-3 md:px-4 py-4">
          <div className="flex h-6 md:h-12 w-8 md:w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 md:h-6 w-4 md:w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>

          <div className="ml-4">
            <h2 className="font-semibold text-sm md:text-base">Objave</h2>
            <p className="mt-2 text-[12px] md:text-sm text-gray-500">
              {`Postoji tačno ${numOfPosts} objava koje su vezane za ovaj događaj`}
            </p>
          </div>
        </div>
        <div className="flex items-start  px-2 sm:px-3 md:px-4 py-4">
          <div className="flex h-6 md:h-12 w-8 md:w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 md:h-6 w-4 md:w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>

          <div className="ml-4">
            <h2 className="font-semibold text-sm md:text-base">Datum</h2>
            <p className="mt-2 text-[12px] md:text-sm text-gray-500">
              {`Ovaj događaj se održao ${
                subDetails?.endDate
                  ? `u vremenskom intervalu: ${dateFormatter(
                      subDetails?.startDate,
                      true
                    )} - ${dateFormatter(subDetails?.endDate)}`
                  : `: ${dateFormatter(subDetails?.startDate)}`
              }`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

MyTimer.propTypes = {
  subDetails: PropTypes.arrayOf.isRequired,
  numOfPosts: PropTypes.number.isRequired,
};

export default MyTimer;
