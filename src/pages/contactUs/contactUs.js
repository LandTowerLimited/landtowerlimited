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

  const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
  const COMPANY_EMAIL = "Landtower.ltd@gmail.com";

  // "idle" | "sending" | "success" | "error"
  const [sendStatus, setSendStatus] = useState("idle");

  const specificButtonTitle = "Submit";
  const specificButtonStyling = "w-522 mb-40";
  const specificButtonStylingMobile = "w-250 mb-40";
  const specificButtonText = sendStatus === "sending" ? "Sending..." : "Submit";

  function isValidEmail(isemail) {
    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(isemail);
  }

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCompanyName("");
    setSubject("");
    setMessage("");
  };

  const handleContactForm = async (e) => {
    e.preventDefault();

    // Ignore extra clicks while a message is already being sent
    if (sendStatus === "sending") return;

    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      phone.trim().length === 0 ||
      companyName.trim().length === 0 ||
      subject.trim().length === 0 ||
      message.trim().length === 0
    ) {
      setWarning(true);
      setTimeout(() => setWarning(false), 5000);
      return;
    }

    if (!isValidEmail(email.trim())) {
      setEmailWarning(true);
      setTimeout(() => setEmailWarning(false), 5000);
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      // Key missing from .env: show the fallback message instead of failing silently
      setSendStatus("error");
      return;
    }

    setSendStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Land Tower Website Enquiry: ${subject.trim()}`,
          from_name: "Land Tower Website",
          // Lets the company click "Reply" in Gmail to answer the visitor directly
          replyto: email.trim(),
          Name: name.trim(),
          Email: email.trim(),
          Phone: phone.trim(),
          Company: companyName.trim(),
          Subject: subject.trim(),
          Message: message.trim(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSendStatus("success");
        resetForm();
        setTimeout(() => setSendStatus("idle"), 8000);
      } else {
        setSendStatus("error");
      }
    } catch (error) {
      setSendStatus("error");
    }
  };

  /** displays Warning */
  const displayWarning = () => {
    return (
      <div className="flex justify-center items-center">
        <p className="my-2 px-4 py-2 w-250 md:w-full lg:w-full rounded font-graphikRegular text-base text-center text-red-500 border-2 border-red-400 bg-red-100">
          All fields are required to send your message.
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

  /** displays the result of sending the message */
  const displaySendStatus = () => {
    if (sendStatus === "success") {
      return (
        <div className="flex justify-center items-center">
          <p className="my-2 px-4 py-2 w-250 md:w-full lg:w-full rounded font-graphikRegular text-base text-center text-green-700 border-2 border-green-400 bg-green-100">
            Thank you! Your message has been sent. We will get back to you
            shortly.
          </p>
        </div>
      );
    }
    if (sendStatus === "error") {
      return (
        <div className="flex justify-center items-center">
          <p className="my-2 px-4 py-2 w-250 md:w-full lg:w-full rounded font-graphikRegular text-base text-center text-red-500 border-2 border-red-400 bg-red-100">
            Sorry, your message could not be sent. Please try again or email us
            directly at{" "}
            <a href={`mailto:${COMPANY_EMAIL}`} className="underline">
              {COMPANY_EMAIL}
            </a>
            .
          </p>
        </div>
      );
    }
    return <span />;
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
              <form onSubmit={(e) => handleContactForm(e)}>
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
                {displaySendStatus()}
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
            <form onSubmit={(e) => handleContactForm(e)}>
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
          {displaySendStatus()}
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
