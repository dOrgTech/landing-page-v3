import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { HomeView } from "./views/home/Home";
import { JoinUsView } from "./views/formPages/joinUs/JoinUs";
import { HireUsView } from "./views/formPages/hireUs/HireUs";
import { PrivacyPolicy } from "./views/privacyPolicy";

const App: React.FC = () => {

  const location = useLocation();
  // Scroll to top if path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/joinUs' element={<JoinUsView />} />
          <Route path='/hireUs' element={<HireUsView />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
};

export default App;
