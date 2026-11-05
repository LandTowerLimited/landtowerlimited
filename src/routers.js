import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loadingIcon.svg";

const LandingPage = React.lazy(() => import("./pages/landingPage/landingPage"));
const OurTeam = React.lazy(() => import("./pages/ourTeam/ourTeam"));
const AboutUs = React.lazy(() => import("./pages/aboutUs/aboutUs"));
const ContactUs = React.lazy(() => import("./pages/contactUs/contactUs"));
const ProjectsGallery = React.lazy(() =>
  import("./pages/projectsGallery/projectsGallery")
);

const Portal = React.lazy(() => import("./pages/portal/portal"));

const MunachimNweke = React.lazy(() =>
  import("./pages/ourTeam/members/munachimNweke")
);

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="btn-loading" />
          </div>
        }
      >
        <Routes>
          <Route path={NonAuthRoutes.landingPage} element={<LandingPage />} />
          <Route path={NonAuthRoutes.ourTeam} element={<OurTeam />} />
          <Route path={NonAuthRoutes.aboutUs} element={<AboutUs />} />
          <Route path={NonAuthRoutes.contactUs} element={<ContactUs />} />
          <Route
            path={NonAuthRoutes.projectsGallery}
            element={<ProjectsGallery />}
          />

          <Route
            path={NonAuthRoutes.munachimNweke}
            element={<MunachimNweke />}
          />
          <Route path={NonAuthRoutes.portal} element={<Portal />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default Routers;
