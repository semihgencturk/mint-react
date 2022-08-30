import React from "react";
import styled from "styled-components";
import InternalLogo from "./InternalLogo";
import InternalLinkButton from "./InternalLinkButton";

const TeamItemContainer = styled.div`
  width: 22%;
  height: 50vh;
  display: flex;
  background: transparent;
  @media (max-width: 768px) {
    width: 80%;
    padding-top: 5vh;
  }
`;

const TeamItemLogoContainer = styled.div`
  width: 90%;
  padding: 5vh 5% 5vh 5%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  border-radius: 25px;
`;

const TeamItem = ({ to, title, logo, fontSize }) => {
  return (
    <TeamItemContainer>
      <TeamItemLogoContainer>
        <InternalLogo src={logo.src} alt={logo.alt} width="50" linkTo={to} />
        <InternalLinkButton to={to} title={title} fontSize={fontSize} />
      </TeamItemLogoContainer>
    </TeamItemContainer>
  );
};

export default TeamItem;
