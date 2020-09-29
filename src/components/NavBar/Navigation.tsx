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
        <NavLink to="/about">About</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/hope">HOPE</NavLink>
        <NavLink to="/seaclear">SEA CLEAR</NavLink>
        <NavLink to="/staff">Staff</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/membership">Membership</NavLink>
      </Wrapper>
    </>
  );
}
