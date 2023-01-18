import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import NzeakorIfeanyichukwuImage from "../../../assets/img/ltl-team-Nzeakor-Ifeanyichukwu.png";

function NzeakorIfeanyichukwu() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Nzeakor Ifeanyichukwu • Land Tower";
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
                Nzeakor Ifeanyichukwu
              </p>
              <img
                src={NzeakorIfeanyichukwuImage}
                alt="Nzeakor Ifeanyichukwu Head of Civil and Structural Engineer at Land Tower Limited"
                title="Nzeakor Ifeanyichukwu Head of Civil and Structural Engineer at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Head of Civil and Structural Engineering
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Nzeakor Ifeanyichukwu, is a Trained and Registered Engineer.
                  He is actively involved in Civil/Structural Engineering
                  Consulting and Construction. The experience garnered are under
                  the following areas, Civil/Structural Engineering Project
                  Management and Monitoring, Project Design and Appraisals (for
                  Residential, Schools, Banks, Offices and Mixed-use buildings
                  and Roads), Piling and Foundation Analysis, Design and
                  Construction, Contract Administration and Scheduling,
                  Post-Tensioning and Pre-Stressed Concrete, Estimation and
                  Costing, Quality Control and Quality Assurance, Safety and
                  Impact Assessment, Maintenance and Planning, Execution and
                  Commissioning, Use of Computer-Aided Design (CAD), Mastery of
                  Design Spreadsheets, etc.
                </p>
                <p className="py-3">
                  He obtained his first Degree (2nd Class, Upper Division) in
                  Civil Engineering from the University of Benin, Edo State.
                  With over 14 Years experience in the Civil/Structural
                  Engineering Construction/Consulting Industry, moving from a
                  Pupil Engineer to a Consultant. He is happily married.
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

export default NzeakorIfeanyichukwu;
