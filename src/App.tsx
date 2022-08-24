import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { HomeView } from "./views/home/Home";
import { JoinUsView } from "./views/formPages/joinUs/JoinUs";
import { HireUsView } from "./views/formPages/hireUs/HireUs";

const App: React.FC = () => {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/joinUs' element={<JoinUsView />} />
          <Route path='/hireUs' element={<HireUsView />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
};

export default App;
