import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LandTowerLogo } from "../../assets/svg/landTowerLogoBlack.svg";
import LandTowerLogoImage from "../../assets/img/landTowerLogoBlack.png";
import { ReactComponent as MobilePhoneIcon } from "../../assets/svg/mobilePhoneIconBlack.svg";
import { ReactComponent as MenuBar } from "../../assets/svg/menuBarBlack.svg";
import { NonAuthRoutes } from "../../constants";
// import { ReactComponent as CancelIcon } from "../../assets/svg/cancelIcon.svg";

function PagesHeader({ setCardDisplayed, cardDisplayed }) {
  const navigate = useNavigate();
  // const [cardDisplayed, setCardDisplayed] = useState(false);

  return (
    <div className="sticky bg-white top-0 z-10">
      <div className="hidden md:block lg:block">
        <div className="pt-3 mx-12 flex justify-between border-b-is0point5 border-gray-400">
          <button
            type="button"
            className="left-0 outline-none"
            onClick={() => navigate(NonAuthRoutes.landingPage)}
          >
            <LandTowerLogo className="w-64 h-14" />
          </button>
          <div className="flex justify-center items-center text-right ">
            <div>
              <a
                href="tel:+2349163494952"
                className="font-graphikSemibold text-gray-600 "
              >
                +234 916 3494 952
              </a>
              <p>
                <a
                  href="mailto:hello@LandTowerLimited.com"
                  className="font-graphikRegular text-sm text-gray-600"
                >
                  hello@LandTowerLimited.com
                </a>
              </p>
            </div>
            <div className="px-2 py-0 mr-12">
              <MobilePhoneIcon />
            </div>
            <button
              type="button"
              className="pl-6 border-l-2 border-gray-400 cursor-pointer"
            >
              <MenuBar />
            </button>
          </div>
        </div>
        <div className="flex justify-between pt-4 pb-6 mx-12">
          <div />
          <ul className="flex items-end font-graphikMedium text-sm text-gray-700">
            <li className="mr-8 cursor-pointer">
              <button
                type="button"
                // className="pl-5 w-full text-left border-y-is0point5 border-gray-500"
                onClick={() => navigate(NonAuthRoutes.landingPage)}
              >
                HOME
              </button>
            </li>
            <li className="mr-8 cursor-pointer">
              <button
                type="button"
                // className="px-5 w-full text-left border-b-is0point5 border-gray-500"
                onClick={() => navigate(NonAuthRoutes.ourTeam)}
              >
                OUR TEAM
              </button>
            </li>
            <li className="mr-8 cursor-pointer">
              <button type="button">APARTMENTS</button>
            </li>
            <li className="mr-8 cursor-pointer">
              <button type="button">EQUIPMENTS</button>
            </li>
            <li className="mr-8 cursor-pointer">
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.aboutUs)}
              >
                ABOUT US
              </button>
            </li>
            <li className="mr-8 cursor-pointer">
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.contactUs)}
              >
                CONTACT US
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden lg:hidden">
        <div className="px-4 flex justify-between border-b-is0point5 border-gray-400">
          <button
            type="button"
            className="left-0 outline-none"
            onClick={() => navigate(NonAuthRoutes.landingPage)}
          >
            <img
              src={LandTowerLogoImage}
              alt="Land Tower Logo"
              className=" mt-2 mb-4"
            />
          </button>
          <button
            type="button"
            onClick={() => setCardDisplayed(!cardDisplayed)}
            className="border-l border-gray-400 outline-none"
          >
            <MenuBar className="ml-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PagesHeader;
