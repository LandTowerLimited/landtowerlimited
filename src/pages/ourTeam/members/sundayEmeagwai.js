import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import SundayEmeagwaiImage from "../../../assets/img/ltl-team-Sunday-Emeagwai.png";

function SundayEmeagwai() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Sunday Emeagwai • Land Tower";
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
                Sunday Emeagwai
              </p>
              <img
                src={SundayEmeagwaiImage}
                alt="Sunday Emeagwai Lead Mechanical Expert at Land Tower Limited"
                title="Sunday Emeagwai Lead Mechanical Expert at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Lead Mechanical Expert
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Sunday Emeagwai is a Mechanical Expert with over 20 years of
                  experience he is highly specialised in both domestic and
                  industrial plumbing installation and services, He has worked
                  in numerous electromechanical companies with various years of
                  experience. He went to government technical college Zaria in
                  kaduna. state and he has an OND in mechanical Engineering in
                  kaduna. state politechnic.
                </p>
                <p className="py-3">
                  He has trade test grade A B C in mechanical works. He started
                  his professional career with Etico Electromechanical company
                  where he worked as a work man before being promoted to a
                  foreman. He later joined NAIRDA Electromechanical company as a
                  plumbing supervisor CBN Lokoja projects in Kogi state, FF
                  Millenium Towers Lagos, Festival Mall Festac Lagos, Golden
                  Tulip Hotels / Residence Lagos, Tinapa projects Calabar.
                </p>
                <p className="py-3">
                  He supervised the finishing of the cantee tower for Almog
                  Electromechanical company Lagos. He later joined Powerflow
                  Electromechanical company as general supervisor mechanical. He
                  supervised Ime towels banana Island Lagos, Walter Vagebor
                  tower osbourne Lagos, Perewinkle Residence Estate project.
                </p>
                <p className="py-3">
                  Mr Sunday Emeagwai alias Sunny Odogwu has key skills in
                  domestic and industrial plumbing installation and maintanance
                  which ensure a high standard of work being delivered on every
                  project handled.His hobbies include watching football and
                  listening to music.He is happily married with kids.
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

export default SundayEmeagwai;
