import React, { useEffect, useState } from "react";
import ImageViewer from "../../components/imageViewer/imageViewer";
import PagesHeader from "../../components/header/pagesHeader";

import constructionProjectsImage1 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220708_130310_471_y0ans1.jpg";
import constructionProjectsImage2 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220708_130236_933_nmmokb.jpg";
import constructionProjectsImage3 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220702_135832_764_byfmpu.jpg";
import constructionProjectsImage4 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220702_135747_653_hsaoq3.jpg";
import constructionProjectsImage5 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220702_135728_598_b9g4ke.jpg";
import constructionProjectsImage6 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220702_135705_250_g4mse2.jpg";
import constructionProjectsImage7 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220708_133435_763_obkzhn.jpg";
import constructionProjectsImage8 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220417_084141_347_bthjmi.jpg";
import constructionProjectsImage9 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220417_082447_390_d8xepx.jpg";
import constructionProjectsImage10 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220417_084129_067_rwnnze.jpg";
import constructionProjectsImage11 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220417_084226_380_nmm7j0.jpg";
import constructionProjectsImage12 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220417_084141_347_wbwjjx.jpg";
import constructionProjectsImage13 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220417_084433_227_cargpe.jpg";
import constructionProjectsImage14 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220412_091347_566_sk1gil.jpg";
import constructionProjectsImage15 from "../../assets/img/projectsGallery/constructionProjects/IMG_20220420_122040_738_flad0p.jpg";
import constructionProjectsImage16 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-39-01_mvjitt.jpg";
import constructionProjectsImage17 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-43-12_axlez4.jpg";
import constructionProjectsImage18 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-43-12_ensxh9.jpg";
import constructionProjectsImage19 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-43-12_i0fslv.jpg";
import constructionProjectsImage20 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-43-12_tf5pd3.jpg";
import constructionProjectsImage21 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-43-12_w45oe4.jpg";
import constructionProjectsImage22 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-43-12_xhih6h.jpg";
import constructionProjectsImage23 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-43-12_yt0wfy.jpg";
import constructionProjectsImage24 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-43-12_zxyx2b.jpg";
import constructionProjectsImage25 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-45-26_x1pcqb.jpg";
import constructionProjectsImage26 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-45-26_xebwb6.jpg";
import constructionProjectsImage27 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_aznnww.jpg";
import constructionProjectsImage28 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_e2clpy.jpg";
import constructionProjectsImage29 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_elg5eo.jpg";
import constructionProjectsImage30 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_fz3jyh.jpg";
import constructionProjectsImage31 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_geilhq.jpg";
import constructionProjectsImage32 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_hnurzk.jpg";
import constructionProjectsImage33 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_hpiexi.jpg";
import constructionProjectsImage34 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_iuiwim.jpg";
import constructionProjectsImage35 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_kbuxsr.jpg";
import constructionProjectsImage36 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_lvxoaf.jpg";
import constructionProjectsImage37 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_mvwmjl.jpg";
import constructionProjectsImage38 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_o6vlr3.jpg";
import constructionProjectsImage39 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_ocihmg.jpg";
import constructionProjectsImage40 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_ovln4b.jpg";
import constructionProjectsImage41 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_plqczh.jpg";
import constructionProjectsImage42 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_vjwy8o.jpg";
import constructionProjectsImage43 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_w8kmwk.jpg";
import constructionProjectsImage44 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_yz2vff.jpg";
import constructionProjectsImage45 from "../../assets/img/projectsGallery/constructionProjects/PHOTO-2022-11-15-09-50-54_zaxaza.jpg";

import projectFinishingsImage1 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-59-45_lf9ybd.jpg";
import projectFinishingsImage2 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-59-45_xwbe67.jpg";
import projectFinishingsImage3 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-59-45_spnk32.jpg";
import projectFinishingsImage4 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-59-45_rntmek.jpg";
import projectFinishingsImage5 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-59-45_nufzcg.jpg";
import projectFinishingsImage6 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-59-45_n383qb.jpg";
import projectFinishingsImage7 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-59-45_ef83vx.jpg";
import projectFinishingsImage8 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-59-45_bv0v9x.jpg";
import projectFinishingsImage9 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-59-45_aqyl26.jpg";
import projectFinishingsImage10 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-59-45_aboaqu.jpg";
import projectFinishingsImage11 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-50-54_whhash.jpg";
import projectFinishingsImage12 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-37-45_uaqgww.jpg";
import projectFinishingsImage13 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-37-45_jxyekr.jpg";
import projectFinishingsImage14 from "../../assets/img/projectsGallery/projectFinishings/PHOTO-2022-11-15-09-37-45_cvgfwj.jpg";
import projectFinishingsImage15 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220710_152853_438_dypfso.jpg";
import projectFinishingsImage16 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220710_152826_877_jdl170.jpg";
import projectFinishingsImage17 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220710_152747_454_pmcudi.jpg";
import projectFinishingsImage18 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220710_152659_629_thv7de.jpg";
import projectFinishingsImage19 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220710_152628_790_x79dp0.jpg";
import projectFinishingsImage20 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220710_152611_197_zg35po.jpg";
import projectFinishingsImage21 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220710_143548_805_lqvq7v.jpg";
import projectFinishingsImage22 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220710_142059_853_r088uv.jpg";
import projectFinishingsImage23 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220710_142023_737_cmqvas.jpg";
import projectFinishingsImage24 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220506_130156_147_ccnz7z.jpg";
import projectFinishingsImage25 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220417_084425_451_neb5qf.jpg";
import projectFinishingsImage26 from "../../assets/img/projectsGallery/projectFinishings/IMG_20220417_084413_722_fuv1je.jpg";

import architecturalDesignsImage1 from "../../assets/img/projectsGallery/architecturalDesigns/PHOTO-2022-11-15-10-01-53_eo1zbu.jpg";

import interiorsImage1 from "../../assets/img/projectsGallery/interiors/PHOTO-2022-11-15-10-01-53_piig14.jpg";

import furnitureImage1 from "../../assets/img/projectsGallery/furniture/PHOTO-2022-11-15-09-36-04_ttg7gu.jpg";

import aluminiumFabricationImage1 from "../../assets/img/projectsGallery/aluminiumFabrication/PHOTO-2022-11-15-09-37-45_owgeim.jpg";

import swimmingPoolsImage1 from "../../assets/img/projectsGallery/swimmingPools/PHOTO-2022-11-15-09-41-42_dhqzgf.jpg";

import electricalInstallationsImage1 from "../../assets/img/projectsGallery/electricalInstallations/PHOTO-2022-11-15-09-36-41_uacsui.jpg";

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
      constructionProjectsImage1,
      constructionProjectsImage2,
      constructionProjectsImage3,
      constructionProjectsImage4,
      constructionProjectsImage5,
      constructionProjectsImage6,
      constructionProjectsImage7,
      constructionProjectsImage8,
      constructionProjectsImage9,
      constructionProjectsImage10,
      constructionProjectsImage11,
      constructionProjectsImage12,
      constructionProjectsImage13,
      constructionProjectsImage14,
      constructionProjectsImage15,
      constructionProjectsImage10,
      constructionProjectsImage11,
      constructionProjectsImage12,
      constructionProjectsImage13,
      constructionProjectsImage14,
      constructionProjectsImage15,
      constructionProjectsImage16,
      constructionProjectsImage17,
      constructionProjectsImage18,
      constructionProjectsImage19,
      constructionProjectsImage20,
      constructionProjectsImage21,
      constructionProjectsImage22,
      constructionProjectsImage23,
      constructionProjectsImage24,
      constructionProjectsImage25,
      constructionProjectsImage26,
      constructionProjectsImage27,
      constructionProjectsImage28,
      constructionProjectsImage29,
      constructionProjectsImage30,
      constructionProjectsImage31,
      constructionProjectsImage32,
      constructionProjectsImage33,
      constructionProjectsImage34,
      constructionProjectsImage35,
      constructionProjectsImage36,
      constructionProjectsImage37,
      constructionProjectsImage38,
      constructionProjectsImage39,
      constructionProjectsImage40,
      constructionProjectsImage41,
      constructionProjectsImage42,
      constructionProjectsImage43,
      constructionProjectsImage44,
      constructionProjectsImage45,
    ],
    [
      projectFinishingsImage1,
      projectFinishingsImage2,
      projectFinishingsImage3,
      projectFinishingsImage4,
      projectFinishingsImage5,
      projectFinishingsImage6,
      projectFinishingsImage7,
      projectFinishingsImage8,
      projectFinishingsImage9,
      projectFinishingsImage10,
      projectFinishingsImage11,
      projectFinishingsImage12,
      projectFinishingsImage13,
      projectFinishingsImage14,
      projectFinishingsImage15,
      projectFinishingsImage16,
      projectFinishingsImage17,
      projectFinishingsImage18,
      projectFinishingsImage19,
      projectFinishingsImage20,
      projectFinishingsImage21,
      projectFinishingsImage22,
      projectFinishingsImage23,
      projectFinishingsImage24,
      projectFinishingsImage25,
      projectFinishingsImage26,
    ],
    [architecturalDesignsImage1],
    [projectFinishingsImage1],
    [projectFinishingsImage1],
    [projectFinishingsImage1],
    [projectFinishingsImage1],
    [projectFinishingsImage1],
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
    <div className="">
      {imageViewerEnabled ? (
        <div className="relative">
          <ImageViewer
            imageViewerEnabled={imageViewerEnabled}
            setImageViewerEnabled={setImageViewerEnabled}
            galleryName={currentGalleryName}
            currentGalleryImages={images[currentGalleryImages]}
          />
        </div>
      ) : (
        <div>
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

          <div className="flex justify-center items-center w-ful mb-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-4 gap-10">
              <Gallery
                galleryNumber={0}
                title="Construction Projects"
                projectName="Construction Projects"
                image={constructionProjectsImage1}
              />
              <Gallery
                galleryNumber={1}
                title="Project Finishings"
                projectName="Project Finishings"
                image={projectFinishingsImage1}
              />
              <Gallery
                galleryNumber={2}
                title="Architectural Designs"
                projectName="Architectural Designs"
                image={architecturalDesignsImage1}
              />
              <Gallery
                galleryNumber={3}
                title="Interiors"
                projectName="Interiors"
                image={interiorsImage1}
              />
              <Gallery
                galleryNumber={4}
                title="Furniture"
                projectName="Furniture"
                image={furnitureImage1}
              />
              <Gallery
                galleryNumber={5}
                title="Aluminium Fabrication"
                projectName="Aluminium Fabrication"
                image={aluminiumFabricationImage1}
              />
              <Gallery
                galleryNumber={6}
                title="Swimming Pools"
                projectName="Swimming Pools"
                image={swimmingPoolsImage1}
              />
              <Gallery
                galleryNumber={7}
                title="Electrical Installations"
                projectName="Electrical Installations"
                image={electricalInstallationsImage1}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsGallery;
