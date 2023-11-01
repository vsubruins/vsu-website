import { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";

const DropdownWrapper = styled('div')`
    display: block;
    align-items: center;
    list-style: none;
    z-index: 100;
`

const DropdownHeader = styled('div')`
    position: relative;
    font-size: 1vw;
    padding: 0.1rem;
`

const DropdownList = styled('ul')`
    position: absolute;
    margin-top: -1px;
    margin-left: -9px;
    box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.2),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);
    min-width: 0rem;
    padding: 0.5vw 0;
    list-style: none;
    background-color: #fff;
    padding-bottom: 10px;
`

const DropdownItem = styled('li')`
    padding: 10px 10px;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0px 0.1rem;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  padding-bottom: 0.2vw;

  &:hover {
    border-bottom: black 2px solid;
  }
`;

export default function DropdownMenu(props) {
    const dropdownRef = useRef(null)
    const [open, setOpen] = useState(false);
    const { header, list } = props

    const openDropdown = () => {
        setOpen(true);
    };

    const hoverOutside = () => {
        setOpen(false);
    };

    useOnHoverOutside(dropdownRef, hoverOutside);

    return (
        <DropdownWrapper ref={dropdownRef}>
            <DropdownHeader>
                <NavLink to={header.to} onMouseOver={openDropdown}>{header.name}</NavLink>
            </DropdownHeader>
            {open? 
                <DropdownList>
                    {list.map((page, index) => {
                        return (
                            <DropdownItem key={index}>
                                <NavLink to={page.to}>{page.name}</NavLink>
                            </DropdownItem>
                        )
                    })}
                </DropdownList> : ''}
        </DropdownWrapper>
    )
}