import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { HomeView } from "./views/home/Home";
import { JoinUsView } from "./views/join-us/JoinUs";
import { HireUsView } from "./views/hire-us/HireUs";

const App: React.FC = () => {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={<HomeView />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
};

export default App;
