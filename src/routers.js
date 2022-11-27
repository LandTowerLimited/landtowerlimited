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

const MunachimNweke = React.lazy(() =>
  import("./pages/ourTeam/members/munachimNweke")
);
const IfeanyiClementNweke = React.lazy(() =>
  import("./pages/ourTeam/members/ifeanyiClementNweke")
);
const ObioraNworji = React.lazy(() =>
  import("./pages/ourTeam/members/obioraNworji")
);
const SundayEmeagwai = React.lazy(() =>
  import("./pages/ourTeam/members/sundayEmeagwai")
);
const OluwaseunAdeyemiSekoni = React.lazy(() =>
  import("./pages/ourTeam/members/oluwaseunAdeyemiSekoni")
);
const NzeakorIfeanyichukwu = React.lazy(() =>
  import("./pages/ourTeam/members/nzeakorIfeanyichukwu")
);
const ChristopherNwankwo = React.lazy(() =>
  import("./pages/ourTeam/members/christopherNwankwo")
);
const ChukwudubemOkechukwu = React.lazy(() =>
  import("./pages/ourTeam/members/chukwudubemOkechukwu")
);
const KingsleyNwaokobia = React.lazy(() =>
  import("./pages/ourTeam/members/kingsleyNwaokobia")
);
const RasaqOlaniyiIsiaq = React.lazy(() =>
  import("./pages/ourTeam/members/rasaqOlaniyiIsiaq")
);
const UdenkaChukwuemeka = React.lazy(() =>
  import("./pages/landingPage/landingPage")
);
const AyinlaQuadri = React.lazy(() =>
  import("./pages/ourTeam/members/ayinlaQuadri")
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
          <Route path={NonAuthRoutes.contactUs} element={<ContactUs />} />
          <Route
            path={NonAuthRoutes.projectsGallery}
            element={<ProjectsGallery />}
          />

          <Route
            path={NonAuthRoutes.munachimNweke}
            element={<MunachimNweke />}
          />
          <Route
            path={NonAuthRoutes.ifeanyiClementNweke}
            element={<IfeanyiClementNweke />}
          />
          <Route path={NonAuthRoutes.obioraNworji} element={<ObioraNworji />} />
          <Route
            path={NonAuthRoutes.sundayEmeagwai}
            element={<SundayEmeagwai />}
          />
          <Route
            path={NonAuthRoutes.oluwaseunAdeyemiSekoni}
            element={<OluwaseunAdeyemiSekoni />}
          />
          <Route
            path={NonAuthRoutes.nzeakorIfeanyichukwu}
            element={<NzeakorIfeanyichukwu />}
          />
          <Route
            path={NonAuthRoutes.christopherNwankwo}
            element={<ChristopherNwankwo />}
          />
          <Route
            path={NonAuthRoutes.chukwudubemOkechukwu}
            element={<ChukwudubemOkechukwu />}
          />
          <Route
            path={NonAuthRoutes.kingsleyNwaokobia}
            element={<KingsleyNwaokobia />}
          />
          <Route
            path={NonAuthRoutes.rasaqOlaniyiIsiaq}
            element={<RasaqOlaniyiIsiaq />}
          />
          <Route
            path={NonAuthRoutes.udenkaChukwuemeka}
            element={<UdenkaChukwuemeka />}
          />
          <Route path={NonAuthRoutes.ayinlaQuadri} element={<AyinlaQuadri />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default Routers;
