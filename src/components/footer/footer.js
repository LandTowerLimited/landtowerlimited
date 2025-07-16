import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import { ReactComponent as MapIcon } from "../../assets/svg/mapIcon.svg";
import { ReactComponent as TimeIcon } from "../../assets/svg/timeIcon.svg";
import { ReactComponent as PhoneOfficeIcon } from "../../assets/svg/phoneOfficeIcon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagramIcon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebookIcon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitterIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/linkedinIcon.svg";
import LandTowerLogoImage from "../../assets/img/landTowerLogo.png";
import TheFrenzyEmpireLogo from "../../assets/img/TheFrenzyEmpire-Technology-Software-and-Technology-Development.png";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="lg:pt-40">
      <div className="relative w-full hidden md:hidden lg:block bg-black">
        <div className="w-full absolute top-0 flex justify-center">
          <div className="flex h-52 w-4/5 px-14 -mt-32 justify-between items-center bg-landTower-gold3-color">
            <div className="flex between items-center mx-2">
              <MapIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Office Address
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Block 20, Asamankese Street, Wuse Zone 2. FCT, Abuja.
                </p>
              </div>
            </div>
            <div className="flex between items-center mx-2">
              <TimeIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Working Hours
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Mondays to Friday{" "}
                  <span className="font-graphikMedium">09:00AM</span> to{" "}
                  <span className="font-graphikMedium">05:00PM</span>. Saturdays
                  until <span className="font-graphikMedium">03:00PM</span>.
                </p>
              </div>
            </div>
            <div className="flex between items-center mx-2">
              <PhoneOfficeIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Sales Contact
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Call <span className="font-graphikMedium">Munachim</span> on{" "}
                  <a href="tel:+2349163494952" className="font-graphikMedium">
                    +23409163494952
                  </a>{" "}
                  or <span className="font-graphikMedium">Stephen</span> on{" "}
                  <a href="tel:+2347015011779" className="font-graphikMedium">
                    +2347015011779
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/5 w-full bg-white" />
        <div className="h-4/5 px-20 pt-36 w-full ">
          <div>
            <div className="flex items-center justify-between w-full">
              <div className="w-450">
                <button
                  type="button"
                  onClick={() => navigate(NonAuthRoutes.landingPage)}
                >
                  <img
                    src={LandTowerLogoImage}
                    alt="Land Tower Logo"
                    title="Land Tower"
                    className="w-60 h-10"
                  />
                </button>
                <p className="font-graphikRegular text-white text-xs leading-5 mt-6 ml-3 pr-20">
                  Land Tower is a company that design, construct, sell, render
                  external & interior home finishing and furnishing services. An
                  integrated force of talents that exceeds limits, clients
                  expectations of projects under within any given timeline.
                </p>
              </div>
              <div className="flex justify-between w-350 pl-10 font-graphikMedium text-white text-sm leading-10 ">
                <ul>
                  <li className="mr-8 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => navigate(NonAuthRoutes.landingPage)}
                    >
                      Home
                    </button>
                  </li>
                  <li className="mr-8 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => navigate(NonAuthRoutes.projectsGallery)}
                    >
                      Gallery
                    </button>
                  </li>
                  <li className="mr-8 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => navigate(NonAuthRoutes.projectsGallery)}
                    >
                      Apartmemts
                    </button>
                  </li>
                </ul>
                <ul>
                  <li className="mr-8 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => navigate(NonAuthRoutes.ourTeam)}
                    >
                      Our Team
                    </button>
                  </li>
                  <li className="mr-8 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => navigate(NonAuthRoutes.aboutUs)}
                    >
                      About Us
                    </button>
                  </li>
                  <li className="mr-8 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => navigate(NonAuthRoutes.contactUs)}
                    >
                      Contact Us
                    </button>
                  </li>
                </ul>
              </div>
              <div className="w-522 text-right">
                <p className=" font-georgiaBold text-xl text-gray-300">
                  CALL CENTER
                </p>
                <a
                  href="tel:+2349163494952"
                  className="font-graphikBold text-white text-3xl "
                >
                  (+234) 916-3494-952
                </a>
                <p>
                  <a
                    href="mailto:hello@LandTowerLimited.com"
                    className="font-graphikMedium cursor-pointer text-base text-gray-300"
                  >
                    hello@LandTowerLimited.com
                  </a>
                </p>
                <div className="flex mt-10 float-right justify-between items-center">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/landtowerlimited/"
                    rel="noreferrer"
                  >
                    <InstagramIcon
                      title="Instagram"
                      className="cursor-pointer w-10"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/landtowerlimited/"
                    rel="noreferrer"
                  >
                    <FacebookIcon
                      title="Facebook"
                      className="cursor-pointer w-10"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.twitter.com/LandTowerLTD/"
                    rel="noreferrer"
                  >
                    <TwitterIcon
                      title="Twitter"
                      className="cursor-pointer w-10"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/land-tower-limited/"
                    rel="noreferrer"
                  >
                    <LinkedinIcon
                      title="LinkedIn"
                      className="cursor-pointer w-10"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex pt-4 justify-center items-center">
              <a href="https://www.TheFrenzyEmpire.com/">
                <p
                  title="The Frenzy Empire - Redefining Excellence!"
                  className="tfe-font-size text-center font-graphikMedium"
                >
                  The Frenzy Empire TECHNOLOGY
                </p>
                <img
                  src={TheFrenzyEmpireLogo}
                  alt="Software and Technology Development by The Frenzy Empire
                  TECHNOLOGY"
                  title="Software and Technology Development by The Frenzy Empire
                  TECHNOLOGY"
                  className="mt-6 h-24"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:block lg:hidden">
        <div className="flex justify-center w-full ">
          <div className="w-4/5 px-2 bg-landTower-gold3-color">
            <div className="flex between items-center mx-2 mt-10">
              <MapIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Office Address
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Block 20, Asamankese Street, Wuse Zone 2. FCT, Abuja.
                </p>
              </div>
            </div>
            <div className="flex between items-center mx-2 mt-10">
              <TimeIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Working Hours
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Monday to Friday{" "}
                  <span className="font-graphikMedium">09:00AM</span> to{" "}
                  <span className="font-graphikMedium">05:00PM</span>. Saturdays
                  until <span className="font-graphikMedium">03:00PM</span>.
                </p>
              </div>
            </div>
            <div className="flex between items-center mx-2 my-10">
              <PhoneOfficeIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Sales Contact
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Call <span>Munachim</span> on{" "}
                  <span
                    href="tel:+23409163494952"
                    className="font-graphikMedium"
                  >
                    +23409163494952
                  </span>{" "}
                  or <span>Stephen</span> on{" "}
                  <span
                    href="tel:+2347015011779"
                    className="font-graphikMedium"
                  >
                    +2347015011779
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 bg-black">
          <div className="mx-4">
            <div className="py-6">
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.landingPage)}
              >
                <img
                  src={LandTowerLogoImage}
                  alt="Land Tower Logo"
                  className=" mt-2 mb-4"
                />
              </button>
              <p className="font-graphikRegular text-white text-xs leading-5 mt-6">
                Land Tower is a company that design, construct, sell, render
                external & interior home finishing and furnishing services. An
                integrated force of talents that exceeds limits, clients
                expectations of projects under within any given timeline.
              </p>
            </div>
            <div className="flex px-4 py-6 justify-between font-graphikMedium text-white text-sm leading-10">
              <ul>
                <li className="mr-8 cursor-pointer">
                  <button
                    type="button"
                    onClick={() => navigate(NonAuthRoutes.landingPage)}
                  >
                    Home
                  </button>
                </li>
                <li className="mr-8 cursor-pointer">
                  <button
                    type="button"
                    onClick={() => navigate(NonAuthRoutes.projectsGallery)}
                  >
                    Gallery
                  </button>
                </li>
                <li className="mr-8 cursor-pointer">
                  <button
                    type="button"
                    onClick={() => navigate(NonAuthRoutes.projectsGallery)}
                  >
                    Apartmemts
                  </button>
                </li>
              </ul>
              <ul>
                <li className="mr-8 cursor-pointer">
                  <button
                    type="button"
                    onClick={() => navigate(NonAuthRoutes.ourTeam)}
                  >
                    Our Team
                  </button>
                </li>
                <li className="mr-8 cursor-pointer">
                  <button
                    type="button"
                    onClick={() => navigate(NonAuthRoutes.aboutUs)}
                  >
                    About Us
                  </button>
                </li>
                <li className="mr-8 cursor-pointer">
                  <button
                    type="button"
                    onClick={() => navigate(NonAuthRoutes.contactUs)}
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            <div className="py-6">
              <p className="font-georgiaBold text-xl text-gray-300">
                CALL CENTER
              </p>
              <a
                href="tel:+2349163494952"
                className="font-graphikBold text-white text-3xl"
              >
                (+234) 916-3494-952
              </a>
              <p>
                <a
                  href="mailto:hello@LandTowerLimited.com"
                  className="font-graphikMedium cursor-pointer text-base text-gray-300"
                >
                  hello@LandTowerLimited.com
                </a>
              </p>
              <div className="flex mt-4 w-1/2 -ml-2 justify-between items-center">
                <a
                  target="_blank"
                  href="https://www.instagram.com/landtowerlimited/"
                  rel="noreferrer"
                >
                  <InstagramIcon
                    title="Instagram"
                    className="cursor-pointer w-10"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/landtowerlimited/"
                  rel="noreferrer"
                >
                  <FacebookIcon
                    title="Facebook"
                    className="cursor-pointer w-10"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.twitter.com/LandTowerLTD/"
                  rel="noreferrer"
                >
                  <TwitterIcon
                    title="Twitter"
                    className="cursor-pointer w-10"
                  />
                </a>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/land-tower-limited/"
                  rel="noreferrer"
                >
                  <LinkedinIcon
                    title="LinkedIn"
                    className="cursor-pointer w-10"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-10">
            <a href="https://www.TheFrenzyEmpire.com/">
              <p
                title="The Frenzy Empire - Redefining Excellence!"
                className="tfe-font-size text-center font-graphikMedium"
              >
                The Frenzy Empire TECHNOLOGY
              </p>
              <img
                src={TheFrenzyEmpireLogo}
                alt="Software and Technology Development by The Frenzy Empire
                  TECHNOLOGY"
                title="Software and Technology Development by The Frenzy Empire
                  TECHNOLOGY"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
