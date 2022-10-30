import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import IfeanyiClementNwekeImage from "../../../assets/img/ltl-team-Ifeanyi-Clement-Nweke.png";

function IfeanyiClementNweke() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Ifeanyi Clement Nweke • Land Tower";
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
          <div className="flex justify-center items-center w-full">
            <div className="px-6 lg:w-3/5 md:lg:w-3/5 ">
              <p className="mb-14 mt-6 font-georgiaBold text-5xl md:text-7xl lg:text-7xl text-grey-400 text-center">
                Ifeanyi Clement Nweke
              </p>
              <img
                src={IfeanyiClementNwekeImage}
                alt="Ifeanyi Clement Nweke Head Lawyer & Business Relations at Land Tower Limited"
                title="Ifeanyi Clement Nweke Head Lawyer & Business Relations at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Head Lawyer & Business Relations
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Ifeanyi Clement Nweke is a Lawyer, Writer, Finance and Media
                  Consultant. He holds a Bachelor in law ( LLB) from Nnamdi
                  Azikiwe University, a Law School Qualification Certificate
                  from Nigerian Law School, Lagos Campus, a Post Graduate
                  Diploma (PGD) in Journalism from International Institute of
                  Journalism and Associate of the institute of Chartered
                  Secretary, Nigeria (ACIS) (in view).
                </p>
                <p className="py-3">
                  Ifeanyi began his legal career as an active corporate
                  solicitor at Zuriel Consulting Limited (ZCL Solicitors). In
                  the course of his career there, in 2016, he authored the
                  article “Getting a Moneylenders Article in Lagos”. The first
                  article to create awareness on how to obtain a Moneylenders
                  license in Lagos. In January 2017, he relocated to Abuja where
                  he worked in active litigation for various law firms before
                  being employed by Outsource Global. Where he rose to a
                  prominent position of a Managing Associate.
                </p>
                <p className="py-3">
                  In Abuja, he continued as a Moneylending expert and
                  consultant, further publishing an article on lawyard on “How
                  to obtain a Moneylending license in Abuja” in 2018. In
                  addition, Ifeanyi has authored articles in diverse fields such
                  as business setups, SME finance, debt recovery, intellectual
                  property, and media related affairs such as advertising,
                  public relation, news reporting and writing amongst others. He
                  is currently working as a legal journalist to DNL legal &
                  styles. He also recently worked for Cannon Projects, a
                  property development and real estate company as its Executive
                  Assistant. Advising on both legal and business related issues.
                </p>
                <p className="py-3">
                  Also, over the years, Ifeanyi has advised various corporate
                  bodies and SMEs on Moneylending, obtaining loans and how to
                  structure their corporate body to achieve maximum
                  effectiveness, whatever the nature of their business might be.
                  In a nutshell Ifeanyi is practicing as an exceptional
                  Corporate commercial lawyer, and innovative Finance and Media
                  consultant. He is the Managing Partner of Clembert Partners, a
                  law firm with its head office in Abuja.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default IfeanyiClementNweke;
