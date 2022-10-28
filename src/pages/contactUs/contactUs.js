import React, { useEffect, useState } from "react";
import PagesHeader from "../../components/header/pagesHeader";
import Footer from "../../components/footer/footer";
import PagesHeaderCard from "../../components/header/pagesHeaderCard";

function ContactUs() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Contact Us • Land Tower";
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
        <div>
          <p className="mt-4 font-georgiaBold text-7xl text-grey-400 text-center">
            Contact
          </p>
          <p className="mt-4 font-georgiaBold text-5xl text-landTower-gold3-color text-center">
            Land Tower Limited
          </p>
          <div className="hidden md:block lg:block">
            <div className="flex justify-center items-center">
              <form>
                <div className="mt-16 w-522">
                  <label
                    className="flex justify-center items-center text-gray-700 text-sm mb-2 leading-5"
                    htmlFor="firstName"
                  >
                    <p className="text-lg font-graphikRegular w-48">
                      First Name:
                    </p>
                    <input
                      id="firstName"
                      type="firstName"
                      placeholder="Enter First Name"
                      // value={userEmail}
                      // onChange={(e) => handleEmailValue(e.target.value)}
                      className="ml-4 h-14 w-full text-base leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                    />
                  </label>
                </div>
                <div className="mt-6 w-522">
                  <label
                    className="flex justify-center items-center text-gray-700 text-sm mb-2 leading-5"
                    htmlFor="lastName"
                  >
                    <p className="text-lg font-graphikRegular w-48">
                      Last Name:
                    </p>
                    <input
                      id="lastName"
                      type="lastName"
                      placeholder="Enter Last Name"
                      // value={userEmail}
                      // onChange={(e) => handleEmailValue(e.target.value)}
                      className="ml-4 h-14 w-full text-base leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                    />
                  </label>
                </div>
                <div className="mt-6 w-522">
                  <label
                    className="flex justify-center items-center text-gray-700 text-sm mb-2 leading-5"
                    htmlFor="email"
                  >
                    <p className="text-lg font-graphikRegular w-48">
                      Email Address:
                    </p>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Email Address"
                      // value={userEmail}
                      // onChange={(e) => handleEmailValue(e.target.value)}
                      className="ml-4 h-14 w-full text-base leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                    />
                  </label>
                </div>
                <div className="mt-6 w-522">
                  <label
                    className="flex justify-center items-center text-gray-700 text-sm mb-2 leading-5"
                    htmlFor="companyName"
                  >
                    <p className="text-lg font-graphikRegular w-48">Company</p>
                    <input
                      id="company"
                      type="company"
                      placeholder="Enter Company Name"
                      // value={userEmail}
                      // onChange={(e) => handleEmailValue(e.target.value)}
                      className="ml-4 h-14 w-full text-base leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                    />
                  </label>
                </div>
                <div className="mt-6 w-522">
                  <label
                    className="flex justify-center items-center text-gray-700 text-sm mb-2 leading-5"
                    htmlFor="subject"
                  >
                    <p className="text-lg font-graphikRegular w-48">Subject:</p>
                    <input
                      id="subject"
                      type="subject"
                      placeholder="Enter Subject"
                      // value={userEmail}
                      // onChange={(e) => handleEmailValue(e.target.value)}
                      className="ml-4 h-14 w-full text-base leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                    />
                  </label>
                </div>
                <div className="mt-8 w-522">
                  <label
                    className="flex justify-center  text-gray-700 text-sm mb-2 leading-5"
                    htmlFor="details"
                  >
                    <p className="text-lg font-graphikRegular w-48">Details:</p>
                    <textarea
                      id="details"
                      type="details"
                      placeholder="Enter Details"
                      // value={userEmail}
                      // onChange={(e) => handleEmailValue(e.target.value)}
                      className="ml-4 w-full h-250 text-base leading-4 py-3 px-4 resize-none appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                    />
                  </label>
                </div>
              </form>
            </div>
            <div className="flex justify-center items-center w-full my-6">
              <button
                // onClick={() => navigate(memberLink)}
                type="submit"
                title="submit"
                className="font-georgiaBold w-522 py-4 px-10 text-2xl outline-none bg-landTower-gold-color text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden lg:hidden">
          <div className="flex justify-center items-center">
            <form>
              <div className="mt-16 mx-8 w-300">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="firstName"
                >
                  <p className="text-lg font-graphikRegular mb-2">
                    First Name:
                  </p>
                  <input
                    id="firstName"
                    type="firstName"
                    placeholder="Enter First Name"
                    // value={userEmail}
                    // onChange={(e) => handleEmailValue(e.target.value)}
                    className="h-14 w-full text-lg leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-8 w-300">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="lastName"
                >
                  <p className="text-lg font-graphikRegular mb-2">Last Name:</p>
                  <input
                    id="lastName"
                    type="lastName"
                    placeholder="Enter Last Name"
                    // value={userEmail}
                    // onChange={(e) => handleEmailValue(e.target.value)}
                    className="h-14 w-full text-lg leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-8 w-300">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="email"
                >
                  <p className="text-lg font-graphikRegular mb-2">
                    Email Address:
                  </p>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Email Address"
                    // value={userEmail}
                    // onChange={(e) => handleEmailValue(e.target.value)}
                    className="h-14 w-full text-lg leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-8 w-300">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="company"
                >
                  <p className="text-lg font-graphikRegular mb-2">Company:</p>
                  <input
                    id="company"
                    type="company"
                    placeholder="Enter Company Name"
                    // value={userEmail}
                    // onChange={(e) => handleEmailValue(e.target.value)}
                    className="h-14 w-full text-lg leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-8 w-300">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="subject"
                >
                  <p className="text-lg font-graphikRegular mb-2">Subject:</p>
                  <input
                    id="subject"
                    type="subject"
                    placeholder="Enter Subject"
                    // value={userEmail}
                    // onChange={(e) => handleEmailValue(e.target.value)}
                    className="h-14 w-full text-lg leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-8 w-300">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="details"
                >
                  <p className="text-lg font-graphikRegular mb-2">Details:</p>
                  <textarea
                    id="details"
                    type="details"
                    placeholder="Enter Details"
                    // value={userEmail}
                    // onChange={(e) => handleEmailValue(e.target.value)}
                    className="w-full h-250 text-lg leading-4 py-3 px-4 resize-none appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                  />
                </label>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center w-full mt-6 mb-10">
            <button
              // onClick={() => navigate(memberLink)}
              type="submit"
              title="submit"
              className="font-georgiaBold w-300 py-4 px-10 text-2xl outline-none bg-landTower-gold-color text-white"
            >
              Submit
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
