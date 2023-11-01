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

import Slideshow from "../components/Slideshow/Slideshow";
import { images } from "../assets/slideshows/education/educationslides";

export default function EducationPrograms() {
  return (
    <>
      <PageWrapper>
        <NavBar />
        <PageContent>
          <PageTitle>Education Programs</PageTitle>
          <br /><Slideshow images={images} /><br />
          <PageHeader>High School Conference</PageHeader>
          <PageText>
            VSU’s annual High School Conference (HSC) is a free, one-day program filled with student workshops, 
            campus tours, panelists, and more designed to assist high school students and parents in their 
            preparation for college and beyond. HSC’s ultimate goal is to empower high school students to improve 
            their critical consciousness and develop them into strong applicants for institutions of higher 
            education. HSC typically gathers about 150 students and youth from all across California to promote 
            the importance of higher education, learn all the options and routes to achieving it, and experience 
            a day of fun at UCLA in the company of peers and mentors in a culturally-competent environment. 
          </PageText>
          <PageHeader>Southeast Asian Admit Weekend</PageHeader>
          <PageText>
            The Southeast Asian Admit Weekend (SEA Admit) is a free, weekend-long program that serves to provide 
            incoming UCLA freshmen with the tools and information they need to encourage them to pursue higher education. 
            Through providing workshops, panels, tours of campus, fun activities, and mentors to guide you throughout 
            the weekend, SEA Admit aims to introduce UCLA admits to campus life and cultivate a strong system of 
            support within the UCLA Southeast Asian student community. Our program uplifts our students by providing 
            a sense of family and belonging in a culturally-competent space, which is something that many students 
            lack when they leave home and enter an environment completely unfamiliar to them.
          </PageText>
          <PageHeader>Southeast Asian Transfer Enrichment Day</PageHeader>
          <PageText>
            The Southeast Asian Transfer Enrichment Day (SEATED) is a free, one-day program that serves to provide 
            incoming UCLA transfer students with the tools and information they need to encourage them to pursue higher 
            education. Through providing workshops, panels, tours of campus, fun activities, and mentors to guide you 
            throughout the weekend, SEATED aims to introduce UCLA transfers to campus life and cultivate a strong system 
            of support within the UCLA Southeast Asian transfer student community. Our program uplifts attendees by 
            providing a sense of family and belonging in a culturally-competent transfer-specific space, which is 
            something that many lack when they leave home and enter an environment completely unfamiliar to them.
          </PageText>
          <PageHeader>Contact</PageHeader>
          <PageText>
            Carmela Navata<br />
            Education Coordinator 2023-2024<br />
            <b>Phone:</b> (626) 384-8774<br />
            <b>Email:</b> vsu.educationcoord@gmail.com
          </PageText>
        </PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
}
