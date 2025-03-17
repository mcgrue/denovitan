// @ts-ignore: ts(6133)
import _React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index.tsx";
import Dinosaur from "./pages/Dinosaur.tsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:selectedDinosaur" element={<Dinosaur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
