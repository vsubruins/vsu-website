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

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`;

interface DropdownContentProps {
  isOpen: boolean;
}

// Use the interface in the styled component definition
export const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 16px;
  z-index: 1;
  width: 400px; /* Adjust as needed */
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