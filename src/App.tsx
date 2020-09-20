import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/about" component={About}></Route>
      </Router>
    </>
  );
}
