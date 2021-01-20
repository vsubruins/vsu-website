import React from "react";

import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {
  PageTitle,
  PageWrapper,
  PageContent,
  Gallery,
} from "../components/Page/Page";
import Profile from "../components/Staff/Profile";
import { staffMembers } from "../assets/data";

export default function Staff() {
  var today = new Date();

  return (
    <>
      <PageWrapper>
        <Navbar />
        <PageContent>
          <PageTitle>
            {today.getMonth() <= 6
              ? today.getFullYear() - 1
              : today.getFullYear()}{" "}
            –{" "}
            {today.getMonth() <= 6
              ? today.getFullYear()
              : today.getFullYear() + 1}{" "}
            Staff
          </PageTitle>
          <Gallery>
            {staffMembers.map((member) => (
              <Profile member={member} />
            ))}
          </Gallery>
        </PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
}
