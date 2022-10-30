import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import ChukwudubemOkechukwuImage from "../../../assets/img/ltl-team-Chukwudubem-Okechukwu.png";

function ChukwudubemOkechukwu() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Chukwudubem Okechukwu • Land Tower";
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
                Chukwudubem Okechukwu
              </p>
              <img
                src={ChukwudubemOkechukwuImage}
                alt="Chukwudubem Okechukwu Head of Metal Works & Fabrication at Land Tower Limited"
                title="Chukwudubem Okechukwu Head of Metal Works & Fabrication at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Head of Metal Works & Fabrication
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Chukwudubem Okechukwu is a Metal Works and Aluminium
                  Fabricator (Iron Doors, Massive Gates, Standtion Tanks
                  Protectors, Aluminium windows, Aluminium Doors e.t.c, He has
                  over 10 years experience, he has worked with varios iron
                  construction companies around Nigeria and delivers the highest
                  of qualities and standards on every project he handles.
                </p>
                <p className="py-3">
                  I have handled so many work such as construction of Nnamdi
                  azikiwe University beautiful gate awka anambra state, I have
                  worked for petals cosmetics *, I have worked in several
                  estate&#39;s and private sectors.
                </p>
                <p className="py-3">
                  My hobbies include always being busy at work, listen to music,
                  and reading. I am a bachelor.
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

export default ChukwudubemOkechukwu;
