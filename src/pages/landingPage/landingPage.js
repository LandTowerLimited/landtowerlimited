/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import Header from "../../components/header/header";
import HeaderCard from "../../components/header/headerCard";
import DuluxLogo from "../../assets/img/dulux.png";
import TwyfordBathroomsLogo from "../../assets/img/twyfordBathrooms.png";
import DangoteLogo from "../../assets/img/dangote.png";
import WichtechRoofingLogo from "../../assets/img/wichtechRoofing.png";
import Slide4Image1 from "../../assets/img/ltl-slide4-gallery-image-1.png";
import Slide4Image2 from "../../assets/img/ltl-slide4-gallery-image-2.png";
import Slide4Image3 from "../../assets/img/ltl-slide4-gallery-image-3.png";
import { ReactComponent as CraneIconGold } from "../../assets/svg/craneIconGold.svg";
import { ReactComponent as ArrowRightWhite } from "../../assets/svg/arrowRightWhite.svg";
import { ReactComponent as ArrowRightBlack } from "../../assets/svg/arrowRightBlack.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagramIcon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebookIcon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitterIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/linkedinIcon.svg";
import { ReactComponent as LocationIcon } from "../../assets/svg/locationIcon.svg";
import { ReactComponent as HouseListingIcon } from "../../assets/svg/houseListingIcon.svg";
import { ReactComponent as KeyIcon } from "../../assets/svg/keyIcon.svg";
import { ReactComponent as HousePlanIcon } from "../../assets/svg/housePlanIcon.svg";
import { ReactComponent as SkyscrapperIcon } from "../../assets/svg/skyscrapperIcon.svg";
import { ReactComponent as NextIcon } from "../../assets/svg/nextIcon.svg";
import { ReactComponent as PreviousIcon } from "../../assets/svg/previousIcon.svg";
import Footer from "../../components/footer/footer";

function LandingPage() {
  const navigate = useNavigate();
  const [cardDisplayed, setCardDisplayed] = useState(false);

  /** Displays Slider */
  const sliderData = [
    {
      url: "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669578855/Landing%20Page/ltl-landing-page-sliderImage1_cx9ay2.jpg",
      captionHeader: "Land Tower Constructions",
      captionDescription: "Developing Outstanding Living Spaces Around Nigeria",
    },
    {
      url: "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669578854/Landing%20Page/ltl-landing-page-sliderImage2_gzjbw7.jpg",
      captionHeader: "World Class Interiors",
      captionDescription: "From Tokyo - Japan to Banana Island - Lagos",
    },
    {
      url: "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669578854/Landing%20Page/ltl-landing-page-sliderImage3_rtyylt.jpg",
      captionHeader: "Equipments By Land Tower",
      captionDescription: "Heavy-Duty Industry Equipments at Your Service",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  const intervalTime = 3000;
  let slideInterval;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    // console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    // console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Land Tower Limited • The Brand That Exceeds Limits!";
    window.scrollTo(0, 0);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** Displays Slide 0 */
  const slide0 = () => {
    return (
      <div className="bg-black">
        {cardDisplayed ? (
          <HeaderCard
            setCardDisplayed={setCardDisplayed}
            cardDisplayed={cardDisplayed}
          />
        ) : (
          <span />
        )}
        {sliderData.map((slide, index) => {
          return (
            <div key={index}>
              {index === currentSlide && (
                <div
                  style={{
                    backgroundImage: `url(${slide.url})`,
                    backgroundSize: "cover",
                  }}
                  className={
                    index === currentSlide
                      ? "transition ease-in delay-150"
                      : "transition ease-in-out delay-150"
                  }
                >
                  <div className="h-screen hidden md:block lg:block">
                    <Header />
                    <div className="mx-24 mt-24 items-center">
                      <p className="font-georgiaRegular text-landTower-gold-color text-7xl">
                        {slide.captionHeader}
                      </p>
                      <p className="font-graphikMedium text-white text-2xl mt-4 leading-loose">
                        {slide.captionDescription}
                      </p>
                      <div className="mt-12 flex items-center">
                        <button
                          type="button"
                          title="Get a consultation"
                          className="getConsultationCSS border-landTower-gold-color 
                          cursor-pointer items-center mr-8
                          justify-center py-4 px-6 flex border-2 h-14"
                          onClick={() => navigate(NonAuthRoutes.contactUs)}
                        >
                          <p className=" font-graphikSemibold text-sm text-white mr-4 leading-3">
                            GET A CONSULTATION
                          </p>
                          <ArrowRightWhite className=" w-2 h-2" />
                        </button>
                        <CraneIconGold className=" w-6" />
                      </div>
                      <div className="flex w-full mt-10 md:mt-2 justify-between items-center">
                        <div className="flex w-56 mt-10 justify-between items-center">
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
                            href="https://www.twitter.com/landtowerlimited/"
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
                        <div className="flex w-56 mt-10 items-center justify-between">
                          <button
                            type="button"
                            title="Previous"
                            onClick={prevSlide}
                          >
                            <PreviousIcon />
                          </button>
                          <button
                            type="button"
                            title="Next"
                            onClick={nextSlide}
                          >
                            <NextIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col h-screen justify-between md:hidden lg:hidden">
                    <div onClick={() => setCardDisplayed(!cardDisplayed)}>
                      <Header />
                    </div>
                    <div className="mx-4">
                      <div className="">
                        <p className="font-georgiaRegular text-landTower-gold-color text-5xl">
                          {slide.captionHeader}
                        </p>
                        <p className="font-graphikMedium text-white text-xl mt-4">
                          {slide.captionDescription}
                        </p>
                      </div>
                      <div className="mt-14">
                        <div className="flex items-center">
                          <button
                            type="button"
                            title="Get a consultation"
                            className="getConsultationCSS border-landTower-gold-color 
                          cursor-pointer items-center mr-8
                          justify-center py-4 px-6 flex border-2 h-14"
                            onClick={() => navigate(NonAuthRoutes.contactUs)}
                          >
                            <p className=" font-graphikMedium text-sm text-white mr-4">
                              GET A CONSULTATION
                            </p>
                            <ArrowRightWhite className=" w-2 h-2" />
                          </button>
                          <CraneIconGold className="w-6" />
                        </div>
                        <div className="flex w-52 my-10 justify-between items-center">
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
                            href="https://www.twitter.com/landtowerlimited/"
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
                    <div className="mx-4">
                      <div className="flex w-full pb-24 -mt-18 items-center justify-between">
                        <button
                          type="button"
                          title="Previous"
                          onClick={prevSlide}
                        >
                          <PreviousIcon className="w-4 h-4" />
                        </button>
                        <button type="button" title="Next" onClick={nextSlide}>
                          <NextIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  /** Displays Slide 1 */
  const slide1 = () => {
    return (
      <div>
        <div className="lg:h-screen mb-10 hidden md:block lg:block">
          <div className="flex justify-center w-full mb-10">
            <div className="z-20">
              <img
                src="https://res.cloudinary.com/dipzi1vv6/image/upload/v1670505553/Landing%20Page/ltl-about-us-page-Image2_tpo3ab.jpg"
                alt="Land Tower Projects 1"
                className="h-522 -mt-14"
              />
            </div>
            <div className="ml-12 flex items-center">
              <div>
                <p className="font-graphikBold text-gray-300 text-lg">01</p>
                <span className="text-gray-600 text-5xl mt-1 flex justify-center font-graphikSemibold">
                  <p className="font-georgiaBold text-landTower-gold3-color mr-2">
                    Land Tower
                  </p>
                  Limited
                </span>
                <p className="font-graphikMedium text-gray-600 text-xl mt-3">
                  Developing living spaces for creative people
                </p>
                <p className="font-graphikMedium text-gray-700 mt-8">
                  We cover the full development cycle,
                </p>
                <p className="font-graphikMedium text-gray-700 ">
                  from design to furnishing.
                </p>
                <button
                  type="button"
                  onClick={() => navigate(NonAuthRoutes.projectsGallery)}
                  title="SEE OUR PROJECTS"
                  className="flex mt-8 items-center cursor-pointer w-44 pb-2 pl-2 border-b-4 border-black"
                >
                  <p className="font-graphikMedium text-sm text-gray-700 ">
                    SEE OUR PROJECTS
                  </p>
                  <ArrowRightBlack className="ml-4 w-2 h-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex items-center cursor-pointer w-28 pb-1 border-b-2 border-gray-700">
              <p className="font-graphikMedium text-lg w-full text-center text-gray-700">
                Partners
              </p>
            </div>
          </div>
          <div className="w-full lg:flex lg:-ml-12">
            <div className="md:w-full md:flex md:justify-center">
              <img
                src={DangoteLogo}
                alt="Dangote Logo"
                title="Dangote"
                className="h-16 md:my-10"
              />
            </div>
            <div className="md:w-full md:flex md:justify-center">
              <img
                src={TwyfordBathroomsLogo}
                alt="Twyford Bathrooms Logo"
                title="Twyford Bathrooms"
                className="h-16 md:my-10"
              />
            </div>
            <div className="md:w-full md:flex md:justify-center">
              <img
                src={DuluxLogo}
                alt="Dulux Logo"
                title="Dulux"
                className="h-16 md:my-10"
              />
            </div>
            <div className="md:w-full md:flex md:justify-center">
              <img
                src={WichtechRoofingLogo}
                alt="Wichtech Roofing Logo"
                title="Wichtech Roofing"
                className="h-16 md:my-10"
              />
            </div>
          </div>
        </div>

        <div className="mb-10 md:hidden lg:hidden">
          <div className="justify-center flex">
            <img
              src="https://res.cloudinary.com/dipzi1vv6/image/upload/v1670505553/Landing%20Page/ltl-about-us-page-Image2_tpo3ab.jpg"
              alt="Land Tower Projects 1"
              className=" -mt-is29 px-4 bg-cover"
            />
          </div>
          <div className="my-10 justify-center flex px-4">
            <div>
              <p className="font-graphikBold text-gray-300 text-lg">01</p>
              <span className="text-gray-600 text-3xl mt-1 flex font-graphikSemibold">
                <p className="font-georgiaBold text-landTower-gold3-color mr-2">
                  Land Tower
                </p>
                Limited
              </span>
              <p className="font-graphikMedium text-gray-600 text-lg mt-3">
                Developing living spaces for creative people
              </p>

              <p className="font-graphikMedium text-gray-700 text-sm mt-8">
                We cover the full development cycle,
              </p>
              <p className="font-graphikMedium text-gray-700 ">
                from design to furnishing.
              </p>

              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.projectsGallery)}
                title="SEE OUR PROJECTS"
                className="flex mt-8 items-center pb-2 cursor-pointer w-40 border-b border-black"
              >
                <p className="font-graphikMedium text-sm text-gray-700">
                  SEE OUR PROJECTS
                </p>
                <ArrowRightBlack className="ml-4 w-2 h-2" />
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center mt-20 mb-6">
            <div className="flex items-center cursor-pointer w-24 pb-1 border-b-2 border-gray-700">
              <p className="font-graphikMedium text-lg w-full text-center text-gray-700">
                Partners
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img
              src={DangoteLogo}
              alt="Dangote Logo"
              title="Dangote"
              className="h-16 my-10"
            />
          </div>
          <div className="w-full flex justify-center">
            <img
              src={TwyfordBathroomsLogo}
              alt="Twyford Bathrooms Logo"
              title="Twyford Bathrooms"
              className="h-16 my-10"
            />
          </div>
          <div className="w-full flex justify-center">
            <img
              src={DuluxLogo}
              alt="Dulux Logo"
              title="Dulux"
              className="h-16 my-10"
            />
          </div>
          <div className="w-full flex justify-center">
            <img
              src={WichtechRoofingLogo}
              alt="Wichtech Roofing Logo"
              title="Wichtech Roofing"
              className="h-16 mt-10"
            />
          </div>
        </div>
      </div>
    );
  };

  /** Displays Slide 2 */
  const slide2 = () => {
    return (
      <div>
        <div className="h-screen items-center w-full px-14 hidden md:block lg:block">
          <div className="bg-slate-100 h-full w-full py-28">
            <div className=" flex items-center justify-center">
              <div className=" justify-center text-center">
                <p className="font-graphikBold text-gray-300 text-lg">02</p>
                <span className="text-gray-600 text-5xl mt-1 flex justify-center font-graphikSemibold">
                  <p className="font-georgiaBold text-landTower-gold3-color mr-2">
                    Land Tower
                  </p>
                  Homes
                </span>
                <p className="font-graphikMedium text-gray-600 text-xl mt-2">
                  The Brand That Exceeds Limits!
                </p>
              </div>
            </div>

            <div className="flex justify-between px-4 mt-28 w-full divide-x divide-gray">
              <div className="w-60 pb-12">
                <LocationIcon className="flex items-center w-full justify-center" />
                <p className="font-graphikRegular text-gray-700 text-base mt-3 flex text-center items-center justify-center">
                  Near to Train Station
                </p>
                <p className="flex items-baseline mt-2 justify-center font-graphikBold">
                  <span className="font-graphikBold text-4xl mr-1">28</span>
                  min
                </p>
              </div>
              <div className="w-60 pt-12">
                <HouseListingIcon className="flex items-center w-full justify-center" />
                <p className="font-graphikRegular text-gray-700 text-base mt-3 flex text-center items-center justify-center">
                  Spaces in Lekki
                </p>
                <p className="flex items-baseline mt-2 justify-center font-graphikBold">
                  <span className="font-graphikBold text-4xl mr-1">32</span>+
                </p>
              </div>
              <div className="w-60 pb-12">
                <KeyIcon className="flex items-center w-full justify-center" />
                <p className="font-graphikRegular text-gray-700 text-base mt-3 flex text-center items-center justify-center">
                  Discount on Lekki
                </p>
                <p className="flex items-baseline mt-2 justify-center font-graphikBold">
                  <span className="font-graphikBold text-4xl mr-1">15</span>%
                </p>
              </div>
              <div className="w-60 pt-12">
                <HousePlanIcon className="flex items-center w-full justify-center" />
                <p className="font-graphikRegular text-gray-700 text-base mt-3 flex text-center items-center justify-center">
                  Years of Experience
                </p>
                <p className="flex items-baseline mt-2 justify-center font-graphikBold">
                  <span className="font-graphikBold text-4xl mr-1">3</span>
                  years
                </p>
              </div>
              <div className="w-60 pb-12">
                <SkyscrapperIcon className="flex items-center w-full justify-center" />
                <p className="font-graphikRegular text-gray-700 text-base mt-3 flex text-center items-center justify-center">
                  Height of Ikoyi Tower
                </p>
                <p className="flex items-baseline mt-2 justify-center font-graphikBold">
                  <span className="font-graphikBold text-4xl mr-1">490</span>
                  ft
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 my-20 md:hidden lg:hidden">
          <div className="bg-slate-100 h-full w-full py-8">
            <div className=" flex items-center justify-center">
              <div className=" justify-center text-center">
                <p className="font-graphikBold text-gray-300 text-lg">02</p>
                <span className="text-gray-600 text-3xl mt-1 flex justify-center font-graphikSemibold">
                  <p className="font-georgiaBold text-landTower-gold3-color mr-2">
                    Land Tower
                  </p>
                  Homes
                </span>
                <p className="font-graphikMedium text-gray-600 text-xl mt-2">
                  The Brand That Exceeds Limits!
                </p>
              </div>
            </div>
            <div className="mt-10">
              <div className="">
                <LocationIcon className="flex items-center w-full justify-center" />
                <p className="font-graphikRegular text-gray-700 text-base mt-3 flex text-center items-center justify-center">
                  Near to Train Station
                </p>
                <p className="flex items-baseline mt-2 justify-center font-graphikMedium">
                  <span className="font-graphikMedium text-4xl mr-1">28</span>
                  min
                </p>
              </div>
              <div className="pt-12">
                <HouseListingIcon className="flex items-center w-full justify-center" />
                <p className="font-graphikRegular text-gray-700 text-base mt-3 flex text-center items-center justify-center">
                  Spaces in Lekki
                </p>
                <p className="flex items-baseline mt-2 justify-center font-graphikMedium">
                  <span className="font-graphikMedium text-4xl mr-1">32</span>+
                </p>
              </div>
              <div className="pt-14">
                <KeyIcon className="flex items-center w-full justify-center" />
                <p className="font-graphikRegular text-gray-700 text-base mt-3 flex text-center items-center justify-center">
                  Discount on Lekki
                </p>
                <p className="flex items-baseline mt-2 justify-center font-graphikMedium">
                  <span className="font-graphikMedium text-4xl mr-1">15</span>%
                </p>
              </div>
              <div className="pt-12">
                <HousePlanIcon className="flex items-center w-full justify-center" />
                <p className="font-graphikRegular text-gray-700 text-base mt-3 flex text-center items-center justify-center">
                  Years of Experience
                </p>
                <p className="flex items-baseline mt-2 justify-center font-graphikMedium">
                  <span className="font-graphikMedium text-4xl mr-1">3</span>
                  years
                </p>
              </div>
              <div className="pt-12">
                <SkyscrapperIcon className="flex items-center w-full justify-center" />
                <p className="font-graphikRegular text-gray-700 text-base mt-3 flex text-center items-center justify-center">
                  Height of Ikoyi Tower
                </p>
                <p className="flex items-baseline mt-2 justify-center font-graphikMedium">
                  <span className="font-graphikMedium text-4xl mr-1">490</span>
                  ft
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /** Displays Slide 3 */
  const slide3 = () => {
    return (
      <div>
        <div className="mt-40 mb-10 hidden md:hidden lg:block">
          <div className="flex px-28 justify-between items-center w-full h-full">
            <div className="ml-8">
              <p className="font-graphikBold text-gray-300 text-lg">03</p>
              <span className="text-gray-600 text-5xl mt-1 flex font-graphikSemibold">
                <p className="font-georgiaBold text-landTower-gold-color mr-2">
                  Property
                </p>
                Gallery
              </span>
              <p className="font-graphikMedium text-gray-600 text-xl mt-3">
                View our luxury living spaces...
              </p>
              <button
                type="button"
                title="SEE ALL GALLERY"
                className="flex mt-8 items-center cursor-pointer w-40 pb-2 pl-2 border-b-4 border-black"
                onClick={() => navigate(NonAuthRoutes.projectsGallery)}
              >
                <p className="font-graphikMedium text-sm text-gray-700">
                  SEE ALL GALLERY
                </p>
                <ArrowRightBlack className="ml-4 w-2 h-2" />
              </button>
            </div>
            <div className="flex items-center justify-end w-9/12">
              <div className="mx-4">
                <img
                  src={Slide4Image1}
                  alt="Gallery Showcase 1"
                  title="Gallery Showcase 1"
                  className=" h-52 mt-2"
                />
              </div>
              <div className="mx-4">
                <img
                  src={Slide4Image2}
                  alt="Gallery Showcase 3"
                  title="Gallery Showcase 2"
                  className="h-40 mb-2"
                />
              </div>
              <div className="mx-4">
                <img
                  src={Slide4Image3}
                  alt="Gallery Showcase 3"
                  title="Gallery Showcase 3"
                  className=" h-52"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-10 md:block lg:hidden">
          <div className=" justify-between items-center w-full h-full">
            <div className="flex justify-center">
              <div className="ml-8">
                <p className="font-graphikBold text-gray-300 text-lg">03</p>
                <span className="text-gray-600 text-3xl mt-1 flex font-graphikSemibold">
                  <p className="font-georgiaBold text-landTower-gold-color mr-2">
                    Property
                  </p>
                  Gallery
                </span>
                <p className="font-graphikMedium text-gray-700 text-xl mt-6">
                  View Luxury Living Spaces in Nigeria
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="mt-4">
                <div className="flex justify-center w-full">
                  <img
                    src={Slide4Image1}
                    alt="Gallery Showcase 1"
                    title="Gallery Showcase 1"
                    className="px-4 mt-6"
                  />
                </div>
                <div className="flex justify-center w-full">
                  <img
                    src={Slide4Image2}
                    alt="Gallery Showcase 3"
                    title="Gallery Showcase 2"
                    className="px-4 mb-2"
                  />
                </div>
                <div className="flex justify-center w-full">
                  <img
                    src={Slide4Image3}
                    alt="Gallery Showcase 3"
                    title="Gallery Showcase 3"
                    className="px-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                title="SEE ALL GALLERY"
                className="flex my-8 items-center cursor-pointer w-40 pb-2 pl-2 border-b border-black"
                onClick={() => navigate(NonAuthRoutes.projectsGallery)}
              >
                <p className="font-graphikMedium text-sm text-gray-700">
                  SEE ALL GALLERY
                </p>
                <ArrowRightBlack className="ml-4 w-2 h-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {slide0()}
      {slide1()}
      {slide2()}
      {slide3()}
      <Footer />
    </>
  );
}

export default LandingPage;
