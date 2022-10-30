import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import UdenkaChukwuemekaImage from "../../../assets/img/ltl-team-Udenka-Chukwuemeka.png";

function UdenkaChukwuemeka() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Udenka Chukwuemeka • Land Tower";
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
                Udenka Chukwuemeka
              </p>
              <img
                src={UdenkaChukwuemekaImage}
                alt="Udenka Chukwuemeka HVAC Technician at Land Tower Limited"
                title="Udenka Chukwuemeka HVAC Technician at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Lead HVAC Technician
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Udenka Chukwuemeka joel is an HVAC Technician (Heating,
                  ventilation, and air conditioning), with over 9years
                  experience he started working with Gods time insulation
                  company at sokoto in 2013 till 2018 as air conditioner
                  technician later join de light company as supervisor in 2018
                  till 2021 later join powerful insulation company till date as
                  a foreman later as supervisor at periwinkle towers lagos
                  udenka chukwuemeka joel has the skills in domestic and technic
                  of maintenance repair and instillation my hubbies is music and
                  cooking.
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

export default UdenkaChukwuemeka;
