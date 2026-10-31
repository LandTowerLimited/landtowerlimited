const AuthRoutes = {};

const NonAuthRoutes = {
  landingPage: "/",
  projectsGallery: "/projects-gallery",
  ourTeam: "/our-team",
  aboutUs: "/about-us",
  contactUs: "/contact-us",

  munachimNweke: "/Founder-and-CEO/munachim-nweke",
  ifeanyiClementNweke: "/team/member/ifeanyi-clement-nweke",
  obioraNworji: "/team/member/obiora-nworji",
  sundayEmeagwai: "/team/member/sunday-emeagwai",
  oluwaseunAdeyemiSekoni: "/team/member/oluwaseun-adeyemi-sekoni",
  nzeakorIfeanyichukwu: "/team/member/nzeakor-ifeanyichukwu",
  christopherNwankwo: "/team/member/christopher-nwankwo",
  chukwudubemOkechukwu: "/team/member/chukwudubem-okechukwu",
  kingsleyNwaokobia: "/team/member/kingsley-nwaokobia",
  rasaqOlaniyiIsiaq: "/team/member/rasaq-olaniyi-isiaq",
  udenkaChukwuemeka: "/team/member/udenka-chukwuemeka",
  ayinlaQuadri: "/team/member/ayinla-quadri",
};

const ExternalLinks = {
  instagramGallery: "https://www.instagram.com/landtower_empire/",
  // Exact office location (from the client's Google Maps pin)
  officeMapEmbed:
    "https://maps.google.com/maps?q=9.078717,7.481913&z=17&output=embed",
  officeMapLink:
    "https://www.google.com/maps/dir/?api=1&destination=9.078717,7.481913",
};

export { AuthRoutes, NonAuthRoutes, ExternalLinks };
