import React, { useEffect, useState } from "react";
import PagesHeader from "../../../components/header/pagesHeader";
import Footer from "../../../components/footer/footer";
import ChristopherNwankwoImage from "../../../assets/img/ltl-team-Christopher-Nwankwo.png";

function ChristopherNwankwo() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Christopher Nwankwo • Land Tower";
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
                Christopher Nwankwo
              </p>
              <img
                src={ChristopherNwankwoImage}
                alt="Christopher Nwankwo Head of Paints and Decorations at Land Tower Limited"
                title="Christopher Nwankwo Head of Paints and Decorations at Land Tower Limited"
                className="mb-6 flex justify-center items-center w-full"
              />
              <p className="my-4 font-georgiaBold text-xl md:text-4xl lg:text-4xl text-grey-400 text-center">
                Head of Paints and Decorations
              </p>
              <p className="font-georgiaBold text-lg md:text-2xl lg:text-2xl text-landTower-gold3-color text-center">
                Land Tower Limited
              </p>
              <div className="mt-6 mb-20 font-graphikRe gular text-base md:text-lg lg:text-lg text-grey-400 text-center">
                <p className="py-3">
                  Christopher Nwankwo is an expert in paint production with over
                  10 years of experience, he is highly specialized in both
                  painting, screeding and pop. He went to government college
                  Arochukwu in Abia state. He has worked in numerous production
                  companies with various years of experience , he started his
                  professional career with prosper paint company as a work man
                  before being promoted to a foreman.
                </p>
                <p className="py-3">
                  He later worked with dunamis paint company, elinuol paint
                  company, King teste paint company in Abia state and Prince
                  paint company in lmo state as a contractor. Mr Chris nwankwo
                  alias mr Chris is also an industrial and domestic cleaner
                  which makes him the best among the rest.
                </p>
                <p className="py-3">
                  He always exceed limit in every project he handled. His
                  hobbies include watching football and listening to music. He
                  is happily married with kids.
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

export default ChristopherNwankwo;
