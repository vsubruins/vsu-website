import React from "react";
import styled from "styled-components";

import SocialMediaIcons from "../SocialMediaIcons";

import { ReactComponent as YellowCircle } from "../../assets/shapes/yellowcircle.svg";
import { ReactComponent as BlueTriangle } from "../../assets/shapes/bluetriangle.svg";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 70px;
`;

const FollowUs = styled("p")`
  font-size: 2rem;
  letter-spacing: 0.05em;
  text-align: center;
`;

const Circle = styled(YellowCircle)`
  position: absolute;
  left: -2rem;
  top: -40px;
  width: 110px;
  z-index: -100;
`;

const Triangle = styled(BlueTriangle)`
  position: absolute;
  z-index: -100;
  width: 120px;
  right: -3vw;
`;

export default function LandingSocialMedia() {
  return (
    <>
      <Wrapper>
        <Circle />
        <Triangle />
        <FollowUs>Keep up with us on our social media!</FollowUs>
        <SocialMediaIcons width="70%" />
      </Wrapper>
    </>
  );
}
