import React from "react";
import styled from "styled-components";
import RotatableImage from "../ui/RotatableImage";
import VerticalHeaderBox from "../ui/VerticalHeaderBox";

const AboutUsContainer = styled.div`
  width: 96%;
  height: fit-content;
  padding: 10vh 2% 10vh 2%;
  display: flex;
  flex-direction: column;
`;
const AboutUsContainerPart = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;
`;

const AboutUs = ({ aboutUs, mission, vission, image1, image2 }) => {
  return (
    <AboutUsContainer>
      <AboutUsContainerPart>
        <VerticalHeaderBox color="#E64848" title="KISACA" text={aboutUs} />
        <RotatableImage
          rotate={true}
          src={image1.src}
          alt={image1.alt}
          width={15}
        />
      </AboutUsContainerPart>
      <AboutUsContainerPart>
        <VerticalHeaderBox color="#781C68" title="MİSYON" text={mission} />
      </AboutUsContainerPart>
      <AboutUsContainerPart>
        <VerticalHeaderBox color="#2B7A0B" title="VİZYON" text={vission} />
        <RotatableImage
          rotate={false}
          src={image2.src}
          alt={image2.alt}
          width={15}
        />
      </AboutUsContainerPart>
    </AboutUsContainer>
  );
};

export default AboutUs;
