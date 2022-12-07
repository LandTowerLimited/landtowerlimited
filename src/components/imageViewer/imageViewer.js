import React, { useState } from "react";
import { ReactComponent as NextIcon } from "../../assets/svg/nextIcon.svg";
import { ReactComponent as PreviousIcon } from "../../assets/svg/previousIcon.svg";
import { ReactComponent as CancelIconBig } from "../../assets/svg/cancelIconBig.svg";

function ImageViewer({
  imageViewerEnabled,
  setImageViewerEnabled,
  galleryName,
  currentGalleryImages,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = currentGalleryImages.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    // console.log("next");
  };

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    // console.log("prev");
  };

  return (
    <div className="absolute h-screen w-screen z-20 px-10 pt-6 bg-slate-900">
      <div>
        <button
          type="button"
          title="Close Gallery"
          className="absolute right-10 top-10"
          onClick={() => setImageViewerEnabled(!imageViewerEnabled)}
        >
          <CancelIconBig />
        </button>
        <div className="flex items-center justify-between mx-0">
          <button
            type="button"
            title="Previous Image"
            onClick={() => previousSlide()}
            className="p-5 rounded-full h-20 w-20 bg-black border-4 border-landTower-gold-color hover:border-white flex justify-center items-center"
          >
            <PreviousIcon />
          </button>
          <div className="">
            <p className="pb-2 text-landTower-gold-color font-georgiaBold text-2xl text-center">
              Land Tower Limited
            </p>
            <button type="button" className="text-white">
              <img
                alt={galleryName}
                title={galleryName}
                src={currentGalleryImages[currentSlide]}
                className="relative max-h-[500px] "
              />
            </button>
            <p className=" text-white font-graphikRegular text-base text-center ">
              Image {currentSlide + 1} of {slideLength}
            </p>
          </div>
          <button
            type="button"
            title="Next Image"
            onClick={() => nextSlide()}
            className="p-5 rounded-full h-20 w-20 bg-black border-4 border-landTower-gold-color hover:border-white flex justify-center items-center"
          >
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageViewer;
