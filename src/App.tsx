import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Membership from "./pages/Membership";
import HOPE from "./pages/HOPE";
import SEACLEAR from "./pages/SEACLEAR";
import Staff from "./pages/Staff";
// import Gallery from "./pages/Gallery";
import Page404 from "./pages/404";
import CultureNight from "./pages/CultureNight";
import EducationPrograms from "./pages/EducationPrograms";
import Internship from "./pages/Internship";
import Bigs from "./pages/Bigs";
import Fams from "./pages/Fams";
import FamPoints from "./pages/FamPoints";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/hope" element={<HOPE />} />
        <Route path="/seaclear" element={<SEACLEAR />} />
        <Route path="/staff" element={<Staff />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/MeetTheBigs" element={<Bigs />} />
        <Route path="/JoinAFam" element={<Fams />} />
        <Route path="/FamPoints" element={<FamPoints />} />
        <Route path="/culturenight" element={<CultureNight />} />
        <Route path="/educationprograms" element={<EducationPrograms />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
