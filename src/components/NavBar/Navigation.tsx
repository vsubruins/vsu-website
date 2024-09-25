import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import DropdownMenu from "./DropdownMenu";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  margin-left: 30px;

  @media (max-width: 900px) {
    margin-top: 100px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0px 8px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
`;

export default function Navigation() {

  const aboutHeader = {
    to:"/about",
    name:"About"
  }

  const aboutList = [
    {
      to:"/staff",
      name:"Staff"
    }
  ]

  const involvementHeader = {
    to:"/membership",
    name:"Membership"
  }

  const involvementList = [
    {
      to:"/internship",
      name:"Internship"
    },
    {
      to:"/seaclear",
      name:"SEA CLEAR"
    },
    {
      to:"/hope",
      name:"HOPE"
    }
  ]

  const programsHeader = {
    to:"/",
    name:"Our Programs"
  }

  const programsList = [
    {
      to:"/culturenight",
      name:"Culture Night"
    },    
    {
      to:"/educationprograms",
      name:"Education Programs"
    }
  ]


  return (
    <>
      <Wrapper>

        <DropdownMenu header={aboutHeader} list={aboutList} />
        <DropdownMenu header={involvementHeader} list={involvementList} />
        <DropdownMenu header={programsHeader} list={programsList} />
        <NavLink to="/gallery">Gallery</NavLink>
        {/* <NavLink to="/MeetTheBigs">Meet The Bigs!</NavLink> */}
        <NavLink to="/JoinAFam">Join A Fam!</NavLink>

        {/*
        <NavLink to="/about">About</NavLink>
        <ExtNavLink
          target="_blank"
          href="https://www.instagram.com/vsubruins"
        >
          Events
        </ExtNavLink>
        <NavLink to="/hope">HOPE</NavLink>
        <NavLink to="/seaclear">SEA CLEAR</NavLink>
        <NavLink to="/staff">Staff</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/membership">Membership</NavLink>
        <NavLink to="/culturenight">Culture Night</NavLink>
        <NavLink to="/educationprograms">Education Programs</NavLink>
        <NavLink to="/internship">Internship</NavLink>
        */}

      </Wrapper>
    </>
  );
}
