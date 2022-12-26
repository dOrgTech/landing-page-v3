import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { HomeView } from './views/home/Home';
import { JoinView } from './views/formPages/join/Join';
import { HireView } from './views/formPages/hire/Hire';
import { PrivacyPolicy } from './views/privacyPolicy';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

const App: React.FC = () => {
  const location = useLocation();
  // Scroll to top if path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const gtmId = process.env.REACT_APP_GTM_ID || '';
  const args: TagManagerArgs = { gtmId };
  useEffect(() => {
    TagManager.initialize(args);
  });

  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<HomeView />} />
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
