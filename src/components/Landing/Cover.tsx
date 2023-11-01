import React from "react";
import styled from "styled-components";

import { ReactComponent as YellowCircle } from "../../assets/shapes/yellowcircle.svg";
import { ReactComponent as RedTriangle } from "../../assets/shapes/redtriangle.svg";

import WelcomeWeek from "./WelcomeWeek";

const Layout = styled("div")`
  display: flex;
  width: 100%;
  height: 20rem; /*NORMAL HEIGHT IS 370! WITH WELCOME WEEK FLYER, HEIGHT IS 800! CHANGE BACK WHEN NEEDED*/
`;

const SlideWrapper = styled("div")`
  background: var(--blue);
  width: 50%;
  z-index: -100;
`;

const CoverWrapper = styled("div")`
  width: 70%;
  background: var(--lightyellow);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -100;
`;

const Text = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0.1em;
  font-size: 1rem;
  margin-left: 20px;
`;

const WelcomeText = styled("p")`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const Circle = styled(YellowCircle)`
  position: absolute;
  z-index: -5;
  width: 10vw;
  left: 1vw;
`;

const Triangle = styled(RedTriangle)`
  position: absolute;
  z-index: -5;
  width: 12vw;
  right: 1vw;
  top: -6rem;
`;

export default function Cover(props) {
  return (
    <>
      <Layout>
        <SlideWrapper>
          {/* <WelcomeWeek src={props.src}/> UNCOMMENT THIS FOR WELCOME WEEK! */}
        </SlideWrapper>
        <CoverWrapper>
          <Circle />
          <Triangle />
          <Text>
            <WelcomeText>Welcome! Xin chào.</WelcomeText>
            We are the Vietnamese Student Union at UCLA.
          </Text>
        </CoverWrapper>
      </Layout>
    </>
  );
}
