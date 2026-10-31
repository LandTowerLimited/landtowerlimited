import React, { useEffect, useState } from "react";
import PagesHeader from "../../components/header/pagesHeader";
import LTLAboutImage1 from "../../assets/img/ltl-about-us-page-Image1.jpg";
import LTLAboutImage2 from "../../assets/img/ltl-about-us-page-Image2.jpg";
import LTLAboutImage3 from "../../assets/img/ltl-about-us-page-Image3.jpg";
import LTLAboutImage4 from "../../assets/img/ltl-about-us-page-Image4.jpg";
import { ReactComponent as HonestyIcon } from "../../assets/svg/honesty-icon.svg";
import { ReactComponent as TransparencyIcon } from "../../assets/svg/transparency-icon.svg";
import { ReactComponent as StrengthIcon } from "../../assets/svg/strength-icon.svg";
import Footer from "../../components/footer/footer";

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
              alt="About Land Tower Limited 4"
              title="About Land Tower Limited 4"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="px-6 lg:w-3/5 md:lg:w-3/5 ">
            <p className="mt-14 font-georgiaBold text-7xl text-grey-400 text-center">
              About Us
            </p>
            <div className="px-2 mb-20 mt-6 font-graphikRegular text-lg text-grey-400 text-center">
              <p className="pb-6 font-graphikMedium">
                &#34;We have no smaller or greater mastery than mastery of
                Self.&#34; — Leonardo Da Vinci
              </p>
              <p className="pb-6">
                Land Tower Limited, under registration RC 1930480, operates as a
                premier sovereign project finance and specialized infrastructure
                engineering holding company. We do not construct ordinary retail
                property. We couple elite physical land masses with our
                proprietary PropTech Operating System to automate, geofence, and
                monetize premium structural networks across the continent.
              </p>
              <p className="pb-6">
                Our corporate reputation is built upon absolute transparent
                honesty, deep structural trust, and unyielding consistency in
                the deployment of risk-insulated capital assets. Our paramount
                objective is the systematic protection, acceleration, and
                monetization of our partners&#39; corporate treasury reserves.
              </p>
              <p className="pb-6 font-graphikMedium">
                &#34;Everyone knows the way but few actually walk it.&#34;
              </p>
              <p className="pb-6">
                Our specialized infrastructure matrix and technical service
                offerings cater exclusively to the upper echelon of
                institutional allocators, private family offices, and sovereign
                wealth networks. The absolute velocity of our execution is
                powered directly by our core data engines, programmatic
                milestone tranches, and subterranean macro-utility
                configurations.
              </p>
              <p className="pb-6">
                The company has established an unassailable reputation based on
                industrial experience, absolute professionalism, and
                zero-failure project delivery statecraft. At Land Tower Limited,
                we do not follow traditional market limitations; we design the
                structural frameworks within which the market operates.
                Everything we execute revolves around hardcoding mutual trust
                with our co-development partners. We isolate operational risk,
                eliminate visual old-world chaos, and enforce strict boundary
                controls to guarantee exponential capital acceleration.
              </p>
              <p className="pt-6 pb-3 font-georgiaBold text-3xl text-landTower-gold3-color">
                Our Vision
              </p>
              <p className="pb-6">
                To operate as the supreme African giant symbol of infrastructure
                project finance and technology-coupled construction engineering
                on the globe, consistently adding un-diluted value to
                institutional treasuries through foresight, absolute
                professionalism, and proprietary digital software grids.
              </p>
              <p className="pt-6 pb-3 font-georgiaBold text-3xl text-landTower-gold3-color">
                Our Mission
              </p>
              <p className="pb-6">
                To deliver top-quality, hyper-insulated building structures by
                combining efficient contemporary architectural layout protocols,
                successful sequential building project methodologies, advanced
                value engineering, standard mechanical, electrical, and plumbing
                macro-utilities, and exquisite internal finishes, all managed by
                an elite engineering directorate.
              </p>
              <p className="pt-6 font-georgiaBold text-3xl text-landTower-gold3-color">
                Our Core Covenants
              </p>
              <div className="hidden md:block lg:block ">
                <div className="flex justify-evenly items-start mt-6 gap-6">
                  <div>
                    <div className="flex justify-center items-center">
                      <HonestyIcon />
                    </div>
                    <p className="pt-4 font-graphikBold">Honesty</p>
                    <p className="pt-2 text-base max-w-xs mx-auto">
                      Enforcing a transparent ledger structure where numbers are
                      verified beyond defiance.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center items-center">
                      <TransparencyIcon />
                    </div>
                    <p className="pt-6 font-graphikBold">Transparency</p>
                    <p className="pt-2 text-base max-w-xs mx-auto">
                      Maintaining a secure Virtual Data Room environment for
                      direct statutory audit.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center items-center">
                      <StrengthIcon />
                    </div>
                    <p className="pt-2 font-graphikBold">Strength</p>
                    <p className="pt-2 text-base max-w-xs mx-auto">
                      Displaying absolute structural integrity and unblinking
                      corporate authority.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:hidden lg:hidden">
                <div>
                  <div>
                    <div className="mt-6 flex justify-center items-center">
                      <HonestyIcon />
                    </div>
                    <p className="pt-4 font-graphikBold">Honesty</p>
                    <p className="pt-2 text-base max-w-xs mx-auto">
                      Enforcing a transparent ledger structure where numbers are
                      verified beyond defiance.
                    </p>
                  </div>
                  <div>
                    <div className="mt-6 flex justify-center items-center">
                      <TransparencyIcon />
                    </div>
                    <p className="pt-2 font-graphikBold">Transparency</p>
                    <p className="pt-2 text-base max-w-xs mx-auto">
                      Maintaining a secure Virtual Data Room environment for
                      direct statutory audit.
                    </p>
                  </div>
                  <div>
                    <div className="mt-6 flex justify-center items-center">
                      <StrengthIcon />
                    </div>
                    <p className="pt-2 font-graphikBold">Strength</p>
                    <p className="pt-2 text-base max-w-xs mx-auto">
                      Displaying absolute structural integrity and unblinking
                      corporate authority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
