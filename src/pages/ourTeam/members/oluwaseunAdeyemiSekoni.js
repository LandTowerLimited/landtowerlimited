import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import OluwaseunAdeyemiSekoniImage from "../../../assets/img/ltl-team-Oluwaseun-Adeyemi-Sekoni.png";

function OluwaseunAdeyemiSekoni() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Oluwaseun Adeyemi Sekoni • Land Tower";
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
                Oluwaseun Adeyemi Sekoni
              </p>
              <img
                src={OluwaseunAdeyemiSekoniImage}
                alt="Oluwaseun Adeyemi Sekoni Head of Mechanical, Electrical & Plumbing Engineer at Land Tower Limited"
                title="Oluwaseun Adeyemi Sekoni Head of Mechanical, Electrical & Plumbing Engineer at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Head of Mechanical, Electrical & Plumbing Engineering
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Oluwaseun Adeyemi Sekoni is an Engineer of over 10 years of
                  experience. He graduated from Ladoke Akintola University of
                  Technology Ogbomoso with Second Class division in
                  Electrical/Electronic Engineering. Sequel to the completion of
                  the mandatory NYSC in year 2012, Engr. Sekoni proceeded to
                  acquire additional qualification at University of Ibadan,
                  Ibadan, Oyo State, where he obtained a Master of Science in
                  Electrical/Electronic Engineering.
                </p>
                <p className="py-3">
                  He started his professional career with Oscar Fiber Nigeria
                  Limited and later joined Periwinkle Residence Ltd as
                  Electrical/Mechanical Engineer before proceeding to join
                  African United Consultants Ltd as Lead Electrical/Mechanical
                  Engineer where he is currently seeing to the actuality of the
                  aim and objectives of AUC. Engr. Sekoni ensures that
                  compliance standards are followed whilst displaying financial
                  prudence in the allocation of resources for the projects at
                  hand.
                </p>
                <p className="py-3">
                  He is also a goal getter. He is a very good listener of ideas
                  who also loves to think outside the box to create solutions to
                  engineering problems whilst always bringing a huge sense of
                  humor into what he does and this adds a whole new dimension to
                  his work.
                </p>
                <p className="py-3">
                  His hobbies include researching, reading, and carrying out
                  engineering designs. He is a member of Nigerian Society of
                  Engineers and a Registered Engineer with the Council for the
                  Regulation of Engineering in Nigeria. He is happily married
                  with children.
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

export default OluwaseunAdeyemiSekoni;
