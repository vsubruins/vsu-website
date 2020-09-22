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

export default function HOPE() {
  return (
    <>
      <PageWrapper>
        <NavBar />
        <PageContent>
          <PageTitle>Higher Opportunity Program for Education</PageTitle>
          <PageText>
            The Higher Opportunity Program for Education (HOPE) is a
            student-initiated project founded by the Vietnamese Student Union
            (VSU) in 1999. HOPE is committed to outreaching to under-resourced
            and underrepresented youth. HOPE exists to raise consciousness of
            and provide access to higher education through holistic empowerment.
            We promote self-sufficiency and leadership through academic,
            personal, and community empowerment. We develop our students through
            peer-advising, tutoring, workshops, college tours, and field trips.
            Under the support of the Student-Initiated Outreach Committee (SIOC)
            and the direction of VSU, HOPE strives to achieve its goals toward
            educational equity for all.
          </PageText>
          <PageHeader>When does HOPE meet?</PageHeader>
          <PageText>
            <ul>
              <li>HOPE All Staff/Volunteer Meetings, Mondays 6-8pm</li>
              <li>Westminster High School Site, Tuesdays 2:00-7:00pm</li>
              <li>San Gabriel High School Site, Wednesdays 1:00-7:00pm</li>
            </ul>
            Note: Site times include transportation time
          </PageText>
          <PageHeader>Services</PageHeader>
          <PageText>
            <ul>
              <li>Peer Advising</li>
              <li>
                Academic Development{" "}
                <ul>
                  <li>Tutoring</li>
                  <li>Test Preparation</li>
                  <li>Writing Development</li>
                  <li>Skill-building Workshops</li>
                </ul>
              </li>
              <li>
                Collective Development
                <ul>
                  <li>
                    Collectively Reaching Empowerment through Workshops (CREW)
                  </li>
                  <li>Reaching Independence through Self Efficacy (RISE)</li>
                </ul>
              </li>
              <li>Parent Engagement</li>
            </ul>
          </PageText>
          <PageHeader>Peer Advising</PageHeader>
          <PageText>
            Through peer-mentoring, HOPE provides an outlet for students to
            express themselves and help students through high school and plan
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
            It is about developing students academically so that they can be
            successful in whatever they do. <br />
            <br />
            Students will grow academically through tutoring, skill building,
            test prep, and writing development. Tutoring is one of the biggest
            elements of the academic development portion and is done one-on-one
            as well as group spaces. The writing development component helps the
            student develop their understanding of the process and the writing
            structure. This can be done via journals, blogs, etc.
          </PageText>
          <PageHeader>Collective Development</PageHeader>
          <PageText>
            <u>CREW</u>: Reaching Empowerment through Workshops <br />
            <br />
            CREW workshops touch on topics that can only be learned outside the
            classroom. Here, students are exposed to community issues, personal
            wellness, current events, politics, as well as topics they choose.{" "}
            <br />
            <br />
            <u>RISE</u>: Reaching Independence through Self-Efficacy <br />
            <br />
            RISE component exposes students to college and help them to
            effectively choose, apply, and prepare for higher education. RISE
            includes college tours, shadow days, and college preparation
            workshops.
          </PageText>
          <PageHeader>Internship</PageHeader>
          <PageText>
            Internship provides an opportunity for students to learn more about
            themselves, their communities, and actions for change. The HOPE
            internship will enable interns to critically think about issues that
            affect access to higher education as well as their identity and
            history by engaging in open dialogue and interactive activities.
            Interns will learn skills necessary for both personal and
            professional growth, allowing them to be more prepared to take on
            leadership roles within and outside the HOPE space.
          </PageText>
          <PageHeader>Contact</PageHeader>
          <PageText>
            <ul>
              <li>Call: 310-267-4346</li>
              <li>Email: hope@cpo.ucla.edu</li>
              <li>
                Our office is located in the Student Activities Center (SAC), in
                Room 106D
              </li>
            </ul>
          </PageText>
        </PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
}
