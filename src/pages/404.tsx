import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Page404() {
  return (
    <>
      <Wrapper>
        <p>
          <strong>404 Error!</strong>
        </p>
        <p>Invalid URL or this site is under construction :)</p>
        <Link to="/">Back to Home</Link>
      </Wrapper>
    </>
  );
}
