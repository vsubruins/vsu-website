import React from "react";
import styled from "styled-components";

const StaffWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
  width: 250px;
`;

const StaffPic = styled("div")<{ pic: any }>`
  background: ${(props) => `url(${props.pic})`} no-repeat center;
  background-size: cover;
  width: 100%;
  height: 250px;
`;

const StaffInfo = styled("div")`
  background: var(--lightyellow);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-left: 15px;
  box-sizing: border-box;
  height: 30%;
`;

export default function Profile(props: { member: any }) {
  var { picture, name, role } = props.member;
  return (
    <>
      <StaffWrapper>
        <StaffPic pic={picture} />
        <StaffInfo>
          <p style={{ fontSize: "16px", marginBottom: "0" }}>
            <strong>{name}</strong>
          </p>
          <p style={{ fontSize: "13px" }}>{role}</p>
        </StaffInfo>
      </StaffWrapper>
    </>
  );
}
