/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import TitleComponent from "./TitleComponent";
import Image02 from "../public/slika_1.jpg";
import Image04 from "../public/slika_3.jpg";
import Image05 from "../public/slika_4.jpg";
import Image01 from "../public/slika_5.jpg";
import Image12 from "../public/slika_6.jpg";
import Image09 from "../public/slika_9.jpg";
import Image08 from "../public/slika_10.jpg";
import Image11 from "../public/slika_11.jpg";
import Image13 from "../public/slika_12.jpg";
import Image14 from "../public/slika_14.jpg";
import Image03 from "../public/slika_15.jpg";
import Image06 from "../public/slika_16.jpg";
import Image10 from "../public/slika_17.jpg";
import Image07 from "../public/slika_18.jpg";
import Carousel from "./Carousel";

const titleData = {
  titleText: "Da li te interesuje kako je to ranije izgledalo?",
  subtitleText:
    "Prethodnih godina smo organizovali mnoge dogadjaje na Zlatiboru i na Fakultetu. Ovde je rezime!",
  colorText: "[Konferencija, Sajam, Otvoreni dan]",
  backgroundText: "GALERIJA",
};

const images = [
  Image01,
  Image02,
  Image03,
  Image04,
  Image05,
  Image06,
  Image07,
  Image08,
  Image09,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
];

function Gallery({ whiteBackground }) {
  return (
    <section className={`pt-8 ${whiteBackground && "bg-white"}`}>
      <TitleComponent
        {...titleData}
        backgroundColor={whiteBackground ? "text-blue-50" : "text-white"}
      />
      <div className="mx-auto w-full sm:w-2/3 m-auto hidden sm:grid">
        <div className="container mx-auto px-4 pb-20">
          <div className="gallery">
            {images.map((img, index) => (
              <figure
                key={img?.src}
                className={`gallery__item gallery__item--${index + 1}`}
              >
                <img src={img?.src} alt={img?.src} className="gallery__img" />
              </figure>
            ))}
          </div>
        </div>
      </div>
      <div className="flex sm:hidden px-4 pb-10">
        <Carousel images={images} />
      </div>
    </section>
  );
}

export default Gallery;

Gallery.propTypes = {
  whiteBackground: PropTypes.bool.isRequired,
};
