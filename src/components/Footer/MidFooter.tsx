import React from "react";
import styled from "styled-components";

import { ReactComponent as VSULogo } from "../../assets/vsulogo.svg";
import SocialMediaIcons from "../SocialMediaIcons";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
`;

const InnerWrapper = styled("div")`
  position: relative;
  left: -50%;
  top: 50px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Logo = styled(VSULogo)``;

const Follow = styled("p")`
  margin: 20px 0;
  font-size: 18px;
`;

export default function MidFooter() {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Logo />
          <Follow>Follow our social media!</Follow>
          <SocialMediaIcons width="120%" />
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
