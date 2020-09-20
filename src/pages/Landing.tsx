import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar/NavBar";
import Cover from "../components/Landing/Cover";
import LandingInfo from "../components/Landing/LandingInfo";
import LandingSocialMedia from "../components/Landing/LandingSocialMedia";
import Calendar from "../components/Landing/Calendar";
import Footer from "../components/Footer/Footer";
import { PageWrapper } from "../components/Page/Page";

export default function LandingPage() {
  return (
    <>
      <PageWrapper>
        <NavBar />
        <Cover />
        <LandingInfo />
        <LandingSocialMedia />
        <Calendar />
        <Footer />
      </PageWrapper>
    </>
  );
}
