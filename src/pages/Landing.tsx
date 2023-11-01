import React from "react";

import NavBar from "../components/NavBar/NavBar";
import Cover from "../components/Landing/Cover";
import LandingInfo from "../components/Landing/LandingInfo";
import LandingSocialMedia from "../components/Landing/LandingSocialMedia";
//import Calendar from "../components/Landing/Calendar";
import Footer from "../components/Footer/Footer";
import { PageWrapper } from "../components/Page/Page";

import InstaFeed from "../components/Landing/InstagramFeed";
import 'dotenv';

import WelcomeImage from "../assets/welcomeweek.png"

export default function LandingPage() {

  require('dotenv').config();

  return (
    <>
      <PageWrapper>
        <NavBar />
        <Cover src={WelcomeImage} />
        <LandingInfo />
        <br/>
        <LandingSocialMedia />
        {/* <Calendar /> */}
        <InstaFeed token={process.env.REACT_APP_INSTAGRAM_API_KEY} limit={12} />
        <Footer />
      </PageWrapper>
    </>
  );
}
