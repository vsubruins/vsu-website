import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

import { ReactComponent as FBLogo } from "../assets/icons/facebook.svg";
import { ReactComponent as IGLogo } from "../assets/icons/instagram.svg";
//import { ReactComponent as TwitterLogo } from "../assets/icons/twitter.svg";
import { ReactComponent as YoutubeLogo } from "../assets/icons/youtube.svg";
import { ReactComponent as DiscordLogo } from "../assets/icons/discord.svg";
import { ReactComponent as LinktreeLogo } from "../assets/icons/linktree.svg";

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
        <Link href="https://www.facebook.com/vsubruins" target="_blank">
          <FBLogo style={{ width: "40px", height: "40px" }} />
        </Link>
        <Link href="https://www.instagram.com/vsubruins/" target="_blank">
          <IGLogo style={{ width: "40px", height: "40px" }} />
        </Link>
        {/*<Link href="https://twitter.com/vsubruins?s=21" target="_blank">
          <TwitterLogo style={{ width: "40px", height: "40px" }} />
          </Link>*/}
        <Link href="https://www.youtube.com/c/vsubruins" target="_blank">
          <YoutubeLogo style={{ width: "40px", height: "40px" }} />
        </Link>
        <Link href="http://tinyurl.com/uclavsudisc" target="_blank">
          <DiscordLogo style={{ width: "40px", height: "40px" }} />
        </Link>
        <Link href="https://linktr.ee/vsubruins/" target="_blank">
          <LinktreeLogo style={{ width: "40px", height: "40px" }} />
        </Link>
      </IconWrapper>
    </>
  );
}
