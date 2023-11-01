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

export default function HOPE() {
  return (
    <>
      <PageWrapper>
        <NavBar />
        <PageContent>
          <PageTitle>Higher Opportunity Program for Education</PageTitle>
          <PageText>
            The Higher Opportunity Program for Education (HOPE) is a
            student-initiated project founded by UCLA's Vietnamese Student Union
            (VSU) in 1999. youths who face educational obstacles and exists to raise 
            consciousness of and provide access to higher education through holistic 
            empowerment. With the support of the Student Initiated Outreach Committee 
            (SIOC) and the direction of VSU, HOPE strives to achieve its goals toward 
            educational equity for all by providing students with academic tutoring 
            services, mentoring and peer advising sessions, workshops on various topics, 
            & educational field trips.
          </PageText>
          <PageHeader>When does HOPE meet?</PageHeader>
          <PageText>
            <ul>
              <li>Westminster High School Site, Tuesdays 2:00 PM - 8:00 PM</li>
              <li>Gilbert High School Site, Wednesdays 12:00 PM - 6:00 PM</li>
              <li>Loara High School Site, Thursdays 2:00 PM - 8:00 PM</li>
              <li>Field trips:
                <ul>
                  <li>Shadow Days - HOPE hosts one Shadow Day for each partnered school, letting 
                      students explore UCLA’s campus and dorms with real college mentors</li>
                  <li>College Tour - HOPE takes their high school students to tour different 
                      college campuses and learn the different types of higher education</li>
                  <li>Community Tour - HOPE gives students the tools to celebrate their identity, 
                      promote self-care, and support themselves holistically</li>
                  <li>Banquet - An end of the year celebration for HOPE volunteers and students to 
                      recognize the year’s accomplishments</li>
                </ul>
              </li>
            </ul>
            Note: Site times include transportation time
          </PageText>
          <PageHeader>Services</PageHeader>
          <PageText>
            <ul>
              <li>Peer Advising
                <ul>
                  <li>Mentorship</li>
                </ul>
              </li>
              <li>
                Academic Development{" "}
                <ul>
                  <li>Tutoring</li>
                  <li>Test Preparation</li>
                  <li>Writing Development</li>
                  <li>Skill-building Workshops</li>
                </ul>
              </li>
              <li>Higher Education
                <ul>
                  <li>Different routes of higher education</li>
                </ul>
              </li>
              <li>Internship
                <ul>
                  <li>Professional development</li>
                  <li>Retreats</li>
                  <li>Community</li>
                </ul>
              </li>
            </ul>
          </PageText>
          <PageHeader>Peer Advising</PageHeader>
          <PageText>
            Through peer advising, HOPE provides an outlet for our high school students to
            express themselves and help them get through high school and plan
            for life after graduating. To prepare them for college, sessions get
            students to understand A-G requirements, keep them accountable for
            high school graduation, and give students information on tests
            needed to get into college. In addition, students acquire skills
            such as time management and public speaking, which are necessary for
            post-secondary life.
            <br /> <br />
            <strong>Who are peer mentors?</strong>
            <ul>
              <li>Trained UCLA volunteers who help students plan</li>
              <li>Current UCLA students</li>
              <li>Fill-in big brothers/sisters to students</li>
              <li>Role models for the students</li>
              <li>Members of the community</li>
            </ul>
          </PageText>
          <PageHeader>Academic Development</PageHeader>
          <PageText>
            The Academic Development component is not just about homework help.
            It is about developing our high school students academically so that 
            they can be successful in whatever they do. <br />
            <br />
            Students will grow academically through tutoring, skill building,
            test prep, and writing development. Tutoring is one of the biggest
            elements of the academic development portion and is done one-on-one
            as well as group spaces. The writing development component helps the
            student develop their understanding of the process and the writing
            structure. This can be done via journals, blogs, etc.
          </PageText>
          <PageHeader>Internship</PageHeader>
          <PageText>
            Internship provides an opportunity for UCLA students to learn more about
            themselves, their communities, and actions for change. The HOPE
            internship will enable interns to critically think about issues that
            affect access to higher education as well as their identity and
            history by engaging in open dialogue and interactive activities.
            Interns will learn skills necessary for both personal and
            professional growth, allowing them to be more prepared to take on
            leadership roles within and outside the HOPE space.
          </PageText>
          {/* UNCOMMENT + UPDATE FOR WELCOME WEEK
          <ExtNavLink
            target="_blank"
            href="http://tinyurl.com/hope-internship"
          >
            HOPE Internship Application
          </ExtNavLink>
          */}
          <PageHeader>Contact</PageHeader>
          <br />
          <ExtNavLink
            target="_blank"
            href="http://tinyurl.com/HOPE-Interest"
            >
            Volunteer Interest Form
          </ExtNavLink>
          <PageText>
            Our office is located in the Student Activities Center (SAC), in Room 106D.<br />
            <b>Phone:</b> 310-267-4346<br />
            <b>Email:</b> hope@cpo.ucla.edu
          </PageText>
        </PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
}
