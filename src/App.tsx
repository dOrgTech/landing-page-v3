import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { HomeView } from "./views/home/Home";

const App: React.FC = () => {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<HomeView />} />
      </Routes>
    </Navbar>
  );
};

export default App;
