import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import TeamItem from "../ui/TeamItem";
import { communityContent } from "../contents/Contents";
import CommunitiesBackground from "../assets/CommunitiesBackground.jpeg";

const CommunityContainer = styled.div`
  width: 100%;
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
  background: linear-gradient(
    180deg,
    rgba(104, 109, 118, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2vh;
    align-items: center;
  }
`;

const CommunityBackground = styled.div`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("${(props) => props.src && props.src}");

  @media (max-width: 768px) {
    display: none;
  }
`;

const Community = () => {
  return (
    <>
      <Navbar type="white" />
      <CommunityContainer>
        <CommunityBackground
          src={CommunitiesBackground}
          alt="Ytu-Mint-Topluluklar"
        />
        {communityContent.map((item) => (
          <TeamItem
            key={item.title}
            logo={item.logo}
            title={item.title}
            to={item.to}
            fontSize={14}
          />
        ))}
      </CommunityContainer>
    </>
  );
};

export default Community;
