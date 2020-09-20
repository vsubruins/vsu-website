import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const PageWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export default function About() {
  return (
    <>
      <PageWrapper>
        <NavBar />
        <Footer />
      </PageWrapper>
    </>
  );
}
