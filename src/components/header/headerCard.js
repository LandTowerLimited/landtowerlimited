import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CancelIcon } from "../../assets/svg/cancelIcon.svg";
import { ReactComponent as MobilePhoneIcon } from "../../assets/svg/mobilePhoneIcon.svg";
import { NonAuthRoutes } from "../../url";

function HeaderCard({ setCardDisplayed, cardDisplayed }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="absolute w-60 text-xs text-landTower-gold-color font-graphikSemibold rounded right-2 top-2 bg-black border border-gray-500">
        <div className="leading-10">
          <div className="flex justify-between">
            <span />
            <CancelIcon
              title="Close Menu"
              onClick={() => setCardDisplayed(!cardDisplayed)}
              className="z-20 h-4 w-4 mt-1 mr-1 right-0 cursor-pointer"
            />
          </div>
          <div className="flex ml-2 -mt-4">
            <div className=" py-0 mt-2 mr-1">
              <MobilePhoneIcon />
            </div>
            <div>
              <div className="-mt-1 -mb-4">
                <a
                  href="tel:+2349163494952"
                  className="font-graphikSemibold cursor-pointer text-sm text-white"
                >
                  (+234) 916-3494-952
                </a>
              </div>
              <div className="-mt-1">
                <a
                  href="mailto:hello@LandTowerLimited.com"
                  className="font-graphikRegular cursor-pointer text-sm text-white"
                >
                  hello@LandTowerLimited.com
                </a>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <button
                type="button"
                className="pl-5 w-full text-left border-y-is0point5 border-gray-500"
                onClick={() => navigate(NonAuthRoutes.landingPage)}
              >
                HOME
              </button>
            </li>

            <li>
              <button
                type="button"
                className="px-5 w-full text-left border-b-is0point5 border-gray-500"
                onClick={() => navigate(NonAuthRoutes.gallery)}
              >
                APARTMENTS
              </button>
            </li>
            <li>
              <button
                type="button"
                className="px-5 w-full text-left border-b-is0point5 border-gray-500"
                onClick={() => navigate(NonAuthRoutes.gallery)}
              >
                GALLERY
              </button>
            </li>
            <li>
              <button
                type="button"
                className="px-5 w-full text-left border-b-is0point5 border-gray-500"
                onClick={() => navigate(NonAuthRoutes.ourTeam)}
              >
                OUR TEAM
              </button>
            </li>
            <li>
              <button
                type="button"
                className="px-5 w-full text-left border-b-is0point5 border-gray-500"
                onClick={() => navigate(NonAuthRoutes.aboutUs)}
              >
                ABOUT US
              </button>
            </li>
            <li>
              <button
                type="button"
                className="px-5 w-full text-left"
                onClick={() => navigate(NonAuthRoutes.contactUs)}
              >
                CONTACT US
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
