import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Membership from "./pages/Membership";
import HOPE from "./pages/HOPE";
import SEACLEAR from "./pages/SEACLEAR";
import Staff from "./pages/Staff";
import Gallery from "./pages/Gallery";
import Page404 from "./pages/404";
import CultureNight from "./pages/CultureNight";
import EducationPrograms from "./pages/EducationPrograms";
import Internship from "./pages/Internship";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/membership" component={Membership}></Route>
          <Route path="/hope" component={HOPE}></Route>
          <Route path="/seaclear" component={SEACLEAR}></Route>
          <Route path="/staff" component={Staff}></Route>
          <Route path="/gallery" component={Gallery}></Route>
          <Route path="/culturenight" component={CultureNight}></Route>
          <Route path="/educationprograms" component={EducationPrograms}></Route>
          <Route path="/internship" component={Internship}></Route>
          <Route component={Page404}></Route>
        </Switch>
      </Router>
    </>
  );
}
