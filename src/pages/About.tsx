import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {
  PageTitle,
  PageHeader,
  PageText,
  PageWrapper,
  PageContent,
} from "../components/Page/Page";

export default function About() {
  return (
    <>
      <PageWrapper>
        <NavBar />
        <PageContent>
          <PageTitle>About the Vietnamese Student Union</PageTitle>
          <PageHeader>Mission Statement</PageHeader>
          <PageText>
            The Vietnamese Student Union (VSU), established in 1977, is the
            official voice of all Vietnamese students at UCLA through its
            advocacy for the cultural, educational, political, and social
            welfare of the Vietnamese community at large.
          </PageText>
          <PageHeader>Vision Statement (2021-2022)</PageHeader>
          <PageText>
            “The Vietnamese Student Union (VSU) at the University of California,
            Los Angeles strives to build a resilient and empowered community
            that is committed to solidarity with other marginalized communities
            of color. <br /> <br /> Though physically separated by the pandemic,
            we hope to create a safe and welcoming space where members may be
            united virtually through community-conscious programs and projects
            that serve our needs at this time. <br /> <br />
            In light of the current political climate, we aim to promote civic
            engagement by equipping members with the skills and resources
            necessary to advocate for our community’s needs while closely
            collaborating with other communities in the fight for equity and
            justice. <br /> <br />
            By embracing our cultural heritage as well as our refugee and
            immigrant experiences, we will continue to shed light on our unique
            Vietnamese culture and history both on and off campus.” <br />{" "}
            <br />
            <strong>Est. September 17, 2021 | VSU Board 2021-2022</strong>
          </PageText>
          <PageHeader>History of VSU</PageHeader>
          <PageText>
            The roots of the Vietnamese Student Union were sewn well before its
            establishment in 1977. After the Fall of Saigon on April 30th, 1975,
            harsh living conditions and political persecutions prompted the mass
            exodus of over a million refugees. Political refugees who immigrated
            to America fled from these difficulties only to face new ones. Many
            struggled with having to assimilate to American culture and
            surviving in a new homeland. <br /> <br />
            After these initial years, more Vietnamese students began enrolling
            at UCLA. In 1977, Vietnamese students at UCLA formed the Vietnamese
            Student Association (VSA). The collaborators emphasized the
            preservation of the Vietnamese culture and heritage. It was through
            their efforts, such as annual Vietnamese culture nights, that the
            organization retains its cultural identity. In 1978, VSA established
            the Refugee Aid Project to ease the transition of political refugees
            from life in Vietnam to one in America. This project then broke off
            as an independent organization called the Vietnamese Refugee Aid
            Committee (VRAC). After many years as independent organizations, VSA
            and VRAC eventually reconciled that the self-empowerment of
            Vietnamese students at UCLA was key and decided to rejoin forces.
            Thus, to reflect this reunification, the two organizations came
            together to form an organization called the Vietnamese Student Union
            (VSU). <br /> <br />
            Thirty-seven years later, VSU continues to seek the preservation of
            the Vietnamese culture and heritage. This is done through cultural
            events such as Cà Phê Ấm and Vietnamese Culture Night, two events
            that allow students to showcase their talents through dance, art,
            and music. The Vietnamese Student Union also expands its services to
            cater to the educational, social, and political welfare of the
            Vietnamese community on campus and off campus. For example, VSU’s
            Black April Commemoration allows students the opportunity to learn
            about the Fall of Saigon, each other’s stories, and the political
            implications of the war.
            <br /> <br /> VSU has two major projects that target the educational
            needs of the Vietnamese and Southeast Asian community. The Higher
            Opportunity Program for Education (HOPE) serves at-risk students in
            Westminster High School in Orange County and San Gabriel High School
            in Los Angeles. Through the Southeast Asian Campus Learning
            Education and Retention project (SEA CLEAR), VSU offers academic
            support services, holistic development, and wellness workshops. SEA
            CLEAR not only prioritizes academics and retention but also
            addresses issues and struggles relevant to the children of the
            refugees of war. Together, these projects find ways to use campus
            resources to respond and contribute to the community’s educational
            needs. <br /> <br />
            VSU provides an environment conducive to producing networks for
            social support among Vietnamese students. With this and various
            events it puts on, students are provided the opportunity to develop
            one another as student leaders and potential activists. We hope that
            these relationships and experiences enrich college life for these
            students and extend beyond graduation. In all, the organization
            serves as the official voice of all Vietnamese students on the UCLA
            campus. It is our ultimate objective to allow this voice to resonate
            across the entire campus and communities beyond.
          </PageText>
        </PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
}
