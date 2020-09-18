import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 15px 8px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 14px;

  &:hover {
    border-bottom: black 2px solid;
    padding-bottom: 13px;
  }
`;

export default function Navigation() {
  return (
    <>
      <Wrapper>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Events</NavLink>
        <NavLink to="/">HOPE</NavLink>
        <NavLink to="/">SEA CLEAR</NavLink>
        <NavLink to="/">Staff</NavLink>
        <NavLink to="/">Gallery</NavLink>
        <NavLink to="/">Contact</NavLink>
      </Wrapper>
    </>
  );
}
