import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu"; // Imported DropdownMenu

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

type LinkItem = {
  to: string;
  name: string;
};

type DropdownMenuProps = {
  header: LinkItem;
  list: LinkItem[];
};

const DropdownMenuComponent = ({ header, list }: DropdownMenuProps) => {
  return (
    <div>
      <Link to={header.to}>{header.name}</Link>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Navigation() {
  const aboutHeader: LinkItem = {
    to: "/about",
    name: "About",
  };

  const aboutList: LinkItem[] = [
    // { to: "/staff", name: "Staff" }
  ];

  const involvementHeader: LinkItem = {
    to: "/membership",
    name: "Membership",
  };

  const involvementList: LinkItem[] = [
    { to: "/internship", name: "Internship" },
    { to: "/seaclear", name: "SEA CLEAR" },
    { to: "/hope", name: "HOPE" },
  ];

  const programsHeader: LinkItem = {
    to: "/",
    name: "Our Programs",
  };

  const programsList: LinkItem[] = [
    { to: "/culturenight", name: "Culture Night" },
    { to: "/educationprograms", name: "Education Programs" },
  ];

  const famsHeader: LinkItem = {
    to: "/JoinAFam",
    name: "Fams",
  };

  const famsList: LinkItem[] = [
    { to: "/MeetTheBigs", name: "Meet The Bigs!" },
    { to: "/JoinAFam", name: "Join A Fam!" },
  ];

  return (
    <>
      <Wrapper>
        <DropdownMenu header={aboutHeader} list={aboutList} />
        <DropdownMenu header={involvementHeader} list={involvementList} />
        <DropdownMenu header={programsHeader} list={programsList} />
        <DropdownMenu header={famsHeader} list={famsList} />
      </Wrapper>
    </>
  );
}
