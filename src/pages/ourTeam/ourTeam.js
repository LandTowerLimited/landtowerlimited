/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PagesHeader from "../../components/header/pagesHeader";
import LTLTeamImage1 from "../../assets/img/ltl-team-page-Image1.jpeg";
import LTLTeamImage2 from "../../assets/img/ltl-team-page-Image2.jpeg";
import LTLTeamImage3 from "../../assets/img/ltl-team-page-Image3.jpeg";
import LTLTeamImage4 from "../../assets/img/ltl-team-page-Image4.jpeg";
import MunachimNweke from "../../assets/img/ltl-team-Munachim-Nweke-founder.jpg";
import Footer from "../../components/footer/footer";
import { NonAuthRoutes } from "../../url";

/** Reusable components for Team Details */
function TeamDetails({
  image,
  title = "",
  name = "",
  position = "",
  biography = "",
  memberLink = "",
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(memberLink)}
      className="cursor-pointer"
      title={title}
    >
      <img src={image} alt={title} title={title} className="mb-6" />
      <p className="my-4 font-graphikLight text-3xl text-grey-400 text-center">
        {name}
      </p>
      <p className="mt-4 font-georgiaBold text-lg text-grey-400 text-center">
        {position}
      </p>
      <p className="font-georgiaBold text-lg text-landTower-gold3-color text-center">
        Land Tower Limited
      </p>
      <p className="mb-4 mt-4 font-graphikRegular text-sm text-grey-400 text-center">
        {biography}
      </p>
      <div className="flex justify-center items-center">
        <button
          onClick={() => navigate(memberLink)}
          type="button"
          className="font-georgiaRegular py-2 px-10 text-base outline-none bg-landTower-gold3-color text-white"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

function OurTeam() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "The Directorate • Land Tower";
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
              alt="Land Tower Team Project 3"
              title="Land Tower Team Project 3"
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
        <div className="flex justify-center items-center w-full ">
          <div className="px-6 lg:w-3/5 md:lg:w-3/5 ">
            <p className="mt-14 font-georgiaBold text-5xl md:text-7xl lg:text-7xl text-grey-400 text-center">
              The Directorate
            </p>
            <div className="mb-20 mt-6 font-graphikRegular text-lg text-grey-400 text-center">
              <p className="pb-6 font-graphikMedium">
                Land Tower LTD is an excellence driven Real Estate development
                company driven by professionals with the sole aim of building
                grandeur and ultra-modern homes for professionals, business and
                upwardly mobile individuals, providing them a seamless living
                experience.
              </p>
              <p className="pb-6">
                We are of the belief that mastery demands all of a person, we
                grow through creativity, invention and innovation.
              </p>
              <p>
                We love and cherish our entire team and employees, we also make
                sure they adhere to (Health & Safety Regulations) HSE.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center px-6 my-6 mb-16">
          <div className="w-full max-w-md">
            <TeamDetails
              memberLink={NonAuthRoutes.munachimNweke}
              image={MunachimNweke}
              title="Munachim Nweke, Principal Allocator / CEO at Land Tower Limited"
              name="Munachim Nweke"
              position="Principal Allocator / CEO"
              biography="Munachim Nweke does not merely build real estate; he dictates the architectural, physical, and infrastructural destiny of the landscape. As the Founder, Executive Chairman, and Sovereign Commander of Land Tower Limited, he has engineered an international, multi-billion-Naira empire that operates with absolute geometric precision and unyielding momentum..."
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default OurTeam;
