const AuthRoutes = {};

const NonAuthRoutes = {
  landingPage: "/",
  projectsGallery: "/projects-gallery",
  ourTeam: "/our-team",
  aboutUs: "/about-us",
  contactUs: "/contact-us",

  munachimNweke: "/Founder-and-CEO/munachim-nweke",
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
