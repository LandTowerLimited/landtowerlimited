import React, { useEffect, useState } from "react";
import PagesHeader from "../../components/header/pagesHeader";

function Gallery() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Projects Gallery • Land Tower";
    window.scrollTo(0, 0);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  return (
    <div>
      <PagesHeader
        setCardDisplayed={setCardDisplayed}
        cardDisplayed={cardDisplayed}
      />
    </div>
  );
}

export default Gallery;
