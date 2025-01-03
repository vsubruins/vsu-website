import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
  display: grid;
  width: 85%;
  justify-content: space-between;
  margin-bottom: 70px;
  margin-top: 20px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr)
  }
`;

const Col = styled("div")`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const Section = styled("div")`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled("p")`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0px;
`;

const SectionText = styled("p")`
  border-left: #e93739 4px solid;
  padding-left: 20px;
  word-spacing: 0.2em;
  font-size: 15px;
  line-height: 1.5em;
`;

const ExtNavLink = styled("a")`
  text-decoration: none;
  color: black;
  padding: 15px 8px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 35px;

  &:hover {
    border-bottom: black 2px solid;
    padding-bottom: 13px;
  }
`;

export default function LandingInfo() {
  return (
    <>
      <Wrapper>
        <Col>
          <Section>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionText>
              The Vietnamese Student Union (VSU), established in 1977, is the
              official voice of all Vietnamese students at UCLA through its
              advocacy for the cultural, educational, political, and social
              welfare of the Vietnamese community at large.
            </SectionText>
          </Section>
          <Section>
            <SectionTitle>General Meetings</SectionTitle>
            <SectionText>
              Our first Winter Quarter GM will be <strong>Week 1 Tuesday (1/7/2025)</strong>.
              <br/>
              <br/>
              We hold general meetings on <strong>Week 1, 5, and 9, Thursdays from 6-8 pm!</strong> Location varies,
              so keep up with us on our social media to find out more. 
            </SectionText>
          </Section>
        </Col>
        <Col>
          <Section>
            <SectionTitle>Our Vision</SectionTitle>
            <SectionText>
              "The Vietnamese Student Union (VSU) at the University of California, Los Angeles strives to build a resilient and empowered community that is committed to solidarity with other marginalized communities of color. We hope to create a safe and welcoming space where members may be united through community-conscious programs and projects that serve our current needs. Furthermore, we aim to ensure that our initiatives are accessible for all of our members.
              <br /> <br />
              Imperialism and its far-reaching impacts, including war, exploitation, and displacement, continue to perpetuate systems of oppression that impede our access to basic needs and rights. With our ever-changing political climate, we aim to promote civic engagement by equipping members with the skills and resources necessary to advocate for our community’s needs while closely collaborating with other spaces in the fight for equity and justice.
              <br /> <br />
              By embracing our cultural heritage as well as our refugee and immigrant experiences, we will continue to shed light on our unique Vietnamese culture and history both on and off campus. Through our outreach and retention projects, Higher Opportunity Program for Education (HOPE) and Southeast Asian Campus Learning Education and Retention (SEA CLEAR) respectively, as well as various programs that eliminate barriers to higher education, VSU will continue to advocate for the needs of our constituencies in the broader Southeast Asian community and beyond."
              <br /> <br />
            </SectionText>
          </Section>
        </Col>
      </Wrapper>
      <ExtNavLink
          target="_blank"
          href="https://tinyurl.com/vsumembersignnup"
        >
          Membership Form 
        </ExtNavLink>
      <ExtNavLink
          target="_blank"
          href="https://vsubruins.us7.list-manage.com/subscribe?u=826fb05e04f5075714d743cc0&id=91200819b2"
        >
          Newsletter Sign Up
        </ExtNavLink>
    </>
  );
}
