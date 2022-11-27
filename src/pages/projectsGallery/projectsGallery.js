import React, { useEffect, useState } from "react";
import ImageViewer from "../../components/imageViewer/imageViewer";
import PagesHeader from "../../components/header/pagesHeader";

function ProjectsGallery() {
  const [cardDisplayed, setCardDisplayed] = useState(false);
  const [imageViewerEnabled, setImageViewerEnabled] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Projects Gallery • Land Tower";
    window.scrollTo(0, 0);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** Reusable components for Projects Gallery */
  // eslint-disable-next-line react/no-unstable-nested-components
  function Gallery({ image, title = "", projectName = "" }) {
    return (
      <div className="cursor-pointer">
        <p
          title={title}
          className="font-graphikSemibold text-xl text-grey-400 mb-6"
        >
          {projectName}
        </p>
        <div
          onClick={() => setImageViewerEnabled(!imageViewerEnabled)}
          aria-hidden="true"
          className="relative rounded-2xl w-72 h-48 md:w-96 md:h-56 lg:w-96 lg:h-56 opacity-100 hover:opacity-95"
        >
          <img
            alt="Land Tower Construction Projects"
            title="Land Tower Construction Projects"
            src={image}
            className="relative object-cover w-72 h-48 md:w-96 md:h-56 lg:w-96 lg:h-56 bg-cover bg-center p-0 rounded-2xl border-4 hover:border-landTower-gold-color"
          />
          <div className="absolute bottom-[17px] right-[13px] w-10 h-10 bg-black rounded-full border-2 border-landTower-gold-color" />
          <p
            title="10+ Images"
            className="absolute bottom-6 right-5 text-base font-graphikMedium text-landTower-gold-color"
          >
            10+
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div>
        {imageViewerEnabled ? (
          <ImageViewer
            imageViewerEnabled={imageViewerEnabled}
            setImageViewerEnabled={setImageViewerEnabled}
          />
        ) : (
          <span />
        )}
      </div>
      <div>
        <PagesHeader
          setCardDisplayed={setCardDisplayed}
          cardDisplayed={cardDisplayed}
        />
        <div className="flex justify-center items-center w-full ">
          <div className="px-6 lg:w-3/5 md:lg:w-3/5 ">
            <p className="mt-6 mb-10 font-georgiaBold text-7xl text-grey-400 text-center">
              Projects Gallery
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-4">
            <Gallery
              title="Construction Projects"
              projectName="Construction Projects"
              image="https://res.cloudinary.com/dipzi1vv6/image/upload/v1669578924/IMG_20220708_130310_471_y0ans1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsGallery;
