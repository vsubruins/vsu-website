import React from "react";

import NavBar from "../components/NavBar/NavBar";
import Cover from "../components/Landing/Cover";
import LandingInfo from "../components/Landing/LandingInfo";
import LandingSocialMedia from "../components/Landing/LandingSocialMedia";
//import Calendar from "../components/Landing/Calendar";
import Footer from "../components/Footer/Footer";
import { PageWrapper } from "../components/Page/Page";

import InstaFeed from "../components/Landing/InstagramFeed";
import WelcomeImage from "../assets/welcomeweek.png"

export default function LandingPage() {

  const instagramToken = process.env.REACT_APP_INSTAGRAM_API_KEY || '';

  return (
    <>
      <PageWrapper>
        <NavBar />
        <Cover src={WelcomeImage} />
        <LandingInfo />
        <br />
        <LandingSocialMedia />
        {/* <Calendar /> */}
        <InstaFeed token={instagramToken} limit={12} />
        <Footer />
      </PageWrapper>
    </>
  );
}
