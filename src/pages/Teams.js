import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import TeamItem from "../ui/TeamItem";
import { teamsContent } from "../contents/Contents";
import TeamsBackground from "../assets/TeamsBackground.jpeg";

const TeamsContainer = styled.div`
  width: 100%;
  min-height: 92vh;
  height: auto;
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
    padding-top: 5vh;
  }
`;

const TeamsBackgroundContainer = styled.div`
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

const Teams = () => {
  return (
    <>
      <Navbar />
      <TeamsContainer>
        <TeamsBackgroundContainer
          src={TeamsBackground}
          alt="Ytu-Mint-Topluluklar"
        />
        {teamsContent.map((item) => (
          <TeamItem
            key={item.title}
            logo={item.logo}
            title={item.title}
            to={item.to}
            fontSize={14}
          />
        ))}
      </TeamsContainer>
    </>
  );
};

export default Teams;
