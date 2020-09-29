import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

import { ReactComponent as FBLogo } from "../assets/facebook.svg";
import { ReactComponent as IGLogo } from "../assets/instagram.svg";
import { ReactComponent as TwitterLogo } from "../assets/twitter.svg";
import { ReactComponent as YoutubeLogo } from "../assets/youtube.svg";

const IconWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const Link = styled("a")`
  text-decoration: none;
`;

export default function SocialMediaIcons(props: { width: string }) {
  return (
    <>
      <IconWrapper style={{ width: props.width }}>
        <Link href="https://www.facebook.com/vsubruins">
          <FBLogo style={{ width: "40px", height: "40px" }} />
        </Link>
        <Link href="https://www.instagram.com/vsubruins/">
          <IGLogo style={{ width: "40px", height: "40px" }} />
        </Link>
        <Link href="https://twitter.com/vsubruins?s=21">
          <TwitterLogo style={{ width: "40px", height: "40px" }} />
        </Link>
        <Link href="https://www.youtube.com/c/vsubruins">
          <YoutubeLogo style={{ width: "40px", height: "40px" }} />
        </Link>
      </IconWrapper>
    </>
  );
}
