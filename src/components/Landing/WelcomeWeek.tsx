import React from "react";
import styled from "styled-components";

const WelcomeWrapper = styled('div')`
  margin: 25px;
  margin-left: 100px;
`

const WelcomeImage = styled('img')`
  max-height: 750px;
  width: 100%;
  object-fit: contain;
`

export default function WelcomeWeek(props) {
    const { src } = props

    return (
        <WelcomeWrapper>
            <WelcomeImage src={src} alt="Welcome Week" />
        </WelcomeWrapper>
    )
}