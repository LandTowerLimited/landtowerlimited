import React, { useEffect, useState } from "react";
import ImageViewer from "../../components/imageViewer/imageViewer";
import PagesHeader from "../../components/header/pagesHeader";

function ProjectsGallery() {
  const [cardDisplayed, setCardDisplayed] = useState(false);
  const [imageViewerEnabled, setImageViewerEnabled] = useState(false);
  const [currentGalleryImages, setCurrentGalleryImages] = useState(0);
  const [currentGalleryName, setCurrentGalleryName] = useState("");

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Projects Gallery • Land Tower";
    window.scrollTo(0, 0);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  const images = [
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669578924/Construction%20Projects/IMG_20220708_130310_471_y0ans1.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721839/Construction%20Projects/IMG_20220708_130236_933_nmmokb.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721839/Construction%20Projects/IMG_20220702_135832_764_byfmpu.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721838/Construction%20Projects/IMG_20220702_135747_653_hsaoq3.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721837/Construction%20Projects/IMG_20220702_135728_598_b9g4ke.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721836/Construction%20Projects/IMG_20220702_135705_250_g4mse2.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721840/Construction%20Projects/IMG_20220708_133435_763_obkzhn.jpg",

      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721827/Construction%20Projects/IMG_20220417_084141_347_bthjmi.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721827/Construction%20Projects/IMG_20220417_082447_390_d8xepx.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721828/Construction%20Projects/IMG_20220417_084129_067_rwnnze.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721828/Construction%20Projects/IMG_20220417_084226_380_nmm7j0.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721830/Construction%20Projects/IMG_20220417_084141_347_wbwjjx.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721832/Construction%20Projects/IMG_20220417_084433_227_cargpe.jpg",

      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721828/Construction%20Projects/IMG_20220412_091347_566_sk1gil.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721832/Construction%20Projects/IMG_20220420_122040_738_flad0p.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721893/Project%20Finishings/PHOTO-2022-11-15-09-59-45_lf9ybd.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721898/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_eo1zbu.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721893/Project%20Finishings/PHOTO-2022-11-15-09-59-45_lf9ybd.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721893/Project%20Finishings/PHOTO-2022-11-15-09-59-45_lf9ybd.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721893/Project%20Finishings/PHOTO-2022-11-15-09-59-45_lf9ybd.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721893/Project%20Finishings/PHOTO-2022-11-15-09-59-45_lf9ybd.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721893/Project%20Finishings/PHOTO-2022-11-15-09-59-45_lf9ybd.jpg",
    ],
  ];

  const handleShowGallery = (projectName, galleryNumber) => {
    setCurrentGalleryName(projectName);
    setCurrentGalleryImages(galleryNumber);
    setImageViewerEnabled(!imageViewerEnabled);
  };

  /** Reusable components for Projects Gallery */
  // eslint-disable-next-line react/no-unstable-nested-components
  function Gallery({ image, galleryNumber, title = "", projectName = "" }) {
    return (
      <div className="cursor-pointer">
        <p
          title={title}
          className="font-graphikSemibold text-xl text-grey-400 mb-2"
        >
          {projectName}
        </p>
        <div
          onClick={() => handleShowGallery(projectName, galleryNumber)}
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
      <div className="absolute h-screen w-screen">
        {imageViewerEnabled ? (
          <ImageViewer
            imageViewerEnabled={imageViewerEnabled}
            setImageViewerEnabled={setImageViewerEnabled}
            galleryName={currentGalleryName}
            currentGalleryImages={images[currentGalleryImages]}
          />
        ) : (
          <span />
        )}
      </div>
      <PagesHeader
        setCardDisplayed={setCardDisplayed}
        cardDisplayed={cardDisplayed}
      />
      <div className="flex justify-center items-center w-full ">
        <div className="px-6 lg:w-3/5 md:lg:w-3/5 ">
          <p className="mt-6 mb-10 font-georgiaBold text-7xl text-grey-400 text-center leading-tight">
            Projects Gallery
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-4 gap-2">
          <Gallery
            galleryNumber={0}
            title="Construction Projects"
            projectName="Construction Projects"
            image="https://res.cloudinary.com/dipzi1vv6/image/upload/v1669578924/Construction%20Projects/IMG_20220708_130310_471_y0ans1.jpg"
          />
          <Gallery
            galleryNumber={1}
            title="Project Finishings"
            projectName="Project Finishings"
            image="https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721893/Project%20Finishings/PHOTO-2022-11-15-09-59-45_lf9ybd.jpg"
          />
          <Gallery
            galleryNumber={2}
            title="Architectural Designs"
            projectName="Architectural Designs"
            image="https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721898/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_eo1zbu.jpg"
          />
          <Gallery
            galleryNumber={3}
            title="Interiors"
            projectName="Interiors"
            image="https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721897/Interiors/PHOTO-2022-11-15-10-01-53_piig14.jpg"
          />
          <Gallery
            galleryNumber={4}
            title="Furniture"
            projectName="Furniture"
            image="https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721854/Furniture/PHOTO-2022-11-15-09-36-04_ttg7gu.jpg"
          />
          <Gallery
            galleryNumber={5}
            title="Gates"
            projectName="Gates"
            image="https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721858/Gates/PHOTO-2022-11-15-09-37-45_owgeim.jpg"
          />
          <Gallery
            galleryNumber={6}
            title="Swimming Pools"
            projectName="Swimming Pools"
            image="https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721860/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_dhqzgf.jpg"
          />
          <Gallery
            galleryNumber={7}
            title="Electrical Installations"
            projectName="Electrical Installations"
            image="https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721856/Electrical%20Installations/PHOTO-2022-11-15-09-36-41_uacsui.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsGallery;
