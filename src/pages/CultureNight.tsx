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
import { images } from "../assets/slideshows/culturenight/cnslides";
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

export default function CultureNight() {
  return (
    <>
      <PageWrapper>
        <NavBar />
        <PageContent>
          <PageTitle>Vietnamese Culture Night</PageTitle>
          <br /><Slideshow images={images} /><br />
          <PageText>
            Vietnamese Culture Night is an annual student production held in Royce Hall 
            that highlights the experiences of Vietnamese Americans, often through the lens 
            of a particular social issue affecting the community today, featuring performances 
            by Vietnamese Traditional and Moditional Dance, Awechords Acapella, VSU Modern, 
            and a play written by the Director and their executive team. 
          </PageText>
          <PageHeader>VCN 44's Vision</PageHeader>
          <PageText>
            What do we know about the generations before us and what do they know about us? 
            In our own way we want to understand each other's story and the experiences which 
            shape our very being. Yet whether it be through a conflict of interest or a vow of 
            silence, the bridge between generations is a painful path many avoid in fear 
            of what hides on the other side.
            <br /><br />
            This is not just a story about a daughter, but also one of her mother. In fact, 
            it is how two women have learned to grow, love, and sacrifice given the circumstances 
            they cannot escape. It is a story speaking of the gravity of our decisions, as no 
            decision comes without a consequence. Thus, VCN 44 will explore two generations, with 
            each generation’s story adding nuance to the other using a foundational Vietnamese 
            legend, Truyền Thuyết Con Rồng Cháu Tiên.
            <br /><br />
            Beginning with the love story between two individuals, Lạc Long Quân and Âu Cơ, the 
            tribulations of their union tie closely with the experiences of their eldest daughter, 
            Trâm. Crushed by the responsibility of being the next ruler—as opposed to her siblings 
            who live a carefree life—Trâm’s internal conflict battles between choosing her family 
            or choosing her own happiness. A story exploring the identity of a daughter tied back 
            by her family’s expectations—yet also filled with adventure and Vietnamese musical 
            numbers—the audience will be left wondering one thing: how can I bridge the gap 
            between my heritage and my aspirations?
          </PageText>
          <ExtNavLink
            target="_blank"
            href="http://linktr.ee/ucla.vcn"
          >
            Resources + Applications
          </ExtNavLink>
          <ExtNavLink
            target="_blank"
            href="https://instagram.com/uclavcn?igshid=MzRlODBiNWFlZA=="
          >
            Instagram
          </ExtNavLink>
          <ExtNavLink
            target="_blank"
            href="https://www.facebook.com/uclavcn?mibextid=LQQJ4d"
          >
            Facebook
          </ExtNavLink>
          <ExtNavLink
            target="_blank"
            href="https://youtube.com/@vsubruins?si=D-dkMe5VyQTWxuA4"
          >
            Youtube
          </ExtNavLink>
          {/*
          <ExtNavLink
            target="_blank"
            href=""
          >
            Consider donating!
          </ExtNavLink>
          */}
          <PageHeader>Contact</PageHeader>
          <PageText>
            Tracy Tran<br />
            Culture Coordinator 2023-2024<br />
            <b>Email:</b> vcn.ucla@gmail.com
          </PageText>
        </PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
}
