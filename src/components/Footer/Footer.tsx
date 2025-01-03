import React from "react";
import styled from "styled-components";

import MidFooter from "./MidFooter";

const Wrapper = styled("div")`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: var(--lightyellow);
  height: 275px;
`;

export default function Footer() {
  return (
    <>
      <Wrapper>
        <MidFooter />
      </Wrapper>
    </>
  );
}
