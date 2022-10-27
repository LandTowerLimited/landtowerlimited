import React, { useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import LTLTeamImage1 from "../../../assets/img/ltl-team-page-Image1.jpeg";
import LTLTeamImage2 from "../../../assets/img/ltl-team-page-Image2.jpeg";
import LTLTeamImage3 from "../../../assets/img/ltl-team-page-Image3.jpeg";
import LTLTeamImage4 from "../../../assets/img/ltl-team-page-Image4.jpeg";
import Footer from "../../../components/footer/footer";
import PagesHeaderCard from "../../../components/header/pagesHeaderCard";

function MunachimNweke() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  return (
    <div>
      {cardDisplayed ? (
        <PagesHeaderCard
          setCardDisplayed={setCardDisplayed}
          cardDisplayed={cardDisplayed}
        />
      ) : (
        <span />
      )}
      <div className="w-full">
        <PagesHeader
          setCardDisplayed={setCardDisplayed}
          cardDisplayed={cardDisplayed}
        />
        <div className="lg:flex md:flex pt-6 px-6">
          <div className="lg:w-1/4 md:w-1/4 lg:mr-3 md:mr-3 ">
            <img
              src={LTLTeamImage4}
              alt="Land Tower Team Project 1"
              title="Land Tower Team Project 1"
            />
          </div>
          <div className="lg:w-1/4 md:w-1/4 lg:mx-3 md:mx-3">
            <img
              src={LTLTeamImage1}
              alt="Land Tower Team Project 2"
              title="Land Tower Team Project 2"
            />
          </div>
          <div className="lg:w-1/4 md:w-1/4 lg:mx-3 md:mx-3">
            <img
              src={LTLTeamImage2}
              alt="Land Tower Team Project 2"
              title="Land Tower Team Project 2"
            />
          </div>
          <div className="lg:w-1/4 md:w-1/4 lg:ml-3 md:ml-3">
            <img
              src={LTLTeamImage3}
              alt="Land Tower Team Project 4"
              title="Land Tower Team Project 4"
            />
          </div>
        </div>
        <div>
          <p className="mt-14 font-georgiaBold text-7xl text-grey-400 text-center">
            Our Team
          </p>
          <p className="px-2 mb-20 mt-6 font-graphikRegular text-lg text-grey-400 text-center">
            Land Tower LTD is an excellence driven Real Estate development
            company driven by professionals with the sole aim of building
            grandeur and ultra-modern homes for professionals, business and
            upwardly mobile individuals, providing them a seamless living
            experience.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MunachimNweke;
