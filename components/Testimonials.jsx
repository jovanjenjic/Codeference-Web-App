import NextImage from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper";
import TitleComponent from "./TitleComponent";

const titleData = {
  titleText: "Šta su rekli o nama?",
  subtitleText:
    "Uz podršku i ovih ljudi realizacija svakog događaja je lakša. Ovo je deo ljudi koji su prepoznali naš rad.",
  colorText:
    "[Direktori, Studentski predstavnici, organizatori drugih događaja...]",
  backgroundText: "PREPORUKE",
  backgroundColor: "text-gray-100",
};

function Separator() {
  return <div className="py-14 border-t border-transparent h-0" />;
}

function Testimonials({ citations }) {
  return (
    <div className="bg-white pt-4">
      <TitleComponent {...titleData} />
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          slidesPerView={1}
          autoplay={{ delay: 8000 }}
          centeredSlides
          navigation
          loop
        >
          {citations.map((citation, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center w-4/5 m-auto">
                <NextImage
                  src="/svg/quote.svg"
                  alt={`${citation.author.name}'s company logo`}
                  width={48}
                  height={48}
                />
                <blockquote className="text-center text-2xl font-bold italic max-w-60 md:max-w-full">{`"${citation.text}"`}</blockquote>
                <div className="flex items-center mt-10">
                  <div className="flex rounded-full mr-4 overflow-hidden">
                    <NextImage
                      src={`${citation?.author?.photo?.url}`}
                      alt={citation?.author?.name}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="flex flex-col justify-between text-base">
                    <p className="font-normal">{citation.author.name}</p>
                    <p className="font-bold">{citation.author.bio}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Separator />
    </div>
  );
}

export default Testimonials;
