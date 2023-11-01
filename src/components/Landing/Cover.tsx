import React from "react";
import styled from "styled-components";

import { ReactComponent as YellowCircle } from "../../assets/shapes/yellowcircle.svg";
import { ReactComponent as RedTriangle } from "../../assets/shapes/redtriangle.svg";

import WelcomeWeek from "./WelcomeWeek";

const Layout = styled("div")`
  display: flex;
  width: 100%;
  height: 800px; /*NORMAL HEIGHT IS 370! CHANGE BACK WHEN NEEDED*/
`;

const SlideWrapper = styled("div")`
  background: var(--blue);
  width: 50%;
`;

const CoverWrapper = styled("div")`
  width: 50%;
  background: var(--lightyellow);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -10;
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

const Circle = styled(YellowCircle)`
  position: absolute;
  z-index: -5;
  width: 170px;
  left: 10px;
`;

const Triangle = styled(RedTriangle)`
  position: absolute;
  z-index: -5;
  width: 250px;
  right: -70px;
  top: -70px;
`;

export default function Cover(props) {
  return (
    <>
      <Layout>
        <SlideWrapper>
          <WelcomeWeek src={props.src}/>
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
