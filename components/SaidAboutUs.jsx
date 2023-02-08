import React from "react";
import kiljaImg from "../public/kilje.jpg";
import starovicImg from "../public/starovic.jpg";
import poparaImg from "../public/popara.png";
import commentImg from "../public/comments.png";

function SaidAboutUs() {
  return (
    <div className="antialiased w-full h-full text-gray-400 font-inter lg:p-10 mb-20">
      <div className="container lg:px-4 mx-auto">
        <div>
          <div id="title" className="text-center my-10">
            <h1 className="font-bold text-4xl text-white">Rekli su o nama</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-evenly gap-10 pt-10">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="relative flex flex-col justify-around col-span-6 border border-gray-100 rounded shadow-lg cursor-pointer bg-blue-50 md:col-span-3 lg:col-span-2 h-full">
                  <div className="flex justify-center px-2 mx-3 text-sm font-medium text-gray-400">
                    <img
                      alt="First"
                      className="rounded-full shadow-2xl object-cover"
                      src={poparaImg?.src}
                    />
                  </div>
                  <div className="mb-5 border-t border-gray-50">
                    <div className="w-full h-full bottom-0 flex flex-col items-center justify-center text-center">
                      <p className="text-2xl font-bold px-14 text-gray-900 ">
                        Mladen Popara
                      </p>
                      <p className="text-base px-14 text-gray-700 mt-3">
                        Founder of CoNStruction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card__side card__side--back">
                <card>
                  <img
                    alt="Second"
                    src="https://media.istockphoto.com/vectors/abstract-white-background-vector-id1142563796?k=20&m=1142563796&s=612x612&w=0&h=kZABOtzW6eQOMZvDuLHiNsh-mM_2o9slZKq6-GN6W64="
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-cyan-700/40 to-blue-500/10 flex flex-col items-center justify-center text-center">
                    <img alt="small" src={commentImg.src} />
                    <p className="text-base lg:text-lg lg:px-14 px-4 text-gray-900 mt-10">
                      Kao jedan od osnivača konferencije CoNStruction smatram da
                      je našem fakultetu uvek dobrodošao jedan ovakav događaj
                      kako bi studenti mogli da steknu i neformalno obrazovanje
                      isto kao i formalno. U tom pogledu, ne sumnjam u ovaj tim
                      talentovane i uspešne omladine.
                    </p>
                    <img
                      alt="Detail"
                      width="58"
                      src={poparaImg?.src}
                      className="rounded-full border-2 mt-8"
                    />
                    <p className="text-base font-bold px-14 text-gray-900 mt-3">
                      Founder of CoNStruction
                    </p>
                    <p className="text-sm px-14 text-gray-900 ">
                      Mladen Popara
                    </p>
                  </div>
                </card>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="flex flex-col justify-around col-span-6 border border-gray-100 rounded shadow-lg cursor-pointer bg-blue-50 md:col-span-3 lg:col-span-2 h-full">
                  <div className="flex justify-center px-2 mx-3 text-sm font-medium text-gray-400">
                    <img
                      alt="A. Okiljevic"
                      className="rounded-full shadow-2xl object-cover"
                      src={kiljaImg?.src}
                    />
                  </div>
                  <div className="mb-5 border-t border-gray-50">
                    <div className="w-full h-full bottom-0 flex flex-col items-center justify-center text-center">
                      <p className="text-2xl font-bold px-14 text-gray-900 ">
                        Aleksandar Okiljević
                      </p>
                      <p className="text-base px-14 text-gray-700 mt-3">
                        CTO Positive Tech It
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card__side card__side--back">
                <card>
                  <img
                    alt="Aleksandr O."
                    src="https://media.istockphoto.com/vectors/abstract-white-background-vector-id1142563796?k=20&m=1142563796&s=612x612&w=0&h=kZABOtzW6eQOMZvDuLHiNsh-mM_2o9slZKq6-GN6W64="
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-cyan-700/40 to-blue-500/10 flex flex-col items-center justify-center text-center">
                    <img alt="Detail" src={commentImg.src} />
                    <p className="text-base lg:text-lg lg:px-14 px-4 text-gray-900 mt-10">
                      Veoma kompetentna i kompletna podrška od planiranja do
                      realizacije. Postupanje sa nama kao i ispunjavanje naših
                      visokih zahteva i očekivanja iznenadilo nas je veoma
                      pozitivno i odražava se u konačnom rezultatu saradnje.
                    </p>
                    <img
                      alt="Small"
                      width="58"
                      src={kiljaImg?.src}
                      className="rounded-full border-2 mt-8"
                    />
                    <p className="text-base font-bold px-14 text-gray-900 mt-3">
                      CTO Positive Tech It
                    </p>
                    <p className="text-sm px-14 text-gray-900 ">
                      Aleksandar Okiljević
                    </p>
                  </div>
                </card>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="flex flex-col justify-around col-span-6 border border-gray-100 rounded shadow-lg cursor-pointer bg-blue-50 md:col-span-3 lg:col-span-2 h-full">
                  <div className="flex justify-center px-2 mx-3 text-sm font-medium text-gray-400">
                    <img
                      alt="Mandic N."
                      className="rounded-full shadow-2xl object-cover"
                      src={starovicImg?.src}
                    />
                  </div>
                  <div className="mb-5 border-t border-gray-50">
                    <div className="w-full h-full bottom-0 flex flex-col items-center justify-center text-center">
                      <p className="text-2xl font-bold px-14 text-gray-900 ">
                        Marko Starović
                      </p>
                      <p className="text-base px-14 text-gray-700 mt-3">
                        Student Vice-Dean
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card__side card__side--back">
                <card>
                  <img
                    alt="Nikola M."
                    src="https://media.istockphoto.com/vectors/abstract-white-background-vector-id1142563796?k=20&m=1142563796&s=612x612&w=0&h=kZABOtzW6eQOMZvDuLHiNsh-mM_2o9slZKq6-GN6W64="
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-cyan-700/40 to-blue-500/10 flex flex-col items-center justify-center text-center">
                    <img alt="Detail" src={commentImg.src} />
                    <p className="text-base lg:text-lg lg:px-14 px-4 text-gray-900 mt-10">
                      Profesionalni, tačni, originalni, precizni i odgovorni.
                      Imam jako lepu saradnju i iskustvo. Nadam se da će naša
                      saradnja odraziti na kvalitet predavanja i celokupno
                      iskustvo i utisak studenata. Radujem se sledećem susretu.
                    </p>
                    <img
                      alt="Small"
                      width="58"
                      src={starovicImg?.src}
                      className="rounded-full border-2 mt-8"
                    />
                    <p className="text-base font-bold px-14 text-gray-900 mt-3">
                      Student Vice-Dean
                    </p>
                    <p className="text-sm px-14 text-gray-900 ">
                      Marko Starović
                    </p>
                  </div>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaidAboutUs;
