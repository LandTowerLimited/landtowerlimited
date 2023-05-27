import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import AyinlaQuadriImage from "../../../assets/img/ltl-team-Ayinla-Quadri.jpg";

function AyinlaQuadri() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Ayinla Quadri • Land Tower";
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
                Ayinla Quadri
              </p>
              <img
                src={AyinlaQuadriImage}
                alt="Ayinla Quadri Head of Upholstery & Carpentry at Land Tower Limited"
                title="Ayinla Quadri Head of Upholstery & Carpentry at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Head of Upholstery & Carpentry
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Ayinla Quadri Ayomide is a professional Upholstery and
                  Carpentry expert, interior and exterior decorator in all
                  classes of doors, kitchen, wardrobes, naminate doors. with
                  over 10 years of experience and highly specialised in all
                  classes of house furnishings.
                </p>
                <p className="py-3">
                  I went to Iroko Community College, Oyo State. where I obtained
                  my SSCE, I&#39;ve worked with so many companies the likes,
                  home and you group of furniture company, world light furniture
                  company. Delta state. I started my professional career with
                  world light furniture company.
                </p>
                <p className="py-3">
                  I&#39;m married and blessed with two kids.
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

export default AyinlaQuadri;
