/* eslint-disable no-return-assign */
import React, { useEffect, useState } from "react";
import PagesHeader from "../../components/header/pagesHeader";
import Footer from "../../components/footer/footer";
import LandTowerButton from "../../components/landTowerButton/landTowerButton";

function ContactUs() {
  const [cardDisplayed, setCardDisplayed] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [warning, setWarning] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Contact Us • Land Tower";
    window.scrollTo(0, 0);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  const specificButtonTitle = "Submit";
  const specificButtonStyling = "w-522 mb-40";
  const specificButtonStylingMobile = "w-250 mb-40";
  const specificButtonText = "Submit";

  function isValidEmail(isemail) {
    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(isemail);
  }

  const handleContactForm = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      companyName.length === 0 ||
      subject.length === 0 ||
      message.length === 0
    ) {
      setWarning(true);
    } else if (!isValidEmail(email)) {
      setEmailWarning(true);
    } else {
      window.location = `mailto:LandTower.Ltd@gmail.com?subject=LandTowerLimited Contact Us Page: My name is ${name}, My phone number is ${phone},and I'll like to talk about ${subject}&body=I work at ${companyName}, and ${message}`;
      setTimeout(() => {
        setName("");
        setEmail("");
        setCompanyName("");
        setSubject("");
        setMessage("");
      }, 5000);
    }
    setTimeout(() => {
      setWarning(false);
    }, 5000);
    setTimeout(() => {
      setEmailWarning(false);
    }, 5000);
  };

  /** displays Warning */
  const displayWarning = () => {
    return (
      <div className="flex justify-center items-center">
        <p className="my-2 px-4 py-2 w-250 md:w-full lg:w-full rounded font-graphikRegular text-base text-center text-red-500 border-2 border-red-400 bg-red-100">
          All entries and required to send a contact email...
        </p>
      </div>
    );
  };

  /** displays email Warning */
  const displayEmailWarning = () => {
    return (
      <div className="flex justify-center items-center">
        <p className="my-2 px-4 py-2 w-250 md:w-full lg:w-full rounded font-graphikRegular text-base text-center text-red-500 border-2 border-red-400 bg-red-100">
          Email is Invalid, kindly check to confirm.
        </p>
      </div>
    );
  };

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
              <form action="mailto:TheFrenzyEmpireInfo@gmail.com?subject=The Celeb Frenzy - Contact Page Form">
                <div className="mt-16 w-522">
                  <label
                    className="flex justify-center items-center text-gray-700 text-sm mb-2 leading-5"
                    htmlFor="name"
                  >
                    <p className="text-lg font-graphikRegular w-48">Name</p>
                    <input
                      id="name"
                      autoComplete="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="ml-4 h-14 w-full text-base leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                    />
                  </label>
                </div>
                <div className="mt-6 w-522">
                  <label
                    className="flex justify-center items-center text-gray-700 text-sm mb-2 leading-5"
                    htmlFor="phone"
                  >
                    <p className="text-lg font-graphikRegular w-48">Phone</p>
                    <input
                      id="phone"
                      autoComplete="tel"
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                      autoComplete="email"
                      type="email"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      placeholder="Enter Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="ml-4 h-14 w-full text-base leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                    />
                  </label>
                </div>
                <div className="mt-6 w-522">
                  <label
                    className="flex justify-center items-center text-gray-700 text-sm mb-2 leading-5"
                    htmlFor="subject"
                  >
                    <p className="text-lg font-graphikRegular w-48">Subject</p>
                    <input
                      id="subject"
                      placeholder="Enter Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
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
                      placeholder="Enter Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="ml-4 w-full h-250 text-base leading-4 py-3 px-4 resize-none appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                    />
                  </label>
                </div>
              </form>
            </div>
            <div className="flex justify-center items-center w-full my-6">
              <div>
                {warning ? displayWarning() : <span />}
                {emailWarning ? displayEmailWarning() : <span />}
                <LandTowerButton
                  specificButtonTitle={specificButtonTitle}
                  specificButtonStyling={specificButtonStyling}
                  specificButtonText={specificButtonText}
                  specificButtonClick={(e) => handleContactForm(e)}
                />
              </div>
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
                    autoComplete="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-14 w-full text-lg leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-8">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="phone"
                >
                  <p className="text-lg font-graphikRegular mb-2">Phone</p>
                  <input
                    id="phone"
                    autoComplete="tel"
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    autoComplete="email"
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="Enter Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="h-14 w-full text-lg leading-4 py-3 px-4 appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-6 mx-8">
                <label
                  className="text-gray-700 text-sm mb-2 leading-5"
                  htmlFor="subject"
                >
                  <p className="text-lg font-graphikRegular mb-2">Subject</p>
                  <input
                    id="company"
                    placeholder="Enter Subject Title"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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
                    placeholder="Enter Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-250 text-lg leading-4 py-3 px-4 resize-none appearance-none border-2 font-graphikRegular border-landTower-gold2-color rounded-sm focus:outline-none"
                  />
                </label>
              </div>
            </form>
          </div>
          {warning ? displayWarning() : <span />}
          {emailWarning ? displayEmailWarning() : <span />}
          <div className="flex justify-center items-center mt-6 mb-10">
            <LandTowerButton
              specificButtonTitle={specificButtonTitle}
              specificButtonStyling={specificButtonStylingMobile}
              specificButtonText={specificButtonText}
              specificButtonClick={(e) => handleContactForm(e)}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
