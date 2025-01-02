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
          <PageHeader>Vision Statement (2024-2025)</PageHeader>
          <PageText>

            "The Vietnamese Student Union (VSU) at the University of California, Los Angeles strives to build a resilient and empowered community that is committed to solidarity with other marginalized communities of color. We hope to create a safe and welcoming space where members may be united through community-conscious programs and projects that serve our current needs. Furthermore, we aim to ensure that our initiatives are accessible for all of our members.
            <br /> <br /> 
            Imperialism and its far-reaching impacts, including war, exploitation, and displacement, continue to perpetuate systems of oppression that impede our access to basic needs and rights. With our ever-changing political climate, we aim to promote civic engagement by equipping members with the skills and resources necessary to advocate for our community’s needs while closely collaborating with other spaces in the fight for equity and justice.
            <br /> <br /> 
            By embracing our cultural heritage as well as our refugee and immigrant experiences, we will continue to shed light on our unique Vietnamese culture and history both on and off campus. Through our outreach and retention projects, Higher Opportunity Program for Education (HOPE) and Southeast Asian Campus Learning Education and Retention (SEA CLEAR) respectively, as well as various programs that eliminate barriers to higher education, VSU will continue to advocate for the needs of our constituencies in the broader Southeast Asian community and beyond."
            <br /> <br />
            <strong>Est. November 7, 2024 | VSU Board 2024-2025</strong>
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
            events such as <b>Cà Phê Ấm</b> and <b>Vietnamese Culture Night,</b> two events
            that allow students to showcase their talents through dance, art,
            and music. The Vietnamese Student Union also expands its services to
            cater to the educational, social, and political welfare of the
            Vietnamese community on campus and off campus. For example, VSU’s
            Black April Commemoration allows students the opportunity to learn
            about the Fall of Saigon, each other’s stories, and the political
            implications of the war.
            <br /> <br /> VSU has two major projects that target the educational
            needs of the Vietnamese and Southeast Asian community. The <b>Higher
            Opportunity Program for Education (HOPE)</b> serves at-risk students in
            Westminster High School in Orange County and San Gabriel High School
            in Los Angeles. Through the <b>Southeast Asian Campus Learning
            Education and Retention project (SEA CLEAR),</b> VSU offers academic
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
