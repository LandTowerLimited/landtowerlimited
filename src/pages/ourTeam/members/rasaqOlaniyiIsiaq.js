import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import RasaqOlaniyiIsiaqImage from "../../../assets/img/ltl-team-Rasaq-Olaniyi-Isiaq.png";

function RasaqOlaniyiIsiaq() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Rasaq Olaniyi Isiaq • Land Tower";
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
                Rasaq Olaniyi Isiaq
              </p>
              <img
                src={RasaqOlaniyiIsiaqImage}
                alt="Rasaq Olaniyi Isiaq Lead Quantity Surveyor at Land Tower Limited"
                title="Rasaq Olaniyi Isiaq Lead Quantity Surveyor at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Lead Quantity Surveyor
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Rasaq Olaniyi Isiaq is a seasoned Quantity Surveyor with over
                  5 years working experience. He graduated from the University
                  of Ilorin with second class upper division in Quantity
                  Surveying and undergo his one year mandatory NYSC service at
                  Ministry of Works, state secretariat Owerri, Imo state. He
                  started his career with Avalon and Partner, Ibadan. A QS
                  consulting firm saddled with contract administration and
                  practice application, quantification, estimating and Tender
                  analysis and evaluation.
                </p>
                <p className="py-3">
                  He later joined Powerflow Installation Limited, MEP
                  contracting firm as Assistant QS/Procurement Officer with
                  responsibilities for handling issues on procurement, inventory
                  system management, budget tracking and resources scheduling
                  before proceeding to join Powerec Global Service Nigeria
                  Limited as MEP Quantity Surveyor/Contract Administrator
                  managing various specialist sub contractor engagement via
                  negotiations, site measurement, valuation of work done and
                  payment advice among others.
                </p>
                <p className="py-3">
                  Rasaq is an unbiased mediator ensuring parties to contract
                  diligently fulfil his obligations as enshrined in the
                  condition of contract. He is always inquisitive to career
                  advancement and profers cost benefit approach to sucessful
                  project delivery via understanding of the construction
                  methodology, alternative cost saving measure and effective
                  time management. He is also a cost expert in Building
                  Automation and Building Management System.
                </p>
                <p className="py-3">
                  Rasaq is a member of the Nigeria Institute of Quantity
                  Surveyors and loves the art of writing.
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

export default RasaqOlaniyiIsiaq;
