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

export const PageText = styled("p")`
  font-size: 16px;
  line-height: 1.5em;
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
