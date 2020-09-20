import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
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

const CalendarEmbed = styled("iframe")`
  border: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const CalendarContainer = styled("div")`
  position: relative;
  padding-bottom: 65.25%;
  width: 100%;
  height: 0;
`;

export default function Calendar() {
  return (
    <>
      <Wrapper>
        <Section>
          <SectionTitle>Calendar</SectionTitle>
          <SectionText>
            View VSU, HOPE, and SEA CLEAR’s public events here.
          </SectionText>
        </Section>
        <div style={{ width: "85%", alignSelf: "center" }}>
          <CalendarContainer>
            <CalendarEmbed
              src="https://calendar.google.com/calendar/embed?src=tmjr8d8se9ph5scbjpkjnnff3s%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              scrolling="no"
            />
          </CalendarContainer>
        </div>
      </Wrapper>
    </>
  );
}
