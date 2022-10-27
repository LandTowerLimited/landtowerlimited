import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./constants";
import { ReactComponent as LoadingIcon } from "./assets/svg/loadingIcon.svg";
import LandingPage from "./pages/landingPage/landingPage";
import OurTeam from "./pages/ourTeam/ourTeam";
import AboutUs from "./pages/aboutUs/aboutUs";
import ContactUs from "./pages/contactUs/contactUs";

import MunachimNweke from "./pages/ourTeam/members/munachimNweke";
// import IfeanyiClementNweke from "./pages/ourTeam/members/ifeanyiClementNweke";
// import ObioraNworji from "./pages/ourTeam/members/obioraNworji";
// import RasaqOlaniyiIsiaq from "./pages/ourTeam/members/rasaqOlaniyiIsiaq";
// import OluwaseunAdeyemiSekoni from "./pages/ourTeam/members/oluwaseunAdeyemiSekoni";
// import NzeakorIfeanyichukwu from "./pages/ourTeam/members/nzeakorIfeanyichukwu";
// import ChristopherNwankwo from "./pages/ourTeam/members/christopherNwankwo";
// import ChukwudubemOkechukwu from "./pages/ourTeam/members/chukwudubemOkechukwu";
// import KingsleyNwaokobia from "./pages/ourTeam/members/kingsleyNwaokobia";
// import AyinlaQuadri from "./pages/ourTeam/members/ayinlaQuadri";
// import UdenkaChukwuemeka from "./pages/ourTeam/members/udenkaChukwuemeka";

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
            path={NonAuthRoutes.munachimNweke}
            element={<MunachimNweke />}
          />
          {/* <Route
            path={NonAuthRoutes.ifeanyiClementNweke}
            element={<IfeanyiClementNweke />}
          />
          <Route path={NonAuthRoutes.obioraNworji} element={<ObioraNworji />} />
          <Route
            path={NonAuthRoutes.rasaqOlaniyiIsiaq}
            element={<RasaqOlaniyiIsiaq />}
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
          <Route path={NonAuthRoutes.ayinlaQuadri} element={<AyinlaQuadri />} />
          <Route
            path={NonAuthRoutes.udenkaChukwuemeka}
            element={<UdenkaChukwuemeka />}
          /> */}
        </Routes>
      </Suspense>
    </div>
  );
}
export default Routers;
