import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { motion } from "framer-motion";

function MyTimer() {
  const [time, setTime] = useState();

  const { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp: time || new Date(),
  });

  useEffect(() => {
    setTime(new Date(new Date("05/17/2023").getTime()));
  }, []);

  useEffect(() => {
    if (time) restart(time);
  }, [time]);

  const dayTime = days < 10 ? `0${days}` : `${days}`;
  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div className="bg-white px-4 lg:px-8 py-6 mx-auto max-w-[650px] shadow-lg">
      <div className="flex justify-center">
        <div className="w-2/5 sm:w-1/4 text-base lg:text-lg font-[600]">
          <div className="inline-flex">
            Brojite <p className="text-blue-600 pl-[4px]">Svaku</p>
          </div>
          <p className="text-blue-600">Sekundu</p>
          Do Događaja
        </div>
        <div className="left-1/2 -ml-0.5 w-0.5 bg-gray-300 hidden lg:flex" />
        <div className="w-3/5 sm:w-3/4 flex flex-row justify-around	">
          <div className="lg:px-6">
            <div className="text-[34px] lg:text-[50px] leading-snug font-medium">
              {dayTime}
            </div>
            <p className="text-[8px] lg:text-[12px] text-blue-600 text-center	font-[600]">
              [dana]
            </p>
          </div>
          <div className="text-[34px] lg:text-[50px] leading-snug text-gray-300">
            :
          </div>
          <div className="lg:px-6">
            <div className="text-[34px] lg:text-[50px] leading-snug font-medium">
              {hourTime}
            </div>
            <p className="text-[8px] lg:text-[12px] text-blue-600 text-center	font-[600]">
              [sati]
            </p>
          </div>
          <div className="text-[34px] lg:text-[50px] leading-snug text-gray-300">
            :
          </div>
          <div className="lg:px-6">
            <div className="text-[34px] lg:text-[50px] leading-snug font-medium">
              {minuteTime}
            </div>
            <p className="text-[8px] lg:text-[12px] text-blue-600 text-center	font-[600]">
              [minuta]
            </p>
          </div>
          <div className="text-[34px] lg:text-[50px] leading-snug text-gray-300 hidden sm:inline">
            :
          </div>
          <div className="lg:px-6 hidden sm:inline">
            <div className="text-[34px] lg:text-[50px] leading-snug font-medium lg:min-w-[70px] text-center">
              {secondTime}
            </div>
            <p className="text-[8px] lg:text-[12px] text-blue-600 text-center	font-[600]">
              [sekundi]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTimer;
