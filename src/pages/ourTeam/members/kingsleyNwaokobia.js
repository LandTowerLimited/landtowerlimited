import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import KingsleyNwaokobiaImage from "../../../assets/img/ltl-team-Kingsley-Nwaokobia.png";

function KingsleyNwaokobia() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Kingsley Nwaokobia • Land Tower";
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
                Kingsley Nwaokobia
              </p>
              <img
                src={KingsleyNwaokobiaImage}
                alt="Kingsley Nwaokobia Electrical Expert at Land Tower Limited"
                title="Kingsley Nwaokobia Electrical Expert at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Lead Electrical Expert
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Kingsley Nwaokobia is an Electrical Expert with over 15 years
                  of experience he is highly specialised in both domestic and
                  industrial Electrical installation and services . He has trade
                  test grade A B C in Electrical works. He has worked in
                  numerous electromechanical companies with various years of
                  experience. He started his professional career with Rhomega
                  electrical company where he worked as a work man before being
                  promoted to a foreman.
                </p>
                <p className="py-3">
                  He later joined Powerflow Installation company as an
                  Electrical supervisor. Access Bank Delta state, Guardian
                  newspaper Abuja, Periwinkle Towers Lagos are project
                  supervised durning this period.
                </p>
                <p className="py-3">
                  He later joined jerad project where he is presently the
                  supervisor and site engineer handling project in lagos state
                  multi agency Alausa Lagos , Landwey lagos, J44 project Banana
                  Island . He supervised Ime towels banana Island Lagos, Walter
                  Vagebor tower osbourne Lagos.
                </p>
                <p className="py-3">
                  Mr Kingsley Nwaokobia alias Nasiru has key skills in domestic
                  and industrial electrical installation and maintanance which
                  ensure a high standard of work being delivered on every
                  project handled. His hobbies include watching football and
                  listening to music. He is Barchelor.
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

export default KingsleyNwaokobia;
