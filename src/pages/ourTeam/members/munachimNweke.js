import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import MunachimNwekeImage from "../../../assets/img/ltl-team-Munachim-Nweke.png";

function MunachimNweke() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Munachim Nweke • Land Tower";
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
                Munachim Nweke
              </p>
              <img
                src={MunachimNwekeImage}
                alt="Munachim Nweke Chief Engineer & CEO at Land Tower Limited"
                title="Munachim Nweke Chief Engineer & CEO at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Chief Engineer & CEO
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Munachim Nweke built his organization where diligence, hard
                  work is appreciated and rewarded. To contribute effectively
                  and enhance organization&#39;s goals through quality service
                  and good behavior,there is need for innovation of good ideas
                  that will develop and grow the organization. The organisation
                  has to set target deadlines with a view of enhancing the
                  profitability of the organization in a competitive setting.
                  The organisation will promote professional distinction and
                  proficiency in real estate service areas
                </p>
                <p className="py-3">
                  Munachim Nweke has over a decade of experience and expertise
                  in power transmission, real estate services and project
                  management. He is a brilliant leader whose vision is to build
                  an authentic brand that will become Africa&#39;s giant symbol
                  of building construction. The company will consistently add
                  value to His clients through innovation, foresight,
                  professionalism and technology.
                </p>
                <p className="py-3">
                  He has extensive resume from his experience in engineering
                  with a decade in the practice and lofty management positions
                  in reputable multinational establishments. From the inception,
                  he began his career at Ejike Electrical Enterprise (EJEE) in
                  2012 where he got his hands filthy by chiseling walls, laying
                  pipes, conducting cable wiring and technical electrical
                  building services. He acquired immense experience during his
                  industrial training at Transmission Company Of Nigeria (TCN),
                  132kv Apo, Abuja as well as during his NYSC at TCN, where he
                  worked at 330kv power station Katampe, Abuja.
                </p>
                <p className="py-3">
                  He got his first job as a project manager with a multinational
                  firm, XEM consultants Abuja where he excelled in management
                  consultancy services. His career was given a further boost
                  when he joined the Periwinkle residence estate in lekki Lagos.
                  In Perwinkle he acquired immense experience in real estate
                  services serving as a store keeper, site engineer and project
                  manager.
                </p>
                <p className="py-3">
                  He conceived and founded Land Tower Ltd in Lagos, Lekki Phase
                  1 and currently he has concluded plans to establish another
                  branch in Wuse Zone 2, Abuja to provide services for the
                  teeming clientele in Abuja and environs.
                </p>
                <p className="py-3">
                  Munachim graduated from Chukwuemeka Odemegwu Ojukwu University
                  with B.Eng in electrical/electronic engineering. His hobbies
                  include playing chess, reading business books, bodybuilding,
                  dancing, music, Basketball, swimming and singing. He is single
                  and comes from a family of four siblings with happily loved
                  parents.
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

export default MunachimNweke;
