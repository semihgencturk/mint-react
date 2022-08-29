import React from "react";
import styled from "styled-components";
import BundleStatic from "../ui/BundleStatic";

const HomeBundleContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const HomeBundleBackground = styled.img`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("${(props) => props.src && props.src}");
  @media (max-width: 850px) {
    display: none;
  }
`;

const HomeBundleTitle = styled.div`
  font-size: 50px;
  line-height: 2;
  font-family: Russo One;
  z-index: 1;
`;

const HomeBundleStatics = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15%;
  z-index: 1;
`;

const HomeBundleButton = styled.div`
  color: white;
  font-size: 40px;
  border-style: solid;
  border-width: 3px;
  border-color: white;
  box-shadow: 10px -10px 0 -3px white;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  :hover {
    top: -10px;
    left: 10px;
    box-shadow: 0 0 0 -3px white;
  }
  z-index: 1;
`;

const HomeBundle = ({ background, title, statistics }) => {
  return (
    <HomeBundleContainer>
      <HomeBundleBackground src={background.src} alt={background.alt} />
      <HomeBundleTitle>{title}</HomeBundleTitle>
      <HomeBundleStatics>
        {statistics.map((statistic) => (
          <BundleStatic
            key={statistic.text}
            number={statistic.number}
            text={statistic.text}
          />
        ))}
      </HomeBundleStatics>
      <HomeBundleButton>Hakkımızda</HomeBundleButton>
    </HomeBundleContainer>
  );
};

export default HomeBundle;
