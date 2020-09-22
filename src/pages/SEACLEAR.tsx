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

export default function SEACLEAR() {
  return (
    <>
      <PageWrapper>
        <NavBar />
        <PageContent>
          <PageTitle>
            Southeast Asian Campus Learning Education And Retention
          </PageTitle>
          <PageText>
            SEA CLEAR challenges students to find relevancy in their education
            in order to help them develop and become empowered leaders. It is
            SEA CLEAR’s vision that these students later apply their newfound
            knowledge to the outside world to proactively contribute to their
            Southeast Asian community. <br />
            <br />
            The project stresses not only academic success, but emphasizes the
            importance of holistic development and student empowerment in the
            process toward self-retention. SEA CLEAR strongly believes that
            retention extends beyond individual success because graduation is a
            community-wide victory. SEA CLEAR fulfills its mission to increase
            graduation and retention rates by developing students holistically
            through five components: counseling, mentorship, an internship
            program, wellness component, and transfer component.
          </PageText>
          <PageHeader>History</PageHeader>
          <PageText>
            The Southeast Asian Campus Learning Education and Retention (SEA
            CLEAR) project at UCLA was established in 1998 by the Vietnamese
            Student Union (VSU) at UCLA to represent Southeast Asian students
            and to educate them about Southeast Asian community issues. <br />
            <br />
            SEA CLEAR is a part of the great tradition of student initiated,
            student funded, and student run projects. In 1998, VSU created SEA
            CLEAR to serve the needs of the historically under-represented
            Southeast Asian community. During its modest beginnings, SEA CLEAR
            started off with just Peer Counseling. Currently, SEA CLEAR boasts
            five components, including Peer Counseling, Mentorship and
            Internship, Wellness, and the newly added – Transfer Component.
          </PageText>
          <PageHeader>Peer Counseling</PageHeader>
          <PageText>
            Through 1-on-1 sessions, peer counselors help students with
            academics, finances, community, & also with the student’s social,
            professional, and personal life. Peer Counseling provides a safe
            space for confidentiality and trust within open dialogue. With the
            resources to help students gain the knowledge needed to make their
            experiences at UCLA successful, peer counselors are trained to
            challenge students to become empowered leaders.
          </PageText>
          <PageHeader>Mentorship</PageHeader>
          <PageText>
            SEA CLEAR Mentorship incorporates mentor and mentee pairs and
            families that include UCLA undergraduate students, alumni, and
            community leaders in order to create a second home for students on
            campus. Throughout the year, pairs and families provide support and
            guidance for each other through programs hosted by SEA CLEAR,
            mentor-mentee outings, and family outings. Mentorship focuses on
            helping students find cultural relevancy in their academic and
            holistic success.
          </PageText>
          <PageHeader>Internship</PageHeader>
          <PageText>
            SEA CLEAR’s Internship component allows a safe space for students to
            learn more about their identity and community. SEA CLEAR interns
            will partake in fun and creative collaborative efforts with their
            peers, develop a critical consciousness, and learn to advocate for
            their community as empowered student leaders.
          </PageText>
          <PageHeader>Wellness Component</PageHeader>
          <PageText>
            The Wellness component educates students about how Southeast Asian
            history and culture impact their health. Students will have a safe
            space to discuss taboo topics in relation to spiritual, spatial,
            mental, sexual, and physical health. Moreover, students will reach a
            critical consciousness about their identity and develop
            holistically.
          </PageText>
          <PageHeader>Transfer Component</PageHeader>
          <PageText>
            The Transfer Component seeks to equip Southeast Asian transfers with
            the skills needed to become empowered students that are conscious of
            their unique intersectionalities, while fostering their inclusion
            and participation in the Southeast Asian community at UCLA.
          </PageText>
        </PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
}
