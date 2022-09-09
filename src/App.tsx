import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { HomeView } from "./views/home/Home";
import { PrivacyPolicy } from "./views/privacyPolicy";

const App: React.FC = () => {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
};

export default App;
