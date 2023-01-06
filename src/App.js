import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Policy from "./Pages/Policy";
import Terms from "./Pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path ="/Terms" element={<Terms/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
