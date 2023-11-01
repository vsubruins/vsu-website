import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";

import { ReactComponent as Logo } from "../../assets/vsulogo.svg";

const NavWrapper = styled("div")`
  position: relative;
  width: 100%;
  display: flex;
  height: 76.32px;
  margin-top: 30px;
  margin-bottom: 30px;
`;


const LogoDiv = styled(Link)`
  position: absolute;
  left: 50%;
`;

const VSULogo = styled(Logo)`
  position: relative;
  left: -50%;
  height: 6vw;
  width: 6vw;
  margin-top: -10px;
`;

export default function NavBar() {
  return (
    <>
      <NavWrapper>
        <Navigation />
        <LogoDiv to="/">
          <VSULogo />
        </LogoDiv>
      </NavWrapper>
    </>
  );
}
