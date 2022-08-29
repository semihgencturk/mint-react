import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import TeamItem from "../ui/TeamItem";
import { teamsContent } from "../contents/Contents";

const TeamsContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  background: linear-gradient(
    180deg,
    rgba(104, 109, 118, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const Teams = () => {
  return (
    <>
      <Navbar />
      <TeamsContainer>
        {teamsContent.map((item) => (
          <TeamItem
            key={item.title}
            logo={item.logo}
            title={item.title}
            to={item.to}
            fontSize={20}
          />
        ))}
      </TeamsContainer>
    </>
  );
};

export default Teams;
