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

export default function Membership() {
  return (
    <>
      <PageWrapper>
        <NavBar />
        <PageContent>
          <PageTitle>Membership</PageTitle>
          <PageHeader>How to become a member</PageHeader>
          <PageText>
            The Vietnamese Student Union, or VSU, is an organization that is
            committed to the development and growth of the Vietnamese community
            here on campus. We help out with a wide variety of events at UCLA
            throughout the academic year. We hold award-winning{" "}
            <u>programs and events</u> that uphold our visions and allow us to
            honor our four pillars of <strong>Culture</strong>,{" "}
            <strong>Education</strong>, <strong>Political</strong>, and{" "}
            <strong>Social</strong>. In addition, VSU also has <u>biweekly</u>{" "}
            general meetings where members can gather, socialize, and interact
            with their fellow friends and members of the community. Membership
            is completely FREE and open ALL individuals who are interested in
            learning more about Vietnamese culture, history, or issues in the
            Vietnamese community. <br />
            <br /> There is no application or process necessary to become a
            general member. Just drop by at any of our general meetings and get
            involved! We do encourage you to subscribe to our newsletter to get
            weekly updates and general meeting dates. <br /> <br />
            VSU also has two chief projects, <strong>HOPE</strong> and{" "}
            <strong>SEA CLEAR</strong>, which delve deeper into community
            issues. Any individuals who are interested in a more involved
            contribution to the wellness of the Vietnamese community are highly
            encouraged to learn more:
            <br />
            <br />
            HOPE: Higher Opportunity Program for Education
            <br />
            SEA CLEAR: Southeast Asian Campus Learning Education and Retention
            <br />
            <br />
            Contact:
            <br />
            Sela Tran
            <br />
            <br />
            Social Affairs Coordinator 2020-2021 <br /> selatran@ucla.edu
          </PageText>
        </PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
}
