//import React from "react";
import styled from "styled-components";

export const PageWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const PageTitle = styled("p")`
  font-size: 36px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const PageHeader = styled("p")`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px;
  margin-bottom: 0px;

  @media (min-width: 600px) {
    &::before {
      content: "";
      border-bottom: #e93739 solid 4px;
      width: 110px;
      z-index: 10;
      padding-bottom: 45px;
      position: absolute;
    }
  }
`;

export const PageSubheader = styled("p")`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0px;
`;

export const PageText = styled("p")`
  font-size: 16px;
  line-height: 1.5em;
`;

export const ListItem = styled("li")`
  font-size: 16px;
  line-height: 1.5em;
  margin-bottom: 8px; /* Adjust spacing as needed */
`;

export const PageContent = styled("div")`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-bottom: 80px;
`;

export const Gallery = styled("div")`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const DropdownMenuWrapper = styled.div`
  position: relative; /* Container for positioning the dropdown content */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; /* Allows wrapping of DropdownMenu items */
`;

export const DropdownMenu = styled.div`
  flex-direction: column; /* Ensures the button and dropdown are in a column layout */
  flex-basis: 15%; /* Takes up 45% of the container's width */
  flex-grow: 0; /* Prevents growing */
  flex-shrink: 0; /* Prevents shrinking */
  margin: .1%; /* Adjust margin for spacing */
  box-sizing: border-box; /* Ensures padding and border are included in width */
`;

interface DropdownContentProps {
  isOpen: boolean;
}

// Use the interface in the styled component definition
export const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed; /* Use fixed to position it relative to the viewport */
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust position to truly center it */
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  width: 400px; /* Adjust as needed */
  z-index: 998; /* Ensure it is above the overlay */
`;

export const SlideshowWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: lightgray; /* Placeholder styling */
  margin-bottom: 16px; /* Spacing between slideshow and video */
  /* Add your slideshow styling and behavior here */
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 70vh;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7); /* Dark background with transparency */
    z-index: 997; /* Ensure it covers other content */
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px; /* Adjust as needed */
    right: 10px; /* Adjust as needed */
    background-color: white; /* Background color */
    border: none;
    border-radius: 50%; /* Makes the button circular */
    width: 30px; /* Adjust width as needed */
    height: 30px; /* Adjust height as needed */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 20px; /* Adjust size as needed */
    color: black; /* Adjust color as needed */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Optional shadow for depth */
    &:hover {
        background-color: lightgray; /* Change background on hover */
        color: red; /* Change color on hover for better UX */
    }
    z-index: 999; /* Ensure it covers other content */
`;

export const FamName = styled("p")`
  line-height: 1.5em;
  font-weight: bold; /* Makes the text bold */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Adds a drop shadow */
  margin-top: auto; /* Pushes the element to the bottom within flex container */
  text-align: center; /* Centers text horizontally */
`;