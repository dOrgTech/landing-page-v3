import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { HomeView } from "./views/home/Home";

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
