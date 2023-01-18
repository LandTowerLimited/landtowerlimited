import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
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
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721838/Construction%20Projects/IMG_20220702_135747_653_hsaoq3.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721839/Construction%20Projects/IMG_20220702_135832_764_byfmpu.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721840/Construction%20Projects/IMG_20220708_133435_763_obkzhn.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721837/Construction%20Projects/IMG_20220702_135728_598_b9g4ke.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721836/Construction%20Projects/IMG_20220702_135705_250_g4mse2.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721832/Construction%20Projects/IMG_20220420_122040_738_flad0p.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721832/Construction%20Projects/IMG_20220420_122034_047_cti17j.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721828/Construction%20Projects/IMG_20220412_091347_566_sk1gil.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721832/Construction%20Projects/IMG_20220417_084433_227_cargpe.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721830/Construction%20Projects/IMG_20220417_084141_347_wbwjjx.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721828/Construction%20Projects/IMG_20220417_084129_067_rwnnze.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721828/Construction%20Projects/IMG_20220417_084226_380_nmm7j0.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721827/Construction%20Projects/IMG_20220417_082447_390_d8xepx.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721827/Construction%20Projects/IMG_20220417_084141_347_bthjmi.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721887/Construction%20Projects/PHOTO-2022-11-15-09-50-54_geilhq.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721886/Construction%20Projects/PHOTO-2022-11-15-09-50-54_aznnww.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721884/Construction%20Projects/PHOTO-2022-11-15-09-50-54_w8kmwk.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721884/Construction%20Projects/PHOTO-2022-11-15-09-50-54_yz2vff.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721884/Construction%20Projects/PHOTO-2022-11-15-09-50-54_o6vlr3.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721884/Construction%20Projects/PHOTO-2022-11-15-09-50-54_e2clpy.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721883/Construction%20Projects/PHOTO-2022-11-15-09-50-54_hpiexi.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721882/Construction%20Projects/PHOTO-2022-11-15-09-50-54_lvxoaf.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721882/Construction%20Projects/PHOTO-2022-11-15-09-50-54_vjwy8o.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721882/Construction%20Projects/PHOTO-2022-11-15-09-50-54_iuiwim.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721882/Construction%20Projects/PHOTO-2022-11-15-09-50-54_hnurzk.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721881/Construction%20Projects/PHOTO-2022-11-15-09-50-54_fz3jyh.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721881/Construction%20Projects/PHOTO-2022-11-15-09-50-54_plqczh.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721881/Construction%20Projects/PHOTO-2022-11-15-09-50-54_mvwmjl.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721881/Construction%20Projects/PHOTO-2022-11-15-09-50-54_kbuxsr.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721880/Construction%20Projects/PHOTO-2022-11-15-09-50-54_zaxaza.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721880/Construction%20Projects/PHOTO-2022-11-15-09-50-54_ocihmg.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721880/Construction%20Projects/PHOTO-2022-11-15-09-50-54_elg5eo.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721880/Construction%20Projects/PHOTO-2022-11-15-09-50-54_ovln4b.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721878/Construction%20Projects/PHOTO-2022-11-15-09-45-26_x1pcqb.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721877/Construction%20Projects/PHOTO-2022-11-15-09-45-26_xebwb6.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721876/Construction%20Projects/PHOTO-2022-11-15-09-43-12_ensxh9.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721876/Construction%20Projects/PHOTO-2022-11-15-09-43-12_axlez4.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721875/Construction%20Projects/PHOTO-2022-11-15-09-43-12_xhih6h.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721875/Construction%20Projects/PHOTO-2022-11-15-09-43-12_yt0wfy.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721875/Construction%20Projects/PHOTO-2022-11-15-09-43-12_i0fslv.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721874/Construction%20Projects/PHOTO-2022-11-15-09-43-12_tjvpst.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721874/Construction%20Projects/PHOTO-2022-11-15-09-43-12_tf5pd3.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721874/Construction%20Projects/PHOTO-2022-11-15-09-43-12_w45oe4.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721874/Construction%20Projects/PHOTO-2022-11-15-09-43-12_zxyx2b.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721859/Construction%20Projects/PHOTO-2022-11-15-09-39-01_mvjitt.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721893/Project%20Finishings/PHOTO-2022-11-15-09-59-45_lf9ybd.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721889/Project%20Finishings/PHOTO-2022-11-15-09-59-45_rntmek.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721891/Project%20Finishings/PHOTO-2022-11-15-09-59-45_xwbe67.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721892/Project%20Finishings/PHOTO-2022-11-15-09-59-45_bv0v9x.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721892/Project%20Finishings/PHOTO-2022-11-15-09-59-45_spnk32.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721892/Project%20Finishings/PHOTO-2022-11-15-09-59-45_ef83vx.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721891/Project%20Finishings/PHOTO-2022-11-15-09-59-45_aboaqu.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721890/Project%20Finishings/PHOTO-2022-11-15-09-59-45_aqyl26.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721890/Project%20Finishings/PHOTO-2022-11-15-09-59-45_nufzcg.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721890/Project%20Finishings/PHOTO-2022-11-15-09-59-45_n383qb.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721847/Project%20Finishings/IMG_20220710_152826_877_jdl170.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721847/Project%20Finishings/IMG_20220710_152659_629_thv7de.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721846/Project%20Finishings/IMG_20220710_152853_438_dypfso.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721845/Project%20Finishings/IMG_20220710_152747_454_pmcudi.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721844/Project%20Finishings/IMG_20220710_152611_197_zg35po.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721844/Project%20Finishings/IMG_20220710_152628_790_x79dp0.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721843/Project%20Finishings/IMG_20220710_143548_805_lqvq7v.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721843/Project%20Finishings/IMG_20220710_142059_853_r088uv.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721842/Project%20Finishings/IMG_20220710_142023_737_cmqvas.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721831/Project%20Finishings/IMG_20220417_084425_451_neb5qf.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721829/Project%20Finishings/IMG_20220417_084413_722_fuv1je.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721835/Project%20Finishings/IMG_20220506_130156_147_ccnz7z.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721879/Project%20Finishings/PHOTO-2022-11-15-09-50-54_whhash.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721859/Project%20Finishings/PHOTO-2022-11-15-09-37-45_uaqgww.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721858/Project%20Finishings/PHOTO-2022-11-15-09-37-45_jxyekr.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721858/Project%20Finishings/PHOTO-2022-11-15-09-37-45_cvgfwj.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721898/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_eo1zbu.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721899/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_yxbtxm.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721897/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_kixqaa.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721897/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_b7hu1d.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721896/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_mhfavn.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721896/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_qydcl0.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721896/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_e1pczc.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721895/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_sboayx.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721895/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_ji4siy.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721893/Architectural%20Designs/PHOTO-2022-11-15-10-01-53_zkwxqg.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721897/Interiors/PHOTO-2022-11-15-10-01-53_piig14.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721898/Interiors/PHOTO-2022-11-15-10-01-53_bxskue.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721898/Interiors/PHOTO-2022-11-15-10-01-53_xomm4f.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721897/Interiors/PHOTO-2022-11-15-10-01-53_ukgumn.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721894/Interiors/PHOTO-2022-11-15-10-01-53_zonpwn.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721894/Interiors/PHOTO-2022-11-15-10-01-53_ulkphi.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721893/Interiors/PHOTO-2022-11-15-10-01-53_fi8dlp.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721885/Interiors/PHOTO-2022-11-15-09-50-54_vvmvyj.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721885/Interiors/PHOTO-2022-11-15-09-50-54_dbxtjz.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721884/Interiors/PHOTO-2022-11-15-09-50-54_bgnxqb.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721883/Interiors/PHOTO-2022-11-15-09-50-54_o7etk4.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721881/Interiors/PHOTO-2022-11-15-09-50-54_wlcob8.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721880/Interiors/PHOTO-2022-11-15-09-50-54_r28o4x.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721879/Interiors/PHOTO-2022-11-15-09-50-54_wvpu6o.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721878/Interiors/PHOTO-2022-11-15-09-45-26_fm31al.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721851/Interiors/PHOTO-2022-11-15-09-36-04_pwxzw0.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721847/Interiors/PHOTO-2022-11-15-09-36-04_shja0v.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721833/Interiors/IMG_20220428_110319_861_znab7p.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721833/Interiors/IMG_20220428_110356_946_gxgcxp.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721854/Furniture/PHOTO-2022-11-15-09-36-04_ttg7gu.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721856/Furniture/PHOTO-2022-11-15-09-36-04_z7fdxk.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721856/Furniture/PHOTO-2022-11-15-09-36-04_hfxz90.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721856/Furniture/PHOTO-2022-11-15-09-36-04_z43c1y.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721855/Furniture/PHOTO-2022-11-15-09-36-04_p3yb57.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721855/Furniture/PHOTO-2022-11-15-09-36-04_qjdmvb.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721855/Furniture/PHOTO-2022-11-15-09-36-04_x58awy.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721855/Furniture/PHOTO-2022-11-15-09-36-04_d15is4.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721855/Furniture/PHOTO-2022-11-15-09-36-04_rfbjjp.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721854/Furniture/PHOTO-2022-11-15-09-36-04_jtqjhj.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721854/Furniture/PHOTO-2022-11-15-09-36-04_l3zpa8.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721854/Furniture/PHOTO-2022-11-15-09-36-04_ypo78m.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721853/Furniture/PHOTO-2022-11-15-09-36-04_ytjax8.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721853/Furniture/PHOTO-2022-11-15-09-36-04_qz67gu.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721853/Furniture/PHOTO-2022-11-15-09-36-04_t6dsrn.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721853/Furniture/PHOTO-2022-11-15-09-36-04_qejb96.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721853/Furniture/PHOTO-2022-11-15-09-36-04_ytccus.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721852/Furniture/PHOTO-2022-11-15-09-36-04_htkson.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721852/Furniture/PHOTO-2022-11-15-09-36-04_dzvkeb.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721852/Furniture/PHOTO-2022-11-15-09-36-04_xlmip5.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721852/Furniture/PHOTO-2022-11-15-09-36-04_dtkiuj.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721852/Furniture/PHOTO-2022-11-15-09-36-04_bzzxaa.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721851/Furniture/PHOTO-2022-11-15-09-36-04_c8fd0i.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721851/Furniture/PHOTO-2022-11-15-09-36-04_ugj2yp.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721851/Furniture/PHOTO-2022-11-15-09-36-04_hrwsmq.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721851/Furniture/PHOTO-2022-11-15-09-36-04_vjdfcd.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721850/Furniture/PHOTO-2022-11-15-09-36-04_bwxftb.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721850/Furniture/PHOTO-2022-11-15-09-36-04_lgrvew.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721850/Furniture/PHOTO-2022-11-15-09-36-04_zdg3ou.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721850/Furniture/PHOTO-2022-11-15-09-36-04_oapswq.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721850/Furniture/PHOTO-2022-11-15-09-36-04_lctw3u.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721849/Furniture/PHOTO-2022-11-15-09-36-04_uryngr.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721849/Furniture/PHOTO-2022-11-15-09-36-04_ba1a98.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721849/Furniture/PHOTO-2022-11-15-09-36-04_singrh.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721849/Furniture/PHOTO-2022-11-15-09-36-04_qliwma.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721849/Furniture/PHOTO-2022-11-15-09-36-04_quxqws.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721849/Furniture/PHOTO-2022-11-15-09-36-04_qrwxnu.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721848/Furniture/PHOTO-2022-11-15-09-36-04_rw87rg.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721848/Furniture/PHOTO-2022-11-15-09-36-04_fbmxt3.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721847/Furniture/PHOTO-2022-11-15-09-34-18_dltbxx.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721847/Furniture/PHOTO-2022-11-15-09-34-18_ebs3rt.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721847/Furniture/PHOTO-2022-11-15-09-34-18_igbyab.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721846/Furniture/PHOTO-2022-11-15-09-34-18_ue7jwz.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721846/Furniture/PHOTO-2022-11-15-09-34-18_fjooju.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721845/Furniture/PHOTO-2022-11-15-09-34-18_e596pk.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721835/Furniture/IMG_20220428_110958_386_rvzibg.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721858/Gates/PHOTO-2022-11-15-09-37-45_owgeim.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721858/Gates/PHOTO-2022-11-15-09-37-45_gviy7x.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721857/Gates/PHOTO-2022-11-15-09-37-45_x7sqe3.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721857/Gates/PHOTO-2022-11-15-09-37-45_reahll.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721858/Gates/PHOTO-2022-11-15-09-37-45_l5q2ss.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721859/Gates/PHOTO-2022-11-15-09-37-45_mfobmh.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721860/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_dhqzgf.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721873/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_b9h8wl.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721873/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_qmzrtk.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721873/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_g21arw.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721872/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_h2aipt.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721872/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_grwtrf.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721872/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_acbcpv.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721869/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_gnjjme.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721867/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_ycqpqr.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721867/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_i52sx3.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721867/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_czk6w6.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721867/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_ocgnw6.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721866/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_zmdct5.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721866/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_y2gmex.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721866/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_a0kaia.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721866/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_al4irj.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721866/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_etyd8p.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721865/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_nmzgkp.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721865/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_z0k1pn.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721865/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_entnke.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721865/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_nnl8r3.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721865/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_aueust.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721864/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_zhzbn6.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721864/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_epx2r0.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721864/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_nz502v.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721864/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_tjgw7m.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721863/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_hznaol.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721863/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_kvjjq2.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721863/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_dx9m79.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721863/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_ax4xgy.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721863/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_wcbzf5.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721862/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_k2nvxa.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721862/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_ugdzoo.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721862/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_jykkqg.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721862/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_ok6ben.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721862/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_fmpgqr.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721862/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_y0eluw.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721861/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_fvnl49.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721861/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_fmeyiz.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721861/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_aphtle.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721861/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_min11v.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721861/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_yk3yj2.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721860/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_jufkwq.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721860/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_bkxynt.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721860/Swimming%20Pools/PHOTO-2022-11-15-09-41-42_tjakph.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721859/Swimming%20Pools/PHOTO-2022-11-15-09-39-01_eqdcz2.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721859/Swimming%20Pools/PHOTO-2022-11-15-09-39-01_lw0mnx.jpg",
    ],
    [
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721856/Electrical%20Installations/PHOTO-2022-11-15-09-36-41_uacsui.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721856/Electrical%20Installations/PHOTO-2022-11-15-09-36-41_xjgeqv.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721856/Electrical%20Installations/PHOTO-2022-11-15-09-36-41_glgpqn.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721876/Electrical%20Installations/PHOTO-2022-11-15-09-45-26_xy8uc0.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721877/Electrical%20Installations/PHOTO-2022-11-15-09-45-26_ujemt3.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721877/Electrical%20Installations/PHOTO-2022-11-15-09-45-26_ownmeu.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721878/Electrical%20Installations/PHOTO-2022-11-15-09-45-26_tk6uvt.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721879/Electrical%20Installations/PHOTO-2022-11-15-09-45-26_eqnja6.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721882/Electrical%20Installations/PHOTO-2022-11-15-09-50-54_wugjzq.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721885/Electrical%20Installations/PHOTO-2022-11-15-09-50-54_r5k8fc.jpg",
      "https://res.cloudinary.com/dipzi1vv6/image/upload/v1669721888/Electrical%20Installations/PHOTO-2022-11-15-09-50-54_stmeks.jpg",
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
    <div>
      {imageViewerEnabled ? (
        <div>
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
                title="Aluminium Fabrication"
                projectName="Aluminium Fabrication"
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
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ProjectsGallery;
