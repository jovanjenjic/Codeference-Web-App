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
                Mi smo studentska organizacija koja okuplja studente sa
                interesovanjem za informacione tehnologije i elektrotehniku na
                našem fakultetu i na drugim univerzitetima u državi i regionu.
                Kroz organizaciju različitih događaja i aktivnosti, te saradnju
                sa relevantnim organizacijama i uz podršku Fakulteta i
                Ministarstva, težimo da pružimo podršku studentima u njihovom
                razvoju i napredovanju u IT sektoru.
              </p>
              <p className="mt-4">
                Naša organizacija je poznata po tri važna događaja koja
                organizujemo tokom godine. Codeference je događaj koji se
                održava u oktobru ili novembru, a okuplja stručnjake iz
                industrije i studente koji su zainteresovani da steknu nova
                znanja iz oblasti informacionih tehnologija. Codefair je događaj
                koji organizujemo u maju, a pruža studentima mogućnost da se
                upoznaju sa kompanijama iz IT sektora, saznaju više o
                mogućnostima za praksu i zaposlenje, te da se povežu sa
                relevantnim ljudima u industriji. Takođe, nekoliko puta godišnje
                organizujemo Codeday - jednodnevni događaj koji pruža priliku
                studentima da se okupe, steknu nova znanja i veštine, te se
                druže i zabave sa kolegama iz IT zajednice.
              </p>
            </div>
          </div>
        </div>
        <div className="container m-auto px-6 md:px-12 xl:px-6 mt-10 mb-10 bg-white">
          <div className="justify-end space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl font-bold md:text-4xl">Cilj</h2>
              <p className="mt-6">
                Cilj naše organizacije je da pružimo podršku studentima koji se
                bave informacionim tehnologijama i elektrotehnikom, da
                unapredimo kvalitet IT obrazovanja i da doprinesemo razvoju IT
                zajednice. Kroz organizaciju događaja kao što su Codeference,
                Codefair i Codeday, težimo da povežemo studente sa stručnjacima
                iz industrije, omogućimo im da razvijaju svoje veštine i da se
                upoznaju sa najnovijim trendovima i inovacijama u IT sektoru.
              </p>
              <p className="mt-4">
                Pored toga, kao zvanični predstavnici studenata ispred
                studentskog parlamenta, naša organizacija ima mogućnost da utiče
                na dešavanja koja se odnose na IT obrazovanje i da zastupa
                interese studenata koji se bave informacionim tehnologijama i
                elektrotehnikom. Naš cilj je da studentima pružimo priliku za
                razvoj i napredovanje u karijeri u IT sektoru, kao i priliku da
                se povežu sa relevantnim akterima u industriji. Naša
                organizacija je otvorena za sve studente koji žele da se uključe
                i doprinesu razvoju IT zajednice.
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
                Misija naše organizacije je da pružimo podršku studentima koji
                se bave informacionim tehnologijama i elektrotehnikom, te da
                stvorimo zajednicu u kojoj se studenti mogu povezati sa
                stručnjacima iz industrije, steknu nova znanja i veštine, te
                razviju svoje karijere u IT sektoru. Kroz organizaciju događaja
                i aktivnosti, te saradnju sa relevantnim organizacijama i uz
                podršku Fakulteta i Ministarstva, težimo da podignemo nivo
                kvaliteta IT obrazovanja na našem fakultetu, te da unapredimo
                poziciju studenata koji se bave informacionim tehnologijama.
              </p>
              <p className="mt-4">
                Naša misija se takođe sastoji od toga da budemo glas studenata
                koji se bave informacionim tehnologijama i elektrotehnikom, te
                da zagovaramo interese i potrebe ove grupe studenata pred
                fakultetom. Misija Codeference se ne ogleda samo u ova 3 ili
                manje dana, ona se bazira na stvaranju kulture razmene znanja
                između studenata i predavača, istim onim koji su bili kao i ti
                student.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
