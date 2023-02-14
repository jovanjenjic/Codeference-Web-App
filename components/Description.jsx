import React from "react";
import { motion } from "framer-motion";

function Description() {
  return (
    <section className="w-full bg-white">
      <div className="py-16 rounded-lg text-gray-600 sm:w-2/3 mx-auto">
        <div className="container m-auto px-6 md:px-12 xl:px-6 bg-white">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <motion.img
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                src="https://www.pngmart.com/files/About-Us-PNG-Free-Download.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl font-bold md:text-4xl">O nama</h2>
              <p className="mt-6">
                Codeference predstavlja ideju studenata, okupljenih sa jednim
                zadatkom da olakšaju tebi kao pojedincu i otkriju pravce i nova
                znanja koje možda ni ne poznaješ vezane za tvoju buduću
                karijeru.
              </p>
              <p className="mt-4">
                Codeference tim ima za zadatak da ti omogući kontakt sa ljudima
                koji će ti definitivno uticati na dalju budućnost!
              </p>
            </div>
          </div>
        </div>
        <div className="container m-auto px-6 md:px-12 xl:px-6 mt-10 mb-10 bg-white">
          <div className="justify-end space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl font-bold md:text-4xl">Cilj</h2>
              <p className="mt-6">
                Naš cilj je da okupimo što veći broj studenata iz oblasti
                elektrotehnike i računarstva i omogućimo komunikaciju između
                studenata i kompanija, da im se omogući neformalno obrazovanje i
                svi mogući izazovi prilikom prvog zaposlenja.
              </p>
              <p className="mt-4">
                Pored ovih ozbiljnih stvari nam je i cilj da se dobro provedeš i
                upoznaš nove prijatelje i buduće kolege za ceo život.
              </p>
            </div>
            <div className="md:5/12 lg:w-5/12">
              <motion.img
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                src="https://qq.co.id/wp-content/uploads/2019/04/kisspng-clip-art-recruitment-vector-graphics-illustration-philips-metal-industries-careers-5c648684496bc9.4283209715500919083007-982x780.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
        <div className="container m-auto px-6 md:px-12 xl:px-6 bg-white">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <motion.img
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                src="https://user-images.githubusercontent.com/762297/59157609-ca692180-8ad7-11e9-88ab-552f8e88a202.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl font-bold md:text-4xl">Misija</h2>
              <p className="mt-6">
                Misija Codeference se ne ogleda samo u ova 3 dana, ona se bazira
                na stvaranju kulture razmene znanja između studenata i
                predavača, istim onim koji su bili kao i ti student.
              </p>
              <p className="mt-4">
                Znanje se možda ne može steći kroz 3 dana, ali težiće se ka tome
                da kroz stalne radionice i korisne informacije i predavanja u
                toku godine Codeference postane jedan od tvojih omiljenih izvora
                informacija.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
