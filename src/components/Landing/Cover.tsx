import React from "react";
import styled from "styled-components";

import YellowCircle from "../assets/yellowcircle.svg";

const Layout = styled("div")`
  display: flex;
  width: 100%;
  height: 370px;
`;

const SlideWrapper = styled("div")`
  background: #4051a3;
  width: 50%;
`;

const CoverWrapper = styled("div")`
  width: 50%;
  background: #ffe9c0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0.1em;
  font-size: 20px;
`;

const WelcomeText = styled("p")`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 5px;
  margin-top: 0px;
`;

export default function Cover() {
  return (
    <>
      <Layout>
        <SlideWrapper />
        <CoverWrapper>
          <Text>
            <WelcomeText>Welcome! Xin chào.</WelcomeText>
            We are the Vietnamese Student Union at UCLA.
          </Text>
        </CoverWrapper>
      </Layout>
    </>
  );
}
