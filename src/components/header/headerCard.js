import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CancelIcon } from "../../assets/svg/cancelIcon.svg";
import { ReactComponent as MobilePhoneIcon } from "../../assets/svg/mobilePhoneIcon.svg";
import { NonAuthRoutes } from "../../constants";

function HeaderCard({ setCardDisplayed, cardDisplayed }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="absolute w-60 text-xs text-landTower-gold-color font-graphikSemibold rounded right-2 top-2 bg-black border border-gray-500">
        <div className="leading-10">
          <div className="flex justify-between">
            <span />
            <CancelIcon
              onClick={() => setCardDisplayed(!cardDisplayed)}
              className="h-4 w-4 mt-1 mr-1 right-0 cursor-pointer"
            />
          </div>

          <div className="flex ml-2 mt-2 mb-6">
            <div>
              <a
                href="tel:+2349163494952"
                className="font-graphikSemibold cursor-pointer text-sm text-white"
              >
                (+234) 916-3494-952
              </a>
              <p>
                <a
                  href="mailto:hello@LandTowerLimited.com"
                  className="font-graphikRegular cursor-pointer text-sm text-white"
                >
                  hello@LandTowerLimited.com
                </a>
              </p>
            </div>
            <div className=" py-0 mt-2">
              <MobilePhoneIcon />
            </div>
          </div>

          <ul>
            <li>
              <button
                type="button"
                className="pl-5 w-full text-left border-y-is0point5 border-gray-500"
                // onClick={() => history.push(AuthRoutes.profile)}
              >
                HOME
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
              >
                APARTMENTS
              </button>
            </li>
            <li>
              <button
                type="button"
                className="px-5 w-full text-left border-b-is0point5 border-gray-500"
              >
                EQUIPMENTS
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
                className="px-5 w-full text-left border-b-is0point5 border-gray-500"
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
