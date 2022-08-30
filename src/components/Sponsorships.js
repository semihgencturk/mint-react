import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ExternalLogo from "../ui/ExternalLogo";

const SponsorshipsContainer = styled.div`
  width: 90%;
  height: fit-content;
  padding: 5vh 5% 5vh 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SponsorshipsList = styled.div`
  width: 100%;
  height: auto;
  padding: 5vh;
  border-radius: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 5vh;
  background: transparent;
`;

const AchievementsBox = styled.div`
  width: fit-content;
  min-height: 200px;
  height: auto;
  padding: 2vh;
  display: flex;
  justify-content: flex-start;
`;

const AchievementBoxHeader = styled.div`
  writing-mode: vertical-lr;
  text-orientation: upright;
  display: flex;
  justify-content: flex-start;
  border-right: solid;
  padding-right: 20px;
  font-weight: 900;
  font-family: Russo One;
  color: #062c30;
`;

const Sponsorships = ({ sponsorships }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return (
    <SponsorshipsContainer>
      <AchievementsBox>
        <AchievementBoxHeader>PARTNERLERİMİZ</AchievementBoxHeader>
        <SponsorshipsList>
          {sponsorships.map((item) => (
            <ExternalLogo
              key={item.alt}
              src={item.src}
              alt={item.alt}
              width={windowSize.innerWidth > 768 ? "7" : "30"}
              linkTo={item.linkTo}
            />
          ))}
        </SponsorshipsList>
      </AchievementsBox>
    </SponsorshipsContainer>
  );
};

export default Sponsorships;
