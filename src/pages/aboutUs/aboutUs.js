import React, { useEffect, useState } from "react";
import PagesHeader from "../../components/header/pagesHeader";
import LTLAboutImage1 from "../../assets/img/ltl-about-us-page-Image1.jpg";
import LTLAboutImage2 from "../../assets/img/ltl-about-us-page-Image2.jpg";
import LTLAboutImage3 from "../../assets/img/ltl-about-us-page-Image3.jpg";
import LTLAboutImage4 from "../../assets/img/ltl-about-us-page-Image4.jpg";
import Footer from "../../components/footer/footer";
import PagesHeaderCard from "../../components/header/pagesHeaderCard";

function AboutUs() {
  const [cardDisplayed, setCardDisplayed] = useState(false);
  useEffect(() => {
    const ac = new AbortController();

    document.title = "About Us • Land Tower";
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
        // </div>
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
              src={LTLAboutImage1}
              alt="About Land Tower Limited 1"
              title="About Land Tower Limited 1"
            />
          </div>
          <div className="lg:w-1/4 md:w-1/4 lg:mx-3 md:mx-3">
            <img
              src={LTLAboutImage2}
              alt="About Land Tower Limited 2"
              title="About Land Tower Limited 2"
            />
          </div>
          <div className="lg:w-1/4 md:w-1/4 lg:mx-3 md:mx-3">
            <img
              src={LTLAboutImage3}
              alt="About Land Tower Limited 3"
              title="About Land Tower Limited 3"
            />
          </div>
          <div className="lg:w-1/4 md:w-1/4 lg:ml-3 md:ml-3">
            <img
              src={LTLAboutImage4}
              alt="About Land Tower Limited 5"
              title="About Land Tower Limited 5"
            />
          </div>
        </div>
        <div className="px-6 lg:w-3/5 md:lg:w-3/5 ">
          <p className="mt-14 font-georgiaBold text-7xl text-grey-400 text-center">
            About Us
          </p>
          <div className="px-2 mb-20 mt-6 font-graphikRegular text-lg text-grey-400 text-center">
            <p className="pb-6 font-graphikMedium">
              We have no smaller or greater mastery than mastery of Self.
              &#34;Leonardo Da Vinci&#34;...
            </p>
            <p className="pb-6">
              The Brand that exceeds Limits, Land Tower LTD (RC: 1930480) is a
              reliable contracting engineering company that is known for
              building &#34;State of the art&#34; residential buildings as well
              as private and public sectors projects from inception. Our success
              and reputation today are built up on honesty, deep trust and
              consistency in the delivery of quality projects. Our paramount
              objective is our utmost client satisfaction.
            </p>
            <p className="pb-6">
              &#34;Everyone knows the way but few actually walk it&#34;.
            </p>
            <p className="pb-6">
              Our operational and service offering caters for a wide spectrum of
              construction needs, exquisite finishing and furnishing in both
              private and public sectors. Our success can be attributed to our
              competent team of qualified professionals coupled with our state
              of the art equipment and technologies.
            </p>
            <p className="pb-6">
              The company has built a solid reputation based on experience,
              professionalism and excellence. At Land Tower, we are adaptable
              and creative in meeting our clients needs. We are committed to
              transparency; accountability built on trust. Everything we do
              revolves around establishing mutual trust with our partners. We
              walk in their shoes everyday, on their streets, to ensure they
              always feel the way they deserve. We are poised to ensure the
              growth of our brand and core values. Again Land tower represents
              the highest level of transparency, honesty, integrity and
              excellence.
            </p>
            <p className="pb-6">
              Our Vision is to be the African giant symbol of building
              construction company in the globe by consistently adding value to
              our clients through innovation, foresight, professionalism and
              technology.
            </p>
            <p className="pb-6">
              Our Mission is to deliver top-quality building structures by
              combining efficient contemporary architectural design, streak
              successful sequential building project methodologies, innovation,
              value engineering, standard MEP works, exquisite building
              finishing and furnishing; with an experience professional
              competent team and state of the art equipments.
            </p>
            <p>Our Values are Honesty, Transparency, and Strength</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
