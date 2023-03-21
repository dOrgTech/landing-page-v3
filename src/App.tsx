import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { HomeView } from "./views/home/Home";
import { CaseStudiesView } from "./views/caseStudies/CaseStudies";
import { caseStudies, CaseStudyLinkProps } from "./constants/caseStudies";
import { Tezos, GnosisGuild, Starkware, DoinGud } from "./views/caseStudies";
import { HotSeatView } from "./views/hotSeat/HotSeat";
import { JoinView } from "./views/formPages/join/Join";
import { HireView } from "./views/formPages/hire/Hire";
import { PrivacyPolicy } from "./views/privacyPolicy";
import TagManager, { TagManagerArgs } from "react-gtm-module";

const App: React.FC = () => {
  const location = useLocation();
  // Scroll to top if path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const gtmId = process.env.REACT_APP_GTM_ID || "";
  const args: TagManagerArgs = { gtmId };
  useEffect(() => {
    TagManager.initialize(args);
  });

  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/hot-seat" element={<HotSeatView />} />
          <Route path="/case-studies" element={<CaseStudiesView />} />
          <Route
            path="/case-studies/tezos"
            element={<Tezos {...caseStudies["tezos"]} />}
          />
          <Route
            path="/case-studies/gnosis-guild"
            element={<GnosisGuild {...caseStudies["gnosis-guild"]} />}
          />
          <Route
            path="/case-studies/starkware"
            element={<Starkware {...caseStudies["starkware"]} />}
          />
          <Route
            path="/case-studies/doingud"
            element={<DoinGud {...caseStudies["doingud"]} />}
          />
          <Route path="/join" element={<JoinView />} />
          <Route path="/hire" element={<HireView />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
};

export default App;
