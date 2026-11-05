const AuthRoutes = {};

const NonAuthRoutes = {
  landingPage: "/",
  projectsGallery: "/projects-gallery",
  ourTeam: "/our-team",
  aboutUs: "/about-us",
  contactUs: "/contact-us",
  portal: "/portal",

  munachimNweke: "/Founder-and-CEO/munachim-nweke",
};

const ExternalLinks = {
  instagramGallery: "https://www.instagram.com/landtower_empire/",
  // Google Business Profile ("LandTower Empire")
  googleReviews: "https://maps.app.goo.gl/1r1zQzVEz7wshb318",
  // Swap this for the g.page/r/.../review link when available
  googleWriteReview: "https://maps.app.goo.gl/1r1zQzVEz7wshb318",
  whatsApp:
    "https://wa.me/2349163494952?text=Hello%20Land%20Tower%20Limited%2C%20I%20found%20you%20on%20your%20website%20and%20I%20would%20like%20to%20make%20an%20enquiry.",
  // Exact office location (from the client's Google Maps pin)
  officeMapEmbed:
    "https://maps.google.com/maps?q=9.078717,7.481913&z=17&output=embed",
  officeMapLink:
    "https://www.google.com/maps/dir/?api=1&destination=9.078717,7.481913",
  // Portal "Member sign-in" link (landtowerlimited.com/portal):
  //   null                  -> link hidden
  //   ""                    -> shows "Member sign-in opens at launch"
  //   "https://..."         -> shows a "Member sign-in" link to that address
  memberSignInUrl: "",
};

export { AuthRoutes, NonAuthRoutes, ExternalLinks };
