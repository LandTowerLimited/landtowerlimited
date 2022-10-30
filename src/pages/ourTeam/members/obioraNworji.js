import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import ObioraNworjiImage from "../../../assets/img/ltl-team-Obiora-Nworji.png";

function ObioraNworji() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Obiora Nworji • Land Tower";
    window.scrollTo(0, 0);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  return (
    <div>
      <div className="w-full">
        <PagesHeader
          setCardDisplayed={setCardDisplayed}
          cardDisplayed={cardDisplayed}
        />
        <div>
          <div className="flex justify-center items-center w-full">
            <div className="px-6 lg:w-3/5 md:lg:w-3/5 ">
              <p className="mb-14 mt-6 font-georgiaBold text-5xl md:text-7xl lg:text-7xl text-grey-400 text-center">
                Obiora Nworji
              </p>
              <img
                src={ObioraNworjiImage}
                alt="Obiora Nworji Head of Design & Architecture at Land Tower Limited"
                title="Obiora Nworji Head of Design & Architecture at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Head of Design & Architecture
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Obiora Nworji is an Architect of over 8 years of experience.
                  He has a Master’s Degree from Covenant University&#39;s
                  Department of Architecture and has certificates in Interior
                  Design, Architectural Imagination and green building from
                  institutions such as the Harvard Graduate School of Design and
                  Ugreen building school.
                </p>
                <p className="py-3">
                  He started his professional career with Matrix Design & Works
                  Ltd as a company Architect before being promoted to Head of
                  Design. He later joined Periwinkle Residence Ltd as an
                  Architect and is currently the Lead Architect overseeing all
                  design related objectives of Periwinkle Residences Ltd.
                </p>
                <p className="py-3">
                  Arc. Obiora has key skills in design detailing,
                  problem-solving and project management which ensure a high
                  standard of work being delivered on every project he handles.
                </p>
                <p className="py-3">
                  His hobbies include researching, listening to audio books and
                  tinkering with Architectural designs. He is happily married.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ObioraNworji;
