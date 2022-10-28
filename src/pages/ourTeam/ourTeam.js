/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PagesHeader from "../../components/header/pagesHeader";
import LTLTeamImage1 from "../../assets/img/ltl-team-page-Image1.jpeg";
import LTLTeamImage2 from "../../assets/img/ltl-team-page-Image2.jpeg";
import LTLTeamImage3 from "../../assets/img/ltl-team-page-Image3.jpeg";
import LTLTeamImage4 from "../../assets/img/ltl-team-page-Image4.jpeg";
import MunachimNweke from "../../assets/img/ltl-team-Munachim-Nweke.png";
import IfeanyiClementNweke from "../../assets/img/ltl-team-Ifeanyi-Clement-Nweke.png";
import ObioraNworji from "../../assets/img/ltl-team-Obiora-Nworji.png";
import RasaqOlaniyiIsiaq from "../../assets/img/ltl-team-Rasaq-Olaniyi-Isiaq.png";
import OluwaseunAdeyemiSekoni from "../../assets/img/ltl-team-Oluwaseun-Adeyemi-Sekoni.png";
import NzeakorIfeanyichukwu from "../../assets/img/ltl-team-Nzeakor-Ifeanyichukwu.png";
import ChristopherNwankwo from "../../assets/img/ltl-team-Christopher-Nwankwo.png";
import ChukwudubemOkechukwu from "../../assets/img/ltl-team-Chukwudubem-Okechukwu.png";
import KingsleyNwaokobia from "../../assets/img/ltl-team-Kingsley-Nwaokobia.png";
import AyinlaQuadri from "../../assets/img/ltl-team-Ayinla-Quadri.jpg";
import UdenkaChukwuemeka from "../../assets/img/ltl-team-Udenka-Chukwuemeka.png";
import Footer from "../../components/footer/footer";
import PagesHeaderCard from "../../components/header/pagesHeaderCard";
import { NonAuthRoutes } from "../../constants";

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
          className="font-georgiaRegular py-2 px-10 mr-6 text-base outline-none bg-landTower-gold3-color text-white"
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

    document.title = "Our Team • Land Tower";
    window.scrollTo(0, 0);

    return function cleanup() {
      ac.abort();
    };
  }, []);

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
        <div>
          <p className="mt-14 font-georgiaBold text-7xl text-grey-400 text-center">
            Our Team
          </p>
          <div className="flex justify-center items-center">
            <div className="mb-20 mt-6 px-6 lg:w-3/5 md:lg:w-3/5 font-graphikRegular text-lg text-grey-400 text-center">
              <p className="pb-6">
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 px-6">
          <TeamDetails
            memberLink={NonAuthRoutes.munachimNweke}
            image={MunachimNweke}
            title="Munachim Nweke Chief Engineer & CEO at Land Tower Limited"
            name="Munachim Nweke"
            position="Chief Engineer & CEO"
            biography="Munachim Nweke built his organization where diligence, hard work is
          appreciated and rewarded. To contribute effectively and enhance
          organizations goals through quality service and good behavior,there
          is need for innovation of good ideas that will develop and grow the
          organization. The organisation has to set target deadlines with a
          view of enhancing the profitability of the organization in a
          competitive setting..."
          />
          <TeamDetails
            memberLink={NonAuthRoutes.ifeanyiClementNweke}
            image={IfeanyiClementNweke}
            title="Ifeanyi Clement Nweke Head Lawyer & Business Relations at Land Tower Limited"
            name="Ifeanyi Clement Nweke"
            position="Head Lawyer & Business Relations"
            biography="Ifeanyi Clement Nweke is a Lawyer, Writer, Finance and Media Consultant. He holds a Bachelor in law ( LLB) from Nnamdi Azikiwe University, a Law School Qualification Certificate from Nigerian Law School, Lagos Campus, a Post Graduate Diploma (PGD) in Journalism from International Institute of Journalism and Associate of the institute of Chartered Secretary, Nigeria (ACIS) (in view)..."
          />
          <TeamDetails
            memberLink={NonAuthRoutes.obioraNworji}
            image={ObioraNworji}
            title="Obiora Nworji Head of Design & Architecture at Land Tower Limited"
            name="Obiora Nworji"
            position="Head of Design & Architecture"
            biography="Obiora Nworji is an Architect of over 8 years of experience. He has a Master’s Degree from Covenant University's Department of Architecture and has certificates in Interior Design, Architectural Imagination and green building from institutions such as the Harvard Graduate School of Design and Ugreen building school. He started his professional career with Matrix Design & Works Ltd as a company Architect before being promoted to Head of Design..."
          />
          <TeamDetails
            memberLink={NonAuthRoutes.rasaqOlaniyiIsiaq}
            image={RasaqOlaniyiIsiaq}
            title="Rasaq Olaniyi Isiaq Lead Quantity Surveyor at Land Tower Limited"
            name="Rasaq Olaniyi Isiaq"
            position="Lead Quantity Surveyor"
            biography="Rasaq Olaniyi Isiaq is a seasoned Quantity Surveyor with over 5 years working experience. He graduated from the University of Ilorin with second class upper division in Quantity Surveying and undergo his one year mandatory NYSC service at Ministry of Works,  state secretariat Owerri, Imo state. He started his career with Avalon and Partner, Ibadan. A QS consulting firm saddled with contract administration and..."
          />
          <TeamDetails
            memberLink={NonAuthRoutes.oluwaseunAdeyemiSekoni}
            image={OluwaseunAdeyemiSekoni}
            title="Oluwaseun Adeyemi Sekoni Head of Mechanical, Electrical & Plumbing Engineer at Land Tower Limited"
            name="Oluwaseun Adeyemi Sekoni"
            position="Head of Mechanical, Electrical & Plumbing Engineering"
            biography="Oluwaseun Adeyemi Sekoni is an Engineer of over 10 years of experience. He graduated from Ladoke Akintola University of Technology Ogbomoso with Second Class division in Electrical/Electronic Engineering. Sequel to the completion of the mandatory NYSC in year 2012, Engr. Sekoni proceeded to acquire additional qualification at University of Ibadan, Ibadan, Oyo State, where he obtained a Master of Science in Electrical/Electronic Engineering..."
          />
          <TeamDetails
            memberLink={NonAuthRoutes.nzeakorIfeanyichukwu}
            image={NzeakorIfeanyichukwu}
            title="Nzeakor Ifeanyichukwu Head of Civil and Structural Engineer at Land Tower Limited"
            name="Nzeakor Ifeanyichukwu"
            position="Head of Civil and Structural Engineering"
            biography="Nzeakor Ifeanyichukwu is a Trained and Registered Engineer, actively involved in Civil/Structural Engineering Consulting and Construction firms and an Architectural firm. The experience garnered are under Civil/Structural Engineering Project Management and Monitoring, Project Design and Appraisals (for Residential, Schools, Banks, Offices and Mixed-use buildings and Roads), Piling and Foundation Analysis, Design and Construction..."
          />
          <TeamDetails
            memberLink={NonAuthRoutes.christopherNwankwo}
            image={ChristopherNwankwo}
            title="Christopher Nwankwo Head of Paints and Decorations at Land Tower Limited"
            name="Christopher Nwankwo"
            position="Head of Paints and Decorations"
            biography="Christopher Nwankwo is an expert in paint production with over 10 years of experience, he is highly specialized in both painting, screeding and pop. He went to government college Arochukwu in Abia state. He has worked in numerous production companies with various years of experience , he started his professional career with prosper paint company as a work man before being promoted to a foreman...."
          />
          <TeamDetails
            memberLink={NonAuthRoutes.chukwudubemOkechukwu}
            image={ChukwudubemOkechukwu}
            title="Chukwudubem Okechukwu Head of Metal Works & Fabrication at Land Tower Limited"
            name="Chukwudubem Okechukwu"
            position="Head of Metal Works & Fabrication"
            biography="Chukwudubem Okechukwu is a Metal Works and Aluminium Fabricator (Iron Doors, Massive Gates, Standtion Tanks Protectors, Aluminium windows, Aluminium Doors e.t.c, He has over 10 years experience, he has worked with varios iron construction companies around Nigeria and delivers the highest of qualities and standards on every project he handles..."
          />
          <TeamDetails
            memberLink={NonAuthRoutes.kingsleyNwaokobia}
            image={KingsleyNwaokobia}
            title="Kingsley Nwaokobia Electrical Expert at Land Tower Limited"
            name="Kingsley Nwaokobia"
            position="Lead Electrical Expert"
            biography="Kingsley Nwaokobia is an Electrical Expert with over 15 years of experience he is highly specialised in both domestic and industrial Electrical installation and services . He has trade test grade A B C in Electrical works. He has worked in numerous electromechanical companies with various years of experience. He started his professional career with Rhomega electrical company where he worked as a work man before being promoted to a foreman..."
          />
          <TeamDetails
            memberLink={NonAuthRoutes.ayinlaQuadri}
            image={AyinlaQuadri}
            title="Ayinla Quadri Head of Upholstery & Carpentry at Land Tower Limited"
            name="Ayinla Quadri"
            position="Head of Upholstery & Carpentry"
            biography="Ayinla Quadri Ayomide is a professional  Upholstery and Carpentry expert, interior and exterior decorator in all classes of doors, kitchen, wardrobes, naminate doors. with over 10 years of experience and highly specialised in all classes of house furnishings. I went to Iroko Community College, Oyo State. where I obtained my SSCE, I've worked with so many companies the likes,  home and you group of furniture..."
          />
          <TeamDetails
            memberLink={NonAuthRoutes.udenkaChukwuemeka}
            image={UdenkaChukwuemeka}
            title="Udenka Chukwuemeka HVAC Technician at Land Tower Limited"
            name="Udenka Chukwuemeka"
            position="Lead HVAC Technician"
            biography="Udenka Chukwuemeka joel is an HVAC Technician (Heating, ventilation, and air conditioning), with over 9years experience he started working with Gods time insulation company at sokoto in 2013 till 2018 as air conditioner technician later join de light company as supervisor in 2018 till 2021 later join powerful insulation company till date as a foreman later as supervisor at periwinkle towers lagos..."
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default OurTeam;
