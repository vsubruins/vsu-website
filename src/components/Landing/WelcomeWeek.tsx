import React from "react";
import styled from "styled-components";

// Typing the props
interface WelcomeWeekProps {
  src: string; // Expecting the `src` to be a string
}

const WelcomeWrapper = styled.div`
  margin: 25px;
  margin-left: 100px;
`;

const WelcomeImage = styled.img`
  max-height: 750px;
  width: 100%;
  object-fit: contain;
`;

const WelcomeWeek: React.FC<WelcomeWeekProps> = ({ src }) => {
  return (
    <WelcomeWrapper>
      <WelcomeImage src={src} alt="Welcome Week" />
    </WelcomeWrapper>
  );
};

export default WelcomeWeek;
