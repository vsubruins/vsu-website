import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-bottom: 35px;
`;

const Col = styled("div")`
  width: 47%;
  display: flex;
  flex-direction: column;
`;

const Section = styled("div")`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled("p")`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 0px;
`;

const SectionText = styled("p")`
  border-left: #e93739 4px solid;
  padding-left: 50px;
  word-spacing: 0.2em;
  font-size: 15px;
  line-height: 1.5em;
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
              We hold general meetings every two weeks! Time and location vary,
              so keep up with us on Facebook to find out more. <br />
              Zoom link: zoom.us/link
            </SectionText>
          </Section>
        </Col>
        <Col>
          <Section>
            <SectionTitle>Our Vision</SectionTitle>
            <SectionText>
              “The Vietnamese Student Union (VSU) at the University of
              California, Los Angeles strives to revitalize our sense of
              community to further advocate for ourselves and other marginalized
              communities of color. We aim to increase inclusiveness and
              solidarity by creating enduring relationships within our
              organization and beyond. By strengthening our external relations
              and creating community-conscious programs, we seek to increase
              representation and take action against injustices. Reflecting on
              our cultural heritage as well as our refugee and immigrant
              experiences, we continue to bring light to our own history in
              relation to today’s political climate.”
            </SectionText>
          </Section>
        </Col>
      </Wrapper>
    </>
  );
}
