import React from "react";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {
  PageTitle,
  PageHeader,
  PageText,
  PageWrapper,
  PageContent,
} from "../components/Page/Page";
import styled from "styled-components";

//import Slideshow from "../components/Slideshow/Slideshow";
//import { images } from "../assets/slideshows/culturenight/cnslides";

const ExtNavLink = styled("a")`
  text-decoration: none;
  color: black;
  padding: 15px 8px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 18px;

  &:hover {
    border-bottom: black 2px solid;
    padding-bottom: 13px;
  }
`;

export default function Internship() {
  return (
    <>
      <PageWrapper>
        <NavBar />
        <PageContent>
          <PageTitle>
            Internship
          </PageTitle>
          <PageText>
            The Vietnamese Student Union (VSU) Internship is a year-long program which aims to develop students 
            professionally, culturally, and personally. This program aims to educate interns on historical and 
            contemporary issues of the Vietnamese, Southeast Asian, and the Black, Indigenous, and People of Color 
            (BIPOC) community at large. Interns will work closely with VSU’s programs to gain leadership skills 
            and have the opportunity to coordinate club events, engage with the student population through advocacy, 
            while developing a strong sense of community and family amongst the internship cohort. Internship 
            class will take place on <strong>Tuesdays from 5 - 7 PM</strong>.
          </PageText>
          <ExtNavLink
            target="_blank"
            href="https://tinyurl.com/VSUSyllabus2324"
          >
            Syllabus
          </ExtNavLink>
          {/* UNCOMMENT + UPDATE FOR WELCOME WEEK
          <ExtNavLink
            target="_blank"
            href="https://docs.google.com/forms/d/1G-74WTBn2_I36z8L1CCWtYXWFubHlxRtfeLmDkOmXuE/"
          >
            Internship Application
          </ExtNavLink>
          */}
          <PageHeader>Contact</PageHeader>
          <PageText>
            Tyler Tu<br />
            Internal Vice President 2023-2024<br />
            <b>Email:</b> vsu.ivp@gmail.com
          </PageText>
        </PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
}