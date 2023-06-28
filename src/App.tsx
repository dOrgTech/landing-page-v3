import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { HomeView } from "./views/home/Home";
import { CaseStudiesView } from "./views/caseStudies/CaseStudies";
import { caseStudies } from "./constants/caseStudies";
import { Tezos, GnosisGuild, Starkware, DoinGud } from "./views/caseStudies";
import { HotSeatView } from "./views/hotSeat/HotSeat";
import { JoinView } from "./views/formPages/join/Join";
import { HireView } from "./views/formPages/hire/Hire";
import { PrivacyPolicy } from "./views/privacyPolicy";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import { articles } from "./constants/articles";
import { ArticleLayout } from "./views/articles/ArticleLayout";
import ArticlesView from "./views/articles/ArticlesView";
import { FaqsView } from "./views/faqs/Faqs";
import { DaoDrops } from "./views/caseStudies/DaoDrops";

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
          <Route path="/articles" element={<ArticlesView />} />
          {articles.map((article, i) => (
            <Route
              key={article.slug}
              path={`/articles/${article.slug}`}
              element={<ArticleLayout {...article} />}
            />
          ))}
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
          <Route
            path="/case-studies/dao-drops"
            element={<DaoDrops {...caseStudies["dao-drops"]} />}
          />
          <Route path="/join" element={<JoinView />} />
          <Route path="/hire" element={<HireView />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<FaqsView />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
};

export default App;
