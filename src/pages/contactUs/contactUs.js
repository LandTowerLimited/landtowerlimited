import React, { useEffect, useState } from "react";
import PagesHeader from "../../components/header/pagesHeader";
import Footer from "../../components/footer/footer";

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
      <div className="w-full">
        <PagesHeader
          setCardDisplayed={setCardDisplayed}
          cardDisplayed={cardDisplayed}
        />
        <div>
          <div className="flex justify-center items-center">
            <div className="px-6 lg:w-3/5 md:lg:w-3/5 ">
              <div>
                <p className="mt-4 font-georgiaBold text-5xl md:text-7xl lg:text-7xl text-grey-400 text-center">
                  Contact
                </p>
                <p className="mt-4 font-georgiaBold text-3xl md:text-5xl lg:text-5xl text-landTower-gold3-color text-center">
                  Land Tower Limited
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block lg:block">
            <div className="flex justify-center items-center">
              <form>
                <div className="mt-16 w-522">
                  <label
                    className="flex justify-center items-center text-gray-700 text-sm mb-2 leading-5"
                    htmlFor="name"
                  >
                    <p className="text-lg font-graphikRegular w-48">Name</p>
                    <input
                      id="name"
                      type="name"
                      placeholder="Enter Name"
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
                    <p className="text-lg font-graphikRegular w-48">Email</p>
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
                <div className="mt-8 w-522">
                  <label
                    className="flex justify-center  text-gray-700 text-sm mb-2 leading-5"
                    htmlFor="message"
                  >
                    <p className="text-lg font-graphikRegular w-48">Message</p>
                    <textarea
                      id="message"
                      type="message"
                      placeholder="Enter Message"
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
          <div className="flex justify-center items-center px-6 ">
            <form>
              <div className="mt-16 mx-8">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="name"
                >
                  <p className="text-lg font-graphikRegular mb-2">Name</p>
                  <input
                    id="name"
                    type="name"
                    placeholder="Enter Name"
                    // value={userEmail}
                    // onChange={(e) => handleEmailValue(e.target.value)}
                    className="h-14 w-full text-lg leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-8">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="email"
                >
                  <p className="text-lg font-graphikRegular mb-2">Email</p>
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
              <div className="mt-6 mx-8">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="company"
                >
                  <p className="text-lg font-graphikRegular mb-2">Company</p>
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
              <div className="mt-6 mx-8">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="message"
                >
                  <p className="text-lg font-graphikRegular mb-2">Message</p>
                  <textarea
                    id="message"
                    type="message"
                    placeholder="Enter Message"
                    // value={userEmail}
                    // onChange={(e) => handleEmailValue(e.target.value)}
                    className="w-full h-250 text-lg leading-4 py-3 px-4 resize-none appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                  />
                </label>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6 mb-10">
            <button
              // onClick={() => navigate(memberLink)}
              type="submit"
              title="submit"
              className="font-georgiaBold py-4 px-10 text-2xl outline-none bg-landTower-gold-color text-white"
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
